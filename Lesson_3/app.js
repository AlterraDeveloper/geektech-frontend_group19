//for..in
var customer = {
  ID: 625247,
  Name: "Evgenii",
  Surname: "Kiselev",
  LastName: "Dmitrievich",
  IsResident: true,
  BirthDate: null,
  "Card type": "VISA",
  //   Cards: [
  //     {
  //       CardPan: "7433 7439 2345 0895",
  //       ExpiryDate: "05-05-2030",
  //       PrintName: "Kiselev Evgenii",
  //       CVC: 125,
  //     },
  //     {
  //       CardPan: "6238 3249 3526 2783",
  //       ExpiryDate: "06-06-2027",
  //       PrintName: "Kiselev Evgenii",
  //       CVC: 978,
  //     },
  //   ],
  //   Passport: {
  //     Series: "ID",
  //     Number: "1616489",
  //     ExpiryDate: "01-01-2025",
  //     IssueAuthority: "CON #1",
  //   },
};

//falsy - false, 0, NaN, "", null, undefined
for (var key in customer) {
  var value = customer[key];
  //truthy and falsy expressions - правдоподобные и ложноподобные выражения
  if (!value && typeof value !== "boolean") continue;
  console.log(
    key,
    " = ",
    typeof value !== "boolean" ? value : convertBoolean(value)
  );
}

function convertBoolean(value) {
  return value ? "Да" : "Нет";
}

// конвертация типа данных в логический
// var a = !!customer.Name;

var fruits = ["banana", "apple", "melon", "cherry"];
//внутренняя структура массива
// var fruits = {
//   0: "banana",
//   1: "apple",
//   2: "melon",
//   3: "cherry",
// };

for (var index in fruits) {
  console.log(fruits[index]);
}
console.log("--------------------------------------------");
for (var index of Object.keys(fruits)) {
  console.log(fruits[index]);
}
console.log("--------------------------------------------");

// var cardProcessingType = prompt("Enter card processing") || "";

// switch (cardProcessingType.toLowerCase()) {
//   case "visa":
//     console.log("You use VISA");
//     break;
//   case "mastercard":
//     console.log("You use MasterCard");
//     break;
//   default:
//     console.warn("Unknown answer...");
//     break;
// }
// console.log(cardProcessingType);

// var moneySystems = ["Unistream", "RIA", "Contact"];
// var userMoneySystem = prompt("Enter money system") || "";

// for (var moneySystem of moneySystems) {
//   if (userMoneySystem.toLowerCase() === moneySystem.toLowerCase()) {
//     console.log(`Money trasnfered by ${moneySystem}`);
//     break;
//   }
// }

//Вложенные циклы (цикл в цикле)

var goods = [
  {
    groupName: "Наушники",
    items: ["Xiaomi Air Dots 3", "Xiaomi Air Dots 2 Pro"],
  },
  {
    groupName: "Ноутбуки",
    items: ["HP M3360", "ASUS ZenBook"],
  },
  {
    groupName: "Смартфоны",
    items: ["Redmi Note 11", "Google Pixel 8"],
  },
];

for (var group of goods) {
  var result = group.groupName + " : " + group.items.join(", ");

  //   for (const item of group.items) {
  //     result += item + ", ";
  //   }
  console.log(result);
}


var size = 10;
for (var i = 0; i < size / 2; i++) {
    var line = "";
    for (var j = 0; j < size / 2; j++) {
      line += (i % 2 !== 0) ? " #" : "# ";
    }
    console.log(line);
  }
  
for (var i = 0; i < 10; i++) {
  var line = "";
  for (var j = 0; j < 10; j++) {
    line += (i % 2 === 0 && j % 2 !== 0) ? " " : "#";
  }
  console.log(line);
}

//Операторы:
//1) Унарные: + - ! ++ --
//2) Бинарные: + - * / % > < == === != !== >= <= && ||
//3) Тернарный: условие ? если_правда : если_ложь
