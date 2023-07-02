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

