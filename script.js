'use strict';
// Объявляю переменную и применяю математическое выражение для рандомных чисел random и возвращаю целую часть числа с помощью trunc
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Создаю функцию, которая будет сокращать код в дальнейшем
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// получаю доступ к классу и добавляю обработчик событий с названием события и функцией,
// объявляю переменную, меняю тип на Number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // Условие, когда не ввели число - выводится соответствующее смс; При победе - выводится смс и цвет меняется на Зеленый. При победе guess отображается в .number
  if (!guess) {
    displayMessage('Вы не ввели число');
    // когда угадали число, срабатывает условие с функцией и также появлятся результат рекорда, на какой попытке было угадано число.
  } else if (guess === secretNumber) {
    displayMessage('Вы победили!');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').textContent = guess;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Когда не угадали, выводится подсказка, что число либо больше, либо меньше и отнимаются попытки. Тогда, когда закончились попытки, выводится смс, что Вы проиграли
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('Число больше');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        displayMessage('Число меньше');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('Вы проиграли!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Добавил логику кнопке "Снова!", обнулил guess, счёт, рекорд, цвет страницы
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Начните угадывать');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = 'black';
});
