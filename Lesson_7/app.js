// ECMAScript 6+

var a;

// let и const
// 1) Hoisting - поднятие (всплытие)
// 2) Scopes - области видимости

console.log("a =", a);
printHello();

//function declaration - определение функции
function printHello() {
  console.log("Hello function");
  return undefined;
}

a = 5;

let b = 5;
const c = 5;
b = 10;
console.log("b =", b);

let index = 50;

for (let i = 0; i < 10; i++) {
  let index = i;
}

console.log("index = ", index);

const user = {
  login: "qwerty",
  password: "123",
};
console.table(user);

user.login = "eugene";
user.password = "789";
console.table(user);

const colors = ["red", "green", "blue"];
console.log(colors);
colors.push("yellow");
console.log(colors);

//2) Arrow functions
console.log(colors.map((fruit) => fruit.toUpperCase()));

const gradesBy5 = [5, 4, 3, 4, 5, 2, 5, 4, 3, 4];
const gradesBy10 = gradesBy5.map((grade) => grade * 2);
console.log(gradesBy5);
console.log(gradesBy10);

const badGradesFilterFn = (grade) => grade < 4;

const badGrades = gradesBy5.filter(badGradesFilterFn);
console.log(badGrades);

//3) default arguments (optional) - параметры по умолчанию(необязательные)

const COMMA = ",";
let getDelim = () => ",";
// function getDelim() {
//   return ",";
// }
function myJoin(array, delimiter = getDelim()) {
  //   delimiter = delimiter || ",";
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i], i === array.length - 1 ? "" : delimiter);
  }
  return result;
}

console.log(myJoin(colors));

// 4) rest и spread операторы

//6) Classes and modules - классы и модули
import { Customer } from "./Models/Customer";
import { findAccount as FindCustomerAccount } from "./Models/Customer";

var customer = new Customer("Evgenii", "Kiselev");

customer.OpenAccount("987654321", "USD", 100);
const curs = ["EUR", "KGS"];
customer.OpenAccountInCurrency("987654321", "USD", ...curs);
console.table(customer);

// const customerName = customer.Name;
// const customerSurname = customer.Surname;

const { Name: customerName, Surname: customerSurname } = { ...customer };
const [account1, , account3] = [...customer.Accounts];
console.log(customerName, customerSurname, account1, account3);

//5) tempale strings - шаблонные строки

console.log(customerSurname + " " + customerName);
const customerFullName = `${customerSurname} ${customerName}`;
const openAccountAgreementText = `Уважаемый ${customerFullName}
Ваш счет ${account3.AccountNo}(${account3.Currency}) успешно открыт!
Текущий баланс составляет: ${account3.Balance} ${account3.Currency}`;

console.log(openAccountAgreementText);

console.log(FindCustomerAccount("123456789", "KGS"));
