/* 
Урок 1
Группа: ГикТек 19
Тема: основы JavaScript
*/

console.log("Hello World!");
console.warn("My first warning");
console.error("My first error");

// snake case
// var user_name_and_surname = "Evgenii Kiselev";

// Camel case
var userName = prompt("What is your name?");
var userNameAndSurname = "Evgenii Kiselev";

alert("Hello, " + userName);

/*
Типы данных в JavaScript:
1) string - текстовый
2) number - числовой
3) boolean - логический
4) undefined - неопределенный
5) null - пустой
6) object - объектный (комплексный)
7) BigInt - для длинной арифметики
8) Symbol - уникальный
*/

//Баг JS
console.log(typeof alert); // функция в JS является объектом, хотя здесь пишется function

//Баг JS
console.log(typeof null); // null в JS является отдельным типом данных, хотя здесь пишется object

//1) String
var customerName = "Evgenii";
var customerSurname = "Kiselev";
var customerLastname = "Dmitrievich";

//Конкатенация - Concatenation
var customerFullName =
  customerSurname + " " + customerName + " " + customerLastname;

console.log(customerFullName);

//2) Number

var customerId = 456;

console.log(customerId + 1);
console.log(customerId - 10);
console.log(customerId * 5);
console.log(customerId / 6);
console.log(customerId ** 2);
console.log(customerId % 3);

//long-hand update - полное запись обновления переменной
// customerId = customerId + 1;
//short-hand update  короткое обновление переменной
// customerId += 1;
// customerId++;

// customerId = customerId - 1;
// customerId -= 1;
// customerId--;

// customerId *= 2;
// customerId /= 2;

console.log(customerId * "qwerty"); // NaN - Not a Number

console.log(customerId / 0); //Infinity -Infinity

//3) Boolean

var isResident = false;
var isCreditable;
var customerAge = 50;

//Условие
if (!isResident) {
  console.warn("Клиенту нельзя выдавать кредиты");
  isCreditable = false;
}

var congratsMessage;
if (customerAge > 45) {
  congratsMessage = "Здравствуйте. Уважаемый";
} else if (customerAge >= 18 && customerAge <= 45) {
  congratsMessage = "Здравствуйте.";
} else {
  congratsMessage = "Привет";
}

console.log(congratsMessage);

//операторы сравнения: == === != !== > < >= <= !

var customerLogin = "ekiselev";
var customerPassword = "123qwe";

//логические операторы: && ||

if (customerLogin === "jkiselev" && customerPassword === "123qwe") {
  console.log("Successfully logged in.");
} else {
  console.error("Authentication failed");
}
