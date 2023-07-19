
// ! Advansed Objects => 

// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// };

//! Object.getOwnPropertyDescriptor(obj, key) => bu 3 ta malumot buyicha chiqadi va valusini qaytaradi bular : 1.Writable, 2.Enumberable, 3.Configurable
// ? writable => true     //! => bu ustiga yozsa buladimi degan ma'noni bildiradi "true" bulsa xa "false" bulsa yuq degani.  
// ? enumerable => true   //! => bu sanasa buladimi yani number sanoqda bormi yuqmi degan ma'noda "true" bulsa xa "false" bulsa yuq degani.
// ? configurable => true //! => bu uchirib tashasa buladimi yuqmi degan ma'noda "true" bulsa xa "false" bulsa yuq degani.
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// obj.name = "webbrain";
// console.log(obj);

//! Object.defineProperty(obj, key, {});
//? 1 => bu object ichidagi ma'lumotlarni uzgartirib qayta yozib bumidigan qiladi.
// Object.defineProperty(obj, "name", { writable: false });
// obj.name = "webbrain";
// console.log(obj);
//? 2 => bu object ichidagi keylarni uchirib bumidigan qib beradi
// Object.defineProperty(obj, "name", { configurable: false });
// delete obj.name;
// console.log(obj);
//? 3 => bu object ichidagi name ni sanash imkoniyatini false qib quyadi
// Object.defineProperty(obj, "name", {enumerable: false});
// for(let key in obj) {
    // 	console.log(key);
    // }
    //? 4 => bu 2 ta prperty ni false qilish imkonini beradi.
// Object.defineProperty(obj, "name", { writable: false, configurable: false });
// obj.name = "webbrain";
// console.log(obj);
// delete obj.name;
// console.log(obj);

//! Object.getOwnPropertyDescriptors(obj) => object ichidagi barcha keylarni ma'lumotini chiqari beradi
// console.log(Object.getOwnPropertyDescriptors(obj));

//! Object.defineProperties(obj, props) => bu ham object "key" lariga "false" qiymatini biriktirib ketsak buladi va bu 2 ta parametr qabul qiladi. 
// ? 1
// Object.defineProperties(obj, {
// 	name: {
// 		writable: false
// 	},
// 	founded: {
// 		writable: false
// 	}
// });
// obj.name = "webbrain";
// obj.title = "IT center";
// obj.founded = 2021;
// console.log(obj);
// ? 2
// Object.defineProperties(obj, {
//   name: {
//     writable: false,
//   },
//   title: {
//     configurable: false,
//   },
//   founded: {
//     enumerable: false,
//   },
// });
// obj.name = "webbrain";
// delete obj.title;
// for(let key in obj) {
// 	console.log(key);
// }
// console.log(obj);

// ! Object.preventExtensions => bu Object.seal(); ga uxshab ketadi ichidagi malumotlarni taxrirlab beradi va yangi ma'lumot qushi bumidi va ichidagi bor malumotni taxrirlash imkonini beradi
// Object.preventExtensions(obj);
// delete obj.name;
// obj.title = "IT center";
// obj.fullName = "some";
// obj.name = "some";
// console.log(obj);

//! getter, setter
//? getter => bu object ichiga shunday bir funksiya yoziladi va object ichidagi istalgan key ni olib berish vazifasini bajaradi. Oject key larga access qlishning function usuli desak ham buladi.
// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// 	get getFullname() {
// 		console.log(`${this.name} ${this.title}`);
// 	}
// };
// obj.getFullname;

//? setter => Object ichidagi keylarni qanaqadur boshqa bir value ga uzgartirish uchun foydalanladi
// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// 	get getFullname() {
// 		console.log(`${this.name} ${this.title}`);
// 	},
// 	set changeName(value) {
// 		this.name = value
// 	}
// };
// obj.getFullname;
// obj.changeName = "webbrain";
// console.log(obj);
// obj.getFullname;

// ? misol
// const student = { 
// 	id: 3, 
// 	fullName: "Yaxyoyev Ashrafxon", 
// 	age: 19,
// 	set changeAge(value) {
// 		this.age = this.age * value;
// 	},
// 	get getData() {
// 		console.log(`Ismi: ${this.fullName}, Yoshi: ${this.age}`);
// 	}
// };
// student.getData;
// student.changeAge = 3;
// student.getData;
// console.log(student);
