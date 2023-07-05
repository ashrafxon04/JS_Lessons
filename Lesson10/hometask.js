// no1

// 1. A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// ==>

// function dominator(arr) {
//     let res = {};
//     let dominator = -1;
//     for (let item of arr) {
//         res[item] ? res[item]++ : (res[item] = 1);
//     }
//     for (let key in res) {
//         if (res[key] > arr.length / 2) dominator = key;
//     }
//     return +dominator;
// }
// console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); //3


// no2

// 2. Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// ==>
// function findAverage(array) {
//     if (array.length > 0) {
//         let sum = 0;
//         for (let item of array) {
//             sum += item;
//         }
//         return sum / array.length;
//     } else return 0;
// }
// console.log(findAverage([3, 3, 4, 4, 5, 5]));  //4

// no3

// 3. The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// ==>
// function generateHashtag(str) {
//     if (str.trim() === '') return false;

//     const stringWithCamelCase = str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join('');

//     const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

//     return stringWithHashtag.length > 140 ? false : stringWithHashtag;
// }

// console.log(generateHashtag("Hello Ashrafxon"));



// no4

// 4. Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// ==>
// const binaryArrayToNumber = arr => parseInt(+arr.join(""), 2);

// console.log(binaryArrayToNumber([1111])); //15


// no5

// 5. What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

//==>


let arr = [ 1 , 2 , 3 , 4];

arr.splice(1 , 2)

console.log(arr);





