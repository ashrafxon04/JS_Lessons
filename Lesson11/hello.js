//! Sum of elements
// const arr = [1,2,3,4,5,6,7];
// console.log(eval(arr.join("+")));

//! filter((element, index, array) => {})
//? 1
// const arr = [1,2,3,4,5,6,7];
// const newArr = arr.filter((element, index, array) => {
// console.log(element);
// console.log(index);
// console.log(array);
// 	return element % 2 === 0;
// });
// console.log(newArr);
// console.log(arr);

//? 2
// const fruits = ["apple", "banana", "kiwi", "orange"];
// const filteredFruits = fruits.filter((e) => e.length > 5);
// console.log(filteredFruits);

//? 3
// const students = [
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
// ];
// const filteredStudents = students.filter((s) => s.age >= 18);
// console.log(filteredStudents);

//! sort((a, b) => return a - b)
//! sort((a, b) => return b - a)
//? 1
// const arr = [1, 6, 7, 5, 2, 3];
// const newArray = arr.sort();
// console.log(newArray);
//? 2
// const arr = [1, 6, 17, 15, 21, 3];
// const newArray = arr.sort((a, b) => {
// 	return a - b;
// });
// console.log(newArray);
// const newArray = arr.sort((a, b) => {
// 	return b - a;
// });
// console.log(newArray);
//? 3
// const fruits = ["orange", "banana", "kiwi", "apple"];
// const sorterFruits = fruits.sort();
// console.log(sorterFruits);
//? 4
// const fruits = ["Orange", "banana", "kiwi", "apple"];
// const sorterFruits = fruits.sort((a, b) => a.localeCompare(b));
// const sorterFruits = fruits.sort((a, b) => b.localeCompare(a));
// console.log(sorterFruits);
//? 5
// const students = [
// 	{ id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// const sortedStudents = students.sort((a, b) => a.age - b.age);
// const sortedStudents = students.sort((a, b) => b.age - a.age);
// const sortedStudents = students.sort((a, b) => a.id - b.id);
// const sortedStudents = students.sort((a, b) => a.fullName.localeCompare(b.fullName))
// console.log(sortedStudents);

//! find((element, index, array) => {})
//? 1
// const arr = [1, 6, 7, 5, 2, 3];
// const search = arr.find((element, index, array) => {
// 	return element === 9;
// })
// console.log(search);
//? 2
// const arr = [1, 1, 6, 5, 2, 3];
// const search = arr.find((element, index, array) => {
// 	return element > 2;
// })
// console.log(search);
//? 3
// const students = [
// 	{ id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// const search = students.find(s => s.id === 5);
// const search = students.find(s => s.age === 20);
// const search = students.find(s => s.age < 20);
// console.log(search);

