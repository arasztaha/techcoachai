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
      } else {
        testCode += `
    # Default case for problems without specific tests
    print("INFO: No specific test cases defined for this problem. Running basic validation...")
    try:
        # Execute the code and check if it runs without errors
        exec(code)
        print("PASS: Your code executed without errors. Specific test cases are not implemented for this problem yet.")
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
