// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [100, "okten", -55, {id: 0, name: 'Anna', age: 33}, false, [0, 1, 2, 3, 4, 5], NaN, true, 'HI', 0]
for (const arrKey in arr) {
    console.log(arr[arrKey])
}

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "The Spiderwick Chronicles",
    pageCount: 107,
    genre: "Fantasy"
}
console.log(book1)

let book2 = {
    title: "Alice in Wonderland",
    pageCount: 200,
    genre: "Fairy tale"
}
console.log(book2)

let book3 = {
    title: "Romeo and Juliet",
    pageCount: 160,
    genre: "Tragedy"
}
console.log(book3)
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book01 = {
    title: "Grimms' Fairy Tales",
    pageCount: 400,
    genre: "Fairy tale",
    authors: [
        {name: "Jacob Grimm", age: 78},
        {name: "Wilhelm Grimm", age: 73}
    ]
};

let book02 = {
    title: "Alice in Wonderland",
    pageCount: 200,
    genre: "Fantasy",
    authors: [
        {name: "Lewis Carroll", age: 65}
    ]
};

let book03 = {
    title: "Romeo and Juliet",
    pageCount: 160,
    genre: "Tragedy",
    authors: [
        {name: "William Shakespeare", age: 52}
    ]
};

console.log(book01);
console.log(book02);
console.log(book03);


//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let array = [
    {name: "Vasya", username: "vasyok", password: "habuyhabc"},
    {name: "Anna", username: "coconut", password: "dsfhuh822"},
    {name: "Yana", username: "lucky200", password: "dj89kdow2"},
    {name: "Alex", username: "alexBond", password: "csdcn9020"},
    {name: "Katya", username: "cutie", password: "ecmdjvjvf.p"},
    {name: "Serega", username: "seriy", password: "de,c[d['dcdmffw"},
    {name: "Kostya", username: "kokstik", password: "edisfiw3892wjd"},
    {name: "Tom", username: "tomholand", password: "JJIdw92idJI"},
    {name: "Kiril", username: "kiriegka", password: "ckjD9208we8hJ"},
    {name: "Evgen", username: "evashka", password: "LOPKFI9jijia"},
]
for (const item of array) {
    console.log(item.password);
}


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let arr1 = [
    {
        day: 1,
        temperature: {morning: 7, afternoon: 12, evening: 4}
    },
    {
        day: 2,
        temperature: {morning: -1, afternoon: 5, evening: 3}
    },
    {
        day: 3,
        temperature: {morning: 4, afternoon: 10, evening: 2}
    },
    {
        day: 4,
        temperature: {morning: 5, afternoon: 16, evening: 10}
    },
    {
        day: 5,
        temperature: {morning: -1, afternoon: 7, evening: -3}
    },
    {
        day: 6,
        temperature: {morning: 3, afternoon: 11, evening: 6}
    },
    {
        day: 7,
        temperature: {morning: 6, afternoon: 13, evening: 8}
    }
];
console.log(arr1)


// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60);
if (time > 0 && time < 16) {
    console.log("First quarter: " + time)
} else if (time > 15 && time < 31) {
    console.log("Second quarter: " + time)
} else if (time > 30 && time < 46) {
    console.log("Third quarter: " + time)
} else if (time > 45 && time < 60) {
    console.log("Fourth quarter: " + time)
} else {
    console.log("It's not time: " + time)
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * 31) + 1;
switch (day) {
    case day >= 1 && day <= 10:
        console.log("First decade: " + day);
        break;
    case day >= 11 && day <= 20:
        console.log("Second decade: " + day);
        break;
    case day >= 21 && day <= 31:
        console.log("Third decade: " + day);
        break;
    default:
        console.log("???");
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week_day = Number(prompt("Введіть номер дня тижня (1-7):"));
// let week_day=4;
switch (week_day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Невірний номер дня");
}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=1;
let b = 2;
if(a>b){
    console.log(a);
}else if(a<b){
    console.log(b);
}else if(a===b){
    console.log(a+"="+b);
}else{
    console.log("???");
}

//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

/*--falsy-значення--*/
// let y =false;
// let y =0;
// let y=NaN;
// let y=undefined;
// let y=null;
let y=""

// let y=true;
// let y=1;
// let y=-4;
// let y ="okten";
// let y={id:0, name:'lol'}
// let y=[1,2,3,4]
if(!y){
    console.log(typeof y+": "+y)
    y="default"
    console.log(y)
}else{
    console.log(typeof y+": "+y)
}

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
if (coursesAndDurationArray[i].monthDuration > 5){
    console.log("Super: " + coursesAndDurationArray[i].title);
}else{
    console.log('Not enough: ' + coursesAndDurationArray[i].title)
}
}
