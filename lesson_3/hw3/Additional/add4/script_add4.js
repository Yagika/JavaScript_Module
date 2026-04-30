// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
let i = 0;
while (arr.length < 50) {
    i += 2;
    arr.push(i)
}
console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr1 = [];
let k = 1;
while (arr1.length < 50) {
    arr1.push(k)
    k += 2;
}
console.log(arr1);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr2 = [];
let j = 0;
while (arr2.length < 20) {
    arr2.push(Math.floor(Math.random() * 100) + 1)
    j++;
}
console.log(arr2);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr3 = [];
let p = 0;
while (arr3.length < 20) {
    arr3.push(Math.floor(Math.random() * 725) + 8)
    p++;
}
console.log(arr3);
numbers = [3, 15, 28, 42, 8, 19, 33, 50, 7, 21, 39, 2, 18, 44, 29, 6, 11, 37, 25, 48]
// 2. Вивести за допомогою console.log кожен третій елемент
for (let l = 0; l < numbers.length; l++) {
    if (l % 3 === 2) {
        console.log(numbers[l]);
    }
}
// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
console.log("----------------------");
for (let l = 0; l < numbers.length; l++) {
    if (l % 3 === 2 && numbers[l] % 2 === 0) {
        console.log(numbers[l]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
console.log("----------------------");
let newArray = [];
for (let l = 0; l < numbers.length; l++) {
    if (l % 3 === 2 && numbers[l] % 2 === 0) {
        newArray.push(numbers[l]);
    }
}
console.log(newArray);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("----------------------");
for (let l = 0; l < numbers.length; l++) {
    if (numbers[l + 1] % 2 === 0) {
        console.log(numbers[l]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrayNumbers = [100, 250, 50, 168, 120, 345, 188]
let sum = 0;
for (let l = 0; l < arrayNumbers.length; l++) {
    sum += arrayNumbers[l];
}
console.log(sum / arrayNumbers.length);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let newArr = [];
for (let l = 0; l < numbers.length; l++) {
    newArr.push(numbers[l] * 5);
}
console.log(newArr);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let numbersArr = ["jjjj", true, false, 33, -12, NaN, false, "ksdksd", -1, "22", 0]
let newArr1 = [];
for (let l = 0; l < numbersArr.length; l++) {
    if (typeof numbersArr[l] === "number") {
        newArr1.push(numbersArr[l]);
    }
}
console.log(newArr1);
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
