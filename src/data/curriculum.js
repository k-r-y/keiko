// Structured "Learn by Doing" Programming Curriculum (Easy to Advanced)
// Organized like real code files in an IDE file explorer
// Standardized across all 12 supported programming languages (9 lessons each)

export const LANGUAGES = [
  {
    "id": "python",
    "name": "Python",
    "ext": ".py",
    "runtime": "python3",
    "version": "Python 3.12.2",
    "color": "#38bdf8",
    "description": "Beginner-friendly, readable syntax, data science & backend"
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "ext": ".js",
    "runtime": "node",
    "version": "Node.js v20.11",
    "color": "#facc15",
    "description": "Universal language of the web, async events & full-stack"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "ext": ".ts",
    "runtime": "ts-node",
    "version": "TypeScript 5.4.2",
    "color": "#3178c6",
    "description": "Typed JavaScript, compile-time safety & enterprise scale"
  },
  {
    "id": "java",
    "name": "Java",
    "ext": ".java",
    "runtime": "java",
    "version": "OpenJDK 21.0.2",
    "color": "#ea580c",
    "description": "Enterprise grade, statically typed, JVM & object-oriented"
  },
  {
    "id": "cpp",
    "name": "C++",
    "ext": ".cpp",
    "runtime": "g++",
    "version": "Clang/GCC C++20",
    "color": "#60a5fa",
    "description": "High performance systems, manual memory & game dev"
  },
  {
    "id": "csharp",
    "name": "C#",
    "ext": ".cs",
    "runtime": "dotnet run",
    "version": ".NET 8.0 (C# 12)",
    "color": "#a855f7",
    "description": "Modern Microsoft ecosystem, games (Unity) & cloud apps"
  },
  {
    "id": "go",
    "name": "Go",
    "ext": ".go",
    "runtime": "go run",
    "version": "go1.22.1",
    "color": "#06b6d4",
    "description": "Fast compilation, lightweight concurrency & cloud services"
  },
  {
    "id": "rust",
    "name": "Rust",
    "ext": ".rs",
    "runtime": "cargo run",
    "version": "rustc 1.77.0",
    "color": "#f97316",
    "description": "Memory safety without garbage collection & systems power"
  },
  {
    "id": "php",
    "name": "PHP",
    "ext": ".php",
    "runtime": "php",
    "version": "PHP 8.3.4",
    "color": "#818cf8",
    "description": "Powers over 70% of the web, modern OOP & rapid backend"
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "ext": ".rb",
    "runtime": "ruby",
    "version": "Ruby 3.3.0",
    "color": "#ef4444",
    "description": "Designed for programmer happiness, elegant syntax & Rails"
  },
  {
    "id": "sql",
    "name": "SQL",
    "ext": ".sql",
    "runtime": "psql -f",
    "version": "PostgreSQL 16.2",
    "color": "#c084fc",
    "description": "Declarative queries, relational joins, indexing & analytics"
  },
  {
    "id": "bash",
    "name": "Bash / Shell",
    "ext": ".sh",
    "runtime": "bash",
    "version": "GNU Bash 5.2",
    "color": "#4ade80",
    "description": "Command line automation, devops scripting & system tooling"
  }
];

