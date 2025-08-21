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
        sumsum + num;
    }
    return sum;
}
console.log(sumNumbers([1, 2, 3, 4]));