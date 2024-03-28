'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Создаю функцию, которая будет сокращать код в дальнейшем
const displayMessage = function (message) {
  document.querySelector(message).textContent = message;
};

document.querySelector('.check');
