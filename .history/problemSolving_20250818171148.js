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

problem 3