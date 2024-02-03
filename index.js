// object

// const user = {
//     name: "john",
//     age: 19,
//     weight: 50,
//     "leiks birds": false
// }

// for (const key in user) {
//     console.log(user[key]);
// }

// konstructor function

// function User(name, age, phone) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
// }

// let john = new User("John", 20, "+0989989");
// let axel = new User("axel", 46, "+643539764");
// let doe = new User("doe", 28, "+9868966");
// let steve = new User("steve", 97, "+93849822");
// let wiliam = new User("John", 54, "+998923280233");

// console.log(john);
// console.log(axel);
// console.log(steve);
// console.log(doe);
// console.log(wiliam);

// JSON

// let users = [
//   {
//     name: "john",
//     age: 23,
//     weight: 80,
//   },
//   {
//     name: "doe",
//     age: 23,
//     weight: 80,
//   },
// ];

// let data = JSON.stringify(users);

// console.log(data);

// let json ='[{"name":"john","age":23,"weight":80},{"name":"doe","age":23,"weight":80}]';
// let parse = JSON.parse(json);

// console.log(parse);



// 1. Obyekt xossalarini manipulyatsiya qilish:
//  “Tovar”, “model” va “yil” kabi xususiyatlarga ega avtomobilni ifodalovchi obyekt yarating.
//  Ushbu ob'ektni argument sifatida qabul qiladigan va bir xil xususiyatlarga ega,
// ammo "yil" ni 1 ga oshirilgan yangi ob'ektni qaytaradigan funktsiyani yozing.

// let car = {
//     brend: "RollsRoyce",
//     year: 2020,
//     color: "black",
//     weight: 4000
// }

// Avtomobil obyektini ifodalovchi funktsiya
function Avtomobil(tovar, model, yil) {
    this.tovar = tovar;
    this.model = model;
    this.yil = yil;
}

// Yilni 1 ga oshiruvchi funktsiya
function yilniOshir(avto) {
    var yangiYil = avto.yil + 1;
    return new Avtomobil(avto.tovar, avto.model, yangiYil);
}

// Test uchun obyekt
var avto1 = new Avtomobil("Chevrolet", "Camaro", 2020);

// Test natijasi
var avto2 = yilniOshir(avto1);
console.log(avto2); // Avtomobil {tovar: "Chevrolet", model: "Camaro", yil: 2021}



//  2. Ob'ektni takrorlash:
//  “Ism”, “yosh” va “baholar” (baholar massivi) xossalariga ega o‘quvchini ifodalovchi obyekt yarating.
// Talabaning o‘rtacha bahosini hisoblash va qaytarish funksiyasini yozing.

let student = {
    name: "Jack",
    age: 30,
    baholar: [5, 4, 4, 5, 5, 5]
}

//  3. Ob'ektni meros qilib olish:
//  "Tipe" va "rang" xususiyatlariga ega "Shakl" asosiy ob'ektini aniqlang.
// "Shakl" dan meros bo'lgan "Doira" va "To'rtburchak" ikkita kichik ob'ektni yarating.
// Doiralar uchun "radius" va to'rtburchaklar uchun "kenglik" va "balandlik" kabi maxsus xususiyatlarni qo'shing.

let phone = {
    type: "Iphone",
    color: "black",
    shape: "rectangle",
    year: 2020
}

//  4. Ob'ekt usulini amalga oshirish:
//  "Balans" va "egasi" xususiyatlariga ega bank hisobini ifodalovchi ob'ekt yarating.
// Balansni yangilaydigan "depozit" va "olib qo'yish" usullarini qo'llang.
// Pul yechib olish salbiy balansga olib kelmasligiga ishonch hosil qiling.



//  5. Obyektni taqqoslash:
//  "Ism", "yosh" va "shahar" kabi xususiyatlarga ega shaxslarni ifodalovchi ikkita ob'ekt yarating.
//  Ushbu ob'ektlarning bir xil shaxs ekanligini aniqlash uchun ularni taqqoslaydigan funktsiyani yozing
// (barcha xususiyatlar mos keladi).

let user1 = {
    name: "Steve",
    age: 20,
    city: "New York"
}
let user2 = {
    name: "Tony",
    age: 26,
    city: "Los Angels"
}