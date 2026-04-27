// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
let arr2 = ['a', 'b', 'c', 'd', 'e']
console.log(arr2)
let arr3 = ['a', 2, true, -100, false]
for (const arr3Element of arr3) {
    console.log(arr3Element);
}
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let arr4 = []
for (let i = 0; i < 5; i++) {
    arr4[i] = ('hello' + i + 1);
    console.log(arr4[i]);
}
console.log(arr4);
//
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log("-----------------1----------------");
// 1. перебрати його циклом while
let i = 0;
while (i < arr5.length) {
    console.log(arr5[i]);
    i++;
}
console.log("-----------------2----------------");
//     2. перебрати його циклом for
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}
console.log("-----------------3----------------");
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < arr5.length) {
    if (j % 2 !== 0) {
        console.log(arr5[j]);
    }
    j++;
}
console.log("-----------------4----------------");
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < arr5.length; i += 2) {
    console.log(arr5[i]);
}

console.log("-----------------5----------------");
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let x = 0;
while (x < arr5.length) {
    if (x % 2 === 0) {
        console.log(arr5[x]);
    }
    x++;
}

console.log("-----------------6----------------");
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr5.length; i += 2) {
    console.log(arr5[i]);
}

console.log("-----------------7----------------");
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 3 === 0) {
        arr5[i] = "okten"
    }
}
console.log(arr5)

console.log("-----------------8----------------");
// 8. вивести масив в зворотньому порядку.
let arr6 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr6.length - 1; i >= 0; i--) {
    console.log(arr6[i]);
}

console.log("-----------------9----------------");
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
console.log("#1");
// 1. перебрати його циклом while
let z = arr6.length - 1;
while (z >= 0) {
    console.log(arr6[z]);
    z--;
}
console.log("#2");
//     2. перебрати його циклом for
for (let i = arr6.length - 1; i >= 0; i--) {
    console.log(arr6[i]);
}
console.log("#3");
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let q = arr6.length - 1;
while (q >= 0) {
    if (q % 2 !== 0) {
        console.log(arr6[q]);
    }
    q--;
}
console.log("#4");
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = arr6.length - 1; i >= 0; i -= 2) {
    console.log(arr6[i]);
}

console.log("#5");
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let l = arr6.length - 1;
while (l >= 0) {
    if (l % 2 === 0) {
        console.log(arr6[l]);
    }
    l--;
}

console.log("#6");
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = arr6.length - 2; i >= 0; i -= 2) {
    console.log(arr6[i]);
}

console.log("#7");
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = arr6.length - 1; i >= 0; i--) {
    if (arr6[i] % 3 === 0) {
        arr6[i] = "okten"
    }
    console.log(arr6[i]);
}
console.log(arr6)
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const number of arr7) {
    console.log(number);
}
//     #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr8 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (const number of arr8) {
    console.log(number);
}
//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr9 = ["a", 12, "c", true, "e", NaN, false, "h", -31, "j"];
for (const number of arr9) {
    console.log(number);
}
//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr10 = ["a", true, -13, "d", true, "f", 89, 0, "i", false];
for (const number of arr10) {
    if (typeof number === "boolean") {
        console.log(number);
    }
}
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const number of arr10) {
    if (typeof number === "number") {
        console.log(number);
    }
}
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const number of arr10) {
    if (typeof number === "string") {
        console.log(number);
    }
}
//
// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr11 = [];
arr11[0] = 1;
arr11[1] = "dfed";
arr11[2] = true;
arr11[3] = false;
arr11[4] = "d22ccc";
arr11[5] = 23;
arr11[6] = "csd";
arr11[7] = -92;
arr11[8] = true;
arr11[9] = undefined;
for (const number of arr11) {
    console.log(number);
}
document.write(`\n`);

//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 10; k++) {
    console.log(k);
    document.write(`${k},`);
}
document.write(`\n`);

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k++) {
    console.log(k);
    document.write(`${k},`);
}
document.write(`\n`);

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k += 2) {
    console.log(k);
    document.write(`${k},`);
}
document.write(`\n`);

// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 2 === 0) {
        console.log(k);
        document.write(`${k},`);
    }
}
document.write(`\n`);

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 2 !== 0) {
        console.log(k);
        document.write(`${k},`);
    }
}
//
//
// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори, жанри).
const books = [
    {
        title: "The Hobbit",
        pages: 310,
        authors: ["J.R.R. Tolkien"],
        genres: ["fantasy", "adventure"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["dystopian", "political fiction"]
    },
    {
        title: "Clean Code",
        pages: 464,
        authors: ["Robert C. Martin","Someone else"],
        genres: ["programming", "software engineering"]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        pages: 309,
        authors: ["J.K. Rowling"],
        genres: ["fantasy", "magic", "detective"]
    }
];
// - знайти наібльшу книжку.
let biggestBook = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].pages > biggestBook.pages) {
        biggestBook = books[i];
    }
}
console.log(biggestBook)
// - знайти книжку/ки з найбільшою кількістю жанрів
// let variousGenres = books.reduce((maxGenre, book) =>
//     book.genres.length > maxGenre.genres.length ? book : maxGenre
// );
// console.log(variousGenres)
let variousGenres=[];
let maxGenres=0;
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length>maxGenres) {
       maxGenres = books[i].genres.length;
    }
}
for (let book of books) {
    if (book.genres.length===maxGenres) {
        variousGenres.push(book);
    }
}
console.log(variousGenres)
// - знайти книжку/ки з найдовшою назвою
let biggestTitle=[];
let maxTitle=0;
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length>maxTitle) {
        maxTitle = books[i].title.length;
    }
}
for (let book of books) {
    if (book.title.length===maxTitle) {
        biggestTitle.push(book);
    }
}
console.log(biggestTitle)
// - знайти книжку/ки які писали 2 автори
let bookMoreAuthors=[];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length===2) {
        bookMoreAuthors.push(books[i]);
    }
}
console.log(bookMoreAuthors)

// - знайти книжку/ки які писав 1 автор
let bookOneAuthor=[];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length===1) {
        bookOneAuthor.push(books[i]);
    }
}
console.log(bookOneAuthor)
