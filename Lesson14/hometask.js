// ! H O M E T A S K
//  //? 1 masala
// const company = {
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 1600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };
// function calculateTotalSalary(obj) {
//     let totalSalary = 0;

//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             obj[key].forEach(item => {
//                 totalSalary += item.salary;
//             });
//         } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//             totalSalary += calculateTotalSalary(obj[key]);
//         }
//     }

//     return totalSalary;
// }

// const totalSalary = calculateTotalSalary(company);
// console.log(totalSalary);

//  //? 2 masala
// function fib(n) {
//     if (n <= 1) {
//       return n;
//     }
  
//     return fib(n - 1) + fib(n - 2);
//   }
  
//   console.log(fib(3)); // 2
//   console.log(fib(7)); // 13
//   console.log(fib(77)); // 5527939700884757
