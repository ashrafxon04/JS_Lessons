//! Array 1/2

// ? Array korinishi
// let arr = [
//     11,
//     "11",
//     true,
//     false ,
//     null,
//     undefined,
//     {},
//     function sayHi(){
//         console.log(sayHi());
//     },
// ];

// ?  Array yaratish 1 usuli
// let arr = [
//     11,
//     "11",
//     true,
//     false ,
//     null,
//     undefined,
//     {},
//     function sayHi(){
//         console.log(sayHi());
//     },
// ];

// ? Array yaratish 2 chi usuli
// const arr = new Array ("5", null , undefined, "hello" , true , false);
// console.log(arr);

// ? Type of Array
// let arr = [
//         11,
//         "11",
//         true,
//         false ,
//         null,
//         undefined,
//         {},
//         function sayHi(){
//             console.log(sayHi());
//         },
//     ];
// console.log(typeof arr);

//? isArray ==> array ni aniqlash
// let arr = [
//     11,
//     "11",
//     true,
//     false,
//     null,
//     undefined,
//     {},
//     function sayHi() {
//         console.log(sayHi());
//     },
// ];
// console.log(Array.isArray(arr));

// ? Accassing of array 
// ! 1
// let arr = [
//     11, 
//     "11",
//     true,
//     false ,
//     null,
//     undefined,
//     {},
//     function sayHi(){
//         console.log(sayHi());
//     },
// ];
// console.log(arr[0]);

// ! 2
// let arr = [
//     11, 
//     "11",
//     true,
//     false ,
//     null,
//     undefined,
//     {},
//     function sayHi(){
//         console.log(sayHi());
//     },
// ];
// console.log(arr.at(-2));

// ?Addang 
// let arr = [];
// arr[0] = "10";
// arr[1] =  11 ;
// console.log(arr);

// ? Array dan Stringga o'tish ==> join()
// const arr = ["Webbrain Academy"]
// console.log(arr.join());

// ? Adding two array ==> concat()
// const arr1 =[55];
// const arr2 =["55"];
// const sum = arr1.concat(arr2);
// console.log(sum);

// ? Comparision ==> TAqqoslash
// ? 1
// console.log([] == true);
// if([])console.log("sayHi");

// ? 2
// console.log(null == 0); //false 
// console.log(null === 0); //false 
// console.log(null < 0); //false 
// console.log(null > 0); //false 
// console.log(null <= 0); //true 
// console.log(null >= 0); //true

// ? Loops ==> for , for in, for of.
// const arr = [ "birinchi" , "ikkinchi", "uchinchi" ,"turtinchi"];
//? 1 // for().
// for (let i = 0; i < arr.length; i++){
//     console.log(`${i} ==> ${arr[i]}`);
// }
//? 2 // for in.(index)
// for ( let index in arr){
//     console.log(`${index} ==> ${arr[index]}`);
// }
//? 3 // for of.(item)
// for ( let item of arr){
//     console.log(`${item}`);
// }

// ! Array Methods

// ? arr.push() ==> oxridan 
// let arr = [ 1 ,2 ,3];
// arr.push(4 ,5, 6);
// console.log(arr);

// ? arr.unshift() ==> boshidan
// let arr = [ 1 ,2 ,3];
// arr.unshift(4 ,5, 6);
// console.log(arr);

// ? arr.pop() ==> oxirdan delate (only 1 word)
// let arr = [ 1 ,2 ,3];
// arr.pop(4 ,5, 6);
// console.log(arr);

// ? arr.shift() ==> boshidan delate (only 1 word)
// let arr = [ 1 ,2 ,3];
// arr.shift(4 ,5, 6);
// console.log(arr);

// ? arr.indexOf() ==> index ni qaytaradi
// let arr = [ 1 ,2 ,3 , "hello" , "name"];
// console.log(arr.indexOf("name"));

// ? arr.reverse() ==> teskari qilib beradi.
// let arr = [ 1 ,2 ,3 , "hello" , "name"];
// arr.reverse();
// console.log(arr);

// ? arr.inscludes() ==> arr ichidagi malumotlarni bor yuqligini chacking qikadi.
// let arr = [ 1 ,2 ,3 , "hello" , "name"];
// console.log(arr.includes("name"));

// ? arr.slice(startingIndex, endingIndex) ==> arr malumotlarini qrqib berish vazifasini bajaradi.
// let arr = [ 1 ,2 ,3 , "hello" , "name"];
// console.log(arr.slice(2));

// ? arr.splice(startingIndex, count, items) ==> arr malumotlarini qirqib beradi va 3 ta parametr oladi.
// let arr = [ 1 ,2 ,3 , "hello" , "name"];
// console.log(arr.splice(0, 3));





