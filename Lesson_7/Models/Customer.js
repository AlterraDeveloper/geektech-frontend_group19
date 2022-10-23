import Account from "./Account";

export class Customer {
  constructor(name, surname) {
    this.Name = name;
    this.Surname = surname;
    this.IsResident = true;
    this.Accounts = [];
  }

  AccountInUse() {
    var accounts = this.Accounts.map(function (acc) {
      return acc.AccountNo;
    });
    return Array.from(new Set(accounts)).length; // удаление дубликатов из массива
  }

  OpenAccount(accountNo, currency, balance = 0) {
    this.Accounts.push(new Account(accountNo, currency, balance));
  }

  ReplenishAccount(accountNo, currency, amount) {
    var account = this.Accounts.find(findAccount(accountNo, currency));
    account && (account.Balance += amount);
  }

  CloseAccount(accountNo, currency) {
    var accountIndex = this.Accounts.findIndex(
      findAccount(accountNo, currency)
    );

    if (accountIndex < 0) return;

    if (this.Accounts[accountIndex].Balance === 0) {
      this.Accounts.splice(accountIndex, 1);
    } else {
      console.error("На счете есть средства");
    }
  }

  OpenAccountInCurrency(accountNo, currency, ...currencies) {
    var account = this.Accounts.find(findAccount(accountNo, currency));
    for (var cur of currencies) {
      this.OpenAccount(account.AccountNo, cur);
    }
  }
}

export function findAccount(accountNo, currency) {
  return function (account) {
    return account.AccountNo === accountNo && account.Currency === currency;
  };
}
