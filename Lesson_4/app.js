var fruits = ["banana", "apple", "cherry"];
var i = 0;
var fruit = "";
//while - цикл с предусловием
while (fruit !== "melon" && typeof fruit !== "undefined") {
  fruit = fruits[i];
  i++;
}
if (fruit) console.log("We found", fruit, "on index = ", i - 1);
//while(true) - бесконечный цикл

var correctNumber = getRandomNumber(0, 9);

//do..while - цикл с постусловием
// do {
//   var number = +prompt("Guess a number 0-9");
// } while (number !== correctNumber && number);

console.log("Correct answer = ", correctNumber);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function declaration - определение функции
function printHello() {
  console.log("Hello function");
  return undefined;
}

//function expression - функциональное выражение
var printDelimiter = function () {
  console.log("-----------------------------------------------");
};

printDelimiter();
printHello();

function sum(a, b) {
  //установка параметров по умолчанию
  a = a || 0;
  b = b || 0;
  return a + b;
}

function sum_v2(a = 0, b = 0) {
  return a + b;
}

//функция с переменным числом аргументов
function sumAll() {
  var sum = 0;
  for (var item of arguments) {
    sum += item;
  }
  return sum;
}

function validateCardNumber(cardNumber) {
  if (!cardNumber) return;

  var sum = 0;
  var isSecond = false;
  for (var digit of [...cardNumber].reverse()) {
    digit = Number(digit);
    if (!isSecond) {
      sum += digit;
    } else {
      // 16 = 1 + 6
      // 8 -> 08 -> 0 + 8
      var doubledDigit = (digit * 2).toString().padStart(2, "0");
      sum += Number(doubledDigit[0]) + Number(doubledDigit[1]);
    }
    isSecond = !isSecond;
  }
  console.log(sum);
  return sum % 10 === 0;
}

printDelimiter();
console.log(sum(5, 5));
console.log(sum(5));
console.log(sum_v2(5, 5));
console.log(sum_v2(5));

printDelimiter();
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(10, 20, 30, 1));
console.log(sumAll());
printDelimiter();

var cardNumber = "4215890115000363";
console.log(
  "Card PAN is",
  validateCardNumber(cardNumber) ? "valid" : "invalid"
);

//20505199200944

var a = 944;
console.log(a.toString().padEnd(5, "0"));

function myJoin(array, delimiter = ",") {
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i], i === array.length - 1 ? "" : delimiter);
  }
  return result;
}
printDelimiter();
console.log(myJoin([1, 2, 3, 4, 5]));
console.log([1, 2, 3, 4, 5].join());

//map, filter, reduce
console.log(
  [1, 2, 3, 4, 5, 6].filter(function (num) {
    return num % 2 === 0;
  })
);
console.log(
    myFilter([1, 2, 3, 4, 5, 6], function (num) {
      return num % 2 === 0;
    })
  );

function myFilter(array, func) {
  var newArray = [];
  for (var item of array) {
    if (func(item)) newArray.push(item);
  }
  return newArray;
}
