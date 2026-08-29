// ===========================
// LESSON 7: JAVASCRIPT BASICS
// ===========================

// Task 7.1: JavaScript Setup & Variables
console.log("=== TASK 7.1: Variables ===");
let name = "Rhone";
let age = 22;
const birthYear = 2002;
let isStudent = true;
let favoriteColors = ["blue", "green", "purple"];
let today = new Date();

console.log(`Name: ${name} (${typeof name})`);
console.log(`Age: ${age} (${typeof age})`);
console.log(`Birth Year: ${birthYear} (${typeof birthYear})`);
console.log(`Is Student: ${isStudent} (${typeof isStudent})`);
console.log(`Favorite Colors: ${favoriteColors} (${typeof favoriteColors})`);
console.log(`Today's Date: ${today}`);

// Task 7.2: Data Types & Operators
console.log("\n=== TASK 7.2: Data Types & Operators ===");

// Number operations
let a = 10;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

let count = 0;
count++;
console.log(`After increment: ${count}`);
count--;
console.log(`After decrement: ${count}`);

// String operations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(`Full Name: ${fullName}`);
console.log(`Greeting: ${greeting}`);
console.log(`Message: ${message}`);
console.log(`Uppercase: ${fullName.toUpperCase()}`);
console.log(`Lowercase: ${fullName.toLowerCase()}`);
console.log(`First character: ${firstName.charAt(0)}`);
console.log(`Includes "John": ${fullName.includes("John")}`);

// Comparison & Logical operators
console.log("\n--- Comparison Operators ---");
console.log(`5 > 3: ${5 > 3}`);
console.log(`5 < 3: ${5 < 3}`);
console.log(`5 === 5: ${5 === 5}`);
console.log(`5 == "5": ${5 == "5"}`);
console.log(`5 !== 3: ${5 !== 3}`);

console.log("\n--- Logical Operators ---");
console.log(`true && true: ${true && true}`);
console.log(`true || false: ${true || false}`);
console.log(`!true: ${!true}`);

// Challenge calculations
let ageInDays = age * 365.25;
let ageInHours = age * 365.25 * 24;
let ageWhenTurning100 = 100 - age + new Date().getFullYear();

console.log(`\nAge in days: ${Math.floor(ageInDays)}`);
console.log(`Age in hours: ${Math.floor(ageInHours)}`);
console.log(`Will turn 100 in year: ${ageWhenTurning100}`);

// Task 7.3: Functions
console.log("\n=== TASK 7.3: Functions ===");

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    const parts = fullName.split(" ");
    return parts.map(part => part[0]).join("").toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log(greet("Alice"));
console.log(`add(5, 3): ${add(5, 3)}`);
console.log(`multiply(4, 5): ${multiply(4, 5)}`);
console.log(`divide(10, 2): ${divide(10, 2)}`);
console.log(`divide(10, 0): ${divide(10, 0)}`);
console.log(`calculateArea(5, 10): ${calculateArea(5, 10)}`);
console.log(`celsiusToFahrenheit(25): ${celsiusToFahrenheit(25)}`);
console.log(`isEven(4): ${isEven(4)}`);
console.log(`isEven(5): ${isEven(5)}`);
console.log(`getInitials("John Doe"): ${getInitials("John Doe")}`);
console.log(`reverseString("hello"): ${reverseString("hello")}`);
console.log(`calculateTip(100): ${calculateTip(100)}`);
console.log(`calculateTip(100, 20): ${calculateTip(100, 20)}`);

// Task 7.4: Control Flow
console.log("\n=== TASK 7.4: Control Flow ===");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(`Grade for 85: ${getGrade(85)}`);
console.log(`Grade for 95: ${getGrade(95)}`);
console.log(`Day 3: ${getDayName(3)}`);

// Mini-Project: Calculator
console.log("\n=== MINI-PROJECT: CALCULATOR ===");

function subtract(a, b) {
    return a - b;
}

function calcMultiply(a, b) {
    return a * b;
}

function calcDivide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calcModulus(a, b) {
    return a % b;
}

