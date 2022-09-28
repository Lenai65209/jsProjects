"use strict";

function declinationOfNumber(count, one, two, five) {
  if (count % 100 > 10 && count % 100 < 15) {
    return five;
  } else if (count % 10 == 1) {
    return one;
  } else if (count % 10 > 1 && count % 10 < 5) {
    return two;
  } else {
    return five;
  }
}

// Число яблок, можно пробовать поставить свое целое, положительное число.
const applesNumber = 5;
// Получаем от функции одно из слов "яблоко", "яблока" или "яблок".
const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
// Выводим корректную строку, например:
// "У меня есть 1 яблоко."
// "У меня есть 2 яблока."
// "У меня есть 5 яблок."
// При любом целом, положительном числе в applesNumber, строка, которая
// выводится в console.log, должна иметь правильное склонение слова "яблоко".
console.log(`У меня есть ${applesNumber} ${word}.`);

let exsWord;
let exsApplesNumber;

exsApplesNumber = 1;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 2;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 3;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 4;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 5;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 6;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 7;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 8;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 9;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 10;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 11;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 12;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 13;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 14;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 15;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 16;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 17;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 18;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 19;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 20;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 21;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 22;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 23;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 24;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

exsApplesNumber = 25;
exsWord = declinationOfNumber(exsApplesNumber, "яблоко", "яблока", "яблок");
console.log(`У меня есть ${exsApplesNumber} ${exsWord}.`);

console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок")); // "яблоко"
console.log(declinationOfNumber(2, "мяч", "мяча", "мячей")); // "мяча"
console.log(declinationOfNumber(5, "стул", "стула", "стульев")); // "стульев"
