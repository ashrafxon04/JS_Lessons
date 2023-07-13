


//! Map() => non-primitive keys, size()
// let map = new Map();
// let obj = {};
// map.title = "academy"
// console.log(map, map.size);
// obj.title = "academy";
// console.log(obj);

//! set(), get(), has(), delete(), clear()
//? set(key, value)
// let arr = [1, 2, 3];
// let obj = { name: "w" };
// let func = () => {};
// map.set("title", "academy");
// map.set(true, "wba");
// map.set(2020, "webbrain");
// map.set(arr, "IT");
// map.set(obj, "Center");
// map.set(func, "some");
// console.log(map, map.size);
//? get(key)
// console.log(map.get("title"));
// console.log(map.get(true));
// console.log(map.get(2020));
// console.log(map.get(arr));
// console.log(map.get(obj));
// console.log(map.get(func));
// console.log(map.get("func"));
//? has(key)
// console.log(map.has("title"));
// console.log(map.has(arr));
// console.log(map.has("title"));
// console.log(map.has("titl"));
//? delete(key)
// map.delete("title");
// console.log(map);
//? clear()
// map.clear();
// console.log(map);

//! Iteration
//? keys()
// console.log(map.keys());
// //? 1
// for(let key of map.keys()) {
// 	console.log(key);
// }
// //? values()
// console.log(map.values());
// //? 1
// for(let value of map.values()) {
// 	console.log(value);
// }
//? entries()
// console.log(map.entries());
// //? 1
// for(let entry of map.entries()) {
// 	console.log(entry);
// }

//? forEach()
// map.forEach((v, k, m) => {
// 	console.log(v, k, m);
// })

//! map => object
// console.log(map);
// let obje = Object.fromEntries(map);
// console.log(obje);
// console.log(typeof map);

//! Set() => quicker, no duplicates, safety
// let set = new Set();
// console.log(set, set.size);

//! add(), has(), delete(), clear()
//? add(value)
// set.add("webbrain");
// set.add(true);
// set.add(1);
// set.add(true);
// set.add(1);
// console.log(set, set.size);
//? has(value)
// console.log(set.has(true));
// console.log(set.has(false));
// console.log(set.has("webbrain"));
//? delete(value)
// set.delete(true);
// console.log(set);
//? clear()
// set.clear();
// console.log(set);

//! Iteration
//? 1
// for(let value of set) {
// 	console.log(value);
// }
//? 2
// set.forEach((v) => console.log(v));

//! WeakMap()
// let weakMap = new WeakMap();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakMap.set(obj, "webbrain");
// weakMap.set(arr, "IT");
// weakMap.set(func, "center");
// weakMap.set(sym, "unique");
// console.log(weakMap);
// console.log(weakMap.get(obj));
// console.log(weakMap.get(arr));
// console.log(weakMap.get(func));

//! WeakSet()
// let weakSet = new WeakSet();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakSet.add(obj);
// weakSet.add(arr);
// weakSet.add(func);
// console.log(weakSet.has(obj));
// console.log(weakSet.has(arr));
// console.log(weakSet.has(func));








//! Map() => bu huddi object ga alternative va biz bungga non premetiv data turlaini premetivlarni ham bersak buladi faqat key sfatida.
let map = new Map();
// map.title = "hello";
// console.log(map, map.size); // bu huddi arrayda length kabi map da size degan tushuncha mavjud

// ! mapda uzining methodlari mavjud va bular:set(); get(); has(); clear();
// 1.set(key, value); ==> malumot qo'shish va 2 ta parametr qabul qiladi
// let arr = [1, 2, 3];
// let obj = { name: "w" };
// let func = () => {};
// map.set("title", "academy");
// map.set(true, "wba");
// map.set(2020, "webbrain");
// map.set(arr, "IT");
// map.set(obj, "Center");
// map.set(func, "some");
// console.log(map, map.size);

//! 2.get(key); ==> malumotni obkeb beradi va 1 ta parametr qabul qiladi va ushaning valusni oob kebberadi
// console.log(map.get("title"));
// console.log(map.get(true));
// console.log(map.get(2020));
// console.log(map.get(arr));
// console.log(map.get(obj));
// console.log(map.get(func));
// console.log(map.get("func"));

//! 3.has(key); ==> bu malumot bor yoki yo'qligini tekshiradi va 1 ta parametr oladi true / false qaytaradi
// console.log(map.has("title"));
// console.log(map.has(arr));
// console.log(map.has("title"));
// console.log(map.has("titl"));

