const user1 = {
    firstName: "Ashrafxon",
    surname: "Yaxyoyev",
    // getfullname(){
    //     console.log(`${this.firstName} ${this.surname}`);
    // },
};
const user2 = {
    firstName: "zuxriddin",
    surname: "qulmatov",
    //     getfullname(){
    //         console.log(`${this.firstName} ${this.surname}`);
    //     },
};
const user3 = {
    firstName: "Abdurahim",
    surname: "Abdurahmonov",
    // getfullname(){
    //     console.log(`${this.firstName} ${this.surname}`);
    // },
};

function getData(customP1, customP2) {
    console.log(`${customP1} ${customP2} ${this.firstName} ${this.surname}`);
}
// ! apply(object,[customP1, customP2]) => apply bu funksiyaga context berish vazifasini bajaradi
// getData.apply(user1 ,["webbrain" , "talabasi"]) ;
// getData.apply(user2 ,["webbrain" , "talabasi"]) ;
// getData.apply(user3 ,["webbrain" , "talabasi"]) ;

// ! call(object,customP1,customP2) = > call bu funksiyaga kontext berish vazifasini bajaradi huddi apply ga uxshab
// ! faqat bunging farqi context lar array ichida yozilmidi.
// getData.call(user1 ,"webbrain" , "talabasi");
// getData.call(user2 ,"webbrain" , "talabasi");
// getData.call(user3 ,"webbrain" , "talabasi");

// ! bind(object,customP1,customP2)()  => bind bu funksiyaga kontext berish vazifasini bajaradi
// !faqat buni yozgandan so'ng yana bir marta ishlati quyish kk.
// let getAshrafxonsDate1 = getData.bind(user1 ,"webbrain" , "talabasi");
// let getAshrafxonsDate2 = getData.bind(user2 ,"webbrain" , "talabasi");
// let getAshrafxonsDate3 = getData.bind(user3 ,"webbrain" , "talabasi");
// getAshrafxonsDate1()
// getAshrafxonsDate2()
// getAshrafxonsDate3()