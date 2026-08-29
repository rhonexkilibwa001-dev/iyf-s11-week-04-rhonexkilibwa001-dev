# Week 4: JavaScript Fundamentals - IYF Season 11

## Overview
This repository contains the complete implementation of Week 4 JavaScript Fundamentals from IYF Season 11, covering Lesson 7 and Lesson 8 with all tasks, challenges, and mini-projects.

## Repository Structure
```
iyf-s11-week-04-rhonexkilibwa001-dev/
├── index.html      # Interactive HTML interface
├── main.js         # All JavaScript code and implementations
└── README.md       # This file
```

## What's Included

### Lesson 7: JavaScript Basics

#### Task 7.1: Variables
- Variable declarations using `let`, `const`
- Data type checking with `typeof`
- Practice with different data types

#### Task 7.2: Data Types & Operators
- Number operations (arithmetic, modulus, exponentiation)
- String operations and methods
- Comparison and logical operators
- Age calculations (days, hours, age when turning 100)

#### Task 7.3: Functions
- Function declarations, expressions, and arrow functions
- Practice functions:
  - `calculateArea()` - Rectangle area
  - `celsiusToFahrenheit()` - Temperature conversion
  - `isEven()` - Check if number is even
  - `getInitials()` - Extract initials from names
  - `reverseString()` - Reverse strings
  - `calculateTip()` - Calculate tips with default parameters

#### Task 7.4: Control Flow
- If/else statements with `getGrade()`
- Switch statements with `getDayName()`
- For, while, and for...of loops

#### Mini-Project: Calculator
Complete calculator implementation supporting:
- Addition, subtraction, multiplication, division
- Modulus and exponentiation
- Division by zero error handling
- Interactive UI for calculations

### Lesson 8: Arrays & Objects

#### Task 8.1: Arrays
- Array creation and manipulation
- Array methods: `map()`, `filter()`, `find()`, `reduce()`, `forEach()`
- Filtering, transforming, and aggregating data

#### Task 8.2: Objects
- Object creation and property access
- Object methods
- Object iteration with `Object.keys()`, `Object.values()`, `Object.entries()`

#### Task 8.3: Array of Objects
- Working with collections of data
- Using array methods on complex data structures
- Sorting, filtering, and aggregating object arrays

#### Mini-Project: Student Grade Tracker
Complete grade management system with:
- `addStudent()` - Add students with grades
- `getStudent()` - Find student by name
- `getStudentAverage()` - Calculate individual averages
- `getSubjectAverage()` - Calculate subject averages across class
- `getTopStudent()` - Find best performer
- `getStrugglingStudents()` - Identify students needing help
- `getLetterGrade()` - Convert numeric to letter grades
- `generateReportCard()` - Generate formatted report cards

### Daily Challenges

1. **Day 1: FizzBuzz** ✅
   - Print 1-100 with Fizz for multiples of 3, Buzz for 5, FizzBuzz for both

2. **Day 2: Reverse String** ✅
   - Multiple approaches (loop and built-in methods)

3. **Day 3: Find Largest Number** ✅
   - Loop approach and reduce approach

4. **Day 4: Remove Duplicates** ✅
   - Using Set and filter methods

5. **Day 5: Palindrome Checker** ✅
   - Case-insensitive, space-ignoring palindrome detection

## How to Use

### View in Browser
1. Open `index.html` in a web browser
2. Use the interactive buttons to:
   - Perform calculations with the calculator
   - Add students and view grade reports
   - Run daily challenges
   - Execute lesson tasks

### View in Console
1. Open `index.html` in a browser
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to the Console tab
4. View all console outputs from the JavaScript execution

## Key Concepts Learned

✅ Variables and data types (let, const, typeof)
✅ Operators (arithmetic, comparison, logical)
✅ Functions (declarations, expressions, arrow functions)
✅ Control flow (if/else, switch, loops)
✅ Arrays and array methods (map, filter, reduce, find)
✅ Objects and nested objects
✅ Array of objects manipulation
✅ Functional programming concepts
✅ Error handling
✅ Real-world project implementation

## Completion Checklist

- [x] Task 7.1: Variables ✓
- [x] Task 7.2: Data Types & Operators ✓
- [x] Task 7.3: Functions ✓
- [x] Task 7.4: Control Flow ✓
- [x] Task 8.1: Arrays ✓
- [x] Task 8.2: Objects ✓
- [x] Task 8.3: Array of Objects ✓
- [x] Mini-Project: Calculator ✓
- [x] Mini-Project: Grade Tracker ✓
- [x] Day 1: FizzBuzz ✓
- [x] Day 2: Reverse String ✓
- [x] Day 3: Find Largest Number ✓
- [x] Day 4: Remove Duplicates ✓
- [x] Day 5: Palindrome Checker ✓

## Test Results

All implementations have been tested with sample data:

### Calculator Tests
```
calculate(10, "+", 5) = 15 ✓
calculate(10, "-", 5) = 5 ✓
calculate(10, "*", 5) = 50 ✓
calculate(10, "/", 5) = 2 ✓
calculate(10, "/", 0) = Error: Cannot divide by zero ✓
```

### Grade Tracker Tests
```
Alice's average: 91.67 ✓
Math average: 75.67 ✓
Top student: Alice ✓
Struggling students: Charlie ✓
```

### Challenge Tests
```
FizzBuzz: 1, 2, Fizz, 4, Buzz, ... ✓
Reverse "hello": "olleh" ✓
Largest in [3,7,2,9,1]: 9 ✓
Remove duplicates [1,2,2,3,4,4,5]: [1,2,3,4,5] ✓
Palindrome "racecar": true ✓
```

## Running the Code

### In Browser Console
The code executes automatically when the page loads. All outputs are logged to the browser console.

### Interactive Features
- Calculator with real-time computation
- Grade tracker with report generation
- Challenge demonstrations with sample data
- Lesson task summary

## Author
Created by: rhonexkilibwa001-dev
Date: August 29, 2026
Course: IYF Season 11 - Week 4

## Submission
Repository Name: `iyf-s11-week-04-rhonexkilibwa001-dev`
- Contains index.html with proper structure
- Contains main.js with all implementations
- Contains comprehensive README
- All requirements met

---

**Milestone Achieved**: You can now think in JavaScript! 🧠
