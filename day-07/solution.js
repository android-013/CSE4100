// Problem 1
function evenOrOdd(number) {
    if (!Number.isSafeInteger(number)) {
        return "Invalid input";
    }

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log("Problem 1:", evenOrOdd(7), evenOrOdd(8), evenOrOdd(0));


// Problem 2
function checkNumber(number) {
    if (!Number.isFinite(number)) {
        return "Invalid input";
    }

    if (number > 0) {
        return "Positive";
    }

    if (number < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log("Problem 2:", checkNumber(-5), checkNumber(8), checkNumber(0));


// Problem 3
function largestOfThree(firstNumber, secondNumber, thirdNumber) {
    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber) || !Number.isFinite(thirdNumber)) {
        return "Invalid input";
    }

    let largestNumber = firstNumber;

    if (secondNumber > largestNumber) {
        largestNumber = secondNumber;
    }

    if (thirdNumber > largestNumber) {
        largestNumber = thirdNumber;
    }

    return largestNumber;
}

console.log("Problem 3:", largestOfThree(10, 25, 15), largestOfThree(-8, -2, -5));


// Problem 4
function calculateGrade(mark) {
    if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
        return "Invalid marks";
    }

    if (mark >= 80) {
        return "A+";
    }

    if (mark >= 70) {
        return "A";
    }

    if (mark >= 60) {
        return "B";
    }

    if (mark >= 50) {
        return "C";
    }

    if (mark >= 40) {
        return "D";
    }

    return "F";
}

console.log("Problem 4:", calculateGrade(85), calculateGrade(40), calculateGrade(25), calculateGrade(101));


// Problem 5
function sumToN(n) {
    if (!Number.isSafeInteger(n) || n < 0) {
        return "Invalid input";
    }

    let sum = 0;

    for (let number = 1; number <= n; number++) {
        sum = sum + number;
    }

    return sum;
}

console.log("Problem 5:", sumToN(5), sumToN(0), sumToN(-2));


// Problem 6
function multiplicationTable(number) {
    if (!Number.isFinite(number)) {
        return ["Invalid input"];
    }

    let table = [];

    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        table.push(number + " x " + multiplier + " = " + number * multiplier);
    }

    return table;
}

console.log("Problem 6:\n" + multiplicationTable(3).join("\n"));


// Problem 7
function factorial(number) {
    if (!Number.isSafeInteger(number) || number < 0) {
        return "Invalid input";
    }

    let result = 1;

    for (let currentNumber = 2; currentNumber <= number; currentNumber++) {
        result = result * currentNumber;

        if (!Number.isFinite(result)) {
            return "Number too large";
        }
    }

    return result;
}

console.log("Problem 7:", factorial(5), factorial(0), factorial(-1), factorial(171));


// Problem 8
function reverseNumber(number) {
    if (!Number.isSafeInteger(number) || number < 0) {
        return "Invalid input";
    }

    let reversedNumber = 0;

    while (number > 0) {
        let lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number = Math.floor(number / 10);
    }

    return reversedNumber;
}

console.log("Problem 8:", reverseNumber(12345), reverseNumber(1000), reverseNumber(0));


// Problem 9
function countDigits(number) {
    if (!Number.isSafeInteger(number)) {
        return "Invalid input";
    }

    return Math.abs(number).toString().length;
}

console.log("Problem 9:", countDigits(123456), countDigits(0), countDigits(-123));


// Problem 10
function checkPrime(number) {
    if (!Number.isSafeInteger(number)) {
        return "Invalid input";
    }

    if (number < 2) {
        return "Not prime";
    }

    for (let divisor = 2; divisor * divisor <= number; divisor++) {
        if (number % divisor === 0) {
            return "Not prime";
        }
    }

    return "Prime";
}

console.log("Problem 10:", checkPrime(7), checkPrime(1), checkPrime(9), checkPrime(2));


// Problem 11
function fizzBuzz() {
    let results = [];

    for (let number = 1; number <= 30; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            results.push("FizzBuzz");
        } else if (number % 3 === 0) {
            results.push("Fizz");
        } else if (number % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(number);
        }
    }

    return results;
}

console.log("Problem 11:\n" + fizzBuzz().join("\n"));


// Problem 12
function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        return "Invalid input";
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || !Number.isFinite(numbers[i])) {
            return "Invalid input";
        }

        sum = sum + numbers[i];
    }

    return sum;
}

console.log("Problem 12:", sumArray([10, 20, 30, 40]), sumArray([]), sumArray([-2, 5]));


// Problem 13
function largestArrayElement(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let largestNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || !Number.isFinite(numbers[i])) {
            return null;
        }

        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

console.log("Problem 13:", largestArrayElement([12, 45, 7, 89, 23]), largestArrayElement([-5, -2, -10]), largestArrayElement([]));


// Problem 14
function countEvenAndOdd(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (!Number.isSafeInteger(numbers[i])) {
            return null;
        }

        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { even: evenCount, odd: oddCount };
}

let evenOddResult = countEvenAndOdd([1, 2, 3, 4, 5, 6]);
console.log("Problem 14:", "Even:", evenOddResult.even, "Odd:", evenOddResult.odd, countEvenAndOdd([]));


// Problem 15
function removeDuplicates(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    let uniqueNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    return uniqueNumbers;
}

console.log("Problem 15:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]), removeDuplicates([]));


// Problem 16
function reverseString(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    let reversedText = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText = reversedText + text[i];
    }

    return reversedText;
}

console.log("Problem 16:", reverseString("javascript"), reverseString(""), reverseString("a"));


// Problem 17
function checkPalindrome(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    let lowerText = text.toLowerCase();

    if (lowerText === reverseString(lowerText)) {
        return "Palindrome";
    }

    return "Not a palindrome";
}

console.log("Problem 17:", checkPalindrome("Madam"), checkPalindrome("Hello"), checkPalindrome(""));


// Problem 18
function countVowels(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    let lowerText = text.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < lowerText.length; i++) {
        if ("aeiou".includes(lowerText[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log("Problem 18:", countVowels("JavaScript"), countVowels("AEIOU"), countVowels("rhythm"));


// Problem 19
function filterAdults(users) {
    if (!Array.isArray(users)) {
        return [];
    }

    return users.filter(function (user) {
        return user !== null && typeof user === "object" && Number.isFinite(user.age) && user.age >= 18;
    });
}

const users = [
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 22 },
    { name: "Sadia", age: 19 },
    { name: "Nila", age: 15 }
];

console.log("Problem 19:", filterAdults(users), filterAdults([]));


// Problem 20
function mostFrequentElement(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let frequencies = {};
    let mostFrequentNumber = numbers[0];
    let highestFrequency = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (typeof currentNumber !== "number" || !Number.isFinite(currentNumber)) {
            return null;
        }

        if (frequencies[currentNumber] === undefined) {
            frequencies[currentNumber] = 0;
        }

        frequencies[currentNumber]++;

        if (frequencies[currentNumber] > highestFrequency) {
            highestFrequency = frequencies[currentNumber];
            mostFrequentNumber = currentNumber;
        }
    }

    return mostFrequentNumber;
}

console.log("Problem 20:", mostFrequentElement([1, 2, 2, 3, 3, 3, 4, 2]), mostFrequentElement([5, 5, 2, 2]), mostFrequentElement([]));