export const CURRICULUM = {
  "python": [
    {
      "id": "py-01-print",
      "level": 1,
      "filename": "01_hello_world.py",
      "title": "01. Hello World & Printing",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Output text to the standard console output.",
      "concept": "The print() function writes text to the stdout stream.",
      "whyItMatters": "Why \"Hello, World!\"? In 1972, computer scientist Brian Kernighan introduced \"hello, world\" in the C programming manual at Bell Labs. It has become the universal first step in software engineering. Writing a Hello World program proves that your compiler/interpreter, runtime memory, and terminal output stream (stdout) are functioning correctly end-to-end.",
      "underTheHood": "When your operating system runs a program, it opens three default streams: standard input (stdin, fd 0), standard output (stdout, fd 1), and standard error (stderr, fd 2). print() sends byte characters to stdout and appends a line-feed character (\\n).",
      "keyTips": [
        "By default, print() appends a newline (\\n) at the end.",
        "Use sep=\" \" to change the separator between multiple arguments.",
        "Strings can be enclosed in double quotes (\"\") or single quotes ('')."
      ],
      "pitfalls": "In Python 2, print was a statement. In Python 3, print() is a function and parentheses are strictly mandatory.",
      "content": "print(\"Hello, World!\")\nprint(\"Welcome to Python programming.\")\nprint(\"-\" * 35)",
      "expectedOutput": "Hello, World!\nWelcome to Python programming.\n-----------------------------------"
    },
    {
      "id": "py-02-variables",
      "level": 2,
      "filename": "02_variables_types.py",
      "title": "02. Variables & Data Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare variables of multiple types and format them with modern f-strings.",
      "concept": "Variables store references to values stored in computer memory.",
      "whyItMatters": "Programs exist to process information. Variables give human-readable names to memory locations where data resides. Without variables, computers could not remember user input or compute results dynamically.",
      "underTheHood": "Python uses dynamic typing and reference counting. When you write x = 42, Python allocates an integer object in heap memory and points the name \"x\" to that object.",
      "keyTips": [
        "f-strings prefix strings with \"f\" and evaluate expressions inside {}.",
        "Use descriptive snake_case names for variables in Python.",
        "Python types include str, int, float, and bool."
      ],
      "pitfalls": "Variables cannot begin with numbers or contain hyphens.",
      "content": "username = \"alex_dev\"\nuser_id = 1042\naccount_balance = 250.75\nis_active = True\n\nprint(f\"User: {username} (ID: {user_id})\")\nprint(f\"Balance: ${account_balance:.2f} | Active: {is_active}\")",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: True"
    },
    {
      "id": "py-03-conditionals",
      "level": 3,
      "filename": "03_conditionals_logic.py",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch program execution using if, elif, and else statements.",
      "concept": "Conditionals evaluate truth conditions to determine which code branch to run.",
      "whyItMatters": "Computers become intelligent when they can make decisions. Conditional statements allow software to take different paths depending on user actions, input validity, or business rules.",
      "underTheHood": "At the CPU level, conditional statements compile into comparison instructions (CMP) followed by conditional branch jumps altering the instruction pointer register.",
      "keyTips": [
        "Python uses 4-space indentation to define code blocks.",
        "elif stands for \"else if\" and only checks if earlier conditions were False.",
        "Boolean operators include and, or, and not."
      ],
      "pitfalls": "Confusing single equals = (assignment) with double equals == (equality comparison).",
      "content": "score = 88\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelse:\n    grade = \"F\"\n\nprint(f\"Exam Score: {score} -> Final Grade: {grade}\")",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "py-04-loops",
      "level": 4,
      "filename": "04_loops_iteration.py",
      "title": "04. Loops & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and collections using for loops and while loops.",
      "concept": "Loops repeat a sequence of instructions until a terminating condition is met.",
      "whyItMatters": "Computers excel at repeating repetitive tasks millions of times without fatigue. Loops allow you to process batches of records, animate frames, and traverse data collections with minimal code.",
      "underTheHood": "range(start, stop) generates numbers lazily on demand without allocating an entire list in memory, keeping memory complexity at O(1).",
      "keyTips": [
        "range(1, 6) starts at 1 and stops before 6 (yields 1, 2, 3, 4, 5).",
        "Use break to exit early and continue to skip to the next iteration.",
        "Python for loops are \"for-each\" iterators over iterable objects."
      ],
      "pitfalls": "In while loops, forgetting to increment the counter variable causes an infinite loop.",
      "content": "total_sum = 0\n\nfor num in range(1, 6):\n    total_sum += num\n    print(f\"Adding {num} -> Running Total: {total_sum}\")\n\nprint(f\"Final Sum: {total_sum}\")",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "py-05-functions",
      "level": 5,
      "filename": "05_functions_scope.py",
      "title": "05. Functions & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Encapsulate reusable logic inside functions with parameters and return values.",
      "concept": "Functions group code into modular, reusable blocks that accept inputs and return outputs.",
      "whyItMatters": "Functions prevent code duplication (the DRY principle). They enable software to scale by breaking complex systems into small, testable, self-contained units.",
      "underTheHood": "When a function is called, the runtime pushes a new stack frame containing local variables onto the call stack. When it returns, the frame is popped.",
      "keyTips": [
        "Define functions using the def keyword.",
        "Parameters are in the declaration; arguments are the actual values passed in.",
        "Use type hints (e.g. def calc(x: float) -> float:) for clean documentation."
      ],
      "pitfalls": "A function without an explicit return statement implicitly returns None in Python.",
      "content": "def calculate_discount(price, discount_percent):\n    discount_amount = price * (discount_percent / 100)\n    final_price = price - discount_amount\n    return round(final_price, 2)\n\noriginal = 120.0\ndiscount = 15\nsaved_price = calculate_discount(original, discount)\nprint(f\"Original: ${original:.2f} with {discount}% off = ${saved_price:.2f}\")",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "py-06-data-structures",
      "level": 6,
      "filename": "06_lists_dictionaries.py",
      "title": "06. Lists & Dictionaries",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Manipulate ordered lists and key-value hash maps (dictionaries).",
      "concept": "Lists store ordered sequences; dictionaries store fast key-to-value associations.",
      "whyItMatters": "Real-world data is structured. Dictionaries provide O(1) average lookup time by hashing keys, which makes them the foundation of databases, caching systems, and JSON APIs.",
      "underTheHood": "Dictionaries in Python are implemented as compact hash tables that jump directly to memory buckets in constant time.",
      "keyTips": [
        "Lists are indexed starting at 0: my_list[0].",
        "Dictionaries use keys: user[\"name\"].",
        "Use .append() on lists and .get() on dictionaries for safe retrieval."
      ],
      "pitfalls": "Accessing a non-existent dictionary key directly raises a KeyError. Use dict.get(key, default) instead.",
      "content": "servers = [\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"]\nserver_metrics = {\n    \"host\": \"web-prod-01\",\n    \"cpu_usage\": 42.5,\n    \"memory_mb\": 2048,\n    \"status\": \"healthy\"\n}\n\nprint(f\"Monitored Nodes: {len(servers)}\")\nprint(f\"Node: {server_metrics['host']} | Status: {server_metrics['status']}\")",
      "expectedOutput": "Monitored Nodes: 3\nNode: web-prod-01 | Status: healthy"
    },
    {
      "id": "py-07-oop",
      "level": 7,
      "filename": "07_classes_oop.py",
      "title": "07. Object-Oriented Programming (OOP)",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Create custom classes with constructor (__init__) and instance methods.",
      "concept": "Classes serve as blueprints for creating objects that bundle data and behavior together.",
      "whyItMatters": "OOP allows software engineers to model complex domains—like bank accounts, game characters, or network connections—by combining properties (state) and methods (behavior) in one place.",
      "underTheHood": "When you call BankAccount(), Python allocates an instance and calls __init__(self, ...). self points to the specific instance in memory.",
      "keyTips": [
        "self refers to the current instance of the class.",
        "__init__ is the initializer/constructor method.",
        "Instance attributes are assigned to self.attribute."
      ],
      "pitfalls": "Forgetting self as the first parameter of an instance method causes a TypeError when invoked.",
      "content": "class BankAccount:\n    def __init__(self, owner, balance=0.0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n\naccount = BankAccount(\"Sarah Connor\", 500.0)\naccount.deposit(250.0)\nprint(f\"Owner: {account.owner} | Current Balance: ${account.balance:.2f}\")",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "py-08-bubble-sort",
      "level": 8,
      "filename": "08_bubble_sort_algo.py",
      "title": "08. Algorithm: Bubble Sort",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement the classic Bubble Sort algorithm by repeatedly swapping adjacent items.",
      "concept": "Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
      "whyItMatters": "Sorting is one of the most fundamental problems in computer science. Understanding how elements bubble up through comparisons provides intuition for time complexity, in-place mutation, and algorithm optimization.",
      "underTheHood": "Bubble Sort has an O(n^2) time complexity because of nested passes. For n elements, it makes roughly n*(n-1)/2 comparisons, but has O(1) auxiliary space complexity.",
      "keyTips": [
        "The outer loop runs n times; each pass places the next largest element at the end.",
        "Python supports tuple unpacking for atomic swaps: arr[j], arr[j+1] = arr[j+1], arr[j].",
        "Adding an is_swapped flag can optimize best-case time to O(n) for already sorted arrays."
      ],
      "pitfalls": "Off-by-one errors in inner loop bounds (j + 1 exceeding array length).",
      "content": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nsorted_nums = bubble_sort(numbers)\nprint(f\"Sorted List: {sorted_nums}\")",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "py-09-binary-search",
      "level": 9,
      "filename": "09_binary_search_algo.py",
      "title": "09. Algorithm: Binary Search",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array using divide-and-conquer.",
      "concept": "Binary Search finds the index of a target element in a sorted list by halving the search space each step.",
      "whyItMatters": "Linear search takes O(n) time—searching 1 billion items could take 1 billion checks. Binary search cuts the problem in half every step, finding any item in 1 billion records in just ~30 comparisons (O(log n)).",
      "underTheHood": "Logarithmic time complexity O(log n) arises because at each step k, the remaining items are n / 2^k. Setting n / 2^k = 1 gives k = log2(n).",
      "keyTips": [
        "The array MUST be sorted before binary search can work.",
        "Calculate midpoint safely: mid = (low + high) // 2.",
        "Returns the index if found, or -1 if the target is absent."
      ],
      "pitfalls": "Updating bounds incorrectly causes an infinite loop.",
      "content": "def binary_search(arr, target):\n    low = 0\n    high = len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nitems = [10, 20, 30, 40, 50, 60, 70]\nidx = binary_search(items, 40)\nprint(f\"Target 40 found at index: {idx}\")",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "javascript": [
    {
      "id": "js-01-print",
      "level": 1,
      "filename": "01_console_log.js",
      "title": "01. Hello World & Console Output",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Print output messages using console.log() in JavaScript.",
      "concept": "console.log() writes text to standard output in Node.js and the browser DevTools.",
      "whyItMatters": "Writing Hello World verifies the execution environment, V8 engine initialization, and console plumbing.",
      "underTheHood": "Under Node.js, console.log() calls process.stdout.write() with formatted strings and a newline character, managed by libuv.",
      "keyTips": [
        "console.log() automatically formats objects, arrays, and primitives.",
        "Semicolons are standard practice in JavaScript.",
        "Strings can use single quotes, double quotes, or backticks."
      ],
      "pitfalls": "Do not confuse console.log() with return. console.log displays values; return passes values back to a caller.",
      "content": "console.log(\"Hello, World!\");\nconsole.log(\"Welcome to JavaScript (Node.js runtime).\");\nconsole.log(\"=\".repeat(35));",
      "expectedOutput": "Hello, World!\nWelcome to JavaScript (Node.js runtime).\n==================================="
    },
    {
      "id": "js-02-variables",
      "level": 2,
      "filename": "02_let_const_types.js",
      "title": "02. Variables: let, const & Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare immutable constants with const, mutable variables with let, and use template literals.",
      "concept": "const prevents reassignment; let allows variable mutation. Template literals embed expressions.",
      "whyItMatters": "Defaulting to const makes code predictable and prevents accidental mutation bugs.",
      "underTheHood": "Variables declared with let and const are block-scoped and placed in the Temporal Dead Zone before declaration.",
      "keyTips": [
        "Default to const; only use let when a value must be reassigned.",
        "Template literals use backticks (`) and interpolate values with ${expression}.",
        "typeof operator inspects the data type at runtime."
      ],
      "pitfalls": "Attempting to reassign a const variable throws a TypeError: Assignment to constant variable.",
      "content": "const developerName = \"Jordan\";\nlet commitsCount = 142;\nconst isOnline = true;\n\ncommitsCount += 1;\nconsole.log(`Dev: ${developerName} | Commits: ${commitsCount} | Active: ${isOnline}`);",
      "expectedOutput": "Dev: Jordan | Commits: 143 | Active: true"
    },
    {
      "id": "js-03-conditionals",
      "level": 3,
      "filename": "03_conditionals_logic.js",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch program execution using if, else if, and ternary expressions in JavaScript.",
      "concept": "Conditionals evaluate truthy/falsy values to determine which execution path to follow.",
      "whyItMatters": "Conditional branching allows software to handle different user permissions, validation rules, and business states.",
      "underTheHood": "JavaScript evaluates values in boolean contexts as either \"truthy\" or \"falsy\" (falsy: 0, \"\", null, undefined, NaN, false).",
      "keyTips": [
        "Always use strict equality (===) to prevent unexpected type coercion bugs.",
        "Combine conditions with logical AND (&&) and logical OR (||).",
        "Use ternary operator for concise assignments: const status = isAuth ? \"online\" : \"guest\"."
      ],
      "pitfalls": "Using loose equality == causes unexpected coercions like \"0\" == false yielding true.",
      "content": "const score = 88;\nlet grade;\n\nif (score >= 90) {\n  grade = \"A\";\n} else if (score >= 80) {\n  grade = \"B\";\n} else if (score >= 70) {\n  grade = \"C\";\n} else {\n  grade = \"F\";\n}\n\nconsole.log(`Exam Score: ${score} -> Final Grade: ${grade}`);",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "js-04-loops",
      "level": 4,
      "filename": "04_loops_iteration.js",
      "title": "04. Loops: for, while & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and collections using for, while, and for...of loops.",
      "concept": "Loops repeat code blocks until a specific termination condition is met.",
      "whyItMatters": "Loops automate repetitive operations, aggregate calculations, and process datasets in memory.",
      "underTheHood": "Modern JIT compilers optimize for loops by unrolling small loop bodies into straight-line instructions.",
      "keyTips": [
        "Standard for loop syntax: for (let i = 0; i < n; i++).",
        "Use for...of to iterate over array values: for (const item of array).",
        "Use break to terminate loops early and continue to skip to the next iteration."
      ],
      "pitfalls": "Using for...in over an array iterates over property keys (strings) rather than numerical elements.",
      "content": "let totalSum = 0;\n\nfor (let num = 1; num <= 5; num++) {\n  totalSum += num;\n  console.log(`Adding ${num} -> Running Total: ${totalSum}`);\n}\n\nconsole.log(`Final Sum: ${totalSum}`);",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "js-05-functions",
      "level": 5,
      "filename": "05_arrow_functions.js",
      "title": "05. Arrow Functions & Scope",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Write clean, modern ES6 arrow functions with parameters, default values, and returns.",
      "concept": "Arrow functions provide concise syntax for function definitions and lexically bind this.",
      "whyItMatters": "Arrow functions are standard throughout modern web frameworks and functional array callbacks.",
      "underTheHood": "Arrow functions do not bind their own this, arguments, or super keywords.",
      "keyTips": [
        "Single-parameter arrow functions can omit parentheses: x => x * 2.",
        "Single-expression arrow functions return implicitly without the return keyword.",
        "Multi-line functions require curly braces and an explicit return."
      ],
      "pitfalls": "When returning an object literal directly in an arrow function, wrap it in parentheses: () => ({ id: 1 }).",
      "content": "const calculateDiscount = (price, discountPercent = 10) => {\n  const discountAmount = price * (discountPercent / 100);\n  const finalPrice = price - discountAmount;\n  return Number(finalPrice.toFixed(2));\n};\n\nconst original = 120.0;\nconst saved = calculateDiscount(original, 15);\nconsole.log(`Original: $${original.toFixed(2)} with 15% off = $${saved.toFixed(2)}`);",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "js-06-arrays",
      "level": 6,
      "filename": "06_array_methods.js",
      "title": "06. Array Methods (map, filter, reduce)",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Transform and filter arrays using declarative functional programming methods.",
      "concept": "Array higher-order functions accept callback functions to transform elements immutably.",
      "whyItMatters": "Declarative methods reduce state mutation bugs and form the foundation of React UI state transformations.",
      "underTheHood": "Array methods create new array references, preserving immutability.",
      "keyTips": [
        ".filter() returns a new array with elements that pass the boolean predicate.",
        ".map() produces a new array by transforming every element.",
        ".reduce() folds an entire array down to a single accumulator value."
      ],
      "pitfalls": "Forgetting to return a value inside a .map() callback creates an array of undefined values.",
      "content": "const scores = [65, 88, 92, 45, 78, 95];\nconst passingScores = scores.filter(s => s >= 70);\nconst curvedScores = passingScores.map(s => Math.min(100, s + 5));\n\nconsole.log(`Passing Scores: ${passingScores.join(\", \")}`);\nconsole.log(`Curved Scores: ${curvedScores.join(\", \")}`);",
      "expectedOutput": "Passing Scores: 88, 92, 78, 95\nCurved Scores: 93, 97, 83, 100"
    },
    {
      "id": "js-07-classes",
      "level": 7,
      "filename": "07_classes_oop.js",
      "title": "07. ES6 Classes & OOP",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Create object-oriented classes with constructor and instance methods in JavaScript.",
      "concept": "Classes in JavaScript provide a clean syntax over prototypical inheritance to create objects with shared behavior.",
      "whyItMatters": "Classes help encapsulate state and business logic in backend services, SDKs, and state managers.",
      "underTheHood": "JavaScript classes are syntactic sugar over prototype chains (Object.setPrototypeOf).",
      "keyTips": [
        "Use the constructor method to initialize properties.",
        "Methods defined inside the class are placed on the prototype to save memory.",
        "Use # prefix for private fields in modern JavaScript (#balance = 0)."
      ],
      "pitfalls": "Calling an instance method as a standalone callback loses the this context unless bound.",
      "content": "class BankAccount {\n  constructor(owner, balance = 0) {\n    this.owner = owner;\n    this.balance = balance;\n  }\n\n  deposit(amount) {\n    this.balance += amount;\n    return this.balance;\n  }\n}\n\nconst account = new BankAccount(\"Sarah Connor\", 500);\naccount.deposit(250);\nconsole.log(`Owner: ${account.owner} | Current Balance: $${account.balance.toFixed(2)}`);",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "js-08-bubble-sort",
      "level": 8,
      "filename": "08_bubble_sort.js",
      "title": "08. Algorithm: Bubble Sort",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort in JavaScript using ES6 destructuring swap.",
      "concept": "Bubble Sort repeatedly steps through an array, compares adjacent pairs, and swaps them if disordered.",
      "whyItMatters": "Building sorting algorithms from scratch teaches spatial thinking and Big-O computational analysis.",
      "underTheHood": "ES6 array destructuring [arr[j], arr[j+1]] = [arr[j+1], arr[j]] performs an atomic in-place value swap without a temporary variable.",
      "keyTips": [
        "Outer loop runs n - 1 times.",
        "Inner loop reduces by i each pass as the largest items settle to the end.",
        "Returns the mutated array in sorted order."
      ],
      "pitfalls": "Using Array.prototype.sort() without a comparator converts numbers to strings ([10, 2].sort() -> [10, 2]!).",
      "content": "function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\n\nconst unsorted = [64, 34, 25, 12, 22, 11, 90];\nconst sorted = bubbleSort(unsorted);\nconsole.log(`Sorted List: [${sorted.join(\", \")}]`);",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "js-09-binary-search",
      "level": 9,
      "filename": "09_binary_search.js",
      "title": "09. Algorithm: Binary Search",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array using divide-and-conquer.",
      "concept": "Binary Search finds the index of a target element in a sorted array by halving the search space each step.",
      "whyItMatters": "Binary search executes in O(log n) time, drastically outperforming O(n) linear scans on large datasets.",
      "underTheHood": "Math.floor((low + high) / 2) computes the integer midpoint in JavaScript.",
      "keyTips": [
        "Input array must be sorted in ascending order.",
        "Return the matching index immediately when found.",
        "Return -1 if the element does not exist in the collection."
      ],
      "pitfalls": "Failing to use Math.floor() produces a float index in JavaScript, which fails to index arrays correctly.",
      "content": "function binarySearch(arr, target) {\n  let low = 0;\n  let high = arr.length - 1;\n\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) {\n      return mid;\n    } else if (arr[mid] < target) {\n      low = mid + 1;\n    } else {\n      high = mid - 1;\n    }\n  }\n  return -1;\n}\n\nconst items = [10, 20, 30, 40, 50, 60, 70];\nconst idx = binarySearch(items, 40);\nconsole.log(`Target 40 found at index: ${idx}`);",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "typescript": [
    {
      "id": "ts-01-print",
      "level": 1,
      "filename": "01_typed_hello.ts",
      "title": "01. Type Annotations & Printing",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Declare strongly typed variables and output them using TypeScript.",
      "concept": "TypeScript adds static type definitions on top of JavaScript to catch errors at compile time.",
      "whyItMatters": "TypeScript prevents runtime crashes when unexpected types are passed, validating contracts before production.",
      "underTheHood": "The TypeScript compiler (tsc) performs type checking and strips all annotations, emitting clean JavaScript.",
      "keyTips": [
        "Syntax for explicit types: const name: string = \"val\".",
        "TypeScript infers types automatically if an initial value is assigned.",
        "Use ts-node for direct execution of TypeScript in development."
      ],
      "pitfalls": "Avoid overusing the any type, as it disables all type checking safety.",
      "content": "const appTitle: string = \"TermType Studio\";\nconst releaseVersion: number = 2.4;\nconst isProductionReady: boolean = true;\n\nconsole.log(`Running ${appTitle} v${releaseVersion} (Prod: ${isProductionReady})`);",
      "expectedOutput": "Running TermType Studio v2.4 (Prod: true)"
    },
    {
      "id": "ts-02-variables",
      "level": 2,
      "filename": "02_typed_variables.ts",
      "title": "02. Typed Variables & Union Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare primitive types and union types to restrict variable states.",
      "concept": "Union types allow a variable to hold values of several specified types (e.g. string | number).",
      "whyItMatters": "Union types model real-world API states like status: \"loading\" | \"success\" | \"error\" with zero runtime overhead.",
      "underTheHood": "Type aliases and union checks occur strictly at compile time.",
      "keyTips": [
        "Type aliases use the type keyword: type ID = string | number;.",
        "Literal types restrict values to exact strings or numbers.",
        "Combine types with the pipe (|) operator."
      ],
      "pitfalls": "Assigning a value outside the union produces compile error: Type is not assignable to type.",
      "content": "type UserRole = \"admin\" | \"developer\" | \"viewer\";\n\nconst username: string = \"alex_dev\";\nconst userId: number = 1042;\nconst role: UserRole = \"developer\";\nconst isVerified: boolean = true;\n\nconsole.log(`User: ${username} (ID: ${userId}) | Role: ${role.toUpperCase()} | Verified: ${isVerified}`);",
      "expectedOutput": "User: alex_dev (ID: 1042) | Role: DEVELOPER | Verified: true"
    },
    {
      "id": "ts-03-conditionals",
      "level": 3,
      "filename": "03_type_narrowing.ts",
      "title": "03. Conditionals & Type Narrowing",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Narrow union types inside conditional branches using typeof guards.",
      "concept": "Type narrowing refines a broad union type into a specific concrete type within an if block.",
      "whyItMatters": "Narrowing allows you to safely access type-specific methods (like .toFixed() on numbers or .toUpperCase() on strings).",
      "underTheHood": "TypeScript control flow analysis tracks branch conditions and updates variable types automatically.",
      "keyTips": [
        "Use typeof x === \"string\" to narrow primitive unions.",
        "Use in operator to check for properties on objects.",
        "TypeScript knows the remaining type in the else block."
      ],
      "pitfalls": "typeof null returns \"object\" in JavaScript, which can trigger unexpected type narrowing bugs.",
      "content": "function formatScore(score: number): string {\n  let grade: string;\n  if (score >= 90) {\n    grade = \"A\";\n  } else if (score >= 80) {\n    grade = \"B\";\n  } else if (score >= 70) {\n    grade = \"C\";\n  } else {\n    grade = \"F\";\n  }\n  return grade;\n}\n\nconst currentScore: number = 88;\nconst finalGrade: string = formatScore(currentScore);\nconsole.log(`Exam Score: ${currentScore} -> Final Grade: ${finalGrade}`);",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "ts-04-loops",
      "level": 4,
      "filename": "04_typed_loops.ts",
      "title": "04. Loops & Typed Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over typed arrays and number sequences with strict typing.",
      "concept": "Loops with typed iterators guarantee that accumulated values and index variables maintain type safety.",
      "whyItMatters": "Strict typing in loops prevents accidental NaN values from undefined elements or string concatenations.",
      "underTheHood": "TypeScript validates that elements extracted during for...of matches the array generic T[].",
      "keyTips": [
        "Typed array declaration: const nums: number[] = [1, 2, 3];.",
        "Use for (const num of nums) for clean iteration.",
        "Type annotations can be added to accumulator variables: let sum: number = 0;."
      ],
      "pitfalls": "TypeScript will warn if you try to push a string into a number[] array.",
      "content": "let totalSum: number = 0;\n\nfor (let num: number = 1; num <= 5; num++) {\n  totalSum += num;\n  console.log(`Adding ${num} -> Running Total: ${totalSum}`);\n}\n\nconsole.log(`Final Sum: ${totalSum}`);",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "ts-05-functions",
      "level": 5,
      "filename": "05_typed_functions.ts",
      "title": "05. Typed Functions & Returns",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Write functions with explicit parameter types, optional parameters, and return types.",
      "concept": "Function type signatures specify the required argument types and the guaranteed return value type.",
      "whyItMatters": "Explicit return types prevent regressions when refactoring functions and provide instant documentation.",
      "underTheHood": "Function signatures enforce compile-time constraints without affecting invocation speed.",
      "keyTips": [
        "Syntax: function calc(a: number, b: number): number { ... }.",
        "Use ? for optional parameters: function greet(name: string, title?: string).",
        "Use void for functions that do not return a value."
      ],
      "pitfalls": "If a function has a return type of number, returning undefined will fail compilation.",
      "content": "function calculateDiscount(price: number, discountPercent: number = 10): number {\n  const discountAmount = price * (discountPercent / 100);\n  const finalPrice = price - discountAmount;\n  return Number(finalPrice.toFixed(2));\n}\n\nconst original: number = 120.0;\nconst saved: number = calculateDiscount(original, 15);\nconsole.log(`Original: $${original.toFixed(2)} with 15% off = $${saved.toFixed(2)}`);",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "ts-06-interfaces",
      "level": 6,
      "filename": "06_interfaces_types.ts",
      "title": "06. Interfaces & Object Contracts",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Define structured object contracts using TypeScript interfaces.",
      "concept": "Interfaces define the shape and types of properties that an object must contain.",
      "whyItMatters": "Interfaces allow disparate modules to agree on exact data contracts, enabling IDE autocomplete and type safety.",
      "underTheHood": "Interfaces exist only during compilation and produce zero runtime overhead or emitted JavaScript code.",
      "keyTips": [
        "Use ? for optional properties (e.g. email?: string).",
        "Use readonly for properties that cannot be modified after instantiation.",
        "Interfaces can be extended: interface Admin extends UserProfile."
      ],
      "pitfalls": "Missing a required property defined in an interface will trigger a compile error.",
      "content": "interface ServerNode {\n  hostname: string;\n  port: number;\n  isActive: boolean;\n  region: string;\n}\n\nconst server: ServerNode = {\n  hostname: \"web-prod-01\",\n  port: 8080,\n  isActive: true,\n  region: \"us-east-1\"\n};\n\nconsole.log(`Server: ${server.hostname} (Port: ${server.port}) | Region: ${server.region} | Active: ${server.isActive}`);",
      "expectedOutput": "Server: web-prod-01 (Port: 8080) | Region: us-east-1 | Active: true"
    },
    {
      "id": "ts-07-classes",
      "level": 7,
      "filename": "07_classes_modifiers.ts",
      "title": "07. Classes & Access Modifiers",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Construct object-oriented classes with public, private, and readonly modifiers.",
      "concept": "Access modifiers enforce encapsulation by restricting external access to internal object state.",
      "whyItMatters": "Encapsulation protects sensitive internal fields (like account balances or database handles) from arbitrary mutation.",
      "underTheHood": "TypeScript supports parameter properties: constructor(private balance: number) {} automatically creates and assigns the field.",
      "keyTips": [
        "public members can be accessed anywhere (default).",
        "private members can only be accessed within the defining class.",
        "readonly properties cannot be reassigned after construction."
      ],
      "pitfalls": "Private in TypeScript is compile-time only unless using ECMAScript private fields (#field).",
      "content": "class BankAccount {\n  constructor(\n    public readonly owner: string,\n    private balance: number = 0\n  ) {}\n\n  public deposit(amount: number): number {\n    this.balance += amount;\n    return this.balance;\n  }\n\n  public getBalance(): number {\n    return this.balance;\n  }\n}\n\nconst account = new BankAccount(\"Sarah Connor\", 500);\naccount.deposit(250);\nconsole.log(`Owner: ${account.owner} | Current Balance: $${account.getBalance().toFixed(2)}`);",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "ts-08-bubble-sort",
      "level": 8,
      "filename": "08_bubble_sort.ts",
      "title": "08. Algorithm: Bubble Sort in TypeScript",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort with strict generic or number array typing.",
      "concept": "Bubble Sort repeatedly steps through an array, compares adjacent pairs, and swaps them if disordered.",
      "whyItMatters": "Implementing algorithms in TypeScript pairs algorithmic problem solving with strict type guarantees.",
      "underTheHood": "Type checking ensures that comparison operators (> and <) are only applied to valid comparable types.",
      "keyTips": [
        "Specify input and return types: function bubbleSort(arr: number[]): number[].",
        "Destructuring swap [arr[j], arr[j+1]] = [arr[j+1], arr[j]] is fully type-checked."
      ],
      "pitfalls": "Ensure indexing does not access arr[j+1] beyond array bounds.",
      "content": "function bubbleSort(arr: number[]): number[] {\n  const n: number = arr.length;\n  for (let i: number = 0; i < n; i++) {\n    for (let j: number = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\n\nconst numbers: number[] = [64, 34, 25, 12, 22, 11, 90];\nconst sorted: number[] = bubbleSort(numbers);\nconsole.log(`Sorted List: [${sorted.join(\", \")}]`);",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "ts-09-binary-search",
      "level": 9,
      "filename": "09_binary_search.ts",
      "title": "09. Algorithm: Binary Search in TypeScript",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement type-safe Binary Search on a sorted array returning number index.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Binary search is foundational for database indexes (B-Trees) and fast in-memory lookups.",
      "underTheHood": "TypeScript guarantees target and array elements share the same type before comparison.",
      "keyTips": [
        "Input array must be sorted in ascending order.",
        "Explicit return type : number specifies returning the index or -1.",
        "mid calculation: Math.floor((low + high) / 2)."
      ],
      "pitfalls": "Missing Math.floor() yields a fractional number in JavaScript/TypeScript runtimes.",
      "content": "function binarySearch(arr: number[], target: number): number {\n  let low: number = 0;\n  let high: number = arr.length - 1;\n\n  while (low <= high) {\n    const mid: number = Math.floor((low + high) / 2);\n    if (arr[mid] === target) {\n      return mid;\n    } else if (arr[mid] < target) {\n      low = mid + 1;\n    } else {\n      high = mid - 1;\n    }\n  }\n  return -1;\n}\n\nconst items: number[] = [10, 20, 30, 40, 50, 60, 70];\nconst idx: number = binarySearch(items, 40);\nconsole.log(`Target 40 found at index: ${idx}`);",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "java": [
    {
      "id": "java-01-print",
      "level": 1,
      "filename": "Main.java",
      "title": "01. Hello World in Java",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Write a complete Java class with public static void main.",
      "concept": "Java requires every program to belong to a class. The main method is the program entry point.",
      "whyItMatters": "Writing Hello World in Java confirms that the JDK, compiler (javac), and JVM bytecode interpreter are properly configured.",
      "underTheHood": "javac Main.java compiles source code into platform-independent bytecode (Main.class), which the JVM executes using JIT compilation.",
      "keyTips": [
        "The class name must match the filename (Main -> Main.java).",
        "System.out.println() prints a string and appends a newline.",
        "Java is strictly statically typed; every variable must specify a type."
      ],
      "pitfalls": "Forgetting String[] args in the main signature prevents the JVM from recognizing the entry point.",
      "content": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        System.out.println(\"Java 21 LTS - Enterprise Performance\");\n    }\n}",
      "expectedOutput": "Hello, World!\nJava 21 LTS - Enterprise Performance"
    },
    {
      "id": "java-02-variables",
      "level": 2,
      "filename": "Variables.java",
      "title": "02. Primitive Types & Variables",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare strongly typed primitive variables (int, double, boolean) and String objects.",
      "concept": "Java distinguishes between primitive value types (stored on the stack) and reference objects (stored on the heap).",
      "whyItMatters": "Understanding memory allocation between primitive types and heap references is critical for high-throughput enterprise systems.",
      "underTheHood": "Primitive types like int (32-bit) and double (64-bit) hold raw binary representations directly in stack frames.",
      "keyTips": [
        "String in Java is an immutable reference object, not a primitive.",
        "Use double for floating point values and boolean for true/false.",
        "Variables must be initialized before they can be read."
      ],
      "pitfalls": "Comparing Strings with == compares object memory references; always use .equals() for content equality.",
      "content": "public class Main {\n    public static void main(String[] args) {\n        String username = \"alex_dev\";\n        int userId = 1042;\n        double accountBalance = 250.75;\n        boolean isActive = true;\n\n        System.out.println(\"User: \" + username + \" (ID: \" + userId + \")\");\n        System.out.println(\"Balance: $\" + accountBalance + \" | Active: \" + isActive);\n    }\n}",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "java-03-conditionals",
      "level": 3,
      "filename": "Conditionals.java",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, else if, and else blocks in Java.",
      "concept": "Conditional statements evaluate boolean expressions to select which statement block to execute.",
      "whyItMatters": "Conditionals enforce business rules, authentication checks, and input validation.",
      "underTheHood": "The Java compiler translates conditionals into if_icmpge and goto bytecode instructions.",
      "keyTips": [
        "Conditions inside if (...) must evaluate to a strict boolean (Java does not allow truthy/falsy integers).",
        "Use logical operators && (AND), || (OR), and ! (NOT).",
        "Wrap multi-line blocks in curly braces {}."
      ],
      "pitfalls": "Writing if (x = 5) causes a compile error in Java because assignment does not yield a boolean.",
      "content": "public class Main {\n    public static void main(String[] args) {\n        int score = 88;\n        String grade;\n\n        if (score >= 90) {\n            grade = \"A\";\n        } else if (score >= 80) {\n            grade = \"B\";\n        } else if (score >= 70) {\n            grade = \"C\";\n        } else {\n            grade = \"F\";\n        }\n\n        System.out.println(\"Exam Score: \" + score + \" -> Final Grade: \" + grade);\n    }\n}",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "java-04-loops",
      "level": 4,
      "filename": "Loops.java",
      "title": "04. Loops & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate totals using standard for loops.",
      "concept": "A for loop initializes a counter, tests a condition, and updates the counter each iteration.",
      "whyItMatters": "Loops process batches, calculate metrics, and traverse collections.",
      "underTheHood": "Loops maintain local counter variables directly inside the current stack frame for fast CPU register access.",
      "keyTips": [
        "Loop syntax: for (int i = 1; i <= n; i++).",
        "Enhanced for-each loop: for (String item : list).",
        "Use += operator for accumulating values."
      ],
      "pitfalls": "Writing i <= n when you intended i < n can trigger ArrayIndexOutOfBoundsException.",
      "content": "public class Main {\n    public static void main(String[] args) {\n        int totalSum = 0;\n\n        for (int num = 1; num <= 5; num++) {\n            totalSum += num;\n            System.out.println(\"Adding \" + num + \" -> Running Total: \" + totalSum);\n        }\n\n        System.out.println(\"Final Sum: \" + totalSum);\n    }\n}",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "java-05-methods",
      "level": 5,
      "filename": "Methods.java",
      "title": "05. Static Methods & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare and invoke reusable static methods with parameters and return types.",
      "concept": "Methods encapsulate reusable logic with explicit parameter and return types.",
      "whyItMatters": "Modular methods allow enterprise systems to remain maintainable, testable, and DRY.",
      "underTheHood": "When invoking a method, the JVM executes an invokestatic or invokevirtual bytecode instruction.",
      "keyTips": [
        "static methods belong to the class rather than a specific object instance.",
        "Specify return type (double, int, void) before the method name.",
        "Return values using the return keyword."
      ],
      "pitfalls": "A non-void method must guarantee a return statement along every possible execution branch.",
      "content": "public class Main {\n    public static double calculateDiscount(double price, double discountPercent) {\n        double discountAmount = price * (discountPercent / 100.0);\n        return price - discountAmount;\n    }\n\n    public static void main(String[] args) {\n        double original = 120.0;\n        double saved = calculateDiscount(original, 15.0);\n        System.out.printf(\"Original: $%.2f with 15%% off = $%.2f%n\", original, saved);\n    }\n}",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "java-06-collections",
      "level": 6,
      "filename": "CollectionsDemo.java",
      "title": "06. Collections: ArrayList & Generics",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Store and manipulate dynamic collections using Java ArrayList.",
      "concept": "ArrayList is a resizable array implementation of the List interface that grows dynamically.",
      "whyItMatters": "Unlike raw arrays with fixed capacity, ArrayList dynamically manages capacity as elements are added.",
      "underTheHood": "ArrayList wraps an internal Object[] array. When full, it allocates an array 1.5x larger and copies elements over.",
      "keyTips": [
        "Import java.util.ArrayList and java.util.List.",
        "Use generic syntax: List<String> list = new ArrayList<>();.",
        "Methods include .add(), .size(), and .get(index)."
      ],
      "pitfalls": "Generics only work with objects; use wrapper classes (Integer, Double) instead of primitives (int, double).",
      "content": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> servers = new ArrayList<>();\n        servers.add(\"web-prod-01\");\n        servers.add(\"db-prod-01\");\n        servers.add(\"redis-cache-01\");\n\n        System.out.println(\"Monitored Nodes: \" + servers.size());\n        System.out.println(\"Primary Node: \" + servers.get(0));\n    }\n}",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "java-07-oop",
      "level": 7,
      "filename": "BankAccount.java",
      "title": "07. OOP: Classes & Encapsulation",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Create an encapsulated class with private fields, constructor, and public methods.",
      "concept": "Classes serve as blueprints for objects, enforcing encapsulation by hiding internal field state.",
      "whyItMatters": "Encapsulation ensures that financial balances or sensitive states cannot be modified except through verified methods.",
      "underTheHood": "The new keyword allocates heap memory for the object instance, sets default field values, and executes the constructor.",
      "keyTips": [
        "Declare fields as private for encapsulation.",
        "Provide public getters and operational methods (like deposit).",
        "this refers to the current object instance."
      ],
      "pitfalls": "Making fields public allows outside code to bypass validation rules.",
      "content": "class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount(String owner, double initialBalance) {\n        this.owner = owner;\n        this.balance = initialBalance;\n    }\n\n    public double deposit(double amount) {\n        this.balance += amount;\n        return this.balance;\n    }\n\n    public String getOwner() { return this.owner; }\n    public double getBalance() { return this.balance; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(\"Sarah Connor\", 500.0);\n        account.deposit(250.0);\n        System.out.printf(\"Owner: %s | Current Balance: $%.2f%n\", account.getOwner(), account.getBalance());\n    }\n}",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "java-08-bubble-sort",
      "level": 8,
      "filename": "BubbleSort.java",
      "title": "08. Algorithm: Bubble Sort in Java",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on an integer array in Java.",
      "concept": "Bubble Sort repeatedly steps through the array, compares adjacent elements, and swaps them if disordered.",
      "whyItMatters": "Understanding nested loops, in-place swaps, and array indexing is fundamental for algorithmic problem solving.",
      "underTheHood": "Primitive array operations in Java operate directly on contiguous memory addresses with boundary checks.",
      "keyTips": [
        "Use a temporary variable int temp = arr[j] for swapping.",
        "Outer loop runs n times; inner loop reduces by i each pass."
      ],
      "pitfalls": "Off-by-one errors in inner loop bounds (j + 1 exceeding array length).",
      "content": "public class Main {\n    public static void bubbleSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {64, 34, 25, 12, 22, 11, 90};\n        bubbleSort(numbers);\n        System.out.print(\"Sorted List: [\");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.print(numbers[i] + (i < numbers.length - 1 ? \", \" : \"\"));\n        }\n        System.out.println(\"]\");\n    }\n}",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "java-09-binary-search",
      "level": 9,
      "filename": "BinarySearch.java",
      "title": "09. Algorithm: Binary Search in Java",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array using divide-and-conquer.",
      "concept": "Binary Search finds the index of a target element in a sorted list by halving the search space each step.",
      "whyItMatters": "Binary search provides O(log n) efficiency, searching 1 million items in only ~20 comparisons.",
      "underTheHood": "In Java, integer division (low + high) / 2 automatically truncates toward zero.",
      "keyTips": [
        "The array must be sorted in ascending order.",
        "Return mid when target matches.",
        "Return -1 if target is not found."
      ],
      "pitfalls": "In very large arrays (close to 2 billion items), low + high can overflow 32-bit signed integer. In production, use low + (high - low) / 2.",
      "content": "public class Main {\n    public static int binarySearch(int[] arr, int target) {\n        int low = 0;\n        int high = arr.length - 1;\n\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (arr[mid] == target) {\n                return mid;\n            } else if (arr[mid] < target) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        int[] items = {10, 20, 30, 40, 50, 60, 70};\n        int idx = binarySearch(items, 40);\n        System.out.println(\"Target 40 found at index: \" + idx);\n    }\n}",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "cpp": [
    {
      "id": "cpp-01-print",
      "level": 1,
      "filename": "main.cpp",
      "title": "01. Hello World with std::cout",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Output text using C++ iostream and the standard output stream.",
      "concept": "#include <iostream> provides stream insertion (<<) with std::cout for console output.",
      "whyItMatters": "C++ is the global industry standard for systems, game engines, and high-frequency trading.",
      "underTheHood": "std::cout is an instance of std::ostream. The << operator inserts bytes into the stdout buffer.",
      "keyTips": [
        "main() must return an int (0 signifies successful exit).",
        "Use \\n instead of std::endl in performance-critical code to prevent unnecessary flushing.",
        "Include headers using #include <header>."
      ],
      "pitfalls": "Forgetting #include <iostream> causes compiler error: use of undeclared identifier \"cout\".",
      "content": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    std::cout << \"High-performance C++20 program.\" << std::endl;\n    return 0;\n}",
      "expectedOutput": "Hello, World!\nHigh-performance C++20 program."
    },
    {
      "id": "cpp-02-variables",
      "level": 2,
      "filename": "variables.cpp",
      "title": "02. Variables, Types & std::string",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare strongly typed primitive variables and std::string objects in C++.",
      "concept": "C++ provides direct hardware types (int, double, bool) and standard library objects like std::string.",
      "whyItMatters": "Precise types allow C++ to control memory layout down to individual bytes and cache lines.",
      "underTheHood": "std::string manages a dynamic heap buffer with Small String Optimization (SSO) for short strings.",
      "keyTips": [
        "Include <string> for std::string.",
        "Use double for 64-bit IEEE 754 floating point numbers.",
        "Chain outputs with multiple << operators."
      ],
      "pitfalls": "Uninitialized primitive variables in C++ contain garbage memory values.",
      "content": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string username = \"alex_dev\";\n    int userId = 1042;\n    double accountBalance = 250.75;\n    bool isActive = true;\n\n    std::cout << \"User: \" << username << \" (ID: \" << userId << \")\\n\";\n    std::cout << \"Balance: $\" << accountBalance << \" | Active: \" << (isActive ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "cpp-03-conditionals",
      "level": 3,
      "filename": "conditionals.cpp",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, else if, and else blocks in C++.",
      "concept": "Conditionals evaluate boolean conditions to choose between alternative code execution paths.",
      "whyItMatters": "Branching is fundamental for control flow and decision logic across game physics and operating systems.",
      "underTheHood": "Compilers optimize branches using branch predictor hints and conditional move (CMOV) instructions.",
      "keyTips": [
        "Logical operators: && (AND), || (OR), ! (NOT).",
        "Wrap condition blocks in curly braces {}.",
        "else if provides multi-branch evaluation."
      ],
      "pitfalls": "Writing if (x = 5) assigns 5 to x (evaluates to true) instead of comparing with ==.",
      "content": "#include <iostream>\n#include <string>\n\nint main() {\n    int score = 88;\n    std::string grade;\n\n    if (score >= 90) {\n        grade = \"A\";\n    } else if (score >= 80) {\n        grade = \"B\";\n    } else if (score >= 70) {\n        grade = \"C\";\n    } else {\n        grade = \"F\";\n    }\n\n    std::cout << \"Exam Score: \" << score << \" -> Final Grade: \" << grade << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "cpp-04-loops",
      "level": 4,
      "filename": "loops.cpp",
      "title": "04. Loops & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using standard for loops.",
      "concept": "A for loop runs initialization, checks a condition, and executes an increment step each cycle.",
      "whyItMatters": "Loops process sequences, image pixels, and simulation timesteps at hardware speeds.",
      "underTheHood": "Compilers can vectorize for loops using SIMD (Single Instruction Multiple Data) registers.",
      "keyTips": [
        "Standard loop: for (int i = 1; i <= n; ++i).",
        "Prefer ++i (pre-increment) in C++.",
        "Accumulate with the += operator."
      ],
      "pitfalls": "Off-by-one errors when setting loop boundaries.",
      "content": "#include <iostream>\n\nint main() {\n    int totalSum = 0;\n\n    for (int num = 1; num <= 5; ++num) {\n        totalSum += num;\n        std::cout << \"Adding \" << num << \" -> Running Total: \" << totalSum << \"\\n\";\n    }\n\n    std::cout << \"Final Sum: \" << totalSum << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "cpp-05-functions",
      "level": 5,
      "filename": "functions.cpp",
      "title": "05. Functions & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare and invoke functions with parameters and return types.",
      "concept": "Functions encapsulate reusable algorithmic procedures with typed input and output contracts.",
      "whyItMatters": "Functions break programs into isolated, testable modules without code duplication.",
      "underTheHood": "Function arguments are passed by value (copied) or by reference (&) to avoid copies.",
      "keyTips": [
        "Declare return type before function name (e.g. double calculateDiscount(...)).",
        "Use pass-by-const-reference (const Type&) for heavy objects.",
        "Functions must be declared before they are called."
      ],
      "pitfalls": "Forgetting to return a value from a non-void function causes undefined behavior in C++.",
      "content": "#include <iostream>\n#include <iomanip>\n\ndouble calculateDiscount(double price, double discountPercent) {\n    double discountAmount = price * (discountPercent / 100.0);\n    return price - discountAmount;\n}\n\nint main() {\n    double original = 120.0;\n    double saved = calculateDiscount(original, 15.0);\n\n    std::cout << std::fixed << std::setprecision(2);\n    std::cout << \"Original: $\" << original << \" with 15% off = $\" << saved << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "cpp-06-vectors",
      "level": 6,
      "filename": "vectors.cpp",
      "title": "06. Dynamic Arrays: std::vector",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Create, populate, and traverse a dynamic std::vector in C++.",
      "concept": "std::vector is a dynamically resizable array that manages contiguous memory on the heap.",
      "whyItMatters": "Contiguous memory layout provides optimal CPU cache locality, making std::vector the fastest general container.",
      "underTheHood": "When capacity is exceeded, std::vector reallocates double its capacity, moves elements, and deallocates the old buffer.",
      "keyTips": [
        "Include <vector> header.",
        "push_back() appends elements to the end.",
        "Use .size() to inspect element count."
      ],
      "pitfalls": "Accessing out-of-bounds indices with [] causes undefined behavior; use .at() for bounds checking.",
      "content": "#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::vector<std::string> servers = {\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"};\n\n    std::cout << \"Monitored Nodes: \" << servers.size() << \"\\n\";\n    std::cout << \"Primary Node: \" << servers.front() << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "cpp-07-classes",
      "level": 7,
      "filename": "classes.cpp",
      "title": "07. OOP: Classes & Encapsulation",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Create custom classes with private member variables and public member methods.",
      "concept": "Classes encapsulate private state while exposing clean public member functions.",
      "whyItMatters": "OOP allows developers to represent real-world entities (bank accounts, physics bodies) with strict invariants.",
      "underTheHood": "Member functions receive an implicit this pointer referring to the current object in memory.",
      "keyTips": [
        "Class members default to private; structs default to public.",
        "Use constructor initializer lists: BankAccount(...) : owner(o), balance(b) {}.",
        "Remember the trailing semicolon after class definitions: class MyClass { };."
      ],
      "pitfalls": "Forgetting the semicolon after a class definition causes confusing compilation errors.",
      "content": "#include <iostream>\n#include <string>\n#include <iomanip>\n\nclass BankAccount {\nprivate:\n    std::string owner;\n    double balance;\n\npublic:\n    BankAccount(std::string o, double initialBalance) : owner(o), balance(initialBalance) {}\n\n    double deposit(double amount) {\n        balance += amount;\n        return balance;\n    }\n\n    std::string getOwner() const { return owner; }\n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount account(\"Sarah Connor\", 500.0);\n    account.deposit(250.0);\n\n    std::cout << std::fixed << std::setprecision(2);\n    std::cout << \"Owner: \" << account.getOwner() << \" | Current Balance: $\" << account.getBalance() << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "cpp-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.cpp",
      "title": "08. Algorithm: Bubble Sort in C++",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on a std::vector<int> using std::swap.",
      "concept": "Bubble Sort steps through the container, compares adjacent elements, and swaps them if out of order.",
      "whyItMatters": "Teaches in-place mutation, algorithmic bounds, and pass-by-reference (&).",
      "underTheHood": "std::swap performs an efficient move-assignment without heap allocations.",
      "keyTips": [
        "Pass vector by reference: void bubbleSort(std::vector<int>& arr).",
        "Use std::swap(arr[j], arr[j + 1]).",
        "Inner loop bound: n - i - 1."
      ],
      "pitfalls": "Passing the vector by value (omitting &) sorts a copy and leaves the original array unmodified.",
      "content": "#include <iostream>\n#include <vector>\n#include <utility>\n\nvoid bubbleSort(std::vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n; ++i) {\n        for (int j = 0; j < n - i - 1; ++j) {\n            if (arr[j] > arr[j + 1]) {\n                std::swap(arr[j], arr[j + 1]);\n            }\n        }\n    }\n}\n\nint main() {\n    std::vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(numbers);\n\n    std::cout << \"Sorted List: [\";\n    for (size_t i = 0; i < numbers.size(); ++i) {\n        std::cout << numbers[i] << (i < numbers.size() - 1 ? \", \" : \"\");\n    }\n    std::cout << \"]\\n\";\n    return 0;\n}",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "cpp-09-binary-search",
      "level": 9,
      "filename": "binary_search.cpp",
      "title": "09. Algorithm: Binary Search in C++",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted std::vector in C++.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Binary search is the algorithm behind std::binary_search and database index lookups.",
      "underTheHood": "Operates in O(1) auxiliary space and O(log n) logarithmic time.",
      "keyTips": [
        "Pass vector by const reference: const std::vector<int>& arr.",
        "Return the index when found, or -1 when missing.",
        "mid calculation: low + (high - low) / 2."
      ],
      "pitfalls": "Forgetting that input must be sorted prior to binary search.",
      "content": "#include <iostream>\n#include <vector>\n\nint binarySearch(const std::vector<int>& arr, int target) {\n    int low = 0;\n    int high = arr.size() - 1;\n\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1;\n}\n\nint main() {\n    std::vector<int> items = {10, 20, 30, 40, 50, 60, 70};\n    int idx = binarySearch(items, 40);\n    std::cout << \"Target 40 found at index: \" << idx << \"\\n\";\n    return 0;\n}",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "csharp": [
    {
      "id": "cs-01-print",
      "level": 1,
      "filename": "Program.cs",
      "title": "01. Hello World with Console.WriteLine",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Output text to the console in modern C# (.NET 8).",
      "concept": "Console.WriteLine() formats and prints text to the standard output console stream.",
      "whyItMatters": "Running Hello World in C# verifies the .NET CLR and JIT compiler runtime.",
      "underTheHood": "Modern C# 10+ supports Top-Level Statements, omitting boilerplate Program and Main declarations.",
      "keyTips": [
        "Console.WriteLine() automatically appends a newline.",
        "String interpolation uses the $\"...\" prefix.",
        "C# is strictly type-safe."
      ],
      "pitfalls": "C# is case-sensitive: console.writeline fails; it must be Console.WriteLine.",
      "content": "using System;\n\nConsole.WriteLine(\"Hello, World!\");\nConsole.WriteLine(\"Modern C# 12 and .NET 8 runtime.\");",
      "expectedOutput": "Hello, World!\nModern C# 12 and .NET 8 runtime."
    },
    {
      "id": "cs-02-variables",
      "level": 2,
      "filename": "Variables.cs",
      "title": "02. Variables, Types & Interpolation",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare strongly typed variables (string, int, decimal, bool) and use string interpolation.",
      "concept": "Variables reserve typed memory. decimal provides 128-bit exact precision for currency.",
      "whyItMatters": "Using decimal for financial values prevents binary floating point rounding errors.",
      "underTheHood": "decimal uses base-10 representation, eliminating binary float inaccuracies like 0.1 + 0.2 != 0.3.",
      "keyTips": [
        "Use m suffix for decimal literals: decimal balance = 250.75m;.",
        "String interpolation evaluates expressions inside {}.",
        "var infers types automatically when initialized."
      ],
      "pitfalls": "Forgetting the m suffix on decimal literals causes a compiler error.",
      "content": "using System;\n\nstring username = \"alex_dev\";\nint userId = 1042;\ndecimal accountBalance = 250.75m;\nbool isActive = true;\n\nConsole.WriteLine($\"User: {username} (ID: {userId})\");\nConsole.WriteLine($\"Balance: ${accountBalance:F2} | Active: {isActive}\");",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: True"
    },
    {
      "id": "cs-03-conditionals",
      "level": 3,
      "filename": "Conditionals.cs",
      "title": "03. Conditionals & Pattern Matching",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, else if, and modern switch expressions in C#.",
      "concept": "Conditionals evaluate boolean conditions to route execution flow.",
      "whyItMatters": "Pattern matching and conditionals enforce business rules and permission models cleanly.",
      "underTheHood": "C# switch expressions compile into efficient jump tables in IL bytecode.",
      "keyTips": [
        "Standard if / else if / else syntax.",
        "Logical operators: && (AND), || (OR), ! (NOT).",
        "Modern switch expressions provide concise value mappings."
      ],
      "pitfalls": "Confusing assignment = with equality comparison ==.",
      "content": "using System;\n\nint score = 88;\nstring grade;\n\nif (score >= 90) {\n    grade = \"A\";\n} else if (score >= 80) {\n    grade = \"B\";\n} else if (score >= 70) {\n    grade = \"C\";\n} else {\n    grade = \"F\";\n}\n\nConsole.WriteLine($\"Exam Score: {score} -> Final Grade: {grade}\");",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "cs-04-loops",
      "level": 4,
      "filename": "Loops.cs",
      "title": "04. Loops & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using standard for loops in C#.",
      "concept": "A for loop runs initialization, checks a condition, and executes an increment step each cycle.",
      "whyItMatters": "Loops process batches, calculate metrics, and traverse collections.",
      "underTheHood": "The .NET JIT compiler optimizes loops by eliminating array bounds checks when safe.",
      "keyTips": [
        "Loop syntax: for (int i = 1; i <= n; i++).",
        "foreach loop syntax: foreach (var item in collection).",
        "Accumulate with the += operator."
      ],
      "pitfalls": "Off-by-one errors when setting loop boundaries.",
      "content": "using System;\n\nint totalSum = 0;\n\nfor (int num = 1; num <= 5; num++) {\n    totalSum += num;\n    Console.WriteLine($\"Adding {num} -> Running Total: {totalSum}\");\n}\n\nConsole.WriteLine($\"Final Sum: {totalSum}\");",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "cs-05-methods",
      "level": 5,
      "filename": "Methods.cs",
      "title": "05. Methods & Expression Bodies",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare and invoke reusable methods with parameters and return types.",
      "concept": "Methods encapsulate procedural logic with strongly typed parameter and return contracts.",
      "whyItMatters": "Methods prevent code duplication and enable unit testing across enterprise codebases.",
      "underTheHood": "Expression-bodied members (=>) compile into standard IL method declarations with zero performance difference.",
      "keyTips": [
        "Declare return type before method name: decimal CalculateDiscount(...).",
        "Expression-bodied syntax: decimal Calc(...) => expression;.",
        "Specify parameter types explicitly."
      ],
      "pitfalls": "Forgetting to return a value from a non-void method causes compile error CS0161.",
      "content": "using System;\n\ndecimal CalculateDiscount(decimal price, decimal discountPercent) {\n    decimal discountAmount = price * (discountPercent / 100m);\n    return Math.Round(price - discountAmount, 2);\n}\n\ndecimal original = 120.0m;\ndecimal saved = CalculateDiscount(original, 15m);\nConsole.WriteLine($\"Original: ${original:F2} with 15% off = ${saved:F2}\");",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "cs-06-collections",
      "level": 6,
      "filename": "Collections.cs",
      "title": "06. Collections: List and Generics",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Manage dynamically sized lists using System.Collections.Generic.List<T>.",
      "concept": "List<T> is a strongly typed, dynamically resizing array container in .NET.",
      "whyItMatters": "List<T> avoids runtime boxing/unboxing overhead by preserving strong type identity.",
      "underTheHood": "List<T> wraps an internal array T[]. It doubles internal array capacity upon overflow.",
      "keyTips": [
        "Include using System.Collections.Generic;.",
        "Use .Add(), .Count, and indexer [i].",
        "Initialize with collection expressions: List<string> list = [\"a\", \"b\"];."
      ],
      "pitfalls": "Accessing an index >= list.Count throws ArgumentOutOfRangeException.",
      "content": "using System;\nusing System.Collections.Generic;\n\nvar servers = new List<string> { \"web-prod-01\", \"db-prod-01\", \"redis-cache-01\" };\n\nConsole.WriteLine($\"Monitored Nodes: {servers.Count}\");\nConsole.WriteLine($\"Primary Node: {servers[0]}\");",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "cs-07-records",
      "level": 7,
      "filename": "Records.cs",
      "title": "07. Records & Immutability",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Define immutable data records with value-based equality in C#.",
      "concept": "record types provide a concise syntax for reference types with built-in value equality semantics.",
      "whyItMatters": "Records eliminate boilerplate when modeling domain events, DTOs, and API responses.",
      "underTheHood": "The compiler synthesizes equality operators (==, Equals, GetHashCode) that compare property values.",
      "keyTips": [
        "Define positional records in one line: public record ServerNode(string Host, int Port);.",
        "Use with-expressions to create modified copies: item with { Port = 9000 }."
      ],
      "pitfalls": "Positional records are immutable by default; mutate using with expressions.",
      "content": "using System;\n\npublic record ServerNode(string Hostname, string Region, int Port);\n\nvar node = new ServerNode(\"us-east-1a\", \"Virginia\", 8080);\nConsole.WriteLine($\"Server: {node.Hostname} in {node.Region} (Port: {node.Port})\");",
      "expectedOutput": "Server: us-east-1a in Virginia (Port: 8080)"
    },
    {
      "id": "cs-08-bubble-sort",
      "level": 8,
      "filename": "BubbleSort.cs",
      "title": "08. Algorithm: Bubble Sort in C#",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on an integer array using tuple swap in C#.",
      "concept": "Bubble Sort repeatedly steps through an array, compares adjacent pairs, and swaps them if disordered.",
      "whyItMatters": "Demonstrates in-place array mutation, nested loops, and C# tuple assignment.",
      "underTheHood": "C# tuple assignment (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]) compiles into optimal temporary register swaps.",
      "keyTips": [
        "Use tuple assignment for clean swapping: (a, b) = (b, a).",
        "Outer loop runs n times; inner loop bound is n - i - 1."
      ],
      "pitfalls": "Off-by-one errors in inner loop bounds.",
      "content": "using System;\n\nvoid BubbleSort(int[] arr) {\n    int n = arr.Length;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);\n            }\n        }\n    }\n}\n\nint[] numbers = [64, 34, 25, 12, 22, 11, 90];\nBubbleSort(numbers);\nConsole.WriteLine($\"Sorted List: [{string.Join(\", \", numbers)}]\");",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "cs-09-binary-search",
      "level": 9,
      "filename": "BinarySearch.cs",
      "title": "09. Algorithm: Binary Search in C#",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array using divide-and-conquer.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Binary search provides O(log n) efficiency, foundational for sorted database indexes.",
      "underTheHood": "Integer division (low + high) / 2 truncates toward zero.",
      "keyTips": [
        "Input array must be sorted in ascending order.",
        "Return mid when target matches.",
        "Return -1 if target is absent."
      ],
      "pitfalls": "Updating bounds incorrectly causes infinite loops.",
      "content": "using System;\n\nint BinarySearch(int[] arr, int target) {\n    int low = 0;\n    int high = arr.Length - 1;\n\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1;\n}\n\nint[] items = [10, 20, 30, 40, 50, 60, 70];\nint idx = BinarySearch(items, 40);\nConsole.WriteLine($\"Target 40 found at index: {idx}\");",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "go": [
    {
      "id": "go-01-print",
      "level": 1,
      "filename": "main.go",
      "title": "01. Hello World & fmt.Println",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Declare package main and print formatted output using the fmt standard package.",
      "concept": "Every Go executable begins in package main with a func main() entry point.",
      "whyItMatters": "Developed at Google, Go was built for simplicity and lightning-fast compilation. Running Hello World verifies the toolchain.",
      "underTheHood": "Go binaries compile directly to native machine code with a built-in runtime and garbage collector.",
      "keyTips": [
        "Import standard packages using import \"fmt\".",
        "Unused imports or variables are treated as compile-time errors in Go.",
        "Curly braces { must open on the same line as func main()."
      ],
      "pitfalls": "Functions starting with a capital letter (Println) are exported (public); lowercase are private.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n    fmt.Println(\"Go: Fast, concurrent & simple.\")\n}",
      "expectedOutput": "Hello, World!\nGo: Fast, concurrent & simple."
    },
    {
      "id": "go-02-variables",
      "level": 2,
      "filename": "variables.go",
      "title": "02. Short Variable Declarations",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare typed variables using the short declaration operator := in Go.",
      "concept": ":= automatically infers the variable type based on the right-hand value.",
      "whyItMatters": "Go balances static typing safety with concise, expressive declarations.",
      "underTheHood": ":= is syntactic sugar for var x Type = value and is only allowed inside function bodies.",
      "keyTips": [
        "Inside functions, := is preferred for concise declarations.",
        "Go variables default to zero values (0 for int, \"\" for string, false for bool).",
        "Format output with fmt.Printf using %s, %d, and %.2f."
      ],
      "pitfalls": "Attempting to use := outside a function body causes a syntax error.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    username := \"alex_dev\"\n    userId := 1042\n    accountBalance := 250.75\n    isActive := true\n\n    fmt.Printf(\"User: %s (ID: %d)\\n\", username, userId)\n    fmt.Printf(\"Balance: $%.2f | Active: %t\\n\", accountBalance, isActive)\n}",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "go-03-conditionals",
      "level": 3,
      "filename": "conditionals.go",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, else if, and else blocks in Go.",
      "concept": "Go if statements evaluate boolean expressions without requiring parentheses.",
      "whyItMatters": "Clean control flow prevents nesting pyramids and enforces error-handling patterns.",
      "underTheHood": "Go supports initialization statements inside if: if err := do(); err != nil.",
      "keyTips": [
        "No parentheses around conditions: if score >= 90 { ... }.",
        "Curly braces are strictly mandatory even for single-line statements.",
        "else must immediately follow the closing brace of if: } else {."
      ],
      "pitfalls": "Placing else on a new line after the closing brace causes a syntax error in Go.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    score := 88\n    var grade string\n\n    if score >= 90 {\n        grade = \"A\"\n    } else if score >= 80 {\n        grade = \"B\"\n    } else if score >= 70 {\n        grade = \"C\"\n    } else {\n        grade = \"F\"\n    }\n\n    fmt.Printf(\"Exam Score: %d -> Final Grade: %s\\n\", score, grade)\n}",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "go-04-loops",
      "level": 4,
      "filename": "loops.go",
      "title": "04. The Universal For Loop",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using Go's unified for loop.",
      "concept": "Go has only one looping keyword: for. It serves as standard for, while, and infinite loop.",
      "whyItMatters": "Having a single looping construct reduces cognitive overhead and language complexity.",
      "underTheHood": "Go for loops compile directly into test-and-jump instructions without iterator object allocations.",
      "keyTips": [
        "Standard for loop: for i := 1; i <= n; i++ { ... }.",
        "While-style loop: for condition { ... }.",
        "Range loop: for index, value := range collection { ... }."
      ],
      "pitfalls": "Go does not have a while or do-while keyword; use for condition { ... } instead.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    totalSum := 0\n\n    for num := 1; num <= 5; num++ {\n        totalSum += num\n        fmt.Printf(\"Adding %d -> Running Total: %d\\n\", num, totalSum)\n    }\n\n    fmt.Printf(\"Final Sum: %d\\n\", totalSum)\n}",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "go-05-functions",
      "level": 5,
      "filename": "functions.go",
      "title": "05. Functions & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare functions with typed parameters and return values in Go.",
      "concept": "Functions encapsulate reusable logic and can return single or multiple values.",
      "whyItMatters": "Functions are first-class citizens in Go, allowing composition, callbacks, and concurrency dispatch.",
      "underTheHood": "Go uses caller-allocated stack frames to pass arguments and collect return values.",
      "keyTips": [
        "Type comes after the parameter name: func calc(price float64, pct float64) float64.",
        "Go functions can return multiple values: func div(a, b int) (int, error).",
        "Exported functions start with Capital letter; internal with lowercase."
      ],
      "pitfalls": "If consecutive parameters share the same type, you can omit all but the last: func calc(price, pct float64).",
      "content": "package main\n\nimport \"fmt\"\n\nfunc calculateDiscount(price, discountPercent float64) float64 {\n    discountAmount := price * (discountPercent / 100.0)\n    return price - discountAmount\n}\n\nfunc main() {\n    original := 120.0\n    saved := calculateDiscount(original, 15.0)\n    fmt.Printf(\"Original: $%.2f with 15%% off = $%.2f\\n\", original, saved)\n}",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "go-06-slices",
      "level": 6,
      "filename": "slices.go",
      "title": "06. Slices & Dynamic Collections",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Create, inspect, and append to dynamically resizing slices in Go.",
      "concept": "A slice is a lightweight descriptor for a contiguous segment of an underlying array.",
      "whyItMatters": "Slices provide dynamically sized, flexible views into array data and are used everywhere in Go.",
      "underTheHood": "A slice header is a 24-byte struct containing a pointer to array data, length (len), and capacity (cap).",
      "keyTips": [
        "Declare slice literal: servers := []string{\"a\", \"b\"}.",
        "Use append() to add elements: servers = append(servers, \"c\").",
        "Use len(slice) to get element count."
      ],
      "pitfalls": "append() can allocate a new underlying array if capacity is exceeded; always reassign: s = append(s, val).",
      "content": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    servers := []string{\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"}\n\n    fmt.Printf(\"Monitored Nodes: %d\\n\", len(servers))\n    fmt.Printf(\"Primary Node: %s\\n\", servers[0])\n}",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "go-07-structs",
      "level": 7,
      "filename": "structs.go",
      "title": "07. Structs & Pointer Receivers",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Define custom struct types and bind method receivers to implement OOP paradigms.",
      "concept": "Go uses structs and method receivers instead of traditional class inheritance.",
      "whyItMatters": "Composition over inheritance simplifies architectures and eliminates deep class hierarchies.",
      "underTheHood": "Pointer receivers (*BankAccount) allow methods to mutate the struct fields directly in memory.",
      "keyTips": [
        "Define struct: type BankAccount struct { Owner string; Balance float64 }.",
        "Method receiver syntax: func (a *BankAccount) Deposit(amount float64) float64.",
        "Use pointer receivers when mutating struct state or avoiding copies."
      ],
      "pitfalls": "Using a value receiver (func (a BankAccount)) mutates a copy, leaving the original struct unchanged.",
      "content": "package main\n\nimport \"fmt\"\n\ntype BankAccount struct {\n    Owner   string\n    Balance float64\n}\n\nfunc (a *BankAccount) Deposit(amount float64) float64 {\n    a.Balance += amount\n    return a.Balance\n}\n\nfunc main() {\n    account := &BankAccount{Owner: \"Sarah Connor\", Balance: 500.0}\n    account.Deposit(250.0)\n    fmt.Printf(\"Owner: %s | Current Balance: $%.2f\\n\", account.Owner, account.Balance)\n}",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "go-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.go",
      "title": "08. Algorithm: Bubble Sort in Go",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on an integer slice using Go multiple assignment.",
      "concept": "Bubble Sort repeatedly steps through a slice, compares adjacent elements, and swaps them if disordered.",
      "whyItMatters": "Demonstrates slice mutability, multiple variable swaps, and nested algorithmic bounds in Go.",
      "underTheHood": "Go multiple assignment arr[j], arr[j+1] = arr[j+1], arr[j] swaps values without temporary variables.",
      "keyTips": [
        "Pass slice directly: func bubbleSort(arr []int) []int (slices are reference headers).",
        "Multiple assignment: a, b = b, a.",
        "Inner loop bound: n - i - 1."
      ],
      "pitfalls": "Off-by-one errors when checking j + 1 against slice bounds.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc bubbleSort(arr []int) []int {\n    n := len(arr)\n    for i := 0; i < n; i++ {\n        for j := 0; j < n-i-1; j++ {\n            if arr[j] > arr[j+1] {\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n            }\n        }\n    }\n    return arr\n}\n\nfunc main() {\n    numbers := []int{64, 34, 25, 12, 22, 11, 90}\n    sorted := bubbleSort(numbers)\n    fmt.Println(\"Sorted List:\", sorted)\n}",
      "expectedOutput": "Sorted List: [11 12 22 25 34 64 90]"
    },
    {
      "id": "go-09-binary-search",
      "level": 9,
      "filename": "binary_search.go",
      "title": "09. Algorithm: Binary Search in Go",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted slice in Go.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Essential for high-throughput search routines and database index lookups.",
      "underTheHood": "Executes in logarithmic time O(log n) with zero heap allocations.",
      "keyTips": [
        "Input slice must be sorted in ascending order.",
        "mid calculation: (low + high) / 2.",
        "Return -1 if target is not found."
      ],
      "pitfalls": "Updating high = mid instead of high = mid - 1 causes infinite loops.",
      "content": "package main\n\nimport \"fmt\"\n\nfunc binarySearch(arr []int, target int) int {\n    low := 0\n    high := len(arr) - 1\n\n    for low <= high {\n        mid := (low + high) / 2\n        if arr[mid] == target {\n            return mid\n        } else if arr[mid] < target {\n            low = mid + 1\n        } else {\n            high = mid - 1\n        }\n    }\n    return -1\n}\n\nfunc main() {\n    items := []int{10, 20, 30, 40, 50, 60, 70}\n    idx := binarySearch(items, 40)\n    fmt.Printf(\"Target 40 found at index: %d\\n\", idx)\n}",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "rust": [
    {
      "id": "rust-01-print",
      "level": 1,
      "filename": "main.rs",
      "title": "01. Hello World with println! Macro",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Print messages to the console using the println! macro.",
      "concept": "println! is a macro that writes formatted text to standard output with compile-time verification.",
      "whyItMatters": "Rust guarantees memory safety without a garbage collector. Writing Hello World confirms rustc and LLVM compilation.",
      "underTheHood": "println! is a macro rather than a function so that formatting string syntax and argument types can be verified at compile time.",
      "keyTips": [
        "The ! indicates that println! is a macro.",
        "Use {} placeholders for formatted argument interpolation.",
        "main() is the program entry point."
      ],
      "pitfalls": "Missing the exclamation mark (calling println instead of println!) causes a compiler error.",
      "content": "fn main() {\n    println!(\"Hello, World!\");\n    println!(\"Rust: Zero-cost abstractions & fearless concurrency.\");\n}",
      "expectedOutput": "Hello, World!\nRust: Zero-cost abstractions & fearless concurrency."
    },
    {
      "id": "rust-02-variables",
      "level": 2,
      "filename": "variables.rs",
      "title": "02. Ownership, Mutability & Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare immutable and mutable variables with explicit types in Rust.",
      "concept": "Variables in Rust are immutable by default. Add mut to allow mutation.",
      "whyItMatters": "Default immutability eliminates state corruption and concurrency data races by default.",
      "underTheHood": "Rust enforces memory safety through ownership and borrow rules checked strictly at compile time.",
      "keyTips": [
        "Variables are immutable by default: let x = 5;.",
        "Add mut to allow reassignment: let mut balance = 100.0;.",
        "Types: i32, i64, f64, bool, &str, String."
      ],
      "pitfalls": "Trying to mutate an immutable variable triggers compiler error E0384.",
      "content": "fn main() {\n    let username: &str = \"alex_dev\";\n    let user_id: u32 = 1042;\n    let mut account_balance: f64 = 250.75;\n    let is_active: bool = true;\n\n    account_balance += 50.0;\n    println!(\"User: {} (ID: {})\", username, user_id);\n    println!(\"Balance: ${:.2} | Active: {}\", account_balance, is_active);\n}",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $300.75 | Active: true"
    },
    {
      "id": "rust-03-conditionals",
      "level": 3,
      "filename": "conditionals.rs",
      "title": "03. Conditionals as Expressions",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, else if, and else as value-returning expressions.",
      "concept": "In Rust, if/else is an expression that can return a value directly to assign to a variable.",
      "whyItMatters": "Expression-based conditionals eliminate uninitialized variable bugs common in other languages.",
      "underTheHood": "Rust guarantees all branches return matching types at compile time.",
      "keyTips": [
        "No parentheses around conditions: if score >= 90 { ... }.",
        "All branches must evaluate to the exact same return type.",
        "Omit the trailing semicolon in a block to return its value."
      ],
      "pitfalls": "Adding a semicolon at the end of an if branch changes its return type from T to unit (()).",
      "content": "fn main() {\n    let score = 88;\n\n    let grade = if score >= 90 {\n        \"A\"\n    } else if score >= 80 {\n        \"B\"\n    } else if score >= 70 {\n        \"C\"\n    } else {\n        \"F\"\n    };\n\n    println!(\"Exam Score: {} -> Final Grade: {}\", score, grade);\n}",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "rust-04-loops",
      "level": 4,
      "filename": "loops.rs",
      "title": "04. Loops & Range Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges using for in and inclusive range syntax (1..=5).",
      "concept": "Rust provides loop (infinite), while (conditional), and for in (iterator-based) loops.",
      "whyItMatters": "Range iterators prevent index out-of-bounds errors at compile time.",
      "underTheHood": "for in loops desugar into IntoIterator calls that advance pointers with zero runtime overhead.",
      "keyTips": [
        "Inclusive range syntax: 1..=5 (yields 1, 2, 3, 4, 5).",
        "Exclusive range syntax: 1..5 (yields 1, 2, 3, 4).",
        "Accumulator variables must be marked mut: let mut total = 0;."
      ],
      "pitfalls": "Using 1..5 when you intended inclusive 1..=5 stops before the final value.",
      "content": "fn main() {\n    let mut total_sum = 0;\n\n    for num in 1..=5 {\n        total_sum += num;\n        println!(\"Adding {} -> Running Total: {}\", num, total_sum);\n    }\n\n    println!(\"Final Sum: {}\", total_sum);\n}",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "rust-05-functions",
      "level": 5,
      "filename": "functions.rs",
      "title": "05. Functions & Expression Returns",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare functions with typed parameters and expression return values in Rust.",
      "concept": "Functions specify parameter types and return type (-> Type). The final expression is returned implicitly.",
      "whyItMatters": "Implicit expression returns encourage clean, functional code without redundant return keywords.",
      "underTheHood": "Rust inlines small functions during LLVM release builds to remove call overhead.",
      "keyTips": [
        "Return type syntax: fn name(...) -> f64.",
        "Omit the semicolon on the last line to return its value.",
        "Functions can use explicit return if returning early."
      ],
      "pitfalls": "Accidentally putting a semicolon after the return expression evaluates to (), causing compiler error E0308.",
      "content": "fn calculate_discount(price: f64, discount_percent: f64) -> f64 {\n    let discount_amount = price * (discount_percent / 100.0);\n    price - discount_amount\n}\n\nfn main() {\n    let original = 120.0;\n    let saved = calculate_discount(original, 15.0);\n    println!(\"Original: ${:.2} with 15% off = ${:.2}\", original, saved);\n}",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "rust-06-vectors",
      "level": 6,
      "filename": "vectors.rs",
      "title": "06. Vectors: Dynamic Heap Arrays",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Create, grow, and inspect dynamic arrays using Vec<T> in Rust.",
      "concept": "Vec<T> is a dynamically resizable array stored on the heap with guaranteed contiguous memory layout.",
      "whyItMatters": "Vec<T> is the most common collection in Rust, providing O(1) amortized append and cache efficiency.",
      "underTheHood": "A Vec is three words on the stack: a pointer to heap buffer, capacity, and current length.",
      "keyTips": [
        "Initialize with vec! macro: let mut items = vec![\"a\", \"b\"];.",
        "Use .push() to add elements.",
        "Inspect count with .len()."
      ],
      "pitfalls": "Indexing with [i] panics on out-of-bounds; use .get(i) to return Option<&T> safely.",
      "content": "fn main() {\n    let mut servers = vec![\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"];\n    servers.push(\"auth-prod-01\");\n\n    println!(\"Monitored Nodes: {}\", servers.len());\n    println!(\"Primary Node: {}\", servers[0]);\n}",
      "expectedOutput": "Monitored Nodes: 4\nPrimary Node: web-prod-01"
    },
    {
      "id": "rust-07-structs",
      "level": 7,
      "filename": "structs.rs",
      "title": "07. Structs & Impl Methods",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Define custom struct types and implement methods with &mut self receivers.",
      "concept": "Rust decouples data definition (struct) from behavior implementation (impl Block).",
      "whyItMatters": "Allows clean domain modeling with strict ownership verification and zero memory overhead.",
      "underTheHood": "&mut self borrows the instance mutably; &self borrows it immutably.",
      "keyTips": [
        "Define data: struct BankAccount { owner: String, balance: f64 }.",
        "Implement methods: impl BankAccount { fn deposit(&mut self, amount: f64) -> f64 { ... } }.",
        "Use String::from(\"text\") to allocate owned heap strings."
      ],
      "pitfalls": "Calling a &mut self method on an immutable variable triggers compiler error E0596.",
      "content": "struct BankAccount {\n    owner: String,\n    balance: f64,\n}\n\nimpl BankAccount {\n    fn new(owner: &str, initial_balance: f64) -> Self {\n        BankAccount {\n            owner: String::from(owner),\n            balance: initial_balance,\n        }\n    }\n\n    fn deposit(&mut self, amount: f64) -> f64 {\n        self.balance += amount;\n        self.balance\n    }\n}\n\nfn main() {\n    let mut account = BankAccount::new(\"Sarah Connor\", 500.0);\n    account.deposit(250.0);\n    println!(\"Owner: {} | Current Balance: ${:.2}\", account.owner, account.balance);\n}",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "rust-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.rs",
      "title": "08. Algorithm: Bubble Sort in Rust",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on a mutable slice using slice::swap in Rust.",
      "concept": "Bubble Sort steps through the slice, compares adjacent elements, and swaps them if disordered.",
      "whyItMatters": "Teaches mutable borrowing (&mut [T]), slice indexing, and in-place algorithmic transformations.",
      "underTheHood": "arr.swap(j, j + 1) performs safe in-place memory swaps without borrow checker conflicts.",
      "keyTips": [
        "Pass mutable slice: fn bubble_sort(arr: &mut [i32]).",
        "Use arr.swap(j, j + 1) for safe swapping.",
        "Bound: n - i - 1."
      ],
      "pitfalls": "Direct manual swapping arr[j] = arr[j+1] fails borrow checker; always use .swap().",
      "content": "fn bubble_sort(arr: &mut [i32]) {\n    let n = arr.len();\n    for i in 0..n {\n        for j in 0..n - i - 1 {\n            if arr[j] > arr[j + 1] {\n                arr.swap(j, j + 1);\n            }\n        }\n    }\n}\n\nfn main() {\n    let mut numbers = [64, 34, 25, 12, 22, 11, 90];\n    bubble_sort(&mut numbers);\n    println!(\"Sorted List: {:?}\", numbers);\n}",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "rust-09-binary-search",
      "level": 9,
      "filename": "binary_search.rs",
      "title": "09. Algorithm: Binary Search in Rust",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted slice returning Option<usize> in Rust.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Using Option<usize> (Some(index) / None) models presence and absence without error-prone sentinel -1 integers.",
      "underTheHood": "Option<T> is an enum that compiles into zero-overhead pointer/value tagging.",
      "keyTips": [
        "Return Option<usize>: Some(mid) if found, None if missing.",
        "Slice indices in Rust are usize (unsigned integer).",
        "Input slice must be sorted."
      ],
      "pitfalls": "Beware of underflow when subtracting from high (usize cannot be negative; check mid > 0).",
      "content": "fn binary_search(arr: &[i32], target: i32) -> Option<usize> {\n    let mut low = 0;\n    let mut high = arr.len();\n\n    while low < high {\n        let mid = low + (high - low) / 2;\n        if arr[mid] == target {\n            return Some(mid);\n        } else if arr[mid] < target {\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n    }\n    None\n}\n\nfn main() {\n    let items = [10, 20, 30, 40, 50, 60, 70];\n    match binary_search(&items, 40) {\n        Some(idx) => println!(\"Target 40 found at index: {}\", idx),\n        None => println!(\"Target not found\"),\n    }\n}",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "php": [
    {
      "id": "php-01-print",
      "level": 1,
      "filename": "index.php",
      "title": "01. Hello World & Echo Output",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Output text to the browser or console using the echo statement.",
      "concept": "echo outputs strings to the standard output buffer in PHP scripts.",
      "whyItMatters": "PHP powers over 70% of web servers worldwide. Testing Hello World ensures the PHP CLI and engine interpret scripts correctly.",
      "underTheHood": "echo is a language construct rather than a function and executes with minimal opcode overhead.",
      "keyTips": [
        "PHP files start with the <?php opening tag.",
        "Variable names always begin with a dollar sign: $variable.",
        "Statements terminate with a semicolon (;)."
      ],
      "pitfalls": "Forgetting the leading $ on a variable name treats the identifier as a constant or syntax error.",
      "content": "<?php\necho \"Hello, World!\\n\";\necho \"Welcome to modern PHP 8.3.\\n\";",
      "expectedOutput": "Hello, World!\nWelcome to modern PHP 8.3."
    },
    {
      "id": "php-02-variables",
      "level": 2,
      "filename": "variables.php",
      "title": "02. Variables, Types & String Interpolation",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare variables of multiple types and interpolate them inside double-quoted strings.",
      "concept": "PHP variables begin with $ and support dynamic typing with optional type hinting.",
      "whyItMatters": "Double-quoted strings perform variable interpolation directly without concatenation.",
      "underTheHood": "PHP uses zval structures in the Zend Engine to hold variable values, types, and reference counts.",
      "keyTips": [
        "Double-quoted strings (\"$val\") interpolate variables; single-quoted ('$val') do not.",
        "Concatenate strings using the dot operator (.): $a . $b.",
        "Data types: string, int, float, bool, array."
      ],
      "pitfalls": "Confusing the concatenation dot (.) with plus (+) causes PHP to attempt mathematical addition.",
      "content": "<?php\n$username = \"alex_dev\";\n$userId = 1042;\n$accountBalance = 250.75;\n$isActive = true;\n\necho \"User: $username (ID: $userId)\\n\";\necho \"Balance: \\$$accountBalance | Active: \" . ($isActive ? \"true\" : \"false\") . \"\\n\";",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "php-03-conditionals",
      "level": 3,
      "filename": "conditionals.php",
      "title": "03. Conditionals & Decision Making",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch program execution using if, elseif, and else in PHP.",
      "concept": "Conditionals evaluate truth conditions to select which execution path to run.",
      "whyItMatters": "Essential for request routing, authorization, and input validation in backend APIs.",
      "underTheHood": "PHP Zend VM compiles conditionals into JMPZ (jump if zero) bytecode opcodes.",
      "keyTips": [
        "Use elseif as a single word or else if.",
        "Always use strict equality === to avoid unexpected type coercion.",
        "Logical operators: && (AND), || (OR), ! (NOT)."
      ],
      "pitfalls": "Using loose == equality can evaluate \"0e123\" == \"0e456\" as true because both look like scientific notation zero.",
      "content": "<?php\n$score = 88;\n$grade = \"\";\n\nif ($score >= 90) {\n    $grade = \"A\";\n} elseif ($score >= 80) {\n    $grade = \"B\";\n} elseif ($score >= 70) {\n    $grade = \"C\";\n} else {\n    $grade = \"F\";\n}\n\necho \"Exam Score: $score -> Final Grade: $grade\\n\";",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "php-04-loops",
      "level": 4,
      "filename": "loops.php",
      "title": "04. Loops & Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using standard for loops in PHP.",
      "concept": "A for loop runs initialization, checks a condition, and executes an increment step each cycle.",
      "whyItMatters": "Loops process database row sets, generate HTML tables, and calculate metrics.",
      "underTheHood": "The Zend Engine allocates loop counter variables directly inside the current execution frame.",
      "keyTips": [
        "Loop syntax: for ($i = 1; $i <= $n; $i++).",
        "foreach loop syntax: foreach ($array as $item).",
        "Accumulate with the += operator."
      ],
      "pitfalls": "Forgetting to increment the loop counter produces an infinite loop.",
      "content": "<?php\n$totalSum = 0;\n\nfor ($num = 1; $num <= 5; $num++) {\n    $totalSum += $num;\n    echo \"Adding $num -> Running Total: $totalSum\\n\";\n}\n\necho \"Final Sum: $totalSum\\n\";",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "php-05-functions",
      "level": 5,
      "filename": "functions.php",
      "title": "05. Typed Functions & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare functions with explicit parameter types and return type declarations.",
      "concept": "Functions encapsulate reusable logic with type declarations introduced in modern PHP 7 and 8.",
      "whyItMatters": "Type declarations eliminate runtime type errors and document API expectations clearly.",
      "underTheHood": "PHP enforces type declarations at runtime, throwing a TypeError if arguments do not match.",
      "keyTips": [
        "Type declaration syntax: function name(float $p, float $pct): float.",
        "Specify default parameter values: float $pct = 10.0.",
        "Round floats with round($val, 2)."
      ],
      "pitfalls": "Calling a typed function with incompatible types throws a fatal TypeError.",
      "content": "<?php\nfunction calculateDiscount(float $price, float $discountPercent = 10.0): float {\n    $discountAmount = $price * ($discountPercent / 100.0);\n    return round($price - $discountAmount, 2);\n}\n\n$original = 120.0;\n$saved = calculateDiscount($original, 15.0);\necho \"Original: \\$\" . number_format($original, 2) . \" with 15% off = \\$\" . number_format($saved, 2) . \"\\n\";",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "php-06-arrays",
      "level": 6,
      "filename": "arrays.php",
      "title": "06. Associative Arrays & Count",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Construct associative key-value arrays and inspect lengths using count().",
      "concept": "PHP arrays are ordered hash maps that associate keys with values.",
      "whyItMatters": "Associative arrays model database rows, JSON responses, and HTTP headers across PHP applications.",
      "underTheHood": "The Zend Engine implements arrays as unified hash tables with O(1) average lookup times.",
      "keyTips": [
        "Use short array syntax: $servers = [\"web-01\", \"db-01\"];.",
        "Associative mapping syntax: \"key\" => \"value\".",
        "count($array) returns element count."
      ],
      "pitfalls": "Accessing undefined array keys produces E_WARNING: Undefined array key in PHP 8.",
      "content": "<?php\n$servers = [\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"];\n\necho \"Monitored Nodes: \" . count($servers) . \"\\n\";\necho \"Primary Node: \" . $servers[0] . \"\\n\";",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "php-07-classes",
      "level": 7,
      "filename": "classes.php",
      "title": "07. OOP: Constructor Property Promotion",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Build object-oriented classes using PHP 8 constructor property promotion.",
      "concept": "Constructor property promotion combines parameter declaration and property assignment in one concise line.",
      "whyItMatters": "Drastically reduces boilerplate in domain models and data transfer objects (DTOs).",
      "underTheHood": "The PHP engine automatically generates class properties and assigns the constructor arguments.",
      "keyTips": [
        "Syntax: public function __construct(public string $owner, public float $balance = 0.0).",
        "Use $this->property to reference instance properties.",
        "Instantiate with new ClassName(...)."
      ],
      "pitfalls": "Forgetting $this-> when accessing class members inside methods causes syntax errors.",
      "content": "<?php\nclass BankAccount {\n    public function __construct(\n        public string $owner,\n        public float $balance = 0.0\n    ) {}\n\n    public function deposit(float $amount): float {\n        $this->balance += $amount;\n        return $this->balance;\n    }\n}\n\n$account = new BankAccount(\"Sarah Connor\", 500.0);\n$account->deposit(250.0);\necho \"Owner: {$account->owner} | Current Balance: \\$\" . number_format($account->balance, 2) . \"\\n\";",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "php-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.php",
      "title": "08. Algorithm: Bubble Sort in PHP",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on an indexed array in PHP.",
      "concept": "Bubble Sort repeatedly steps through an array, compares adjacent pairs, and swaps them if disordered.",
      "whyItMatters": "Reinforces array references, loop boundaries, and swap patterns in PHP.",
      "underTheHood": "PHP uses copy-on-write (COW) semantics; passing an array by reference (&) mutates the original in-place.",
      "keyTips": [
        "Pass array by reference: function bubbleSort(array &$arr).",
        "Temporary variable swap: $temp = $arr[$j]; $arr[$j] = $arr[$j + 1]; $arr[$j + 1] = $temp;.",
        "Bound: $n - $i - 1."
      ],
      "pitfalls": "Omitting & in the parameter list sorts a local copy and leaves the caller's array untouched.",
      "content": "<?php\nfunction bubbleSort(array &$arr): void {\n    $n = count($arr);\n    for ($i = 0; $i < $n; $i++) {\n        for ($j = 0; $j < $n - $i - 1; $j++) {\n            if ($arr[$j] > $arr[$j + 1]) {\n                $temp = $arr[$j];\n                $arr[$j] = $arr[$j + 1];\n                $arr[$j + 1] = $temp;\n            }\n        }\n    }\n}\n\n$numbers = [64, 34, 25, 12, 22, 11, 90];\nbubbleSort($numbers);\necho \"Sorted List: [\" . implode(\", \", $numbers) . \"]\\n\";",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "php-09-binary-search",
      "level": 9,
      "filename": "binary_search.php",
      "title": "09. Algorithm: Binary Search in PHP",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array returning integer index.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Essential for indexing algorithms and rapid search across sorted record sets.",
      "underTheHood": "intdiv($low + $high, 2) or floor(($low + $high) / 2) computes integer midpoints in PHP.",
      "keyTips": [
        "Use intdiv($low + $high, 2) for integer division.",
        "Return matching index immediately.",
        "Return -1 if target is absent."
      ],
      "pitfalls": "Using standard division / produces a float in PHP, which triggers array key conversion warnings.",
      "content": "<?php\nfunction binarySearch(array $arr, int $target): int {\n    $low = 0;\n    $high = count($arr) - 1;\n\n    while ($low <= $high) {\n        $mid = intdiv($low + $high, 2);\n        if ($arr[$mid] === $target) {\n            return $mid;\n        } elseif ($arr[$mid] < $target) {\n            $low = $mid + 1;\n        } else {\n            $high = $mid - 1;\n        }\n    }\n    return -1;\n}\n\n$items = [10, 20, 30, 40, 50, 60, 70];\n$idx = binarySearch($items, 40);\necho \"Target 40 found at index: $idx\\n\";",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "ruby": [
    {
      "id": "ruby-01-print",
      "level": 1,
      "filename": "app.rb",
      "title": "01. Hello World with puts",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Output text to the terminal using the puts method in Ruby.",
      "concept": "puts writes text to stdout followed by a newline.",
      "whyItMatters": "Designed by Yukihiro Matsumoto to prioritize programmer happiness and expressive syntax.",
      "underTheHood": "Everything in Ruby is an object—even numbers, booleans, and methods.",
      "keyTips": [
        "puts automatically adds a newline; print does not.",
        "String interpolation uses #{expression} inside double-quoted strings.",
        "Parentheses are optional around method arguments."
      ],
      "pitfalls": "Single-quoted strings in Ruby do not perform interpolation: '#{val}' outputs literal characters.",
      "content": "puts \"Hello, World!\"\nputs \"Ruby 3.3 - Elegant, productive programming.\"",
      "expectedOutput": "Hello, World!\nRuby 3.3 - Elegant, productive programming."
    },
    {
      "id": "ruby-02-variables",
      "level": 2,
      "filename": "variables.rb",
      "title": "02. Variables & Dynamic Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare dynamically typed variables and interpolate them inside double-quoted strings.",
      "concept": "Variables in Ruby start with a lowercase letter and dynamically reference objects.",
      "whyItMatters": "Ruby's clean variable syntax allows rapid prototyping and fluid script writing.",
      "underTheHood": "Variable names store object references (RValue pointers) managed by Ruby's garbage collector.",
      "keyTips": [
        "Use snake_case for local variable names.",
        "Double-quoted strings support #{variable} interpolation.",
        "nil represents nothingness or null state."
      ],
      "pitfalls": "Starting a variable name with an uppercase letter creates a constant in Ruby.",
      "content": "username = \"alex_dev\"\nuser_id = 1042\naccount_balance = 250.75\nis_active = true\n\nputs \"User: #{username} (ID: #{user_id})\"\nputs \"Balance: $#{sprintf('%.2f', account_balance)} | Active: #{is_active}\"",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "ruby-03-conditionals",
      "level": 3,
      "filename": "conditionals.rb",
      "title": "03. Conditionals: if, elsif & else",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, elsif, and else expressions in Ruby.",
      "concept": "In Ruby, if statements are expressions that evaluate and return the value of the executed branch.",
      "whyItMatters": "Clean conditional syntax without parentheses or braces makes Ruby code read like English.",
      "underTheHood": "Only false and nil are falsy in Ruby; 0 and empty strings \"\" are truthy.",
      "keyTips": [
        "Notice the spelling is elsif (not elseif or else if).",
        "End condition blocks with the end keyword.",
        "Ruby also provides unless condition as syntactic sugar for if !condition."
      ],
      "pitfalls": "In Ruby, the number 0 is truthy! if 0 evaluates to true.",
      "content": "score = 88\n\ngrade = if score >= 90\n  \"A\"\nelsif score >= 80\n  \"B\"\nelsif score >= 70\n  \"C\"\nelse\n  \"F\"\nend\n\nputs \"Exam Score: #{score} -> Final Grade: #{grade}\"",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "ruby-04-loops",
      "level": 4,
      "filename": "loops.rb",
      "title": "04. Iterators: each & Ranges",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using Ruby block iterators.",
      "concept": "Ruby favors iterator methods with blocks (like (1..5).each do |num|) over classic C-style loops.",
      "whyItMatters": "Blocks and iterators form the foundation of Ruby and Rails collection processing.",
      "underTheHood": "Range objects represent intervals and yield values sequentially without allocating entire arrays.",
      "keyTips": [
        "Inclusive range: (1..5); exclusive range: (1...5).",
        "Blocks use do ... end for multi-line or { ... } for single-line.",
        "Block variables are placed inside pipes: |val|."
      ],
      "pitfalls": "Three dots (1...5) excludes the end value; two dots (1..5) includes it.",
      "content": "total_sum = 0\n\n(1..5).each do |num|\n  total_sum += num\n  puts \"Adding #{num} -> Running Total: #{total_sum}\"\nend\n\nputs \"Final Sum: #{total_sum}\"",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "ruby-05-methods",
      "level": 5,
      "filename": "methods.rb",
      "title": "05. Methods & Implicit Returns",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Define methods with parameters, default values, and implicit return values in Ruby.",
      "concept": "Methods defined with def automatically return the value of their last evaluated expression.",
      "whyItMatters": "Implicit returns eliminate visual clutter and keep method bodies concise.",
      "underTheHood": "Ruby method lookup travels up the ancestor chain (class -> included modules -> superclass).",
      "keyTips": [
        "Define methods using def method_name(args) ... end.",
        "The last evaluated expression is automatically returned.",
        "Provide default arguments: def calc(price, pct = 10)."
      ],
      "pitfalls": "Methods returning booleans conventionally end with a question mark (e.g. valid?).",
      "content": "def calculate_discount(price, discount_percent = 10)\n  discount_amount = price * (discount_percent / 100.0)\n  (price - discount_amount).round(2)\nend\n\noriginal = 120.0\nsaved = calculate_discount(original, 15)\nputs \"Original: $#{sprintf('%.2f', original)} with 15% off = $#{sprintf('%.2f', saved)}\"",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "ruby-06-arrays",
      "level": 6,
      "filename": "arrays.rb",
      "title": "06. Arrays & Hashes",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Store and manipulate ordered arrays and key-value hashes in Ruby.",
      "concept": "Arrays store ordered lists; Hashes store key-to-value associations with fast lookup.",
      "whyItMatters": "Arrays and Hashes are the primary containers for structuring application data in Ruby on Rails.",
      "underTheHood": "Ruby arrays grow dynamically; hashes use MurmurHash algorithms for O(1) key access.",
      "keyTips": [
        "Declare array: servers = [\"a\", \"b\"].",
        "Inspect length with .length or .size.",
        "Access first element with array[0] or array.first."
      ],
      "pitfalls": "Negative indices count from the end: array[-1] returns the last item.",
      "content": "servers = [\"web-prod-01\", \"db-prod-01\", \"redis-cache-01\"]\n\nputs \"Monitored Nodes: #{servers.length}\"\nputs \"Primary Node: #{servers.first}\"",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "ruby-07-classes",
      "level": 7,
      "filename": "classes.rb",
      "title": "07. Classes, attr_reader & OOP",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Create object-oriented classes with initialize constructor and attribute accessors.",
      "concept": "Classes encapsulate instance variables (@variable) and expose reader methods via attr_reader.",
      "whyItMatters": "Object-oriented programming is central to Ruby architecture, modeling domain entities with clean interfaces.",
      "underTheHood": "attr_reader :owner generates a getter method def owner; @owner; end dynamically in bytecode.",
      "keyTips": [
        "Instance variables start with an @ symbol (@balance).",
        "initialize is the constructor invoked by Class.new().",
        "attr_reader generates getter methods automatically."
      ],
      "pitfalls": "Instance variables are private to the instance; access requires an explicit getter method or attr_reader.",
      "content": "class BankAccount\n  attr_reader :owner, :balance\n\n  def initialize(owner, balance = 0.0)\n    @owner = owner\n    @balance = balance\n  end\n\n  def deposit(amount)\n    @balance += amount\n  end\nend\n\naccount = BankAccount.new(\"Sarah Connor\", 500.0)\naccount.deposit(250.0)\nputs \"Owner: #{account.owner} | Current Balance: $#{sprintf('%.2f', account.balance)}\"",
      "expectedOutput": "Owner: Sarah Connor | Current Balance: $750.00"
    },
    {
      "id": "ruby-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.rb",
      "title": "08. Algorithm: Bubble Sort in Ruby",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort in Ruby using parallel variable assignment.",
      "concept": "Bubble Sort steps through an array, compares adjacent elements, and swaps them if disordered.",
      "whyItMatters": "Illustrates in-place mutation, nested loops, and Ruby parallel assignment (a, b = b, a).",
      "underTheHood": "Ruby parallel assignment swaps values simultaneously without temporary variables.",
      "keyTips": [
        "Parallel assignment: arr[j], arr[j + 1] = arr[j + 1], arr[j].",
        "Loop bounds: (0...n - i - 1).each do |j|.",
        "Return sorted array."
      ],
      "pitfalls": "Using ... (exclusive range) ensures j + 1 does not exceed array bounds.",
      "content": "def bubble_sort(arr)\n  n = arr.length\n  (0...n).each do |i|\n    (0...n - i - 1).each do |j|\n      if arr[j] > arr[j + 1]\n        arr[j], arr[j + 1] = arr[j + 1], arr[j]\n      end\n    end\n  end\n  arr\nend\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nsorted = bubble_sort(numbers)\nputs \"Sorted List: #{sorted.inspect}\"",
      "expectedOutput": "Sorted List: [11, 12, 22, 25, 34, 64, 90]"
    },
    {
      "id": "ruby-09-binary-search",
      "level": 9,
      "filename": "binary_search.rb",
      "title": "09. Algorithm: Binary Search in Ruby",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array using divide-and-conquer.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Essential algorithmic technique for high-throughput search routines.",
      "underTheHood": "Integer division (low + high) / 2 automatically truncates in Ruby.",
      "keyTips": [
        "Input array must be sorted in ascending order.",
        "Return mid when target matches.",
        "Return -1 if target is not found."
      ],
      "pitfalls": "Updating bounds incorrectly causes infinite loops.",
      "content": "def binary_search(arr, target)\n  low = 0\n  high = arr.length - 1\n\n  while low <= high\n    mid = (low + high) / 2\n    if arr[mid] == target\n      return mid\n    elsif arr[mid] < target\n      low = mid + 1\n    else\n      high = mid - 1\n    end\n  end\n  -1\nend\n\nitems = [10, 20, 30, 40, 50, 60, 70]\nidx = binary_search(items, 40)\nputs \"Target 40 found at index: #{idx}\"",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ],
  "sql": [
    {
      "id": "sql-01-select",
      "level": 1,
      "filename": "01_select_query.sql",
      "title": "01. SELECT Queries & Projection",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Retrieve specific columns from a relational database table using SELECT.",
      "concept": "SELECT specifies which column attributes to retrieve from a table dataset.",
      "whyItMatters": "SQL is the universal declarative standard for accessing relational data across PostgreSQL, MySQL, and BigQuery.",
      "underTheHood": "The query planner parses the syntax, generates an execution tree, and optimizes disk reads using indexes.",
      "keyTips": [
        "Specify explicit column names instead of SELECT * for production performance.",
        "SQL keywords are conventionally capitalized for readability (SELECT, FROM).",
        "Terminate statements with a semicolon (;)."
      ],
      "pitfalls": "Overusing SELECT * in high-traffic applications wastes network bandwidth and prevents index-only scans.",
      "content": "SELECT \n    'Hello, World!' AS message,\n    'PostgreSQL 16 Engine' AS database_engine;",
      "expectedOutput": "    message    |  database_engine   \n---------------+--------------------\n Hello, World! | PostgreSQL 16 Engine\n(1 row returned)"
    },
    {
      "id": "sql-02-datatypes",
      "level": 2,
      "filename": "02_create_table.sql",
      "title": "02. Table Schema & Column Types",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Define relational table schemas with typed columns (VARCHAR, INT, NUMERIC, BOOLEAN).",
      "concept": "DDL (Data Definition Language) creates structured table definitions with strict column data types.",
      "whyItMatters": "Strong column types ensure database integrity and eliminate malformed data at the storage layer.",
      "underTheHood": "The database allocates fixed or variable-length storage on 8KB disk pages for each row.",
      "keyTips": [
        "Use NUMERIC(10, 2) or DECIMAL for exact currency values.",
        "SERIAL creates an auto-incrementing integer primary key.",
        "NOT NULL enforces presence constraint."
      ],
      "pitfalls": "Using FLOAT or DOUBLE PRECISION for financial values causes rounding errors.",
      "content": "CREATE TABLE users (\n    user_id SERIAL PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    account_balance NUMERIC(10, 2) DEFAULT 0.00,\n    is_active BOOLEAN DEFAULT TRUE\n);",
      "expectedOutput": "CREATE TABLE\nTable \"users\" successfully created with 4 columns."
    },
    {
      "id": "sql-03-where",
      "level": 3,
      "filename": "03_where_filters.sql",
      "title": "03. WHERE Clauses & Conditional Filters",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Filter records matching specific boolean conditions using the WHERE clause.",
      "concept": "WHERE restricts the returned row set to records that satisfy a boolean predicate.",
      "whyItMatters": "Filtering at the database level reduces disk I/O and network transfer by orders of magnitude.",
      "underTheHood": "B-Tree indexes allow the engine to perform index range scans instead of full sequential table scans.",
      "keyTips": [
        "Combine predicates with AND, OR, and NOT.",
        "Compare equality with single = (not ==).",
        "Use IS NULL / IS NOT NULL for testing null values."
      ],
      "pitfalls": "Writing WHERE col = NULL never matches any row; you must write WHERE col IS NULL.",
      "content": "SELECT \n    user_id,\n    username,\n    account_balance\nFROM users\nWHERE account_balance >= 100.00 \n  AND is_active = TRUE;",
      "expectedOutput": " user_id | username  | account_balance \n---------+-----------+-----------------\n    1042 | alex_dev  |          250.75\n    1088 | sarah_c   |          500.00\n(2 rows returned)"
    },
    {
      "id": "sql-04-order-limit",
      "level": 4,
      "filename": "04_order_limit.sql",
      "title": "04. ORDER BY & LIMIT Pagination",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Sort query results and paginate rows using ORDER BY, LIMIT, and OFFSET.",
      "concept": "ORDER BY sorts the result set; LIMIT caps the total rows returned for efficient pagination.",
      "whyItMatters": "Essential for web application feeds, leaderboard rankings, and responsive UI pagination.",
      "underTheHood": "The engine uses Top-N sort in memory (quicksort or heapsort) when LIMIT is specified.",
      "keyTips": [
        "Sort direction: ASC (ascending, default) or DESC (descending).",
        "Pagination formula: LIMIT page_size OFFSET (page - 1) * page_size.",
        "Always order by a deterministic column (like id) to prevent pagination drift."
      ],
      "pitfalls": "Using OFFSET on millions of rows forces the engine to scan and discard all preceding rows.",
      "content": "SELECT \n    product_id,\n    product_name,\n    price\nFROM products\nORDER BY price DESC\nLIMIT 5 OFFSET 0;",
      "expectedOutput": " product_id |  product_name  | price  \n------------+----------------+--------\n       5001 | Mac Studio M3  | 1999.00\n       5004 | Studio Display | 1599.00\n(2 rows returned)"
    },
    {
      "id": "sql-05-aggregates",
      "level": 5,
      "filename": "05_aggregate_functions.sql",
      "title": "05. Aggregate Functions (COUNT, AVG, SUM)",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Compute summary metrics across entire table datasets using aggregate functions.",
      "concept": "Aggregate functions process multiple row values and collapse them into a single summary scalar.",
      "whyItMatters": "Power business dashboards, revenue summaries, and reporting pipelines.",
      "underTheHood": "Aggregates scan target columns and maintain running totals in single accumulator registers.",
      "keyTips": [
        "COUNT(*) counts all rows; COUNT(column) counts non-null entries.",
        "ROUND(AVG(price), 2) formats float averages to 2 decimal places.",
        "Assign readable aliases using AS metric_name."
      ],
      "pitfalls": "Aggregate functions ignore NULL values except for COUNT(*).",
      "content": "SELECT \n    COUNT(*) AS total_orders,\n    ROUND(AVG(total_amount), 2) AS avg_order_value,\n    SUM(total_amount) AS total_revenue\nFROM orders;",
      "expectedOutput": " total_orders | avg_order_value | total_revenue \n--------------+-----------------+---------------\n         1250 |           85.40 |     106750.00\n(1 row returned)"
    },
    {
      "id": "sql-06-group-by",
      "level": 6,
      "filename": "06_group_by_having.sql",
      "title": "06. GROUP BY & HAVING Aggregations",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Group records by categorical dimensions and filter grouped aggregates with HAVING.",
      "concept": "GROUP BY segments rows into buckets; HAVING filters the aggregated bucket results.",
      "whyItMatters": "Enables categorical business intelligence (e.g. sales by department, errors by service).",
      "underTheHood": "The database builds an in-memory hash table with grouping keys and bucket accumulators.",
      "keyTips": [
        "Every non-aggregated column in SELECT must appear in the GROUP BY clause.",
        "WHERE filters rows BEFORE grouping; HAVING filters groups AFTER aggregation.",
        "Combine with ORDER BY to rank top categories."
      ],
      "pitfalls": "Attempting to filter an aggregate in a WHERE clause (WHERE COUNT(*) > 1) produces a syntax error.",
      "content": "SELECT \n    category,\n    COUNT(*) AS item_count,\n    ROUND(AVG(price), 2) AS avg_price\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 1\nORDER BY item_count DESC;",
      "expectedOutput": " category  | item_count | avg_price \n-----------+------------+-----------\n Hardware  |         14 |    650.00\n Software  |          8 |     89.99\n(2 rows returned)"
    },
    {
      "id": "sql-07-joins",
      "level": 7,
      "filename": "07_relational_joins.sql",
      "title": "07. Relational INNER & LEFT JOINs",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Combine records from multiple related tables using an INNER JOIN.",
      "concept": "An INNER JOIN matches records between tables where the foreign key matches the primary key.",
      "whyItMatters": "Relational databases normalize data into separate tables to eliminate redundancy. JOINs recombine them.",
      "underTheHood": "The database engine executes joins using algorithms like Hash Join or Index Nested Loop.",
      "keyTips": [
        "Use table aliases (u for users, o for orders) for brevity.",
        "Always specify the ON condition linking foreign key to primary key.",
        "LEFT JOIN preserves all rows from the left table even if right table has no match."
      ],
      "pitfalls": "Missing an ON clause creates a Cartesian product (CROSS JOIN) multiplying every row.",
      "content": "SELECT \n    u.username,\n    o.order_id,\n    o.total_amount\nFROM users u\nINNER JOIN orders o ON u.user_id = o.user_id\nWHERE o.status = 'completed';",
      "expectedOutput": " username | order_id | total_amount \n----------+----------+--------------\n alex_dev |     9041 |       124.50\n sarah_c  |     9042 |        89.00\n(2 rows returned)"
    },
    {
      "id": "sql-08-window-functions",
      "level": 8,
      "filename": "08_window_functions.sql",
      "title": "08. Algorithm: Window Functions (ROW_NUMBER)",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Calculate rankings across partitioned rows without collapsing rows using window functions.",
      "concept": "Window functions perform calculations across related row sets while retaining individual row identity.",
      "whyItMatters": "Window functions compute rolling averages, running totals, and leaderboards without self-joins.",
      "underTheHood": "The engine sorts partitions in memory and streams through rows, evaluating expressions per window frame.",
      "keyTips": [
        "OVER (PARTITION BY dept ORDER BY salary DESC) defines the window frame.",
        "ROW_NUMBER() assigns sequential integers 1, 2, 3... per partition.",
        "RANK() and DENSE_RANK() handle ties gracefully."
      ],
      "pitfalls": "Window functions are only allowed in SELECT and ORDER BY; not in WHERE clauses.",
      "content": "SELECT \n    employee_id,\n    department,\n    salary,\n    ROW_NUMBER() OVER (\n        PARTITION BY department \n        ORDER BY salary DESC\n    ) AS salary_rank\nFROM employees;",
      "expectedOutput": " employee_id | department  |  salary   | salary_rank \n-------------+-------------+-----------+-------------\n        1004 | Engineering | 145000.00 |           1\n        1001 | Engineering | 120000.00 |           2\n(2 rows returned)"
    },
    {
      "id": "sql-09-cte",
      "level": 9,
      "filename": "09_common_table_expressions.sql",
      "title": "09. Common Table Expressions (WITH CTE)",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Structure complex multi-step queries using Common Table Expressions (WITH CTE).",
      "concept": "A Common Table Expression (CTE) defines a named temporary result set within a single query execution.",
      "whyItMatters": "CTEs eliminate deeply nested subqueries, making data transformation pipelines readable and modular.",
      "underTheHood": "Modern database optimizers can inline or materialize CTEs to optimize overall execution plans.",
      "keyTips": [
        "Syntax: WITH cte_name AS (SELECT ...) SELECT ... FROM cte_name;.",
        "Chain multiple CTEs separated by commas: WITH a AS (...), b AS (...).",
        "Supports RECURSIVE CTEs for traversing tree and graph structures."
      ],
      "pitfalls": "A CTE is only scoped to the single query immediately following it.",
      "content": "WITH high_value_orders AS (\n    SELECT \n        user_id,\n        SUM(total_amount) AS total_spent\n    FROM orders\n    GROUP BY user_id\n    HAVING SUM(total_amount) > 100.00\n)\nSELECT \n    u.username,\n    hvo.total_spent\nFROM users u\nINNER JOIN high_value_orders hvo ON u.user_id = hvo.user_id\nORDER BY hvo.total_spent DESC;",
      "expectedOutput": " username | total_spent \n----------+-------------\n alex_dev |      250.75\n sarah_c  |      189.00\n(2 rows returned)"
    }
  ],
  "bash": [
    {
      "id": "bash-01-echo",
      "level": 1,
      "filename": "deploy.sh",
      "title": "01. Shell Scripts & Echo",
      "category": "Basics",
      "difficulty": "Easy",
      "task": "Write a basic shell script with shebang and console output.",
      "concept": "The #!/usr/bin/env bash shebang directs the operating system to invoke the Bash shell interpreter.",
      "whyItMatters": "Bash is the universal interface to Unix/Linux operating systems, CI/CD pipelines, and cloud containers.",
      "underTheHood": "When invoked, the kernel reads the #! bytes, resolves the interpreter path, and forks a subshell process.",
      "keyTips": [
        "Always start with #!/usr/bin/env bash on line 1.",
        "echo outputs strings to standard output with an automatic newline.",
        "Make scripts executable with chmod +x script.sh."
      ],
      "pitfalls": "Missing the shebang line can cause scripts to execute with incompatible system default shells.",
      "content": "#!/usr/bin/env bash\necho \"Hello, World!\"\necho \"Bash 5.2 - Shell Scripting & DevOps Automation\"",
      "expectedOutput": "Hello, World!\nBash 5.2 - Shell Scripting & DevOps Automation"
    },
    {
      "id": "bash-02-variables",
      "level": 2,
      "filename": "variables.sh",
      "title": "02. Shell Variables & Expansion",
      "category": "Variables",
      "difficulty": "Easy",
      "task": "Declare environment and local variables and interpolate them using parameter expansion.",
      "concept": "Shell variables store string values. Reference variables with ${VAR_NAME}.",
      "whyItMatters": "Environment variables configure applications across Kubernetes pods, Dockerfiles, and CI jobs.",
      "underTheHood": "Bash variables are untyped character strings stored in the process environment block.",
      "keyTips": [
        "NO spaces around the = assignment operator: VAR=\"val\" (NOT VAR = \"val\").",
        "Wrap variable references in braces: ${VAR_NAME}.",
        "Quote variables inside strings to prevent word splitting: \"${VAR}\"."
      ],
      "pitfalls": "Adding spaces around the equal sign: NAME = \"test\" fails because bash treats NAME as an executable command.",
      "content": "#!/usr/bin/env bash\nUSERNAME=\"alex_dev\"\nUSER_ID=1042\nBALANCE=\"250.75\"\nIS_ACTIVE=true\n\necho \"User: ${USERNAME} (ID: ${USER_ID})\"\necho \"Balance: \\$${BALANCE} | Active: ${IS_ACTIVE}\"",
      "expectedOutput": "User: alex_dev (ID: 1042)\nBalance: $250.75 | Active: true"
    },
    {
      "id": "bash-03-conditionals",
      "level": 3,
      "filename": "conditionals.sh",
      "title": "03. If Conditionals & Test Brackets",
      "category": "Control Flow",
      "difficulty": "Easy",
      "task": "Branch execution paths using if, elif, else, and numeric test operators in Bash.",
      "concept": "[ ... ] and [[ ... ]] evaluate test expressions to determine zero (success) or non-zero return codes.",
      "whyItMatters": "Conditionals drive deployment gates, health checks, and build scripts.",
      "underTheHood": "In Unix shells, exit code 0 represents true/success; non-zero codes represent false/failure.",
      "keyTips": [
        "Numeric comparison operators: -ge (>=), -gt (>), -le (<=), -lt (<), -eq (==).",
        "Always leave spaces inside brackets: [ \"$score\" -ge 80 ].",
        "Close if statements with fi."
      ],
      "pitfalls": "Missing spaces inside brackets: [\"$score\"-ge 80] triggers command not found syntax error.",
      "content": "#!/usr/bin/env bash\nSCORE=88\n\nif [ \"$SCORE\" -ge 90 ]; then\n    GRADE=\"A\"\nelif [ \"$SCORE\" -ge 80 ]; then\n    GRADE=\"B\"\nelif [ \"$SCORE\" -ge 70 ]; then\n    GRADE=\"C\"\nelse\n    GRADE=\"F\"\nfi\n\necho \"Exam Score: ${SCORE} -> Final Grade: ${GRADE}\"",
      "expectedOutput": "Exam Score: 88 -> Final Grade: B"
    },
    {
      "id": "bash-04-loops",
      "level": 4,
      "filename": "loops.sh",
      "title": "04. For Loops & Sequence Iteration",
      "category": "Loops",
      "difficulty": "Easy",
      "task": "Iterate over ranges and accumulate sums using Bash for loops and arithmetic expansion.",
      "concept": "for loops iterate through words or brace expansion ranges ({1..5}). $((...)) performs arithmetic.",
      "whyItMatters": "Loops automate batch file conversions, server health checks, and retry routines.",
      "underTheHood": "$((expression)) invokes the internal 64-bit shell arithmetic evaluator without external forks.",
      "keyTips": [
        "Brace expansion: for NUM in {1..5}; do ... done.",
        "Arithmetic expansion: TOTAL=$((TOTAL + NUM)).",
        "C-style for loop is also supported: for ((i=1; i<=5; i++))."
      ],
      "pitfalls": "Writing TOTAL=TOTAL+NUM performs string concatenation; you must use $((...)).",
      "content": "#!/usr/bin/env bash\nTOTAL_SUM=0\n\nfor NUM in {1..5}; do\n    TOTAL_SUM=$((TOTAL_SUM + NUM))\n    echo \"Adding ${NUM} -> Running Total: ${TOTAL_SUM}\"\ndone\n\necho \"Final Sum: ${TOTAL_SUM}\"",
      "expectedOutput": "Adding 1 -> Running Total: 1\nAdding 2 -> Running Total: 3\nAdding 3 -> Running Total: 6\nAdding 4 -> Running Total: 10\nAdding 5 -> Running Total: 15\nFinal Sum: 15"
    },
    {
      "id": "bash-05-functions",
      "level": 5,
      "filename": "functions.sh",
      "title": "05. Shell Functions & Return Values",
      "category": "Functions",
      "difficulty": "Medium",
      "task": "Declare modular shell functions with positional arguments ($1, $2) and stdout returns.",
      "concept": "Functions group commands. Arguments are accessed via positional parameters $1, $2... Output is captured with command substitution.",
      "whyItMatters": "Modular functions turn sprawling shell scripts into organized, readable automation suites.",
      "underTheHood": "Functions execute within the current subshell process, allowing fast execution without subshell overhead.",
      "keyTips": [
        "Define function: calculate_discount() { ... }.",
        "Positional parameters: $1 is first argument, $2 is second.",
        "Use local keyword to scope variables locally: local price=$1."
      ],
      "pitfalls": "Omitting local makes variables global across the entire shell session.",
      "content": "#!/usr/bin/env bash\ncalculate_discount() {\n    local price=$1\n    local discount_pct=$2\n    local discount_amt=$((price * discount_pct / 100))\n    echo $((price - discount_amt))\n}\n\nORIGINAL=120\nSAVED=$(calculate_discount $ORIGINAL 15)\necho \"Original: \\$${ORIGINAL}.00 with 15% off = \\$${SAVED}.00\"",
      "expectedOutput": "Original: $120.00 with 15% off = $102.00"
    },
    {
      "id": "bash-06-arrays",
      "level": 6,
      "filename": "arrays.sh",
      "title": "06. Indexed Arrays & Slicing",
      "category": "Data Structures",
      "difficulty": "Medium",
      "task": "Declare indexed arrays and inspect element counts in Bash.",
      "concept": "Indexed arrays store ordered lists of strings. Access length with ${#array[@]}.",
      "whyItMatters": "Arrays hold file lists, server hosts, and command line flags in shell automation.",
      "underTheHood": "Bash arrays are zero-indexed sparse lists of strings allocated in memory.",
      "keyTips": [
        "Declare array: SERVERS=(\"web-01\" \"db-01\" \"cache-01\").",
        "Access element: ${SERVERS[0]}.",
        "Element count: ${#SERVERS[@]}."
      ],
      "pitfalls": "Writing $SERVERS without index [0] returns only the first element.",
      "content": "#!/usr/bin/env bash\nSERVERS=(\"web-prod-01\" \"db-prod-01\" \"redis-cache-01\")\n\necho \"Monitored Nodes: ${#SERVERS[@]}\"\necho \"Primary Node: ${SERVERS[0]}\"",
      "expectedOutput": "Monitored Nodes: 3\nPrimary Node: web-prod-01"
    },
    {
      "id": "bash-07-pipes",
      "level": 7,
      "filename": "pipes.sh",
      "title": "07. Unix Pipelines & Stream Redirection",
      "category": "OOP",
      "difficulty": "Medium",
      "task": "Chain commands using Unix pipes (|) and command substitution.",
      "concept": "Pipes connect the stdout of one process directly into the stdin of the next process.",
      "whyItMatters": "The Unix philosophy: write small programs that do one thing well and compose them with pipes.",
      "underTheHood": "A pipe is a kernel circular byte buffer connecting file descriptors between forked child processes.",
      "keyTips": [
        "Pipe operator | passes stdout to stdin.",
        "Redirect output to file: > (overwrite) or >> (append).",
        "grep filters lines; awk processes columns."
      ],
      "pitfalls": "By default, a pipeline returns the exit code of the LAST command. Use set -o pipefail to catch failures earlier.",
      "content": "#!/usr/bin/env bash\nLOG_DATA=\"2026-11-01 INFO auth_success\\n2026-11-01 ERROR db_timeout\\n2026-11-01 INFO cache_hit\"\n\nERROR_COUNT=$(echo -e \"$LOG_DATA\" | grep -c \"ERROR\")\necho \"System Audit Complete.\"\necho \"Error Count: ${ERROR_COUNT}\"",
      "expectedOutput": "System Audit Complete.\nError Count: 1"
    },
    {
      "id": "bash-08-bubble-sort",
      "level": 8,
      "filename": "bubble_sort.sh",
      "title": "08. Algorithm: Bubble Sort in Shell",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement in-place Bubble Sort on an array in Bash.",
      "concept": "Bubble Sort repeatedly steps through the array, compares adjacent items, and swaps them if disordered.",
      "whyItMatters": "Demonstrates complex algorithmic control flow, nested loops, and array manipulation in pure shell script.",
      "underTheHood": "Arithmetic comparisons inside (( ... )) execute with minimal shell parsing overhead.",
      "keyTips": [
        "Use C-style loops: for ((i=0; i<n; i++)).",
        "Temporary variable swap: temp=${arr[j]}; arr[j]=${arr[j+1]}; arr[j+1]=$temp.",
        "Inner bound: n - i - 1."
      ],
      "pitfalls": "Ensure variable expansions inside arithmetic evaluations do not trigger word splitting.",
      "content": "#!/usr/bin/env bash\nbubble_sort() {\n    local -n arr=$1\n    local n=${#arr[@]}\n    for ((i=0; i<n; i++)); do\n        for ((j=0; j<n-i-1; j++)); do\n            if [ \"${arr[j]}\" -gt \"${arr[j+1]}\" ]; then\n                local temp=${arr[j]}\n                arr[j]=${arr[j+1]}\n                arr[j+1]=$temp\n            fi\n        done\n    done\n}\n\nNUMBERS=(64 34 25 12 22 11 90)\nbubble_sort NUMBERS\necho \"Sorted List: [${NUMBERS[*]}]\"",
      "expectedOutput": "Sorted List: [11 12 22 25 34 64 90]"
    },
    {
      "id": "bash-09-binary-search",
      "level": 9,
      "filename": "binary_search.sh",
      "title": "09. Algorithm: Binary Search in Shell",
      "category": "Algorithms",
      "difficulty": "Hard",
      "task": "Implement Binary Search on a sorted array in pure Bash.",
      "concept": "Binary Search halves the search space each step to locate an item in O(log n) time.",
      "whyItMatters": "Proves that binary search algorithms can be cleanly expressed in any Turing-complete environment.",
      "underTheHood": "Calculates midpoints using shell integer arithmetic $(( (low + high) / 2 )).",
      "keyTips": [
        "Input array must be sorted in ascending order.",
        "mid calculation: mid=$(( (low + high) / 2 )).",
        "Return matching index or -1."
      ],
      "pitfalls": "Always quote array expansions and variables inside comparisons: [ \"$val\" -eq \"$target\" ].",
      "content": "#!/usr/bin/env bash\nbinary_search() {\n    local target=$1\n    shift\n    local arr=(\"$@\")\n    local low=0\n    local high=$((${#arr[@]} - 1))\n\n    while [ \"$low\" -le \"$high\" ]; do\n        local mid=$(( (low + high) / 2 ))\n        if [ \"${arr[mid]}\" -eq \"$target\" ]; then\n            echo \"$mid\"\n            return 0\n        elif [ \"${arr[mid]}\" -lt \"$target\" ]; then\n            low=$((mid + 1))\n        else\n            high=$((mid - 1))\n        fi\n    done\n    echo \"-1\"\n}\n\nITEMS=(10 20 30 40 50 60 70)\nIDX=$(binary_search 40 \"${ITEMS[@]}\")\necho \"Target 40 found at index: ${IDX}\"",
      "expectedOutput": "Target 40 found at index: 3"
    }
  ]
};
