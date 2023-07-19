
//! Scope => ES6 gacha shu turdagi scope lardan foydalanilgan
// //? 1.Global scope
// //? 2.Functional scope

//! Scope => ES6 dan keyin ishlatiladigan scope turlari
// //? 3.Global scope => (let, var, const faqat {} => gulli qavslar ichida yozilmagan bo'lsa bular global scope bo'lishi mumkin).
//? yaniy hech qanday gulliqavuslar ichida 
//? yaratilmagan va gulli qavuslardan tashqarida yaratiilgan bo'lsa manashu globbal scope deyiladi 
//? va biz bu turdagi o'zgaruvchilardi scopdan tashqarida ham ishlatib keta olamiz.
// ? 1
// let name = "webbrain";
// var name = "webbrain";
// console.log(name);
// for(let i = 0; i < 5; i++) {
// 	console.log(name);
// }

// //? 2.Functional scope => (var) => biz "let" ni ham "var" ni ham funksiyadan tashqarida 
//? ishlata olmimiz aks holatfda " '' is not defined" deb chiqaradi. va "var" functional scope ga ega hsoblanadi
//? 2
// function multiply(a, b) {
	// let c = 10;
	// var c = 10;
// }
// console.log(c);

// //? 3. Block scope => (let, const) => biza faqatgina "var" ni block scope ichida ishlata olamiz sababi bu functional scope.
//  ? "let" va "const" blockdan tashqarida ishlata olmimiz.
//? 3
// {
	// let a = "salom";
	// var b = "xayr";
	// console.log(a);
// }
// console.log(a);
// console.log(b);

// //? for => bunda ham scope tushunchasi mavjud yani biz for ichida "let" nidscopdanan tashqarida chaqirsak 
//? bizaga "is not defined" chiqaradi
//? 4
// for(let i = 0; i < 10; i++) {

// }
// console.log(i); // is not defined

// //? Agar biz "var" dan foydalansak bu ishlaydi chunki functional scope bulganligi sababli.
//? 5
// for(var i = 0; i < 10; i++) {

// }
// console.log(i); // 10

// //? "Var" bn "Let" ning global da farqi
//? 6
// var a = "salom";
// let b = "xayr";
// console.log(window.a);
// console.log(window.b);

//! Closure => yani funksiya uzidan tashqaridagi scope dan o'zgaruvchini oladigan holatga aytiladi
// let a = 10; // {a: 10}
// function getData() {
// 	let a = 11;
// 	console.log(a); // {a: 11, a: 10}
// }
// getData();
// ?
// function getData() {
// 	let a = 10; 
// 	return () => ++a;
// }
// console.log(getData()());

