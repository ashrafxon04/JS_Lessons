// ! H O M E T A S K

// no 1
// let str1 = 'web' ; let  str2 = 'ewb'
// berilgan stringlardagi harflar soni bir biriga teng yoki teng emasligini aniqlang. tartibi muhum emas !
// ==>
// let str1 = 'web';
// let str2 = 'ewb';
// str1 = str1.toLowerCase();
// str2 = str2.toLowerCase();
// str1 = [...new Set(str1)];
// str2 = [...new Set(str2)];
// const isEqual = str1.length === str2.length;
// console.log(isEqual)

// no2
// non , kichik , kiyik, ikki, kuchuk 
// Berilgan so'z palindrom yoki palindrom emasligini tekshiring
// function isPalindrome(word) {
//     word = word.toLowerCase();
//     const reversedWord = word.split('').reverse().join('');
//     return word === reversedWord;
// }
// console.log(isPalindrome("non"));

// no3
// let str = "Webbrain" ;
// Stringda berilgan stringning har  bir belgisini 2 marta takrorlab qiymat qaytaring   
// res : "WWeebbbbrraaiinn"
// let str = "Webbrain";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     result += char + char;
// }
// console.log(result); 

// no4
// let str = " We66ra1n Acad4my ";
// String ichidagi raqamlarni toping
// let str = " We66ra1n Acad4my ";
// let numbers = str.match(/\d+/g);
// console.log(numbers);

// no5
// let str = "webbbraiiin accaaddemmy";
// Duplicate bo'lgan harflarni o'chring
// let str = "webbbraiiin accaddemmy";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (str.indexOf(str[i]) === i) {
//     result += str[i];
//   }
// }

// console.log(result);

// no6
// let str = "webraaiiin"
// stringni ziplash res: web2ra2i3n
// function zipString(str) {
//     let result = "";
//     let count = 1;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         count++;
//       } else {
//         result += str[i] + count;
//         count = 1;
//       }
//     }
  
//     return result;
//   }
  
//   let str = "webraaiiin";
//   let zippedString = zipString(str);
//   console.log(zippedString);






