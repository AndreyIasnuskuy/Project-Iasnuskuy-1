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

const numberOfFilms = +prompt('Скільки фільмів ви уже дивились?', '');

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

console.log (personalMovieDB);