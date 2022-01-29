"use strict";

//a=15;
//console.log(a); не працює,старий стандарт

//let namber = 5;
//const leftBorderWidth = 1;

//namber = 10;
//console.log(namber);

//const obj={
//    a : 50
//};
//obj.a=10;
//console.log(obj);

//console.log (neme);
//var neme = 'Ivan';

//{
//    var result = 50;
//}
//console.log(result);
//Типи даних 
//числа
//let number = 4.6;

//console.log(4/0);
//console.log('string' * 9);
//Строки
//const person = 'Alex';
//логічний тип даних
//const bool = false;
//null коли просто чогось не існує
//console.log(something);
//undefinned-це коли щось існує,але значення не має
//let und;
//console.log(und);

//Обєкти

//const obj = {
//    names: "Andrey",
//    age: 34,
//    isMarried: true,
//};

//console.log(obj.names);
//console.log(obj["names"]);

//Масиви

//let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
//console.log(arr[1]);


//alert ('Hello');

//const result = confirm("Are you here?");
//console.log(result);


//const answer = +prompt("Вам є 18?", "18");
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt('Як вас звати?', '');
//answers[1] = prompt('Яке у вас прізвище?', '');
//answers[2] = prompt('Скільки вам років?', '');

//document.write(answers);
//console.log(typeof(answers));
//console.log(typeof(null));Це офіційно признана помилка бо null це не object!

//Інтерполяція. Урок 8.

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = "Andrey";

//alert(`Привіт, ${user}`);

//console.log('arr' + "- object");
//console.log(4 + "5");

//let incr = 10,
//    decr = 10;

//++incr;
//--decr;

//console.log(incr++);Постфіксна форма запису
//console.log(decr--);

//console.log(++incr);Префіксна форма запису
//console.log(--decr);

//console.log(5%2);vuhid 1/vuvodut zalushok pisla dilena

//

//const isChecked = false,
//      isClose = false;
//
//console.log(isChecked || !isClose);

//Створюємо нову першу прогу
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/*const numberOfFilms = +prompt('Скільки фільмів ви уже дивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('На скільки оцінити його?' , ''),
      c = prompt('Один з останніх переглянутих фільмів?', ''),
      d = prompt('На скільки оцінити його?' , '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);*/

//Урок 13

/*if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Eror');
}

const num = 50;

if (num < 49) {
    console.log('Eror');
} else if (num > 100) {
    console.log ('Багато');
} else {
    console.log('Ok');
}

const num = 50;
(num === 50) ? console.log('Ok') : console.log('Eror');*/

/*const num = 50;

switch (num) {
    case 49:
        console.log('Невірно');
        break;
    case 100:
        console.log('Невірно');   
        break;
    case 50:
        console.log('В ціль');
        break;
    default:
        console.log('Не цього разу');
        break;    
}*/
// Урок 14. Цикли

//let num = 50;

/*while (num <=55) {
    console.log(num);
    num++;
}*/

/*do {
    console.log(num);
    num++; 
}
while (num <=55);*/

/*for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;  
}*/

/*for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
}*/

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/*const numberOfFilms = +prompt('Скільки фільмів ви уже дивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('На скільки оцінити його?' , '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('done');
    } else {
        console.log('error');
        i--;
    }    

}


if (personalMovieDB.count <10) {
    console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

console.log (personalMovieDB);*/

// Урок 16 Функції
//function declaration

/*let num = 20; //Глобальна функція

function showFirstMessage(text) {
    console.log (text);
    let num = 10; //Локальна функція
}

showFirstMessage("Hello world");
console.log(num);*/

/*function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,7));
console.log(calc(10,6));*/


/*function ret() {
    let num = 50;

    //


    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function expression

const logger = function() {
    console.log("Hello");
};

logger();

//Стрілочна функція

const calc = (a,b) => a + b ;*/

// Методи та функції

/*const str = "test";
//const arr = [1, 2, 4];

//console.log(str.length);//Вивід 4
//console.log(arr.length);// Вивід 3
//console.log(str[2]);//Вивід s

console.log(str.toUpperCase());//Переводить ряд в ВЕРХНІЙ регістр
console.log(str.toLowerCase());//Переводить ряд в нижній регістр
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //Пошук під рядка/Вивід 5,з 5 значення починається fruit

const logg = "Hello world";

console.log(logg.slice(6, 11));//вивід world
//console.log(logg.slice(6, 10));//вивід worl
//console.log(logg.slice(-6, -1));//вивід worl
console.log(logg.substring(6, 11));//вивід world/Мінус вик. не можна

console.log(logg.substr(6, 5));//вивід world

const num = 12.2;
console.log(Math.round(num));//Вивід 12

const test = "12.2px";
console.log(parseInt(test));//Вивід 12/Метод який міняє види числення-дійкова,десяткова...
console.log(parseFloat(test));//Вивід 12.2*/

//Урок 18

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

// Код возьмите из предыдущего домашнего задания

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви уже дивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви уже дивились?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('На скільки оцінити його?' , '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('done');
    } else {
        console.log('error');
        i--;
    }    

   }
}

rememberMyFilms();


  function detectPersonalLevel() {
    if (personalMovieDB.count <10) {
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >=30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
  }

  detectPersonalLevel();

  function showMyDB (hidden) {
     if (!hidden) {
         console.log(personalMovieDB);
     }
  }

  showMyDB(personalMovieDB.privat);


  function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
          const genre = prompt(`Ваш любимый жанр под номером ${i}`);
          personalMovieDB.genres[i - 1] = genre;
      }
  }

  writeYourGenres();


