// Problem 1
const reverseHello = (str) => {
    return str.split("").reverse().join("");
};
// console.log(reverseHello("hello"));

// problem 2
const countValues = (str) => {
    const vowels = "aeiou";
    let count = 0;
    for (let text of str.toLowerCase()) {
        if (vowels.includes(text)) count++;
    }
    return count;

}
// console.log(countValues("Programming"));

// problem 3
const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));

// problem 4
const findMaxNumber = (arr) => {
    let max = 0;
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
// console.log(findMaxNumber([1, 2, 3, 4, 5]));

// problem 5
const removeDuplicatesNum = (arr) => {
    let result = [];
    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
// console.log(removeDuplicatesNum([1, 2, 2, 3, 4, 4]));

// problem 6
const sumNumbers = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// console.log(sumNumbers([1, 2, 3, 4]));

// problem 7
const findEvenNumbers = (arr) => {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// problem 8
// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(capitalizeWords("hello world")); // "Hello World"


// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5)); // 120


// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) console.log("PingPong");
    else if (i % 3 === 0) console.log("Ping");
    else if (i % 5 === 0) console.log("Pong");
    else console.log(i);
  }
}
// pingPong();
F