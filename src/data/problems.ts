// ... existing code ...
import type { Problem } from '../lib/types';
export const problems: Problem[] = [
  // Introduction
  {
    id: '1',
    title: 'Hello World',
    slug: 'hello-world',
    difficulty: 'Easy',
    category: 'Introduction',
    categoryEmoji: '🔰', // Changed emoji to '🔰'
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
  // New problem added
  {
    id: '18',
    title: 'String Manipulation - Word Counter',
    slug: 'word-counter',
    difficulty: 'Medium',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `word_count(text)` that counts the frequency of each word in a given text.\n\nThe function should return a dictionary where keys are the words and values are the number of occurrences of that word in the text.\n\nWords should be case-insensitive (e.g., "Hello" and "hello" should be counted as the same word). Punctuation should be ignored.',
    examples: [
      {
        input: 'word_count("Hello world, hello Python!")',
        output: '{"hello": 2, "world": 1, "python": 1}',
        explanation: 'The word "hello" appears twice (case-insensitive), while "world" and "python" each appear once'
      },
      {
        input: 'word_count("The quick brown fox jumps over the lazy dog.")',
        output: '{"the": 2, "quick": 1, "brown": 1, "fox": 1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1}',
        explanation: 'The word "the" appears twice, all other words appear once'
      }
    ],
    constraints: [
      'Input text will contain only ASCII characters',
      'Words are separated by spaces or punctuation',
      'Return the result as a dictionary with words in lowercase'
    ],
    hints: [
      'You can use the lower() method to convert text to lowercase',
      'The re module can be used to remove punctuation',
      'Consider using a defaultdict or Counter from the collections module'
    ],
    solution: {
      explanation: 'We first convert the input text to lowercase and use a regular expression to remove punctuation. Then we split the text into words and count the frequency of each word using a dictionary.',
      code: `import re
from collections import Counter

def word_count(text):
    # Convert to lowercase
    text = text.lower()

    # Remove punctuation and replace with spaces
    text = re.sub(r'[^\\w\\s]', ' ', text)

    # Split into words and count
    words = text.split()
    return dict(Counter(words))

# Alternative implementation without Counter
def word_count_alt(text):
    # Convert to lowercase
    text = text.lower()

    # Remove punctuation and replace with spaces
    text = re.sub(r'[^\\w\\s]', ' ', text)

    # Split into words
    words = text.split()

    # Count occurrences
    word_counts = {}
    for word in words:
        word_counts[word] = word_counts.get(word, 0) + 1

    return word_counts

# Test cases
print(word_count("Hello world, hello Python!"))
print(word_count("The quick brown fox jumps over the lazy dog."))`
    }
  },
  // End of new problem
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
  {
    id: '19',
    title: 'Tower of Hanoi',
    slug: 'tower-of-hanoi',
    difficulty: 'Hard',
    category: 'Algorithms',
    categoryEmoji: '🧮',
    description: 'Implement a function `hanoi(n, source, auxiliary, target)` that solves the Tower of Hanoi puzzle.\n\nThe Tower of Hanoi is a classic puzzle with three rods and n disks of different sizes. The objective is to move the entire stack of disks from the source rod to the target rod, following these rules:\n\n1. Only one disk can be moved at a time\n2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod\n3. No disk may be placed on top of a smaller disk\n\nYour function should print each step of the solution in the format "Move disk [disk_number] from [source] to [target]".',
    examples: [
      {
        input: 'hanoi(3, "A", "B", "C")',
        output: `"Move disk 1 from A to C"
"Move disk 2 from A to B"
"Move disk 1 from C to B"
"Move disk 3 from A to C"
"Move disk 1 from B to A"
"Move disk 2 from B to C"
"Move disk 1 from A to C"`,
        explanation: 'The steps required to move 3 disks from rod A to rod C using rod B as auxiliary'
      }
    ],
    constraints: [
      'n will be a positive integer',
      'source, auxiliary, and target will be strings representing the rod names'
    ],
    hints: [
      'This is a classic problem that can be solved recursively',
      'To move n disks from source to target, you need to: 1) move n-1 disks from source to auxiliary, 2) move disk n from source to target, 3) move n-1 disks from auxiliary to target',
      'The base case is when n = 1, where you simply move the disk from source to target'
    ],
    solution: {
      explanation: 'We solve the Tower of Hanoi puzzle using recursion. For n disks, we first move n-1 disks from the source to the auxiliary rod, then move the nth disk from the source to the target, and finally move the n-1 disks from the auxiliary rod to the target.',
      code: `def hanoi(n, source, auxiliary, target):
    # Base case: if only one disk, move it directly
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return

    # Move n-1 disks from source to auxiliary, using target as temporary
    hanoi(n-1, source, target, auxiliary)

    # Move the nth disk from source to target
    print(f"Move disk {n} from {source} to {target}")

    # Move n-1 disks from auxiliary to target, using source as temporary
    hanoi(n-1, auxiliary, source, target)

# Test case
hanoi(3, "A", "B", "C")`
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
  },
  {
    id: '13',
    title: 'Implement a Queue',
    slug: 'implement-a-queue',
    difficulty: 'Medium',
    category: 'Data Structures',
    categoryEmoji: '🧱',
    description: 'Implement a queue data structure in Python.\\n\\nA queue is a First-In-First-Out (FIFO) data structure with the following operations:\\n- `enqueue(item)`: Add an item to the end of the queue\\n- `dequeue()`: Remove and return the front item from the queue\\n- `peek()`: Return the front item without removing it\\n- `is_empty()`: Return True if the queue is empty, False otherwise\\n- `size()`: Return the number of items in the queue',
    examples: [
      {
        input: `queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()`,
        output: '1',
        explanation: 'The first item added (1) is the first to be dequeued'
      },
      {
        input: `queue = Queue()
queue.enqueue("a")
queue.enqueue("b")
queue.peek()`,
        output: '"a"',
        explanation: 'Peek returns the front item ("a") without removing it'
      }
    ],
    constraints: [
      'Implement the queue using a Python list',
      'All operations should have appropriate time complexity'
    ],
    hints: [
      'For a queue, items are added at one end and removed from the other',
      'Be careful about how you implement dequeue to maintain O(1) complexity',
      'You can use list.pop(0) to remove the first element, but this is O(n)'
    ],
    solution: {
      explanation: 'We can implement a queue using a Python list. Items are enqueued at the end of the list and dequeued from the beginning. While pop(0) is O(n), it is suitable for most practical purposes. For more efficient implementations, you could use collections.deque.',
      code: `class Queue:
    def __init__(self):
        """Initialize an empty queue."""
        self.items = []

    def enqueue(self, item):
        """Add an item to the end of the queue."""
        self.items.append(item)

    def dequeue(self):
        """Remove and return the front item from the queue.
        Raises IndexError if the queue is empty."""
        if self.is_empty():
            raise IndexError("Cannot dequeue from an empty queue")
        return self.items.pop(0)

    def peek(self):
        """Return the front item without removing it.
        Raises IndexError if the queue is empty."""
        if self.is_empty():
            raise IndexError("Cannot peek at an empty queue")
        return self.items[0]

    def is_empty(self):
        """Return True if the queue is empty, False otherwise."""
        return len(self.items) == 0

    def size(self):
        """Return the number of items in the queue."""
        return len(self.items)

# Test cases
queue = Queue()
print(queue.is_empty())  # True

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.size())      # 3
print(queue.peek())      # 1
print(queue.dequeue())   # 1
print(queue.dequeue())   # 2
print(queue.size())      # 1
print(queue.is_empty())  # False`
    }
  },
  {
    id: '14',
    title: 'Binary Search Tree Operations',
    slug: 'binary-search-tree-operations',
    difficulty: 'Hard',
    category: 'Data Structures',
    categoryEmoji: '🧱',
    description: 'Implement a Binary Search Tree (BST) in Python.\\n\\nA Binary Search Tree is a data structure where each node has at most two children, and all values in the left subtree are less than the node\'s value, while all values in the right subtree are greater.\\n\\nImplement the following operations:\\n- `insert(value)`: Insert a value into the BST\\n- `search(value)`: Return True if the value exists in the BST, False otherwise\\n- `inorder_traversal()`: Return a list of all values in the BST using inorder traversal (left, root, right)\\n- `min_value()`: Return the minimum value in the BST\\n- `max_value()`: Return the maximum value in the BST',
    examples: [
      {
        input: `bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.inorder_traversal()`,
        output: '[2, 3, 4, 5, 7]',
        explanation: 'Inorder traversal visits nodes in ascending order in a BST'
      },
      {
        input: `bst = BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.search(5)`,
        output: 'True',
        explanation: '5 exists in the BST'
      },
      {
        input: `bst = BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.min_value()`,
        output: '5',
        explanation: 'The minimum value in the BST is 5'
      }
    ],
    constraints: [
      'All values in the BST will be unique',
      'The BST should handle empty trees appropriately'
    ],
    hints: [
      'Create a Node class to represent each node in the tree',
      'For insert, start at the root and move left or right based on comparisons',
      'For inorder traversal, use recursive approach: traverse left, visit node, traverse right',
      'The minimum value will always be the leftmost node',
      'The maximum value will always be the rightmost node'
    ],
    solution: {
      explanation: 'We implement a Binary Search Tree with a Node class for each node in the tree. Each node has a value and left and right children. The insert method adds new nodes while maintaining the BST property. The search method looks for a value by traversing the tree. Inorder traversal visits nodes in ascending order. The min_value and max_value methods find the minimum and maximum values in the tree.',
      code: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = Node(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = Node(value)
            else:
                self._insert_recursive(node.right, value)

    def search(self, value):
        return self._search_recursive(self.root, value)

    def _search_recursive(self, node, value):
        if node is None:
            return False
        if node.value == value:
            return True
        if value < node.value:
            return self._search_recursive(node.left, value)
        return self._search_recursive(node.right, value)

    def inorder_traversal(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.value)
            self._inorder_recursive(node.right, result)

    def min_value(self):
        if self.root is None:
            return None
        return self._find_min(self.root).value

    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def max_value(self):
        if self.root is None:
            return None
        return self._find_max(self.root).value

    def _find_max(self, node):
        current = node
        while current.right is not None:
            current = current.right
        return current

# Test cases
bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
print(bst.inorder_traversal())  # [2, 3, 4, 5, 7]
print(bst.search(4))            # True
print(bst.search(6))            # False
print(bst.min_value())          # 2
print(bst.max_value())          # 7`
    }
  },
  {
    id: '15',
    title: 'Linked List Implementation',
    slug: 'linked-list-implementation',
    difficulty: 'Medium',
    category: 'Data Structures',
    categoryEmoji: '🧱',
    description: 'Implement a singly linked list in Python.\\n\\nA linked list is a data structure consisting of nodes where each node contains a value and a pointer to the next node.\\n\\nImplement the following operations:\\n- `append(value)`: Add a node with the given value to the end of the list\\n- `prepend(value)`: Add a node with the given value to the beginning of the list\\n- `delete(value)`: Remove the first node with the given value\\n- `search(value)`: Return True if the value exists in the list, False otherwise\\n- `to_list()`: Convert the linked list to a Python list',
    examples: [
      {
        input: `linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.to_list()`,
        output: '[1, 2, 3]',
        explanation: 'The linked list contains the values 1, 2, and 3 in order'
      },
      {
        input: `linked_list = LinkedList()
linked_list.append(2)
linked_list.prepend(1)
linked_list.append(3)
linked_list.to_list()`,
        output: '[1, 2, 3]',
        explanation: 'The linked list contains 1 at the beginning, then 2, then 3'
      },
      {
        input: `linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.delete(2)
linked_list.to_list()`,
        output: '[1, 3]',
        explanation: 'After deleting 2, the list contains only 1 and 3'
      }
    ],
    constraints: [
      'All operations should have appropriate time complexity',
      'The linked list should handle empty lists appropriately'
    ],
    hints: [
      'Create a Node class to represent each node in the list',
      'Keep track of the head of the list in the LinkedList class',
      'For append, you may want to also track the tail of the list for O(1) insertion',
      'For delete, you need to handle special cases like deleting the head'
    ],
    solution: {
      explanation: 'We implement a singly linked list with a Node class for each node in the list. The LinkedList class keeps track of the head and tail of the list. The append operation adds a node to the end of the list, prepend adds a node to the beginning, delete removes a node with a given value, search checks if a value exists in the list, and to_list converts the linked list to a Python list.',
      code: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

    def prepend(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def delete(self, value):
        if self.head is None:
            return

        # If head node holds the value to be deleted
        if self.head.value == value:
            self.head = self.head.next
            # If the list becomes empty, update tail
            if self.head is None:
                self.tail = None
            return

        # Search for the value to delete, keep track of previous node
        current = self.head
        while current.next and current.next.value != value:
            current = current.next

        # If the value was found, delete it
        if current.next:
            # If we're deleting the tail, update tail pointer
            if current.next == self.tail:
                self.tail = current
            current.next = current.next.next

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result

# Test cases
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
print(linked_list.to_list())  # [1, 2, 3]
print(linked_list.search(2))  # True
print(linked_list.search(4))  # False

linked_list.prepend(0)
print(linked_list.to_list())  # [0, 1, 2, 3]

linked_list.delete(0)
linked_list.delete(2)
print(linked_list.to_list())  # [1, 3]`
    }
  },

  // Python Advanced
  {
    id: '16',
    title: 'Decorators in Python',
    slug: 'decorators-in-python',
    difficulty: 'Hard',
    category: 'Python Advanced',
    categoryEmoji: '🐍',
    description: 'Implement several Python decorators to understand this powerful feature.\\n\\nA decorator is a function that takes another function as an argument and extends its behavior without explicitly modifying it.\\n\\nImplement the following decorators:\\n- `timer`: Measure and print the execution time of a function\\n- `debug`: Print the function name, arguments, and return value\\n- `retry(n)`: Retry the function execution up to n times if it raises an exception',
    examples: [
      {
        input: `@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

slow_function()`,
        output: 'Execution of slow_function took about 1 second\n"Done"',
        explanation: 'The timer decorator measures how long the function takes to execute'
      },
      {
        input: `@debug
def add(a, b):
    return a + b

add(3, 5)`,
        output: 'Calling add(3, 5)\nReturning 8\n8',
        explanation: 'The debug decorator prints information about the function call'
      },
      {
        input: `@retry(3)
def might_fail(probability=0.5):
    import random
    if random.random() < probability:
        raise ValueError("Random failure")
    return "Success"`,
        output: 'Various depending on randomness, but will retry up to 3 times',
        explanation: 'The retry decorator attempts to execute the function up to 3 times if it raises an exception'
      }
    ],
    constraints: [
      'Ensure your decorators work with functions of any signature',
      'Make sure your decorators properly return the original function\'s return value'
    ],
    hints: [
      'Use functools.wraps to preserve the original function\'s metadata',
      'For the timer decorator, use time.time() to measure elapsed time',
      'For the retry decorator, you\'ll need to create a decorator that takes an argument'
    ],
    solution: {
      explanation: 'We implement three decorators: timer, debug, and retry. The timer decorator measures the execution time of a function. The debug decorator prints information about the function call including arguments and return value. The retry decorator retries the function execution up to n times if it raises an exception.',
      code: `import functools
import time

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Execution of {func.__name__} took {end_time - start_time:.2f} seconds")
        return result
    return wrapper

def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"Calling {func.__name__}({signature})")
        result = func(*args, **kwargs)
        print(f"Returning {result!r}")
        return result
    return wrapper

def retry(n):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, n + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt}/{n} failed: {e}")
                    if attempt == n:
                        raise
        return wrapper
    return decorator

# Example usage:
@timer
def slow_function():
    time.sleep(1)
    return "Done"

@debug
def add(a, b):
    return a + b

@retry(3)
def might_fail(probability=0.7):
    import random
    if random.random() < probability:
        raise ValueError("Random failure")
    return "Success"

# Test cases
print(slow_function())
print(add(3, 5))
try:
    print(might_fail())
except Exception as e:
    print(f"Function failed all retries: {e}")`
    }
  },
  {
    id: '17',
    title: 'Context Managers and the with Statement',
    slug: 'context-managers-and-with-statement',
    difficulty: 'Hard',
    category: 'Python Advanced',
    categoryEmoji: '🐍',
    description: 'Create custom context managers in Python using both class-based and function-based approaches.\\n\\nA context manager is an object that defines the methods `__enter__()` and `__exit__()` and can be used with the `with` statement. Context managers are useful for resource management and for creating reusable setup and teardown code.\\n\\nImplement the following context managers:\\n- `Timer`: A class-based context manager that measures the execution time of code\\n- `tempdir`: A function-based context manager (using the `@contextmanager` decorator) that creates a temporary directory, yields its path, and deletes it afterward\\n- `suppress_exceptions`: A context manager that suppresses specified exceptions',
    examples: [
      {
        input: `with Timer() as timer:
    # Code to be timed
    import time
    time.sleep(1)
print(f"Elapsed time: {timer.elapsed} seconds")`,
        output: 'Elapsed time: ~1.0 seconds',
        explanation: 'The Timer context manager measures the execution time of the code within the with block'
      },
      {
        input: `with tempdir() as path:
    # Code that uses the temporary directory
    print(f"Working in {path}")
    with open(f"{path}/example.txt", "w") as f:
        f.write("Hello, world!")`,
        output: 'Working in /tmp/some_temp_dir\n# The directory is automatically cleaned up after the with block',
        explanation: 'The tempdir context manager creates a temporary directory, yields its path, and deletes it afterward'
      },
      {
        input: `with suppress_exceptions(ZeroDivisionError):
    result = 1 / 0
print("Execution continues despite the zero division error")`,
        output: 'Execution continues despite the zero division error',
        explanation: 'The suppress_exceptions context manager suppresses the specified exception(s)'
      }
    ],
    constraints: [
      'Your context managers should clean up resources properly even if an exception occurs',
      'Make sure to handle edge cases and provide meaningful error messages when appropriate'
    ],
    hints: [
      'For class-based context managers, implement the __enter__ and __exit__ methods',
      'For function-based context managers, use the contextlib.contextmanager decorator',
      'The __exit__ method takes three arguments: exception_type, exception_value, and traceback',
      'The tempdir manager can use the tempfile module from the standard library'
    ],
    solution: {
      explanation: 'We implement three custom context managers: Timer (class-based), tempdir (function-based), and suppress_exceptions (class-based). The Timer context manager measures the execution time of code within a with block. The tempdir context manager creates a temporary directory, yields its path, and cleans it up afterward. The suppress_exceptions context manager suppresses specified exceptions.',
      code: `import time
import os
import shutil
import tempfile
from contextlib import contextmanager

# Class-based context manager
class Timer:
    def __enter__(self):
        self.start = time.time()
        self.elapsed = None
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.elapsed = time.time() - self.start

# Function-based context manager using @contextmanager
@contextmanager
def tempdir():
    """
    Create a temporary directory, yield its path, and delete it afterward.
    """
    path = tempfile.mkdtemp()
    try:
        yield path
    finally:
        shutil.rmtree(path)

# Class-based context manager for exception suppression
class suppress_exceptions:
    def __init__(self, *exceptions):
        self.exceptions = exceptions

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Return True to suppress the exception if it's in the specified list
        return exc_type is not None and issubclass(exc_type, self.exceptions)

# Example usage:
# Timer example
with Timer() as timer:
    # Code to be timed
    time.sleep(0.5)
print(f"Elapsed time: {timer.elapsed:.2f} seconds")

# Tempdir example
with tempdir() as path:
    print(f"Working in temporary directory: {path}")
    # Create a file in the temp directory
    with open(os.path.join(path, "example.txt"), "w") as f:
        f.write("Hello, world!")
    # The directory and its contents are automatically removed after this block

# Exception suppression example
with suppress_exceptions(ZeroDivisionError, ValueError):
    # This would normally raise an exception and stop execution
    result = 1 / 0
print("Execution continues despite the zero division error")`
    }
  },

  // New problem added
  {
    id: '20',
    title: 'Matrix Operations',
    slug: 'matrix-operations',
    difficulty: 'Medium',
    category: 'Math',
    categoryEmoji: '📊',
    description: 'Implement functions to perform basic matrix operations:\n\n1. `matrix_add(A, B)`: Add two matrices A and B\n2. `matrix_multiply(A, B)`: Multiply two matrices A and B\n3. `matrix_transpose(A)`: Find the transpose of matrix A\n\nA matrix is represented as a list of lists, where each inner list is a row of the matrix.',
    examples: [
      {
        input: `A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
matrix_add(A, B)`,
        output: '[[6, 8], [10, 12]]',
        explanation: 'Adding corresponding elements of matrices A and B'
      },
      {
        input: `A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
matrix_multiply(A, B)`,
        output: '[[19, 22], [43, 50]]',
        explanation: '(1×5 + 2×7 = 19, 1×6 + 2×8 = 22), (3×5 + 4×7 = 43, 3×6 + 4×8 = 50)'
      },
      {
        input: `A = [[1, 2, 3], [4, 5, 6]]
matrix_transpose(A)`,
        output: '[[1, 4], [2, 5], [3, 6]]',
        explanation: 'The transpose swaps rows and columns'
      }
    ],
    constraints: [
      'For matrix_add, matrices A and B must have the same dimensions',
      'For matrix_multiply, the number of columns in A must equal the number of rows in B',
      'All matrix elements will be integers'
    ],
    hints: [
      'Matrix addition is element-wise: C[i][j] = A[i][j] + B[i][j]',
      'For matrix multiplication, C[i][j] = sum(A[i][k] * B[k][j]) for all k',
      'For transpose, the element at position (i, j) in the original matrix becomes the element at position (j, i) in the transposed matrix'
    ],
    solution: {
      explanation: 'We implement three matrix operations: addition, multiplication, and transpose. Matrix addition adds corresponding elements. Matrix multiplication follows the definition of matrix product. The transpose swaps the rows and columns of the matrix.',
      code: `def matrix_add(A, B):
    # Check if dimensions match
    if len(A) != len(B) or len(A[0]) != len(B[0]):
        raise ValueError("Matrices must have the same dimensions for addition")

    # Initialize result matrix with zeros
    result = [[0 for _ in range(len(A[0]))] for _ in range(len(A))]

    # Add corresponding elements
    for i in range(len(A)):
        for j in range(len(A[0])):
            result[i][j] = A[i][j] + B[i][j]

    return result

def matrix_multiply(A, B):
    # Check if dimensions are compatible for multiplication
    if len(A[0]) != len(B):
        raise ValueError("Number of columns in A must equal number of rows in B")

    # Initialize result matrix with zeros
    result = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]

    # Multiply
    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                result[i][j] += A[i][k] * B[k][j]

    return result

def matrix_transpose(A):
    # Initialize transposed matrix
    result = [[0 for _ in range(len(A))] for _ in range(len(A[0]))]

    # Fill in the transposed values
    for i in range(len(A)):
        for j in range(len(A[0])):
            result[j][i] = A[i][j]

    return result

# Test cases
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

print("Matrix A + B:")
print(matrix_add(A, B))

print("Matrix A × B:")
print(matrix_multiply(A, B))

print("Transpose of matrix A:")
print(matrix_transpose(A))`
    }
  },

  // New problem added
  {
    id: '21',
    title: 'DOM Manipulation',
    slug: 'dom-manipulation',
    difficulty: 'Medium',
    category: 'Web Development',
    categoryEmoji: '🌐',
    description: 'Implement a function `createTodoList()` that manipulates the DOM to create a simple todo list application.\n\nYour function should:\n\n1. Create a form with an input field and a submit button\n2. Create an empty unordered list (ul) element for the todos\n3. When the form is submitted, add the input value as a new list item (li) to the todo list\n4. Clear the input field after adding the todo\n5. Add a "delete" button to each todo item that removes it from the list when clicked\n\nReturn the container element that holds both the form and the todo list.',
    examples: [
      {
        input: 'document.body.appendChild(createTodoList())',
        output: 'A todo list application appears on the page',
        explanation: 'When called, the function creates a todo list UI with add and delete functionality'
      }
    ],
    constraints: [
      'Use vanilla JavaScript (no libraries or frameworks)',
      'Ensure the form does not trigger a page reload when submitted',
      'Do not allow empty todos to be added'
    ],
    hints: [
      'Use document.createElement() to create DOM elements',
      'Use the addEventListener() method to handle events like form submission',
      'Remember to prevent the default form submission behavior with event.preventDefault()',
      'For the delete functionality, you can use parentNode to find and remove the parent li element'
    ],
    solution: {
      explanation: 'We create a DOM structure for a simple todo list application using JavaScript. We handle form submission to add new todos and add delete buttons to each todo item. We use event listeners to handle user interactions.',
      code: `function createTodoList() {
    // Create container
    const container = document.createElement('div');
    container.className = 'todo-app';

    // Create form
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitButton = document.createElement('button');

    input.type = 'text';
    input.placeholder = 'Add a new todo';
    input.required = true;

    submitButton.textContent = 'Add';
    submitButton.type = 'submit';

    form.appendChild(input);
    form.appendChild(submitButton);

    // Create todo list
    const todoList = document.createElement('ul');
    todoList.className = 'todo-list';

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = input.value.trim();
        if (todoText) {
            // Create new todo item
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';

            // Handle delete
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);

            // Clear input
            input.value = '';
        }
    });

    // Add elements to container
    container.appendChild(form);
    container.appendChild(todoList);

    return container;
}

// Example usage:
// document.body.appendChild(createTodoList());`
    }
  },

  // New problem added
  {
    id: '22',
    title: 'API Data Fetching',
    slug: 'api-data-fetching',
    difficulty: 'Medium',
    category: 'Web Development',
    categoryEmoji: '🌐',
    description: 'Implement a function `fetchUserData(userId)` that fetches user data from a JSON API and displays it on a webpage.\n\nThe function should:\n\n1. Fetch user data from the JSONPlaceholder API: https://jsonplaceholder.typicode.com/users/{userId}\n2. Display the user\'s name, email, phone, and website in a formatted card\n3. Handle loading states while the data is being fetched\n4. Handle errors if the API request fails\n5. Return the card element containing the user data',
    examples: [
      {
        input: 'document.body.appendChild(fetchUserData(1))',
        output: 'A card displays with the data for user with ID 1',
        explanation: 'The function fetches data for user with ID 1 and displays it in a card'
      }
    ],
    constraints: [
      'Use the Fetch API for making the HTTP request',
      'Handle API errors appropriately',
      'Display a loading indicator while fetching data',
      'The function should work asynchronously'
    ],
    hints: [
      'Use the fetch() function to make HTTP requests',
      'API responses need to be converted to JSON using the .json() method',
      'You can use Promises or async/await for handling asynchronous operations',
      'Create and update DOM elements to show loading states and results'
    ],
    solution: {
      explanation: 'We implement a function that fetches user data from the JSONPlaceholder API and displays it in a card. We handle loading states and errors, and use the Fetch API with async/await for the HTTP request.',
      code: `async function fetchUserData(userId) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'user-card';

    // Set initial loading state
    card.innerHTML = '<p>Loading user data...</p>';

    try {
        // Fetch user data
        const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);

        // Check if request was successful
        if (!response.ok) {
            throw new Error(\`HTTP error! Status: \${response.status}\`);
        }

        // Parse JSON response
        const userData = await response.json();

        // Update card with user data
        card.innerHTML = \`
            <h2>\${userData.name}</h2>
            <p><strong>Email:</strong> \${userData.email}</p>
            <p><strong>Phone:</strong> \${userData.phone}</p>
            <p><strong>Website:</strong> \${userData.website}</p>
        \`;

    } catch (error) {
        // Handle errors
        card.innerHTML = \`
            <p class="error">Error fetching user data: \${error.message}</p>
        \`;
    }

    return card;
}

// Example usage:
// async function displayUser() {
//     const userCard = await fetchUserData(1);
//     document.body.appendChild(userCard);
// }
// displayUser();`
    }
  },

  // New easy task - String Case Converter
  {
    id: '23',
    title: 'String Case Converter',
    slug: 'string-case-converter',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `convert_case(text, case_type)` that converts a string to a specified case type.\\n\\nThe function should accept two parameters:\\n- `text`: A string to convert\\n- `case_type`: A string specifying the case type to convert to (\"upper\", \"lower\", or \"title\")\\n\\nIf an invalid case_type is provided, return the original string unchanged.',
    examples: [
      {
        input: 'convert_case("Hello World", "upper")',
        output: '"HELLO WORLD"',
        explanation: 'Converts the string to uppercase'
      },
      {
        input: 'convert_case("Hello World", "lower")',
        output: '"hello world"',
        explanation: 'Converts the string to lowercase'
      },
      {
        input: 'convert_case("hello world", "title")',
        output: '"Hello World"',
        explanation: 'Converts the string to title case (capitalizes the first letter of each word)'
      }
    ],
    constraints: [
      'The function should handle empty strings',
      'Valid case_type values are "upper", "lower", and "title"',
      'Return the original string for any invalid case_type'
    ],
    hints: [
      'Python has built-in string methods for case conversion',
      'Use the .upper(), .lower(), and .title() methods',
      'Check the case_type parameter to determine which method to use'
    ],
    solution: {
      explanation: 'We implement a function that converts a string to the specified case type using Python\'s built-in string methods. The function handles three case types: upper, lower, and title. If an invalid case type is provided, it returns the original string.',
      code: `def convert_case(text, case_type):
    if case_type == "upper":
        return text.upper()
    elif case_type == "lower":
        return text.lower()
    elif case_type == "title":
        return text.title()
    else:
        return text

# Test cases
print(convert_case("Hello World", "upper"))
print(convert_case("Hello World", "lower"))
print(convert_case("hello world", "title"))
print(convert_case("Hello World", "invalid"))`
    }
  },
  // New easy task - List Operations
  {
    id: '24',
    title: 'Remove Duplicates',
    slug: 'remove-duplicates',
    difficulty: 'Easy',
    category: 'Python Basics',
    categoryEmoji: '🐍',
    description: 'Write a function `remove_duplicates(items)` that removes duplicate elements from a list while preserving the original order.\\n\\nFor example, if the input is [1, 2, 2, 3, 4, 3, 5], the output should be [1, 2, 3, 4, 5].',
    examples: [
      {
        input: 'remove_duplicates([1, 2, 2, 3, 4, 3, 5])',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'Duplicate values 2 and 3 are removed while preserving order'
      },
      {
        input: 'remove_duplicates(["apple", "banana", "apple", "orange", "banana"])',
        output: '["apple", "banana", "orange"]',
        explanation: 'Duplicate strings are removed while preserving order'
      },
      {
        input: 'remove_duplicates([])',
        output: '[]',
        explanation: 'Empty list returns empty list'
      }
    ],
    constraints: [
      'Preserve the original order of elements',
      'The function should work with any list of hashable items',
      'Return an empty list if the input is an empty list'
    ],
    hints: [
      'You can use a set to track items you\'ve already seen',
      'Sets in Python maintain insertion order since Python 3.7',
      'You can also use dict.fromkeys() to remove duplicates while preserving order'
    ],
    solution: {
      explanation: 'We implement a function that removes duplicate elements from a list while preserving the original order. We use a set to track items we\'ve already seen and build a new list with only the first occurrence of each item.',
      code: `def remove_duplicates(items):
    seen = set()
    result = []

    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)

    return result

# Alternative using dict.fromkeys() (Python 3.7+)
def remove_duplicates_alt(items):
    return list(dict.fromkeys(items))

# Test cases
print(remove_duplicates([1, 2, 2, 3, 4, 3, 5]))
print(remove_duplicates(["apple", "banana", "apple", "orange", "banana"]))
print(remove_duplicates([]))`
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

  // Helper function to convert difficulty level to a numeric value for sorting
  const difficultyValue = (difficulty: string): number => {
    switch (difficulty) {
      case 'Easy': return 1;
      case 'Medium': return 2;
      case 'Hard': return 3;
      default: return 4; // Any other difficulty level
    }
  };

  // Sort problems by difficulty within each category
  Object.values(categories).forEach(categoryProblems => {
    categoryProblems.sort((a, b) => difficultyValue(a.difficulty) - difficultyValue(b.difficulty));
  });

  return Object.entries(categories).map(([name, problems]) => ({
    name,
    emoji: problems[0,

  // Sorting Algorithms
  {
    id: '25',
    title: 'Insertion Sort',
    slug: 'insertion-sort',
    difficulty: 'Easy',
    category: 'Sorting',
    categoryEmoji: '🔄',
    description: 'Implement the insertion sort algorithm in Python.\\n\\nInsertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It iterates through an array, consuming one input element at each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.\\n\\nWrite a function `insertion_sort(arr)` that sorts a list of numbers in ascending order using the insertion sort algorithm.',
    examples: [
      {
        input: 'insertion_sort([5, 2, 4, 6, 1, 3])',
        output: '[1, 2, 3, 4, 5, 6]',
        explanation: 'The array is sorted in ascending order'
      },
      {
        input: 'insertion_sort([31, 41, 59, 26, 41, 58])',
        output: '[26, 31, 41, 41, 58, 59]',
        explanation: 'The array is sorted in ascending order, maintaining the order of equal elements (stable sort)'
      }
    ],
    constraints: [
      'The input array will only contain integers',
      'The function should modify the array in-place',
      'Your implementation must use the insertion sort algorithm'
    ],
    hints: [
      'Start from the second element and iterate through the array',
      'For each element, compare it with all elements in the sorted portion to its left',
      'Shift elements to the right to make space for the current element in its correct position',
      'Insertion sort has O(n²) time complexity in the worst case but performs well on small or nearly sorted arrays'
    ],
    solution: {
      explanation: 'We implement the insertion sort algorithm which builds the sorted array one element at a time. We iterate through the array and for each element, we find its correct position in the sorted portion of the array by shifting larger elements to the right.',
      code: `def insertion_sort(arr):
    # Start from the second element (index 1)
    for i in range(1, len(arr)):
        # Element to be inserted into the sorted portion
        key = arr[i]

        # Move elements of arr[0..i-1] that are greater than key
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        # Place the key in its correct position
        arr[j + 1] = key

    return arr

# Test cases
print(insertion_sort([5, 2, 4, 6, 1, 3]))
print(insertion_sort([31, 41, 59, 26, 41, 58]))
print(insertion_sort([]))`
    }
  },
  {
    id: '26',
    title: 'Merge Sort',
    slug: 'merge-sort',
    difficulty: 'Medium',
    category: 'Sorting',
    categoryEmoji: '🔄',
    description: 'Implement the merge sort algorithm in Python.\\n\\nMerge sort is an efficient, divide-and-conquer, comparison-based sorting algorithm. It divides the input array into two halves, recursively sorts them, and then merges the sorted halves.\\n\\nWrite a function `merge_sort(arr)` that sorts a list of numbers in ascending order using the merge sort algorithm.',
    examples: [
      {
        input: 'merge_sort([5, 2, 4, 6, 1, 3])',
        output: '[1, 2, 3, 4, 5, 6]',
        explanation: 'The array is sorted in ascending order'
      },
      {
        input: 'merge_sort([38, 27, 43, 3, 9, 82, 10])',
        output: '[3, 9, 10, 27, 38, 43, 82]',
        explanation: 'The array is sorted in ascending order'
      }
    ],
    constraints: [
      'The input array will only contain integers',
      'Your implementation must use the merge sort algorithm',
      'You should implement the merge function separately'
    ],
    hints: [
      'The merge sort algorithm can be divided into 3 steps: 1) Divide the array into two halves, 2) Recursively sort the two halves, 3) Merge the sorted halves',
      'The base case for the recursion is when the array length is 0 or 1',
      'The merge function takes two sorted arrays and combines them into one sorted array',
      'Merge sort has O(n log n) time complexity, making it efficient for large datasets'
    ],
    solution: {
      explanation: 'We implement the merge sort algorithm using the divide-and-conquer strategy. First, we split the array in half and recursively sort each half. Then, we merge the sorted halves using a separate merge function that compares elements from both halves and constructs the sorted result.',
      code: `def merge_sort(arr):
    # Base case: arrays with 0 or 1 element are already sorted
    if len(arr) <= 1:
        return arr

    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    # Recursively sort both halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0

    # Compare elements from both arrays and add the smaller one to the result
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Add any remaining elements
    result.extend(left[i:])
    result.extend(right[j:])

    return result

# Test cases
print(merge_sort([5, 2, 4, 6, 1, 3]))
print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
print(merge_sort([]))`
    }
  },
  {
    id: '27',
    title: 'Quick Sort',
    slug: 'quick-sort',
    difficulty: 'Hard',
    category: 'Sorting',
    categoryEmoji: '🔄',
    description: 'Implement the quick sort algorithm in Python.\\n\\nQuick sort is an efficient, divide-and-conquer, comparison-based sorting algorithm. It selects a \'pivot\' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.\\n\\nWrite a function `quick_sort(arr)` that sorts a list of numbers in ascending order using the quick sort algorithm.',
    examples: [
      {
        input: 'quick_sort([5, 2, 4, 6, 1, 3])',
        output: '[1, 2, 3, 4, 5, 6]',
        explanation: 'The array is sorted in ascending order'
      },
      {
        input: 'quick_sort([10, 7, 8, 9, 1, 5])',
        output: '[1, 5, 7, 8, 9, 10]',
        explanation: 'The array is sorted in ascending order'
      }
    ],
    constraints: [
      'The input array will only contain integers',
      'Your implementation must use the quick sort algorithm',
      'You should implement the partition function separately'
    ],
    hints: [
      'The key to quick sort is the partition function, which rearranges the array so elements less than the pivot come before it, and elements greater than the pivot come after it',
      'For the pivot selection, you can choose the first element, last element, median, or a random element',
      'The base case for recursion is when the array has 0 or 1 elements',
      'Quick sort has an average-case time complexity of O(n log n), but can degrade to O(n²) in the worst case'
    ],
    solution: {
      explanation: 'We implement the quick sort algorithm using the Lomuto partition scheme. We select the last element as the pivot, and then partition the array so elements less than the pivot are moved to the left, and elements greater than the pivot are moved to the right. We then recursively sort the partitions.',
      code: `def quick_sort(arr, low=None, high=None):
    # Initialize low and high for the first call
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1

    # Base case: subarray with fewer than 2 elements
    if low < high:
        # Partition the array and get the pivot index
        pivot_index = partition(arr, low, high)

        # Recursively sort the subarrays
        quick_sort(arr, low, pivot_index - 1)  # Sort left of pivot
        quick_sort(arr, pivot_index + 1, high)  # Sort right of pivot

    return arr

def partition(arr, low, high):
    # Choose the rightmost element as the pivot
    pivot = arr[high]

    # Index of the smaller element
    i = low - 1

    # Traverse through all elements
    # compare each element with the pivot
    for j in range(low, high):
        # If current element is smaller than or equal to the pivot
        if arr[j] <= pivot:
            # Increment index of smaller element
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    # Place the pivot in its correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]

    # Return the partition index
    return i + 1

# Test cases
print(quick_sort([5, 2, 4, 6, 1, 3]))
print(quick_sort([10, 7, 8, 9, 1, 5]))
print(quick_sort([]))`
    }
  }].categoryEmoji, // Get emoji from the first problem in category
    problems
  }));
}
