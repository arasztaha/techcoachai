export const problems: Problem[] = [
  // Introduction
  {
    id: '1',
    title: 'Hello World',
    slug: 'hello-world',
    difficulty: 'Easy',
    category: 'Introduction',
    categoryEmoji: '📚',
    description: 'Welcome to coding challenges! Let\'s start with the classic "Hello World" program.\\n\\nWrite a function `hello_world()` that returns the string "Hello, World!".',
    examples: [
      {
        input: 'hello_world()',
        output: '"Hello, World!"',
        explanation: 'The function returns the string "Hello, World!"'
      }
    ],
    constraints: [
      'Return the exact string "Hello, World!" (case-sensitive)'
    ],
    hints: [
      'In Python, strings can be enclosed in single or double quotes',
      'Use the return keyword to return a value from a function'
    ],
    solution: {
      explanation: 'This is a simple function that returns the string "Hello, World!". It\'s the traditional first program written when learning a new programming language.',
      code: `def hello_world():
    return "Hello, World!"

# Test the function
print(hello_world())`
    }
  },

  // Python Basics
  {
    id: '2',
    title: 'Reverse a String',
    slug: 'reverse-a-string',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `reverse_string(s)` that takes a string as input and returns the reverse of that string.\\n\\nFor example, if the input is "hello", the output should be "olleh".',
    examples: [
      {
        input: 'reverse_string("hello")',
        output: '"olleh"'
      },
      {
        input: 'reverse_string("Python")',
        output: '"nohtyP"'
      },
      {
        input: 'reverse_string("")',
        output: '""'
      }
    ],
    constraints: [
      'The input string can contain any valid characters',
      'The function should handle empty strings gracefully'
    ],
    hints: [
      'Python has built-in ways to reverse strings',
      'You can use string slicing with a negative step: s[::-1]',
      'Alternatively, you could convert the string to a list, reverse it, and join it back'
    ],
    solution: {
      explanation: 'In Python, the easiest way to reverse a string is to use string slicing with a negative step. The notation s[::-1] creates a slice that starts from the end of the string and moves backwards.',
      code: `def reverse_string(s):
    return s[::-1]

# Test cases
print(reverse_string("hello"))
print(reverse_string("Python"))
print(reverse_string(""))`
    }
  },
  {
    id: '3',
    title: 'Sum of a List',
    slug: 'sum-of-a-list',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `sum_list(numbers)` that calculates the sum of all numbers in a list.\\n\\nFor example, if the input is [1, 2, 3, 4, 5], the output should be 15.',
    examples: [
      {
        input: 'sum_list([1, 2, 3, 4, 5])',
        output: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15'
      },
      {
        input: 'sum_list([-1, 0, 1])',
        output: '0',
        explanation: '-1 + 0 + 1 = 0'
      },
      {
        input: 'sum_list([])',
        output: '0',
        explanation: 'The sum of an empty list is 0'
      }
    ],
    constraints: [
      'The list will contain only numbers (integers or floats)',
      'The function should handle empty lists (return 0)'
    ],
    hints: [
      'Python has a built-in sum() function',
      'You could also use a loop to calculate the sum manually'
    ],
    solution: {
      explanation: 'The sum() function in Python takes an iterable (like a list) and returns the sum of all elements. For an empty list, it returns 0.',
      code: `def sum_list(numbers):
    return sum(numbers)

# Alternative implementation using a loop:
def sum_list_manual(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Test cases
print(sum_list([1, 2, 3, 4, 5]))
print(sum_list([-1, 0, 1]))
print(sum_list([]))`
    }
  },
  {
    id: '4',
    title: 'Palindrome Checker',
    slug: 'palindrome-checker',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `is_palindrome(s)` that checks if a string is a palindrome.\\n\\nA palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.\\n\\nFor example, "racecar" and "A man, a plan, a canal, Panama" are palindromes.',
    examples: [
      {
        input: 'is_palindrome("racecar")',
        output: 'True'
      },
      {
        input: 'is_palindrome("hello")',
        output: 'False'
      },
      {
        input: 'is_palindrome("A man, a plan, a canal, Panama")',
        output: 'True',
        explanation: 'Ignoring spaces, punctuation, and capitalization, it reads the same forwards and backwards'
      }
    ],
    constraints: [
      'Ignore capitalization (treat uppercase and lowercase letters as the same)',
      'Ignore all non-alphanumeric characters (spaces, punctuation, etc.)',
      'Return True for empty strings'
    ],
    hints: [
      'You\'ll need to clean the string first by removing non-alphanumeric characters and converting to lowercase',
      'You can use string methods like lower() and isalnum() for cleaning',
      'Remember to check if the cleaned string is equal to its reverse'
    ],
    solution: {
      explanation: 'First, we clean the string by keeping only alphanumeric characters and converting everything to lowercase. Then, we check if this cleaned string is the same as its reverse.',
      code: `def is_palindrome(s):
    # Clean the string - keep only alphanumeric characters and convert to lowercase
    cleaned = ''.join(char.lower() for char in s if char.isalnum())

    # Check if the cleaned string is the same as its reverse
    return cleaned == cleaned[::-1]

# Test cases
print(is_palindrome("racecar"))
print(is_palindrome("hello"))
print(is_palindrome("A man, a plan, a canal, Panama"))`
    }
  },
  {
    id: '5',
    title: 'Sort a List',
    slug: 'sort-a-list',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `sort_list(numbers, reverse=False)` that sorts a list of numbers in ascending order by default.\\n\\nThe function should have an optional parameter `reverse` that, when set to True, sorts the list in descending order.',
    examples: [
      {
        input: 'sort_list([3, 1, 4, 1, 5, 9, 2, 6])',
        output: '[1, 1, 2, 3, 4, 5, 6, 9]',
        explanation: 'The list is sorted in ascending order'
      },
      {
        input: 'sort_list([3, 1, 4, 1, 5, 9, 2, 6], reverse=True)',
        output: '[9, 6, 5, 4, 3, 2, 1, 1]',
        explanation: 'The list is sorted in descending order'
      }
    ],
    constraints: [
      'The list will contain only numbers',
      'Do not modify the original list - return a new sorted list'
    ],
    hints: [
      'Python has built-in functions for sorting lists',
      'You can use sorted() to get a new sorted list',
      'The sorted() function has a reverse parameter'
    ],
    solution: {
      explanation: 'The sorted() function in Python creates a new sorted list from an iterable. It takes a reverse parameter which, when set to True, sorts in descending order.',
      code: `def sort_list(numbers, reverse=False):
    return sorted(numbers, reverse=reverse)

# Test cases
print(sort_list([3, 1, 4, 1, 5, 9, 2, 6]))
print(sort_list([3, 1, 4, 1, 5, 9, 2, 6], reverse=True))

# Alternatively, if you want to implement your own sorting algorithm:
def bubble_sort(numbers, reverse=False):
    result = numbers.copy()  # Create a copy to avoid modifying the original
    n = len(result)

    for i in range(n):
        for j in range(0, n-i-1):
            if (result[j] > result[j+1] and not reverse) or \
               (result[j] < result[j+1] and reverse):
                result[j], result[j+1] = result[j+1], result[j]

    return result`
    }
  },
  {
    id: '6',
    title: 'Count Vowels',
    slug: 'count-vowels',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `count_vowels(s)` that counts the number of vowels (a, e, i, o, u) in a given string.\\n\\nThe function should be case-insensitive, meaning it counts both uppercase and lowercase vowels.',
    examples: [
      {
        input: 'count_vowels("hello")',
        output: '2',
        explanation: 'The vowels are "e" and "o"'
      },
      {
        input: 'count_vowels("PYTHON")',
        output: '1',
        explanation: 'The only vowel is "O"'
      },
      {
        input: 'count_vowels("rhythm")',
        output: '0',
        explanation: 'There are no vowels in "rhythm"'
      }
    ],
    constraints: [
      'The input string can contain any valid characters',
      'Treat uppercase and lowercase vowels the same'
    ],
    hints: [
      'Convert the string to lowercase to handle case-insensitivity',
      'Define a set of vowels for quick lookup',
      'Iterate through each character in the string and check if it\'s a vowel'
    ],
    solution: {
      explanation: 'To count vowels, we convert the string to lowercase and iterate through each character, checking if it\'s a vowel (a, e, i, o, u).',
      code: `def count_vowels(s):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    count = 0

    for char in s.lower():
        if char in vowels:
            count += 1

    return count

# Test cases
print(count_vowels("hello"))
print(count_vowels("PYTHON"))
print(count_vowels("rhythm"))`
    }
  },

  // Algorithms
  {
    id: '7',
    title: 'Factorial Calculation',
    slug: 'factorial-calculation',
    difficulty: 'Medium',
    category: 'Algorithms',
    categoryEmoji: '🧮',
    description: 'Write a function `factorial(n)` that calculates the factorial of a non-negative integer n.\\n\\nThe factorial of n, denoted as n!, is the product of all positive integers less than or equal to n.\\n\\nFor example, 5! = 5 × 4 × 3 × 2 × 1 = 120.',
    examples: [
      {
        input: 'factorial(5)',
        output: '120',
        explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120'
      },
      {
        input: 'factorial(0)',
        output: '1',
        explanation: 'By definition, 0! = 1'
      },
      {
        input: 'factorial(1)',
        output: '1',
        explanation: '1! = 1'
      }
    ],
    constraints: [
      'The input n will be a non-negative integer',
      'The function should handle large factorials gracefully (up to the limits of Python\'s integer representation)'
    ],
    hints: [
      'You can use either an iterative or recursive approach',
      'For recursion, remember the base case: 0! = 1 and 1! = 1',
      'For an iterative approach, use a loop to multiply the numbers from 1 to n',
      'Python has a factorial function in the math module, but try to implement it yourself'
    ],
    solution: {
      explanation: 'We can implement the factorial function either recursively or iteratively. Both approaches have their merits. The recursive solution is elegant but can lead to stack overflow for large inputs, while the iterative solution is generally more efficient.',
      code: `# Recursive solution
def factorial_recursive(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

# Iterative solution
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Test cases
print(factorial(5))
print(factorial(0))
print(factorial(10))

# Note: Python's built-in solution
# import math
# print(math.factorial(5))`
    }
  },
  {
    id: '8',
    title: 'Fibonacci Sequence',
    slug: 'fibonacci-sequence',
    difficulty: 'Medium',
    category: 'Algorithms',
    categoryEmoji: '🧮',
    description: 'Write a function `fibonacci(n)` that returns the nth number in the Fibonacci sequence.\\n\\nThe Fibonacci sequence is defined as follows:\\n- The first number is 0\\n- The second number is 1\\n- Each subsequent number is the sum of the two preceding numbers\\n\\nSo the sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...',
    examples: [
      {
        input: 'fibonacci(1)',
        output: '0',
        explanation: 'The 1st Fibonacci number is 0'
      },
      {
        input: 'fibonacci(2)',
        output: '1',
        explanation: 'The 2nd Fibonacci number is 1'
      },
      {
        input: 'fibonacci(7)',
        output: '8',
        explanation: 'The 7th Fibonacci number is 8 (0, 1, 1, 2, 3, 5, 8)'
      }
    ],
    constraints: [
      'The input n will be a positive integer',
      'For this problem, the Fibonacci sequence starts with 0 (some definitions start with 1)',
      'Your solution should be efficient for larger values of n'
    ],
    hints: [
      'You can use recursion, but it might be inefficient for large n',
      'An iterative approach using dynamic programming is more efficient',
      'You only need to keep track of the two previous values at each step'
    ],
    solution: {
      explanation: 'We can solve this iteratively by keeping track of the two most recent Fibonacci numbers and calculating the next one. This approach is much more efficient than a naive recursive implementation, which would recalculate the same values multiple times.',
      code: `def fibonacci(n):
    # Edge cases
    if n <= 0:
        return "Input must be a positive integer"
    if n == 1:
        return 0
    if n == 2:
        return 1

    # For n >= 3, calculate iteratively
    a, b = 0, 1  # Initialize the first two Fibonacci numbers
    for _ in range(3, n+1):
        a, b = b, a + b  # Update the two most recent Fibonacci numbers

    return b

# Test cases
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(7))
print(fibonacci(10))

# More efficient for larger values with memoization:
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 0:
        return "Input must be a positive integer"
    if n == 1:
        return 0
    if n == 2:
        return 1

    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]`
    }
  },
  {
    id: '9',
    title: 'Find the GCD',
    slug: 'find-the-gcd',
    difficulty: 'Medium',
    category: 'Algorithms',
    categoryEmoji: '🧮',
    description: 'Write a function `gcd(a, b)` that finds the greatest common divisor (GCD) of two positive integers a and b.\\n\\nThe GCD is the largest positive integer that divides both a and b without a remainder.',
    examples: [
      {
        input: 'gcd(56, 98)',
        output: '14',
        explanation: 'The largest number that divides both 56 and 98 is 14'
      },
      {
        input: 'gcd(17, 23)',
        output: '1',
        explanation: 'Since 17 and 23 are prime, they have no common divisors except 1'
      },
      {
        input: 'gcd(0, 5)',
        output: '5',
        explanation: 'The GCD of 0 and any number n is n'
      }
    ],
    constraints: [
      'The inputs a and b will be non-negative integers',
      'At least one of the inputs will be positive'
    ],
    hints: [
      'The Euclidean algorithm is an efficient method for computing the GCD',
      'The key insight is that gcd(a, b) = gcd(b, a mod b)',
      'The algorithm continues until one of the numbers becomes 0, then the other number is the GCD'
    ],
    solution: {
      explanation: 'We implement the Euclidean algorithm, which states that gcd(a, b) = gcd(b, a mod b). The algorithm continues recursively until one of the numbers becomes 0, at which point the other number is the GCD.',
      code: `# Recursive implementation of the Euclidean algorithm
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

# Iterative implementation
def gcd_iterative(a, b):
    while b:
        a, b = b, a % b
    return a

# Test cases
print(gcd(56, 98))
print(gcd(17, 23))
print(gcd(0, 5))
print(gcd(48, 18))`
    }
  },

  // Math
  {
    id: '10',
    title: 'FizzBuzz',
    slug: 'fizzbuzz',
    difficulty: 'Easy',
    category: 'Math',
    categoryEmoji: '📊',
    description: 'Write a function `fizzbuzz(n)` that returns a list of strings for the numbers from 1 to n, where:\\n\\n- For multiples of 3, the list contains "Fizz" instead of the number\\n- For multiples of 5, the list contains "Buzz" instead of the number\\n- For multiples of both 3 and 5, the list contains "FizzBuzz"\\n- For all other numbers, the list contains the number as a string',
    examples: [
      {
        input: 'fizzbuzz(15)',
        output: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]',
        explanation: 'Numbers divisible by 3 are replaced with "Fizz", numbers divisible by 5 are replaced with "Buzz", and numbers divisible by both 3 and 5 are replaced with "FizzBuzz"'
      }
    ],
    constraints: [
      'The input n will be a positive integer'
    ],
    hints: [
      'Use the modulo operator (%) to check if a number is divisible by another number',
      'Check for divisibility by both 3 and 5 first, then check for 3 and 5 separately',
      'Remember to convert regular numbers to strings in the output'
    ],
    solution: {
      explanation: 'We iterate through the numbers from 1 to n and apply the FizzBuzz rules: if the number is divisible by both 3 and 5, we add "FizzBuzz"; if it\'s divisible by 3, we add "Fizz"; if it\'s divisible by 5, we add "Buzz"; otherwise, we add the number as a string.',
      code: `def fizzbuzz(n):
    result = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result

# Test case
print(fizzbuzz(15))

# A more concise solution:
def fizzbuzz_concise(n):
    return ["FizzBuzz" if i % 15 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else str(i) for i in range(1, n+1)]`
    }
  },
  {
    id: '11',
    title: 'Prime Number Checker',
    slug: 'prime-number-checker',
    difficulty: 'Medium',
    category: 'Math',
    categoryEmoji: '📊',
    description: 'Write a function `is_prime(n)` that determines whether a given number is prime.\\n\\nA prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. In other words, it\'s only divisible by 1 and itself.',
    examples: [
      {
        input: 'is_prime(7)',
        output: 'True',
        explanation: '7 is only divisible by 1 and 7, so it\'s prime'
      },
      {
        input: 'is_prime(4)',
        output: 'False',
        explanation: '4 is divisible by 1, 2, and 4, so it\'s not prime'
      },
      {
        input: 'is_prime(1)',
        output: 'False',
        explanation: 'By definition, 1 is not a prime number'
      }
    ],
    constraints: [
      'The input n will be a positive integer',
      'Your solution should be reasonably efficient for larger values of n'
    ],
    hints: [
      'You only need to check divisibility up to the square root of n',
      'Start by handling the special cases: n = 1 (not prime), n = 2 or n = 3 (prime)',
      'You can optimize by only checking odd divisors after checking divisibility by 2'
    ],
    solution: {
      explanation: 'We implement an efficient primality test. First, we handle special cases: 1 is not prime, 2 and 3 are prime. Then, we check if n is divisible by 2 or 3. Finally, we check divisibility by numbers of the form 6k±1 up to the square root of n, as all primes greater than 3 can be expressed in this form.',
      code: `import math

def is_prime(n):
    # Handle special cases
    if n <= 1:
        return False
    if n <= 3:
        return True

    # Check if n is divisible by 2 or 3
    if n % 2 == 0 or n % 3 == 0:
        return False

    # Check all numbers of the form 6k±1 up to sqrt(n)
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6

    return True

# Test cases
print(is_prime(7))
print(is_prime(4))
print(is_prime(1))
print(is_prime(29))
print(is_prime(100))

# A more basic solution (less efficient but easier to understand):
def is_prime_basic(n):
    if n <= 1:
        return False
    if n == 2:
        return True

    # Check all divisors from 2 to sqrt(n)
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True`
    }
  },

  // Data Structures
  {
    id: '12',
    title: 'Implement a Stack',
    slug: 'implement-a-stack',
    difficulty: 'Medium',
    category: 'Data Structures',
    categoryEmoji: '🧱',
    description: 'Implement a stack data structure in Python.\\n\\nA stack is a Last-In-First-Out (LIFO) data structure with the following operations:\\n- `push(item)`: Add an item to the top of the stack\\n- `pop()`: Remove and return the top item from the stack\\n- `peek()`: Return the top item without removing it\\n- `is_empty()`: Return True if the stack is empty, False otherwise\\n- `size()`: Return the number of items in the stack',
    examples: [
      {
        input: `stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()`,
        output: '3',
        explanation: 'The last item pushed (3) is the first to be popped'
      },
      {
        input: `stack = Stack()
stack.push("a")
stack.push("b")
stack.peek()`,
        output: '"b"',
        explanation: 'Peek returns the top item ("b") without removing it'
      },
      {
        input: `stack = Stack()
stack.is_empty()`,
        output: 'True',
        explanation: 'A new stack is empty'
      }
    ],
    constraints: [
      'The stack should handle any type of items',
      'pop() and peek() should raise an exception or return a special value for empty stacks'
    ],
    hints: [
      'You can use a Python list to implement a stack',
      'For push(), use the append() method of lists',
      'For pop(), use the pop() method without an index to remove from the end',
      'An empty stack has size 0'
    ],
    solution: {
      explanation: 'We implement a stack using a Python list as the underlying storage. The list\'s append() and pop() methods naturally support stack operations (adding and removing from the end). We also implement peek(), is_empty(), and size() operations.',
      code: `class Stack:
    def __init__(self):
        """Initialize an empty stack."""
        self.items = []

    def push(self, item):
        """Add an item to the top of the stack."""
        self.items.append(item)

    def pop(self):
        """Remove and return the top item from the stack.
        Raises IndexError if the stack is empty."""
        if self.is_empty():
            raise IndexError("Cannot pop from an empty stack")
        return self.items.pop()

    def peek(self):
        """Return the top item without removing it.
        Raises IndexError if the stack is empty."""
        if self.is_empty():
            raise IndexError("Cannot peek at an empty stack")
        return self.items[-1]

    def is_empty(self):
        """Return True if the stack is empty, False otherwise."""
        return len(self.items) == 0

    def size(self):
        """Return the number of items in the stack."""
        return len(self.items)

# Test cases
stack = Stack()
print(stack.is_empty())  # True

stack.push(1)
stack.push(2)
stack.push(3)

print(stack.size())      # 3
print(stack.peek())      # 3
print(stack.pop())       # 3
print(stack.pop())       # 2
print(stack.size())      # 1
print(stack.is_empty())  # False`
    }
  }
];

// Function to get all problems organized by category
export function getProblemsByCategory() {
  const categories: Record<string, Problem[]> = {};

  for (const problem of problems) {
    if (!categories[problem.category]) {
      categories[problem.category] = [];
    }
    categories[problem.category].push(problem);
  }

  return Object.entries(categories).map(([name, problems]) => ({
    name,
    emoji: problems[0].categoryEmoji, // Get emoji from the first problem in category
    problems
  }));
}