function calcPower(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return calcMultiply(num1, num2);
        case "/":
            return calcDivide(num1, num2);
        case "%":
            return calcModulus(num1, num2);
        case "**":
            return calcPower(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(`calculate(10, "+", 5): ${calculate(10, "+", 5)}`);
console.log(`calculate(10, "-", 5): ${calculate(10, "-", 5)}`);
console.log(`calculate(10, "*", 5): ${calculate(10, "*", 5)}`);
console.log(`calculate(10, "/", 5): ${calculate(10, "/", 5)}`);
console.log(`calculate(10, "/", 0): ${calculate(10, "/", 0)}`);
console.log(`calculate(10, "%", 3): ${calculate(10, "%", 3)}`);
console.log(`calculate(2, "**", 5): ${calculate(2, "**", 5)}`);

// ===========================
// LESSON 8: ARRAYS & OBJECTS
// ===========================

console.log("\n=== LESSON 8: ARRAYS & OBJECTS ===");

// Task 8.1: Arrays
console.log("\n--- TASK 8.1: Arrays ---");

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(`Fruits: ${fruits}`);
console.log(`First fruit: ${fruits[0]}`);
console.log(`Fruits length: ${fruits.length}`);

fruits.push("grape");
console.log(`After push: ${fruits}`);

fruits.unshift("mango");
console.log(`After unshift: ${fruits}`);

fruits.pop();
console.log(`After pop: ${fruits}`);

fruits.shift();
console.log(`After shift: ${fruits}`);

// Array methods
console.log("\n--- Array Methods ---");

numbers.forEach(num => console.log(`num: ${num}`));

const doubled = numbers.map(num => num * 2);
console.log(`Doubled: ${doubled}`);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(`First even: ${firstEven}`);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Sum: ${sum}`);

const product = numbers.reduce((total, num) => total * num, 1);
console.log(`Product: ${product}`);

console.log(`Includes 3: ${numbers.includes(3)}`);

// Remove negatives
const withNegatives = [1, -2, 3, -4, 5];
const positive = withNegatives.filter(num => num > 0);
console.log(`Positive numbers: ${positive}`);

const firstGreater = numbers.find(num => num > 3);
console.log(`First number > 3: ${firstGreater}`);

// Task 8.2: Objects
console.log("\n--- TASK 8.2: Objects ---");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(`First name: ${person.firstName}`);
console.log(`Last name: ${person["lastName"]}`);
console.log(`City: ${person.address.city}`);

person.age = 31;
person.email = "john@example.com";
console.log(`Updated age: ${person.age}`);
console.log(`Email added: ${person.email}`);

delete person.isStudent;
console.log(`Is student property deleted`);

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(`calculator.add(5, 3): ${calculator.add(5, 3)}`);
console.log(`calculator.subtract(5, 3): ${calculator.subtract(5, 3)}`);
console.log(`calculator.multiply(5, 3): ${calculator.multiply(5, 3)}`);

const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(`Keys: ${Object.keys(scores)}`);
console.log(`Values: ${Object.values(scores)}`);
console.log(`Entries: ${JSON.stringify(Object.entries(scores))}`);

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// Task 8.3: Array of Objects
console.log("\n--- TASK 8.3: Array of Objects ---");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
console.log(`All names: ${names}`);

const highAchievers = students.filter(s => s.grade > 80);
console.log(`High achievers: ${highAchievers.map(s => s.name).join(", ")}`);

const charlie = students.find(s => s.name === "Charlie");
console.log(`Charlie found: ${charlie ? charlie.name : "Not found"}`);

const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(`Average grade: ${avgGrade.toFixed(2)}`);

const csMajors = students.filter(s => s.major === "CS");
console.log(`CS majors: ${csMajors.map(s => s.name).join(", ")}`);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(`Sorted by grade: ${sortedByGrade.map(s => `${s.name}(${s.grade})`).join(", ")}`);

const hasTopStudent = students.some(s => s.grade > 90);
console.log(`Has student with grade > 90: ${hasTopStudent}`);

const allPassing = students.every(s => s.grade >= 60);
console.log(`All students passing: ${allPassing}`);

// Mini-Project: Student Grade Tracker
console.log("\n=== MINI-PROJECT: STUDENT GRADE TRACKER ===");

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const gradeValues = Object.values(student.grades);
        const sum = gradeValues.reduce((a, b) => a + b, 0);
        return sum / gradeValues.length;
    },
    
    getSubjectAverage(subject) {
        const grades = this.students
            .map(s => s.grades[subject])
            .filter(g => g !== undefined);
        if (grades.length === 0) return 0;
        return grades.reduce((a, b) => a + b, 0) / grades.length;
    },
    
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, current) => {
            const topAvg = this.getStudentAverage(top.name);
            const currentAvg = this.getStudentAverage(current.name);
            return currentAvg > topAvg ? current : top;
        });
    },
    
    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },
    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        
        const avg = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(avg);
        
        let report = `\n📋 REPORT CARD FOR ${student.name.toUpperCase()}\n`;
        report += "=".repeat(40) + "\n";
        
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        
        report += "-".repeat(40) + "\n";
        report += `Average: ${avg.toFixed(2)} (${letterGrade})\n`;
        
        return report;
    }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(`Alice's average: ${gradeTracker.getStudentAverage("Alice").toFixed(2)}`);
console.log(`Math average: ${gradeTracker.getSubjectAverage("math").toFixed(2)}`);
console.log(`Top student: ${gradeTracker.getTopStudent().name}`);
console.log(`Struggling students: ${gradeTracker.getStrugglingStudents().map(s => s.name).join(", ")}`);
console.log(gradeTracker.generateReportCard("Alice"));

// ===========================
// DAILY CHALLENGES
// ===========================

console.log("\n=== DAILY CHALLENGES ===");

// Day 1: FizzBuzz
function fizzBuzz() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log("--- Day 1: FizzBuzz ---");
const fizzBuzzResult = fizzBuzz();
console.log(fizzBuzzResult.slice(0, 20).join(", ") + "...");

// Day 2: Reverse String
function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("\n--- Day 2: Reverse String ---");
console.log(`"hello" reversed: ${reverseStringLoop("hello")}`);
console.log(`"JavaScript" reversed: ${reverseStringLoop("JavaScript")}`);

// Day 3: Find Largest Number
function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function findLargestReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max);
}

