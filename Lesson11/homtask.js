//? no1
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// ==>
// var uniqueInOrder = function(iterable) {
//     var arr = [];
//     for (var i=0;i<iterable.length;i++) {

//     // check if there is back to back letter
//     if (iterable[i] !== iterable[i+1]) {

//         // if not, push the current value to arr
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// }



// no2

// function sumMul(n,m){
//     let r = 0;
//     for(let i = 1; i*n<m; i++){
//       r+=i*n
//     }
//     return r > 0 ? r : 'INVALID'
//   }
//   console.log(sumMul());


// ! H O M E T A S K  ==> 

//? 2000 yildan oldingi mashinalar ro'yxatini chiqaring
// ? 1
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const filtering = users.filter((item) => item.year < 2000);
// console.log(filtering);

//? 2010 yildan keyinggi chiqqan mashinalar ro'yxatini chiqaring
// ? 2
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const filtering = users.filter((item) => item.year > 2010);
// console.log(filtering);

// ? engine kuchiga qarab malumotlarni sartirovka qiling
// ? 3
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const sorting = users.sort((a , b) => a.engine - b.engine);
// console.log(sorting);

// ? chiqarilgan yillarga qarab ma'lumotlarni sort qiling
// ? 4
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const sorting = users.sort((a , b) => a.year - b.year);
// console.log(sorting);

// ? isimlarni Alphabet tarzida sarterovka qiling
// ? 5
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const sorting = users.sort((a , b) => a.name.localeCompare(b.name));
// console.log(sorting);

// ? 2000 yildan oldin chiqqan mashinalarga status: eski ma'lumot qo'shing
// ? 6
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// const filtering = users.filter(item => item.year < 2000);
// const mapping = filtering.map((a => {
//     return { ...a, status: "Eski" }
// }))
// console.log(mapping);

// ? 2000 - 2010 yilda chiqqan mashinalar ro'yxatiga status: o'rta malumot qoshing
// ? 6
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// let addMiddle = users
//     .filter((car) => car.year < 2010 && car.year > 2000)
//     .map((val) => ({ ...val, status: "O'rta" }));

// console.log(addMiddle);

// ? 2010 - 2022 yildan oldin chiqgan mashinalarga status: yanggi ma'lumot qo'shing
// ? 7
// let users = [
//     { id: 1, year: 1998, engine: 1, name: "Tico" },
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, year: 2012, engine: 2, name: "Malibu" },
//     { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];
// let addMiddle = users
//     .filter((car) => car.year > 2010 && car.year < 2020)
//     .map((val) => ({ ...val, status: "Yangi" }));
// console.log(addMiddle);