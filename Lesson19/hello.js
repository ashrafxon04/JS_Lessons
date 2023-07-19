// ! DDOS attack => bu asosan saytlarga hujum qlish  yani qotirib quyish , saytni buzish vazifasini bajaradi

// function getData() {
    // setInterval(() => {   //? => set interval orqali toxtovsiz request junatish imkoniyatiga egamiz va natijada bizaga sayt error yoki sayt buzilishi mumkin bulgan holat yaratiladi. 
    // } , 0)
//     fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
//       res.json()   //? bizada backend dan malumot olish uchun "jsonPlaceholder" degan sayt mavjud undagi ma'lumotlarni fetch(); orqali olsak buladi. 
//     );
//   };

  
//   function getCachedData(func) {
//       let cache = new Map();
//       return function(data) {
//           if(cache.has(data)) {
//               return cache.get(data);
//           } 
//           let result = func();
//           cache.set(data, result);
//           return cache.get(data);
//       } 
//   }
  
//   getData = getCachedData(getData); //? bizada "cache" degan tushuncha mavjud va bu "DDOS attack" ni oldini olishda fodalanamiz. 