console.log("\n--- Day 3: Find Largest Number ---");
const testArray = [3, 7, 2, 9, 1, 5];
console.log(`Array: ${testArray}`);
console.log(`Largest (loop): ${findLargestLoop(testArray)}`);
console.log(`Largest (reduce): ${findLargestReduce(testArray)}`);

// Day 4: Remove Duplicates
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log("\n--- Day 4: Remove Duplicates ---");
const dupArray = [1, 2, 2, 3, 4, 4, 5];
console.log(`Original: ${dupArray}`);
console.log(`With Set: ${removeDuplicatesSet(dupArray)}`);
console.log(`With filter: ${removeDuplicatesFilter(dupArray)}`);

// Day 5: Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log("\n--- Day 5: Palindrome Checker ---");
console.log(`"racecar" is palindrome: ${isPalindrome("racecar")}`);
console.log(`"hello" is palindrome: ${isPalindrome("hello")}`);
console.log(`"A man a plan a canal Panama" is palindrome: ${isPalindrome("A man a plan a canal Panama")}`);

console.log("\n✅ ALL TASKS COMPLETE!");
console.log("Open the HTML file in a browser to see the interactive UI");

// ===========================
// UI FUNCTIONS
// ===========================

function performCalculation() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calculatorOutput").textContent = "Please enter valid numbers";
        return;
    }
    
    const result = calculate(num1, operator, num2);
    const output = `${num1} ${operator} ${num2} = ${result}`;
    document.getElementById("calculatorOutput").textContent = output;
}

function addStudentUI() {
    const name = document.getElementById("studentName").value;
    const math = parseFloat(document.getElementById("mathGrade").value);
    const english = parseFloat(document.getElementById("englishGrade").value);
    const science = parseFloat(document.getElementById("scienceGrade").value);
    
    if (!name || isNaN(math) || isNaN(english) || isNaN(science)) {
        document.getElementById("gradeOutput").textContent = "Please fill in all fields";
        return;
    }
    
    gradeTracker.addStudent(name, { math, english, science });
    
    const output = `✅ Added ${name}\nMath: ${math}, English: ${english}, Science: ${science}`;
    document.getElementById("gradeOutput").textContent = output;
    
    document.getElementById("studentName").value = "";
    document.getElementById("mathGrade").value = "";
    document.getElementById("englishGrade").value = "";
    document.getElementById("scienceGrade").value = "";
}

