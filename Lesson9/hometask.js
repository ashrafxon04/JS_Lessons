//==========================================
//Test 1
// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data:
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

//===

// is_string = function(input) {
//     if (Object.prototype.toString.call(input) === '[object String]')
//       return true;
//     else
//       return false;   
//       };
//   console.log(is_string('w3resource'));
//   console.log(is_string([1, 2, 4, 0]));

//==========================================
// Test 2
// Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

//===

// is_Blank = function (input){
//     if (input.length === 0) 
//     return true;
//     else
//     return false;
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

//========================================================

// no3

// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]


// ==> 
// string_to_array = function (str) {
//     return str.trim().split(" ");
// };
// console.log(string_to_array("Robin Singh"));

// ==========================================================

// no4

// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

//==>
// truncate_string = function (str) {
//     return str.replace('Robin Singh' , 'Robi');
// };
// console.log(truncate_string("Robin Singh" , 4));


//============================================================

// no5

// 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

//==>
// abbrev_name = function (str) {
//     return str.replace('Singh' , 'S.');
// };
// console.log(abbrev_name("Robin Singh" , 4));

// =============================================================

// no6

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// ==>

// protect_email = function(str) {
//     return str.replace("robin_singh" , "robin...")
// }
// console.log(protect_email("robin_singh@example.com"));

// =============================================================

// no7

// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// ==>
// string_parameterize = function(str) {
//     return str.toLowerCase(str).replace(/\s/g, "-");
// }
// console.log(string_parameterize("Robin Singh from USA."));


//====================================================================

// no8

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

//==>

// capitalize = function(str1){
//     return str1.at(0).toUpperCase()+ str1.substring(1);
//   }
      
//    console.log(capitalize('js string exercises'));

//===================================================================

// no9

// const str = 'js string exercises' ;
// const arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }
// const str2 = arr.join(" ");
// console.log(str2);

//===================================================================

// no10

// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

//==>
// swapcase = function swapcase(str) {
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }
// console.log(swapcase('AaBbc'));


//===========================================================================

//no11

// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

//==>
// camelize = function camelize(str) {
//     return str.replace(/\W+(.)/g, function(match, chr)
//      {
//           return chr.toUpperCase();
//       });
//   }

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));

//===============================================================

// no12
// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

// ==>
// function uncamelize(str, separator) {
//     // Assume default separator is a single space.
//     if(typeof(separator) == "undefined") {
//       separator = " ";
//     }
//     // Replace all capital letters by separator followed by lowercase one
//     var str = str.replace(/[A-Z]/g, function (letter) 
//     {
//       return separator + letter.toLowerCase();
//     });
//     // Remove first separator
//     return str.replace("/^" + separator + "/", '');
//   }
//   console.log(uncamelize('helloWorld'));
//   console.log(uncamelize('helloWorld','-'));
//   console.log(uncamelize('helloWorld','_'));