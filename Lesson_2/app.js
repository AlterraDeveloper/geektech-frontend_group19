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

// 3) boolean
//логические операторы: && ||

var customerLogin = "ekiselev";
var customerPassword = "123qwe";

if (customerLogin === "jkiselev" && customerPassword === "123qwe") {
  console.log("Successfully logged in.");
} else {
  console.error("Authentication failed");
}

var customerIdentificationNumber = "22505200115247";
var firstInnSymbol = customerIdentificationNumber[0];
console.log(firstInnSymbol);

if (
  (firstInnSymbol === "0" ||
    firstInnSymbol === "1" ||
    firstInnSymbol === "2") &&
  customerIdentificationNumber.length === 14
) {
  console.log("INN validation success");
} else {
  console.warn("Incorrect INN of customer");
}

var customerCardType = "Maestro";

if (customerCardType === "VISA") {
  console.log("Send request to VISA processing");
} else if (customerCardType === "ELCARD") {
  console.log("Send request to ELCARD processing");
} else if (
  customerCardType === "Maestro" ||
  customerCardType === "MasterCard"
) {
  console.log("Send request to MasterCard processing");
} else {
  console.warn("Unknown card processing...");
}

switch (customerCardType) {
  case "VISA":
    console.log("Send request to VISA processing");
    break;
  case "ELCARD":
    console.log("Send request to ELCARD processing");
    break;
  case "Maestro":
  case "MasterCard":
    console.log("Send request to MasterCard processing");
    break;
  default:
    console.warn("Unknown card processing...");
}

// 4) undefined - неопределенный
var customerBirthDate;
console.log("customerBirthDate = ", customerBirthDate);
var symbol = customerIdentificationNumber[14];
console.log("symbol = ", symbol);

// 5) null - пустой
customerBirthDate = null;

//Баг JS
console.log(typeof customerBirthDate); // null в JS является отдельным типом данных, хотя здесь пишется object

// 6) object - объектный (комплексный)
var customer = {
  ID: 625247,
  Name: "Evgenii",
  Surname: "Kiselev",
  LastName: "Dmitrievich",
  IsResident: true,
  BirthDate: null,
  "Card type": "VISA",
  Cards: [
    {
      CardPan: "7433 7439 2345 0895",
      ExpiryDate: "05-05-2030",
      PrintName: "Kiselev Evgenii",
      CVC: 125,
    },
    {
      CardPan: "6238 3249 3526 2783",
      ExpiryDate: "06-06-2027",
      PrintName: "Kiselev Evgenii",
      CVC: 978,
    },
  ],
  Passport: {
    Series: "ID",
    Number: "1616489",
    ExpiryDate: "01-01-2025",
    IssueAuthority: "CON #1",
  },
};

console.log(customer["Surname"] + " " + customer.Name);
console.log(customer.Passport.Series + customer.Passport.Number);
// console.log(customer["Card type"]);

var numbers = [1, 2, 3, 4, 5, 6];
//indexes      0  1  2  3  4

// console.log(numbers[2]);

// [] - empty array - пустой массив
// {} - empty object - пустой объект
//var array = [5, "qwerty", true, undefined, null, {}, []];

console.log(numbers.length);

//for(;;) бесконечный цикл
for (var i = 0; i < numbers.length; i++) {
  console.log(i, "element of numbers is", numbers[i]);
}

for (var i = 0; i < customer.Cards.length; i++) {
  console.log(customer.Cards[i].ExpiryDate);
}

for (var card of customer.Cards) {
  console.log(card.ExpiryDate);
}

var fruits = ["banana", "apple", "melon", "cherry"];
for(var fruit of fruits){
    console.log(fruit);
}