function showAllReports() {
    if (gradeTracker.students.length === 0) {
        document.getElementById("gradeOutput").textContent = "No students added yet";
        return;
    }
    
    let output = "";
    for (const student of gradeTracker.students) {
        output += gradeTracker.generateReportCard(student.name);
    }
    
    output += "\n📊 CLASS STATISTICS\n";
    output += "=".repeat(40) + "\n";
    output += `Total Students: ${gradeTracker.students.length}\n`;
    output += `Top Student: ${gradeTracker.getTopStudent().name}\n`;
    output += `Math Average: ${gradeTracker.getSubjectAverage("math").toFixed(2)}\n`;
    output += `English Average: ${gradeTracker.getSubjectAverage("english").toFixed(2)}\n`;
    output += `Science Average: ${gradeTracker.getSubjectAverage("science").toFixed(2)}\n`;
    
    if (gradeTracker.getStrugglingStudents().length > 0) {
        output += `\n⚠️ Struggling Students: ${gradeTracker.getStrugglingStudents().map(s => s.name).join(", ")}\n`;
    }
    
    document.getElementById("gradeOutput").textContent = output;
}

function runFizzBuzz() {
    const result = fizzBuzz().join("\n");
    document.getElementById("challengeOutput").textContent = result;
}

function runStringReverse() {
    const testStrings = ["hello", "JavaScript", "Week 4"];
    let output = "STRING REVERSAL\n" + "=".repeat(40) + "\n";
    for (const str of testStrings) {
        output += `"${str}" → "${reverseStringLoop(str)}"\n`;
    }
    document.getElementById("challengeOutput").textContent = output;
}

function runLargestNumber() {
    const testArrays = [[3, 7, 2, 9, 1], [100, 50, 200, 30]];
    let output = "FIND LARGEST NUMBER\n" + "=".repeat(40) + "\n";
    for (const arr of testArrays) {
        output += `${arr} → ${findLargestLoop(arr)}\n`;
    }
    document.getElementById("challengeOutput").textContent = output;
}

function runRemoveDuplicates() {
    const testArrays = [[1, 2, 2, 3, 4, 4, 5], [1, 1, 1, 2, 2, 3]];
    let output = "REMOVE DUPLICATES\n" + "=".repeat(40) + "\n";
    for (const arr of testArrays) {
        output += `${arr}\n→ ${removeDuplicatesSet(arr)}\n\n`;
    }
    document.getElementById("challengeOutput").textContent = output;
}

function runPalindromeChecker() {
    const testStrings = ["racecar", "hello", "A man a plan a canal Panama", "level", "world"];
    let output = "PALINDROME CHECKER\n" + "=".repeat(40) + "\n";
    for (const str of testStrings) {
        output += `"${str}" → ${isPalindrome(str) ? "✅ YES" : "❌ NO"}\n`;
    }
    document.getElementById("challengeOutput").textContent = output;
}

function runLessonTasks() {
    let output = "=== LESSON 7: JAVASCRIPT BASICS ===\n\n";
    
    output += "VARIABLES\n";
    output += `Name: ${name}\nAge: ${age}\nBirth Year: ${birthYear}\n\n`;
    
    output += "OPERATORS\n";
    output += `10 + 3 = ${calculate(10, "+", 3)}\n`;
    output += `10 - 3 = ${calculate(10, "-", 3)}\n`;
    output += `10 * 3 = ${calculate(10, "*", 3)}\n`;
    output += `10 / 3 = ${calculate(10, "/", 3).toFixed(2)}\n\n`;
    
    output += "FUNCTIONS\n";
    output += `Area of 5x10 rectangle: ${calculateArea(5, 10)}\n`;
    output += `25°C in Fahrenheit: ${celsiusToFahrenheit(25).toFixed(2)}°F\n`;
    output += `Is 4 even? ${isEven(4)}\n\n`;
    
    output += "CONTROL FLOW\n";
    output += `Grade for 85: ${getGrade(85)}\n`;
    output += `Day 3 name: ${getDayName(3)}\n\n";
    
    output += "=== LESSON 8: ARRAYS & OBJECTS ===\n\n";
    
    output += "ARRAYS\n";
    output += `Numbers: ${numbers}\n`;
    output += `Doubled: ${numbers.map(n => n * 2)}\n`;
    output += `Even: ${numbers.filter(n => n % 2 === 0)}\n`;
    output += `Sum: ${numbers.reduce((a, b) => a + b, 0)}\n\n`;
    
    output += "OBJECTS\n";
    output += `Person name: ${person.firstName} ${person.lastName}\n`;
    output += `Person age: ${person.age}\n`;
    output += `Person city: ${person.address.city}\n\n`;
    
    output += "ARRAYS OF OBJECTS\n";
    output += `Total students: ${students.length}\n`;
    output += `Average grade: ${(students.reduce((sum, s) => sum + s.grade, 0) / students.length).toFixed(2)}\n`;
    
    document.getElementById("lessonOutput").textContent = output;
}
