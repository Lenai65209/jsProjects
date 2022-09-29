"use strict";

/**
* Функция складывает два числа.
* @param {number} num1 - первое слагамое.
* @param {number} num2 - второе слагамиое.
* @returns {number} num1 + num2 - сумма.
*/
function sumNum(num1, num2) {
  return num1 + num2;
}

/**
* Функция вычисляет модуль разности первого и второго числа.
* @param {number} num1 - первое число.
* @param {number} num2 - второе число.
* @returns {number} |num1 - num2| - модуль разности.
*/
function subModNum(num1, num2) {
  return Math.abs(num1 - num2);
}

/**
* Функция умножает два числа.
* @param {number} num1 первый множитель.
* @param {number} num2 второй множитель.
* @returns {number} num1 * num2 - произведение.
*/
function mulNum(num1, num2) {
  return num1 * num2;
}

/**
* Функция делит первое число на второе без округления.
* На 0 делить нельзя.
* @param {number} num1 делимое.
* @param {number} num2 делитель.
* @returns {number} num1 / num2 - частное.
*/
function divNum(num1, num2) {
  return num1 / num2;
}

console.log(sumNum(2, 6));
console.log(subModNum(2, 6));
console.log(subModNum(6, 2));
console.log(subModNum(2, 2));
console.log(mulNum(2, 6));
console.log(divNum(2, 6));
console.log(divNum(6, 2));

