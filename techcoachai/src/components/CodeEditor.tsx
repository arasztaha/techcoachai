import React, { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { Button } from './ui/button';
import { useTheme } from '../lib/themeContext';
import { RotateCcw, Send, Play } from 'lucide-react';
import { useProblem } from '../lib/problemContext';

interface CodeEditorProps {
  initialCode?: string;
  problemId: string;
}

export function CodeEditor({ initialCode = '# Write your Python code here\n', problemId }: CodeEditorProps) {
  const { darkMode } = useTheme();
  const { markProblemCompleted, isProblemCompleted } = useProblem();
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('Loading Python environment...');
  const [isRunning, setIsRunning] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState<{passed: boolean, message: string} | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const taskIdCounter = useRef(0);
  const pendingTasks = useRef<Map<number, (result: string) => void>>(new Map());
  const isCompletedRef = useRef(isProblemCompleted(problemId));

  // Load code from localStorage if exists
  useEffect(() => {
    const savedCode = localStorage.getItem(`code-${problemId}`);
    if (savedCode) {
      setCode(savedCode);
    }
  }, [problemId]);

  // Save code to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(`code-${problemId}`, code);
  }, [code, problemId]);

  const handleCodeChange = React.useCallback((value: string) => {
    setCode(value);
    // Clear test results when code changes
    setTestResults(null);
  }, []);

  // Initialize the worker
  useEffect(() => {
    // Create the worker
    const worker = new Worker('/pyodide-worker.js');

    // Set up message handling
    worker.onmessage = (event) => {
      const { type, id, output, error } = event.data;

      if (type === 'ready') {
        setPyodideReady(true);
        setOutput('Python environment loaded. Click "Run" to execute your code.');
      }
      else if (type === 'result' && id !== undefined) {
        const resolve = pendingTasks.current.get(id);
        if (resolve) {
          resolve(output || '');
          pendingTasks.current.delete(id);
        }
      }
      else if (type === 'error') {
        if (id !== undefined) {
          const resolve = pendingTasks.current.get(id);
          if (resolve) {
            resolve(`Error: ${error}`);
            pendingTasks.current.delete(id);
          }
        } else {
          setOutput(`Failed to load Python environment: ${error}`);
          setPyodideReady(false);
        }
      }
    };

    worker.onerror = (error) => {
      console.error('Worker error:', error);
      setOutput(`Worker error: ${error.message}`);
      setPyodideReady(false);
    };

    // Store the worker reference
    workerRef.current = worker;

    // Clean up on component unmount
    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  // Function to run code in the worker
  const runPythonInWorker = (pythonCode: string): Promise<string> => {
    return new Promise((resolve) => {
      if (!workerRef.current) {
        resolve('Worker not initialized');
        return;
      }

      const id = taskIdCounter.current++;
      pendingTasks.current.set(id, resolve);

      workerRef.current.postMessage({
        id,
        python: pythonCode
      });
    });
  };

  // Function to run the Python code
  const runCode = async () => {
    if (!pyodideReady || !workerRef.current) {
      setOutput('Python environment is still loading. Please wait...');
      return;
    }

    setIsRunning(true);
    setOutput('Running...');
    setTestResults(null);

    try {
      const result = await runPythonInWorker(code);
      setOutput(result || 'Code executed successfully with no output.');
    } catch (error) {
      console.error('Execution error:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      setOutput(`Error executing code: ${errorMessage}`);
    } finally {
      setIsRunning(false);
    }
  };

  // Function to reset the code to its initial state
  const resetCode = () => {
    setCode(initialCode);
    setOutput('Code has been reset to the initial template.');
    setTestResults(null);
  };

  // Function to submit the code for evaluation
  const submitCode = async () => {
    if (!pyodideReady || !workerRef.current) {
      setOutput('Python environment is still loading. Please wait...');
      return;
    }

    setIsSubmitting(true);
    setOutput('Submitting and running tests...');

    try {
      // Construct test code based on the problem ID
      let testCode = '';

      // Common test setup
      testCode += `
# Original user code
${code}

# Test framework
import sys
from io import StringIO

# Capture output for testing
original_stdout = sys.stdout
sys.stdout = StringIO()

try:
`;

      // Problem-specific test cases
      if (problemId === '1') {  // Hello World
        testCode += `
    # Test case for Hello World problem
    def test_hello_world():
        try:
            # Check if 'hello_world' function exists
            if 'hello_world' not in globals() and 'hello_world' not in locals():
                return "FAIL: Could not find a 'hello_world' function in your code. Make sure you've defined it correctly."

            # Run the function and check the result
            result = hello_world()
            expected = "Hello, World!"

            if result != expected:
                return f"FAIL: Expected exactly '{expected}', but got '{result}'"

            return "PASS: Your hello_world function correctly returns 'Hello, World!'"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_hello_world())
`;
      } else if (problemId === '2') {  // Reverse a String
        testCode += `
    # Test case for Reverse a String problem
    def test_reverse_string():
        try:
            # Check if 'reverse_string' function exists
            if 'reverse_string' not in globals() and 'reverse_string' not in locals():
                return "FAIL: Could not find a 'reverse_string' function in your code"

            test_cases = [
                {"input": "hello", "expected": "olleh"},
                {"input": "Python", "expected": "nohtyP"},
                {"input": "", "expected": ""}
            ]

            for tc in test_cases:
                result = reverse_string(tc["input"])
                if result != tc["expected"]:
                    return f"FAIL: For input '{tc['input']}', expected '{tc['expected']}', but got '{result}'"

            return "PASS: All test cases passed for reverse_string!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_reverse_string())
`;
      } else if (problemId === '3') {  // Sum of a List
        testCode += `
    # Test case for Sum of a List problem
    def test_sum_list():
        try:
            # Check if 'sum_list' function exists
            if 'sum_list' not in globals() and 'sum_list' not in locals():
                return "FAIL: Could not find a 'sum_list' function in your code"

            test_cases = [
                {"input": [1, 2, 3, 4, 5], "expected": 15},
                {"input": [-1, 0, 1], "expected": 0},
                {"input": [], "expected": 0}
            ]

            for tc in test_cases:
                result = sum_list(tc["input"])
                if result != tc["expected"]:
                    return f"FAIL: For input {tc['input']}, expected {tc['expected']}, but got {result}"

            return "PASS: All test cases passed for sum_list!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_sum_list())
`;
      } else if (problemId === '4') {  // Palindrome Checker
        testCode += `
    # Test case for Palindrome Checker problem
    def test_is_palindrome():
        try:
            # Check if 'is_palindrome' function exists
            if 'is_palindrome' not in globals() and 'is_palindrome' not in locals():
                return "FAIL: Could not find an 'is_palindrome' function in your code"

            test_cases = [
                {"input": "racecar", "expected": True},
                {"input": "hello", "expected": False},
                {"input": "A man, a plan, a canal, Panama", "expected": True},
                {"input": "", "expected": True}
            ]

            for tc in test_cases:
                result = is_palindrome(tc["input"])
                if result != tc["expected"]:
                    return f"FAIL: For input '{tc['input']}', expected {tc['expected']}, but got {result}"

            return "PASS: All test cases passed for is_palindrome!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_is_palindrome())
`;
      } else if (problemId === '13') {  // Implement a Queue
        testCode += `
    # Test case for Queue Implementation problem
    def test_queue():
        try:
            # Check if 'Queue' class exists
            if 'Queue' not in globals():
                return "FAIL: Could not find a 'Queue' class in your code"

            # Create a queue and test its operations
            queue = Queue()

            # Test is_empty on empty queue
            if not queue.is_empty():
                return "FAIL: A new queue should be empty"

            # Test size on empty queue
            if queue.size() != 0:
                return f"FAIL: Expected size 0 for empty queue, but got {queue.size()}"

            # Test enqueue
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)

            # Test size after enqueues
            if queue.size() != 3:
                return f"FAIL: Expected size 3 after enqueuing 3 items, but got {queue.size()}"

            # Test peek
            if queue.peek() != 1:
                return f"FAIL: Expected peek to return 1, but got {queue.peek()}"

            # Test dequeue
            if queue.dequeue() != 1:
                return "FAIL: Expected dequeue to return 1"

            if queue.dequeue() != 2:
                return "FAIL: Expected dequeue to return 2"

            # Test size after dequeues
            if queue.size() != 1:
                return f"FAIL: Expected size 1 after dequeuing 2 items, but got {queue.size()}"

            # Test is_empty on non-empty queue
            if queue.is_empty():
                return "FAIL: Queue should not be empty after enqueuing items"

            return "PASS: All queue operations work as expected!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_queue())
`;
      } else if (problemId === '14') {  // Binary Search Tree Operations
        testCode += `
    # Test case for Binary Search Tree Operations problem
    def test_bst():
        try:
            # Check if 'BinarySearchTree' class exists
            if 'BinarySearchTree' not in globals():
                return "FAIL: Could not find a 'BinarySearchTree' class in your code"

            # Create a BST and test its operations
            bst = BinarySearchTree()

            # Test insert and inorder_traversal
            bst.insert(5)
            bst.insert(3)
            bst.insert(7)
            bst.insert(2)
            bst.insert(4)

            inorder = bst.inorder_traversal()
            expected_inorder = [2, 3, 4, 5, 7]

            if inorder != expected_inorder:
                return f"FAIL: Expected inorder traversal {expected_inorder}, but got {inorder}"

            # Test search
            if not bst.search(4):
                return "FAIL: search(4) should return True"

            if bst.search(6):
                return "FAIL: search(6) should return False"

            # Test min and max
            if bst.min_value() != 2:
                return f"FAIL: Expected min_value to be 2, but got {bst.min_value()}"

            if bst.max_value() != 7:
                return f"FAIL: Expected max_value to be 7, but got {bst.max_value()}"

            return "PASS: All Binary Search Tree operations work as expected!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_bst())
`;
      } else if (problemId === '15') {  // Linked List Implementation
        testCode += `
    # Test case for Linked List Implementation problem
    def test_linked_list():
        try:
            # Check if 'LinkedList' class exists
            if 'LinkedList' not in globals():
                return "FAIL: Could not find a 'LinkedList' class in your code"

            # Create a linked list and test its operations
            linked_list = LinkedList()

            # Test append and to_list
            linked_list.append(1)
            linked_list.append(2)
            linked_list.append(3)

            list_repr = linked_list.to_list()
            expected_list = [1, 2, 3]

            if list_repr != expected_list:
                return f"FAIL: Expected list representation {expected_list}, but got {list_repr}"

            # Test search
            if not linked_list.search(2):
                return "FAIL: search(2) should return True"

            if linked_list.search(4):
                return "FAIL: search(4) should return False"

            # Test prepend
            linked_list.prepend(0)
            expected_after_prepend = [0, 1, 2, 3]

            if linked_list.to_list() != expected_after_prepend:
                return f"FAIL: After prepend(0), expected {expected_after_prepend}, but got {linked_list.to_list()}"

            # Test delete
            linked_list.delete(0)
            linked_list.delete(2)
            expected_after_delete = [1, 3]

            if linked_list.to_list() != expected_after_delete:
                return f"FAIL: After deleting 0 and 2, expected {expected_after_delete}, but got {linked_list.to_list()}"

            return "PASS: All Linked List operations work as expected!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_linked_list())
`;
      } else if (problemId === '16') {  // Decorators in Python
        testCode += `
    # Test case for Python Decorators problem
    def test_decorators():
        try:
            # Check if the required decorators exist
            missing_decorators = []

            if 'timer' not in globals():
                missing_decorators.append('timer')

            if 'debug' not in globals():
                missing_decorators.append('debug')

            if 'retry' not in globals():
                missing_decorators.append('retry')

            if missing_decorators:
                return f"FAIL: Missing required decorators: {', '.join(missing_decorators)}"

            # Test timer decorator
            import time

            @timer
            def sleep_function():
                time.sleep(0.1)
                return "Done"

            # Capture output to check timer decorator
            import sys
            from io import StringIO

            original_stdout = sys.stdout
            sys.stdout = StringIO()

            result = sleep_function()

            timer_output = sys.stdout.getvalue()
            sys.stdout = original_stdout

            if "sleep_function took" not in timer_output:
                return f"FAIL: Timer decorator didn't output execution time. Output was: {timer_output}"

            if result != "Done":
                return f"FAIL: Timer decorator didn't return the original function's return value. Got: {result}"

            # Test debug decorator (basic check)
            @debug
            def add(a, b):
                return a + b

            sys.stdout = StringIO()
            result = add(3, 5)
            debug_output = sys.stdout.getvalue()
            sys.stdout = original_stdout

            if "Calling add" not in debug_output or "Returning 8" not in debug_output:
                return f"FAIL: Debug decorator didn't print function details. Output was: {debug_output}"

            if result != 8:
                return f"FAIL: Debug decorator didn't return the original function's return value. Got: {result}"

            # Test retry decorator (basic check - we'll make it succeed on first try)
            retry_called = [False]

            @retry(3)
            def succeed_first_time():
                retry_called[0] = True
                return "Success"

            result = succeed_first_time()

            if not retry_called[0]:
                return "FAIL: Retry decorator didn't execute the wrapped function"

            if result != "Success":
                return f"FAIL: Retry decorator didn't return the original function's return value. Got: {result}"

            return "PASS: All decorator implementations work as expected!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_decorators())
`;
      } else if (problemId === '17') {  // Context Managers
        testCode += `
    # Test case for Context Managers problem
    def test_context_managers():
        try:
            # Check if the required context managers exist
            missing_managers = []

            if 'Timer' not in globals():
                missing_managers.append('Timer')

            if 'tempdir' not in globals():
                missing_managers.append('tempdir')

            if 'suppress_exceptions' not in globals():
                missing_managers.append('suppress_exceptions')

            if missing_managers:
                return f"FAIL: Missing required context managers: {', '.join(missing_managers)}"

            # Test Timer context manager
            with Timer() as timer:
                time.sleep(0.1)

            if not hasattr(timer, 'elapsed'):
                return "FAIL: Timer context manager doesn't set the 'elapsed' attribute"

            if timer.elapsed < 0.05:  # Should be at least close to 0.1
                return f"FAIL: Timer elapsed time ({timer.elapsed}) is too small for a 0.1s sleep"

            # Test tempdir context manager
            import os

            with tempdir() as path:
                # Check if the directory exists
                if not os.path.isdir(path):
                    return "FAIL: tempdir context manager didn't create a directory"

                # Create a test file
                test_file = os.path.join(path, "test.txt")
                with open(test_file, 'w') as f:
                    f.write("Test")

                # Check if the file was created
                if not os.path.exists(test_file):
                    return "FAIL: Failed to create a file in the temporary directory"

            # Directory should be cleaned up
            if os.path.exists(path):
                return "FAIL: tempdir context manager didn't clean up the directory"

            # Test suppress_exceptions context manager
            exception_raised = False

            try:
                with suppress_exceptions(ZeroDivisionError):
                    1 / 0
            except Exception:
                exception_raised = True

            if exception_raised:
                return "FAIL: suppress_exceptions context manager didn't suppress ZeroDivisionError"

            # Test that it only suppresses specified exceptions
            exception_raised = False

            try:
                with suppress_exceptions(ValueError):
                    1 / 0  # ZeroDivisionError
            except ZeroDivisionError:
                exception_raised = True

            if not exception_raised:
                return "FAIL: suppress_exceptions context manager suppressed an exception it shouldn't have"

            return "PASS: All context manager implementations work as expected!"
        except Exception as e:
            return f"FAIL: Error when testing your code: {str(e)}"

    print(test_context_managers())
`;
      } else {
        // Default case for problems without specific tests
        testCode += `
    # Default case for problems without specific tests
    print("INFO: No specific test cases defined for this problem. Running basic validation...")
    try:
        # The variable 'code' is not defined here, so we need to use a different approach
        # We'll run the solution() function if it exists, or simply pass if it doesn't
        if 'solution' in globals():
            solution()
            print("PASS: Your solution() function executed without errors.")
        else:
            # Try to find and execute any defined functions
            user_functions = [name for name, obj in globals().items()
                             if callable(obj) and not name.startswith('__') and name != 'test_output'
                             and name not in ('StringIO', 'exec', 'print', 'str')]

            if user_functions:
                print(f"Found user-defined functions: {', '.join(user_functions)}")
                print("PASS: Your code appears to define the necessary functions.")
            else:
                print("CAUTION: No user-defined functions found. Make sure you've implemented the required functionality.")
                print("PASS: Your code has no syntax errors.")
    except Exception as e:
        print(f"FAIL: Your code raised an error: {str(e)}")
`;
      }

      // Common test wrap-up
      testCode += `
except Exception as e:
    print(f"FAIL: Runtime error during tests: {str(e)}")

# Get the test output
test_output = sys.stdout.getvalue()
sys.stdout = original_stdout

print(test_output)
`;

      const result = await runPythonInWorker(testCode);
      setOutput(result || 'Tests completed but returned no output.');

      // Process test results
      if (result.includes('PASS:')) {
        // Mark problem as completed
        markProblemCompleted(problemId);
        isCompletedRef.current = true;

        setTestResults({
          passed: true,
          message: 'Success! All tests passed. Great work! 🎉'
        });
      } else if (result.includes('FAIL:')) {
        // Extract the failure message to show the specific error
        const failureMatch = result.match(/FAIL: .+/);
        setTestResults({
          passed: false,
          message: failureMatch ? failureMatch[0] : 'Tests failed. Please review your code and try again.'
        });
      } else {
        setTestResults({
          passed: false,
          message: 'Unexpected test result. Please review your code.'
        });
      }
    } catch (error) {
      console.error('Test execution error:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      setOutput(`Error running tests: ${errorMessage}`);
      setTestResults({ passed: false, message: 'Error occurred during testing.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Python Editor</h3>
        <div className="flex gap-2">
          <Button
            onClick={resetCode}
            variant="outline"
            className="border-gray-300 dark:border-zinc-700"
            title="Reset Code"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
          <Button
            onClick={runCode}
            disabled={isRunning || !pyodideReady}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            title="Run Code"
          >
            <Play className="h-4 w-4 mr-1" />
            {isRunning ? 'Running...' : 'Run Code'}
          </Button>
          <Button
            onClick={submitCode}
            disabled={isSubmitting || !pyodideReady}
            className="bg-green-600 hover:bg-green-700 text-white"
            title="Submit Solution"
          >
            <Send className="h-4 w-4 mr-1" />
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>

      <div className="flex-1 border border-gray-300 dark:border-zinc-700 rounded-md overflow-hidden mb-4">
        <CodeMirror
          value={code}
          height="350px"
          theme={darkMode ? oneDark : 'light'}
          extensions={[python()]}
          onChange={handleCodeChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            foldGutter: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            searchKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
          }}
        />
      </div>

      {testResults && (
        <div className={`p-3 mb-4 rounded-md ${
          testResults.passed
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
        }`}>
          {testResults.message}
        </div>
      )}

      <div className="mt-2">
        <h3 className="text-lg font-medium mb-2">Output</h3>
        <div
          className={`h-32 p-3 font-mono text-sm border border-gray-300 dark:border-zinc-700 rounded-md overflow-auto whitespace-pre-wrap ${
            darkMode ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-gray-900'
          }`}
        >
          {output}
        </div>

        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Note: For best results, use simple Python code that doesn't involve file operations or external libraries.
        </div>
      </div>
    </div>
  );
}
