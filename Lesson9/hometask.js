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

is_Blank = function (input){
    if (input.length === 0) 
    return true;
    else
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));