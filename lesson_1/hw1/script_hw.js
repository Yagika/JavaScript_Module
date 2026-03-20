// #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);


// #6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = "Yana"
let lastName = "Kucherenko"
let middleName = "Valeriivna"
let person = `${lastName} ${firstName} ${middleName}`
console.log(person);

// #4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);


// #ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
let name = prompt("What is your name?:");
let fatherName = prompt("What is your patronymic?:");
let age = Number(prompt("How old are you"));
console.log(name + " " + fatherName + " " + age);
