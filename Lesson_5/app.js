function add2(num) {
  num += 2;
}

function mutation(obj) {
  if (typeof obj !== "object" || obj === null) return;

  obj.Name = "Vlad";
  if ("Surname" in obj) {
    delete obj.Surname;
  }
}

var number = 5;
console.log(number);
add2(number);
console.log(number);

// var customer = {
//   Surname: "Kiselev",
//   Name: "Evgenii",
// };
var customer = new Customer("Evgenii", "Kiselev");

// console.table(customer);
// mutation(customer);
// console.table(customer);

function findAccount(accountNo, currency) {
  return function (account) {
    return account.AccountNo === accountNo && account.Currency === currency;
  };
}

//Функции-конструкторы
function Customer(name, surname) {
  //this = {};

  this.Name = name;
  this.Surname = surname;
  this.IsResident = true;
  this.Accounts = [];

  this.AccountInUse = function () {
    var accounts = this.Accounts.map(function (acc) {
      return acc.AccountNo;
    });
    return Array.from(new Set(accounts)).length; // удаление дубликатов из массива
  };

  this.OpenAccount = function (accountNo, currency, balance = 0) {
    this.Accounts.push(new Account(accountNo, currency, balance));
  };

  this.ReplenishAccount = function (accountNo, currency, amount) {
    var account = this.Accounts.find(findAccount(accountNo, currency));
    account && (account.Balance += amount);
  };

  this.CloseAccount = function (accountNo, currency) {
    var accountIndex = this.Accounts.findIndex(
      findAccount(accountNo, currency)
    );

    if (accountIndex < 0) return;

    if (this.Accounts[accountIndex].Balance === 0) {
      this.Accounts.splice(accountIndex, 1);
    } else {
      console.error("На счете есть средства");
    }
  };

  this.OpenAccountInCurrency = function (accountNo, currency) {
    var account = this.Accounts.find(findAccount(accountNo, currency));
    var currencies = Array.from(arguments).slice(2);
    for (var cur of currencies) {
      this.OpenAccount(account.AccountNo, cur);
    }
  };

  //return this;
}

function Account(accountNo, currency = "KGS", balance = 0) {
  this.AccountNo = accountNo;
  this.Currency = currency;
  this.Balance = balance;
}

customer.OpenAccount("123456789");
customer.OpenAccount("987654321", "USD");
customer.ReplenishAccount("987654321", "USD", 100);

//customer.CloseAccount("123456789", "KGS");

customer.OpenAccountInCurrency("987654321", "USD", "EUR", "KGS");
console.table(customer);

//map filter reduce

var fruits = ["banana", "apple", "cherry", "melon", "orange"];

console.log(
  fruits.map(function (fruit) {
    return fruit.toUpperCase();
  })
);
console.log(fruits);

console.log(
  fruits.filter(function (fruit) {
    var firstChar = fruit[0].toLowerCase();
    return ["a", "e", "i", "o", "y", "u"].includes(firstChar);
  })
);

var numbers = [14, 185, 41, -5, 52, 7959, 4, 0];
console.log(
  numbers.reduce(function (minNumber, num) {
    minNumber = minNumber > num ? num : minNumber;
    return minNumber;
  })
);
