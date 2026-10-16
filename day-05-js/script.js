// Question 1
let studentName = "Rahim";
let age = 20;
let grade = "A";

console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Grade: " + grade);


// Question 2
let num1 = 20;
let num2 = 5;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));


// Question 3
let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Question 4
let a = 15;
let b = 28;
let c = 10;

if (a > b && a > c) {
    console.log("Largest number: " + a);
} else if (b > a && b > c) {
    console.log("Largest number: " + b);
} else {
    console.log("Largest number: " + c);
}


// Question 5
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Question 6
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum: " + sum);


// Question 7
let numbers = [12, 45, 7, 89, 23, 56];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number: " + largest);


// Question 8
function add(x, y) {
    return x + y;
}

console.log(add(10, 20));
console.log(add(5, 7));


// Question 9
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));


// Question 10
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));