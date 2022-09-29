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

/**
* Функция mathOperation возвращает результат операции, который был передан в
* параметр operation для двух первых аргументов (arg1 и arg2).
* Функции mathOperation всегда передаются корректные числа,
* однако, в случае если был передан некорректный
* аргумент в параметр operation, возвращается NaN.
* На 0 делить нельзя.
* Оператор "-" возвращает модуль разности чисел arg1 и arg2.
* @param {number} arg1 - первое число.
* @param {number} arg2 - второе число.
* @param {string} operation - строка, содержащая знак : "+", "-", "*", "/".
* @returns {number} результат операции: "+", "-", "*", "/".
*/
function mathOperation(arg1, arg2, operation) {
  if (operation == "+") {
    return sumNum(arg1, arg2);
  } else if (operation == "-") {
    return subModNum(arg1, arg2);
  } else if (operation == "*") {
    return mulNum(arg1, arg2);
  } else if (operation == "/") {
    return divNum(arg1, arg2);
  } else {
    return NaN;
  }
}

console.log(mathOperation(1, 2, '+'));
console.log(mathOperation(1, 2, '-'));
console.log(mathOperation(2, 1, '-'));
console.log(mathOperation(1, 2, '*'));
console.log(mathOperation(1, 2, '/'));
console.log(mathOperation(1, 2, 'a'));
