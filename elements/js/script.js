"use strict";

const box = document.getElementById('box');//Видає лише одне унікальне значення

console.log(box);

const btns = document.getElementsByTagName('button');//видає HTML колекції(псевдо масиви).

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');//видає HTML колекції(псевдо масиви).
console.log(circles);

const hearts = document.querySelectorAll('.heart');//видає HTML колекції(псевдо масиви).
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');//Видає лише одне перше значення яке по порядку потрапляє.
console.log(oneHeart);