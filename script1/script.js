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

/*let numberOfFilms;

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

//lessons 19 call-back функції

/*function first() {
    //do something
    setTimeout (function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я вивчаю: ${lang}`);
    callback();
}

function done() {
    console.log('Я пройшов це заняття!');
}

learnJS('JavaScript', done);*/

// Lesons 20

/*const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

option.makeTest();

const {border, bg} = option.colors;
console.log(border);*/

//console.log(Object.keys(option).length);

/*console.log(option.name);

delete option.name;

console.log(option);*/

//Перебираємо властивості обєкта
/*
let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Властивість ${i} має значення ${option[key][i]}`);
            counter++;
        }
    }else {
        console.log(`Властивість ${key} має значення ${option[key]}`);
        counter++;
    }
}

console.log(counter);*/


/*const arr = [2, 3, 6, 8, 10];
arr.sort(compareNum);//сортування чисел по порядку
console.log(arr);

function compareNum(a,b) {
    return a-b;
}*/


/*arr [99] = 0;//Так робити не правильно
console.log(arr.length);
console.log(arr);*/

/*arr.forEach(function(item, i, arr) {
    console.log(`${i}:${item} в седині массиву ${arr}`);
});*/

//arr.pop();
//arr.push(10);

//console.log(arr);
//Перебирання елементів масиву
/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/
//Або 2 варіант виконання перебору елементів масиву

/*for (let value of arr) {
    console.log(value);
}*/

/*const str = prompt("", "");
const products = str.split(",");//Формування із рядка в масив
console.log(products);*/

/*const str = prompt("", "");
const products = str.split(",");
console.log(products.join('; '));//Формування із масива в рядок*/

/*const str = prompt("", "");
const products = str.split(",");
products.sort();//Метод сортування
console.log(products.join('; '));*/

//Урок 22 Передача даних за посиланням або за значенням

/*let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);*/

/*const obj =  {
    a: 5,
    b: 1
};

const copy = obj; //Посилання(cсилка)

copy.a = 10;

console.log(copy);
console.log(obj);*/

//Поверхнісна копія обєктів

/*function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a =10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);*/

/*const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));*/

/*const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadsda';
console.log(newArray);
console.log(oldArray);*/
 
/*const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'lifejournal', 'blogger'],
      internet = [...video, ...blogs, 'facebook'];

console.log(internet);*/   

/*function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);*/


/*const array = ["a", "b"];

const newAarray = [...array];*/

/*const q = {
    one: 1,
    two: 2
};

const newObj = {...q};*/

//Lesons 23 основи ООП...

/*let str = "some";
let strObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1, 2, 3]);

const solder = {
    health:400,
    armor: 200,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(solder);//Новий метод, найбільше використ.

//const jonh = {
//    health:100
//};

//jonh.__proto__ = solder;//Старий метод
//Нові методи
//Object.setPrototypeOf(jonh, solder);// Встановлення прототипу

//console.log(jonh.armor);

jonh.sayHello();*/

/* Задание на урок: 24

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

/*
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви уже дивились?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви уже дивились?', '');
        }
    },
    rememberMyFilms: function() {
    
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
      },
      detectPersonalLevel: function() {
        if (personalMovieDB.count <10) {
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >=30) {
            console.log("Вы киноман");
        }else {
            console.log("Произошла ошибка");
        }
      },
      showMyDB: function (hidden) {
         if (!hidden) {
             console.log(personalMovieDB);
         }
      },
      toggleVisibleMyDB: function() {
         if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
         } else {
            personalMovieDB.privat = true; 
         }
      },
      writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            //let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            //if (genre === '' || genre == null) {
            //    console.log('Не вірні дані або відсутні взагалі');
            //    i--;
            //}else {
            //    personalMovieDB.genres[i - 1] = genre;
            //}

            let genres = prompt(`Введіть ваші улюблені жанри через кому`).toLocaleLowerCase();

            if (genres === '' || genres == null) {
                    console.log('Не вірні дані або відсутні взагалі');
                   i--;
                }else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};
*/

/*//lesons26

// To String

//1)Рідко користуються
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)Конкотинація

console.log(typeof(5+ ''));

const num = 5;

console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + "px";

//To Number
//1)

console.log(typeof(Number('4')));
//2)Метод унарний плюс

console.log(typeof(+ '5'));

//3)
console.log(typeof(parseInt("15px", 10)));//Не часто вик.
// Унарний прлюс 3)
let answ = +prompt("Hello", ""); 

//To boolean(false,true)

 //0, '', null, undefined, NaN;
//1)

 let switcher = null;

 if (switcher) {
     console.log('Working...');
 }

 switcher = 1;

if (switcher) {
     console.log('Working...');
 }

 //2)Не корист.
 console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"5555"));*/
