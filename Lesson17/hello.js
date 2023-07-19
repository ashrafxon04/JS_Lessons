//! Async, sync

//! sync => bu bir birini kutmasdan bajarilib ketadigan funksiyalar
// console.log(1);
// console.log(2);
// console.log(3);
//! async => bu qayerdandur ma'lumot kutib turadi va o'sha ma'lumot kegandan keyin ishlaish kk bulgan funksiyaga aytiladi
// function getData(name) {
// 	console.log(`Salom ${name}`);
// };
// getData("Webbrain");

//! setTimeOut(callback, time) => funksiyani qanchadir vaqtdan keyin ishlatib beradigan mexanizmga setTimeOut(); deyiladi
// setTimeout(() => {
// 	console.log(1);
// }, 1000)

// function getData(name) {
//   console.log(`Salom ${name}`);
// }
// setTimeout(() => {
//   globalThis.title = "Webbrain";
// }, 1000);
// getData(title);
// let time = setTimeout(() => getData("Webbrain"), 3000); //? bu setTimeOut ni tuxttib beradi
// clearTimeout(time);

//! setInterval(callback, time) => bu berilgan vaqt davomida callback ni ishlatib turaveradi qachonki biz to'xtatmaguncha
// setInterval(() => console.log("salom"), 1000);
// let time = 60;
// let timeInt = setInterval(() => {
//   time--;
//   console.log(time);
// }, 1000);
// setTimeout(() => {
//   clearInterval(timeInt); //? bu setImtervalni tuxtatib beradi
// }, 10000);

//! Practice
// let timer = setInterval(() => {
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   let seconds = new Date().getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
// setTimeout(() => {
//   clearInterval(timer);
// }, 5000);