//! findIndex((element, index, array) => return);
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const search = arr.findIndex((element, index, array) => {
//   return element === 2;
// });
// console.log(search);
//? 2
// const arr = [1, 6, 7, 5, 2, 3];
// const search = arr.findIndex((element, index, array) => {
// 	return element > 2;
// })
// console.log(search);
//? 3
// const students = [
// 	{ id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// const search = students.findIndex(s => s.id === 5);
// const search = students.findIndex(s => s.age === 20);
// const search = students.findIndex(s => s.age < 20);
// console.log(search);

//! findLastIndex((element, index, array) => return);
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const search = arr.findLastIndex((element, index, array) => {
//   return element === 2;
// });
// console.log(search);
//? 2
// const arr = [1, 6, 7, 5, 2, 3];
// const search = arr.findLastIndex((element, index, array) => {
// 	return element > 2;
// })
// console.log(search);
//? 3
// const students = [
// 	{ id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbek", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// const search = students.findLastIndex(s => s.id === 5);
// const search = students.findLastIndex(s => s.age === 20);
// const search = students.findLastIndex(s => s.age < 20);
// console.log(search);

//! forEach((element, index, array) => {})
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// let sum = 0;
// const search = arr.forEach((element, index, array) => {
// 	return sum += element;
// });
// console.log(search);

//! map((element, index, array) => return )
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const result = arr.map((element, index, array) => {
// 	return element % 2 === 0 ? "Juft" : "Toq"
// });
// console.log(result, "result");
//? 2
// const arr = [1, 6, 2, 7, 5, 2, 3];
// let result = [];
// arr.forEach((element, index, array) => {
// 	element % 2 === 0 ? result.push("Juft") : result.push("Toq")
// });
// console.log(result, "result");

//! reduce((current, value) => {return}, 0)
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const newArr = arr.reduce((current, value) => {
// 	console.log(current, value);
// 	return "keyingi current";
// }, 0)
//? 2
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const newArr = arr.reduce((current, value) => {
// 	console.log(current, "current");
// 	console.log(value, "value");
// 	return value;
// }, 0)
//? 3
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const newArr = arr.reduce((current, value) => {
// 	return current + value;
// }, 0)
// console.log(newArr);

//! every((element, index, array) => return)
//? 1
// const arr = [1, 6, 2, 7, 5, 2, 3];
// const result = arr.every(element => {
// 	console.log(element);
// 	return element > 0;
// });
// console.log(result);

//! some((element, index, array) => return )
//? 1
// const arr = [1, 6, 2, 7, 5, -1, 2, 3];
// const result = arr.some(element => element < 0);
// console.log(result);
// const result = arr.some(element => {
// 	console.log(element);
// 	return element < 0;
// });
// console.log(result);

//! fill(item, startingIndex, endingIndex)
// const arr = [1, 2, 3, 4, 5];
// arr.fill("son", 1, 4);
// console.log(arr);

//! copyWithin(startingIndex, copyStart, copyEnd)
// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 2, 4);
// console.log(arr);

//! flat()
//? 1
// const arr = [1, [2, [3]]];
// const newArr = arr.flat();
// console.log(arr);
//? 2
// const arr = [7,[6,[5,[4,[3,[2,[1]]]]]]];
// const newArr = arr.flat(Infinity);
// console.log(newArr);

//! new Set()
// const arr = [1, 2, 1, 4, 2, 4, 6];
// const newArr = new Set(arr);
// console.log(newArr);

//! new Map
// const map = new Map([
//   [false, "webbrain"],
//   ["title", "IT Center"],
// ]);
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//! Array.from()
// const arr1 = Array.from("12345", (v) => v * 2);
// const arr2 = Array.from([1,2,3], (v) => v + 1)
// console.log(arr2);


//! ARRAY 2/2

// ? filter( (value , index , array) => {} );
// ? 1
// const arr = [1, 2, 3, 4, 5, 6];
// arr.filter((value, index, array) => {
//     console.log(value);
// });
// ? 2
// const fruits = ['apple', 'orange', 'banana', 'kivi'];
// const filtering = fruits.filter(value => {
//     return value.length > 5;
// })
// console.log(filtering);
// ? 3
// const guys = [
//     { id: 1, name: 'Mexroj', age: 17 },
//     { id: 2, name: 'Suxrob', age: 20 },
//     { id: 3, name: 'Nodir', age: 19 },
//     { id: 4, name: 'Sarvar', age: 15 },
// ];
// const filtering = guys.filter(value  => {
//     return value.age >= 18;
// })
// console.log(filtering);

// ? sort((a ,b) => return);
// ? 1
// const arr = [1 , 2 , 3, 4,5,6,7 ,8];
// const sorting = arr.sort();
// console.log(sorting);
// ? 2
// const arr = [11,13, 22, 34, 16, 15, 17, 28];
// const newArr = arr.sort((a ,b) =>{
//     return a- b
// })
// console.log(newArr);
// ? 3
// const fruits = ['apple', 'orange', 'banana', 'kivi'];
// const sorting = fruits.sort();
// console.log(sorting);
// ? 4
// const fruits = ['apple', 'Orange', 'banana', 'kivi'];
// const sorting = fruits.sort((a, b) =>{
//     return a.localeCompare(b);
// });
// console.log(sorting);
// ? 5
// const guys = [
//     { id: 1, name: 'Mexroj', age: 17 },
//     { id: 2, name: 'Suxrob', age: 20 },
//     { id: 3, name: 'Nodir', age: 19 },
//     { id: 4, name: 'Sarvar', age: 15 },
// ];
// const sorting = guys.sort((a, b) => {
//    return a.age - b.age;
// })
// console.log(sorting);

// ? find((element , index , array) => {});
// ? 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const finding = arr.find((element) => {
//     return element === 6;
// })
// console.log(finding);
// ? 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const finding = arr.find((element) => {
//     return element > 2;
// })
// console.log(finding);

// ? findIndex((element , index , array) => {});
// ? 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const finding = arr.findIndex((element) => {
//     return element === 2;
// })
// console.log(finding);

// ? findLastIndex((element , index , array) => {});
// ? 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const finding = arr.findLastIndex((element) => {
//     return element === 5;
// })
// console.log(finding);

// ? forEach(( element , index , array) => {});
// ? 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;
// const res = arr.forEach((element) => {
//     return sum += element
// });
// console.log(sum);

// ? map((element , index , array) => {});
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const res = arr.map((element , index ,array) => {
//    return element % 2 === 0 ? 'Juft son' : 'Toq son'
// });
// console.log(res ,"res");

// ? reduce((curr , prev) => {});
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const newArray = arr.reduce((curr, prev) => {
//     return curr * prev
// })
// console.log(newArray);

// ? every((element , index , array) => {});
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const equall = arr.every(element => element > 0);
// console.log(equall);

// ? some((element , index , array) => {});
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const equall = arr.some(element => element % 2 === 0);
// console.log(equall);

// ? fill(item , startingIndex , endingIndex);
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const filling = arr.fill('bosh son' , 3  , 5)
// console.log(filling);

// ? copyWithin(startingIndex , copyStart , copyEnd);
// ? 1
// const arr = [1, 3, 3, 4, 7, 6, 7, 8];
// const copiyNum = arr.copyWithin(0 , 2 ,5)
// console.log(copiyNum);

// ? flat();
// ? 1
// const arr =[ 1,[ 2, [3]]];
// const arraysOf = arr.flat(2)
// console.log(arraysOf);
// ? 2
// const arr = [1,[2,[5,[5,[7,[8,[9,[2,[10]]]]]]]]];
// const ayyaysOf = arr.flat(Infinity);
// console.log(ayyaysOf);

// ? newSet();
// ? 1
// const arr = [1, 3, 3, 4, 7, 4, 5, 5];
// const newSatting = new Set(arr);
// console.log(newSatting);

// ? newMap();
// ?1 
// const map = new Map([
//   [false, "webbrain",],
//   ["title", "IT Center"],
//   [33 ,33]
// ]);
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//? Array.from()
// ? 1
// const arr1 = Array.from("12345", (v) => v * 2);
// const arr2 = Array.from([1,2,3], (v) => v + 1)
// console.log(arr1);