//? 4.delete(key); ==> bu ma'lumotlarni uchiradi va 1 ta parametr qabul qiladi
// map.delete("title");
// console.log(map);

//? 5.clear(); ==> bu malumotlarni polniy tozalab tashaydi va parametr qabul qilmaydi
// map.clear();
// console.log(map);

//! Iterator yaniy iteratsiya => yurib chiqish vazifasini bajaradi new Map(); da
// //? 1 usul keys();
// console.log(map.keys()); //Map Iterator , yurib chiqish vazifasini bajaradi.(keys)
// //? map.keys(); faqat keylarni ni yurib chiqadi
// for(let key of map.keys()) {
// 	console.log(key);
// };

// //? 2 usul map.values();
// console.log(map.values()); //Map Iterator , yurib chiqish vazifasini bajaradi. (values)
// //? map.values(); faqat valuelarni ni yurib chiqaradi
// for(let value of map.values()) {
// 	console.log(value);
// };

//  //? 3 usul entries(); 
// console.log(map.entries()); //Map Iterator , yurib chiqish va arrayga solib berish vazifasini bajaradi. (key va value)
//  //? map.entries(); key va valuelarni aloxida chiqarib arrayga solib qaytaradi
// for(let entry of map.entries()) {
// 	console.log(entry);
// };

//  //? 4 usul forEach();  
//  //? map.forEach(); valular buyicha yurib chiqish vazifasini bajaradi
// map.forEach((v , k , m) => {
//     console.log(v ,k ,m);
// });

// ! map ==> object  
//  //? map dan ojectga o'tish Object.fromEntries(); orqali bajariladi
// console.log(map);
// let obje = Object.fromEntries(map);
// console.log(obje);

// ! Sat?() => bu arrayga alternative arrayga nisbatan tez va xafsiroq bundan tashqari no duplicate => bitta value ni 2 marta ishlatib bulmidi
let set = new Set();
console.log(set, set.size);

// ! add(); has(); delete(); clear();
//  //? add(value); => bu new Sat(); ga ma'lumot qushish vazifasini bajaradi va bitta parametr qabul qiladi
set.add("webbrain");
set.add(true);
set.add(1);
set.add(true);
set.add(1);
// console.log(set, set.size); // bir xil valularni log qlmidi yani no Duplicate hsoblanadi

//  //? has(value); => bu malumot bor yoki yuqligini tekshiradi va boolean qiymat qaytaradi
// console.log(set.has(true));
// console.log(set.has(false));
// console.log(set.has("webbrain"));

//  //? delete(value); => bu malumotlarni uchirib beradi va bitta parametr qabul qiladi
// set.delete(true);
// console.log(set);

//  //? clear(); => bu parametr qabul qlmidi va new Sat(); ni ponliy tozalab beradi
// set.clear();
// console.log(set);

//! Iterator yaniy iteratsiya => yurib chiqish vazifasini bajaradi new Sat(); da
//  //? 1 usul:  for(of);  => yurib chqish vazifasini bajaradi.
// for(let value of set) {
// 	console.log(value);
// }

//  //? 2 usul:  forEach(); => bu ham yurib chiqadi.
// set.forEach((v) => console.log(v));

//! WeakMap(); => bu map bn pashti birxil farqi shundaki bundagi uchgan malumotlar garbage collactiongga tushadi "map" de sa yuq bundan tashqaari faqat non premative tipdagi qymatlarni berib buladi primitivdan faqat "simvol" bersa buladi
// let weakMap = new WeakMap();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakMap.set(obj, "webbrain"); // set orqali malumot qushsa buladi lekin uni log qlsak nma qushilganini bilib bulmidi
// weakMap.set(arr, "IT");
// weakMap.set(func, "center");
// console.log(weakMap);
// console.log(weakMap.get(obj)); // get orqali nma qymat qushilganini bilsak buladi
// console.log(weakMap.get(arr));
// console.log(weakMap.get(func));

//! WeakSet(); => bu sat bn pashti birxil farqi shundaki bundagi uchgan malumotlar garbage collactiongga tushadi "sat" de sa yuq bundan tashqaari faqat non premative tipdagi qymatlarni berib buladi.
// let weakSet = new WeakSet();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakSet.add(obj);
// weakSet.add(arr);
// weakSet.add(func);
// console.log(weakSet.has(obj)); // faqat has orqali berilgan ma'lumotlar bor yuqligini tekshirsak buladi.
// console.log(weakSet.has(arr));
// console.log(weakSet.has(func));
