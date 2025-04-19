import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { problems } from '@/data/problems';
import { useTheme } from '../lib/themeContext';
import { CodeEditor } from '@/components/CodeEditor';
import { Button } from '@/components/ui/button';

export function ProblemPage() {
  const { slug } = useParams<{ slug: string }>();
  const { darkMode } = useTheme();

  // Find the problem with the matching slug
  const problem = problems.find((p) => p.slug === slug);

  if (!problem) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Problem Not Found</h1>
        <p className="mb-6">The problem you're looking for doesn't exist.</p>
        <Link
          to="/practice"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Practice
        </Link>
      </div>
    );
  }

  // Initial code template for this problem
  let initialCode = `# ${problem.title}
# ${problem.description.split('\\n')[0]}

`;

  // Add problem-specific starter code templates
  if (problem.id === '1') { // Hello World
    initialCode += `# Write a function called hello_world that returns the string "Hello, World!"
def hello_world():
    # Your code here
    pass

# Test your solution (uncomment to test)
# print(hello_world())
`;
  } else if (problem.id === '2') { // Reverse a String
    initialCode += `# Write a function called reverse_string that reverses a string
def reverse_string(s):
    # Your code here
    pass

# Test your solution
# print(reverse_string("hello"))
`;
  } else if (problem.id === '3') { // Sum of a List
    initialCode += `# Write a function called sum_list that calculates the sum of all numbers in a list
def sum_list(numbers):
    # Your code here
    pass

# Test your solution
# print(sum_list([1, 2, 3, 4, 5]))
`;
  } else if (problem.id === '4') { // Palindrome Checker
    initialCode += `# Write a function called is_palindrome that checks if a string is a palindrome
def is_palindrome(s):
    # Your code here
    pass

# Test your solution
# print(is_palindrome("racecar"))
# print(is_palindrome("hello"))
`;
  } else {
    // Default template for other problems
    initialCode += `def solution():
    # Write your code here
    pass

# Test your solution
solution()
`;
  }

  return (
    <div className="container py-6">
      <div className="mb-6">
        <Link
          to="/practice"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Practice
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Problem description panel */}
        <div className="lg:w-1/2 lg:max-w-xl">
          <div className={`p-6 rounded-lg border ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-white border-gray-200'}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">{problem.title}</h1>
                <div className="flex items-center mt-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    problem.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : problem.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="hints">Hints</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="whitespace-pre-wrap">{problem.description}</p>

                  {problem.examples && problem.examples.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">Examples:</h3>
                      {problem.examples.map((example, index) => (
                        <div key={index} className={`p-3 mb-3 rounded-md ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                          <p className="font-mono text-sm mb-1"><strong>Input:</strong> {example.input}</p>
                          <p className="font-mono text-sm mb-1"><strong>Output:</strong> {example.output}</p>
                          {example.explanation && (
                            <p className="text-sm mt-2"><strong>Explanation:</strong> {example.explanation}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {problem.constraints && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">Constraints:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index}>{constraint}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="hints">
                <div className="prose dark:prose-invert max-w-none mt-4">
                  {problem.hints && problem.hints.length > 0 ? (
                    <div>
                      <h3 className="text-lg font-medium mb-2">Hints:</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        {problem.hints.map((hint, index) => (
                          <li key={index}>{hint}</li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <p>No hints available for this problem.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="solution">
                <div className="prose dark:prose-invert max-w-none mt-4">
                  {problem.solution ? (
                    <div>
                      <h3 className="text-lg font-medium mb-2">Solution:</h3>
                      <p className="mb-4">{problem.solution.explanation}</p>
                      <div className={`p-4 rounded-md font-mono text-sm whitespace-pre overflow-auto ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                        {problem.solution.code}
                      </div>
                    </div>
                  ) : (
                    <p>Solution not available yet.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Code editor panel */}
        <div className="lg:w-1/2 flex-1">
          <div className={`p-6 rounded-lg border h-full ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-white border-gray-200'}`}>
            <CodeEditor initialCode={initialCode} problemId={problem.id} />
          </div>
        </div>
      </div>

      {/* AI Assistant section */}
      <div className="mt-8 mb-6">
        <div className={`p-6 rounded-lg border ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">AI Learning Assistant</h2>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
            >
              Ask AI for Help
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stuck? The AI assistant can provide hints, explain concepts, or guide you through the problem.
            Try asking questions like "Can you help me understand this problem?" or "What algorithm should I use here?"
          </p>
        </div>
      </div>
    </div>
  );
}
