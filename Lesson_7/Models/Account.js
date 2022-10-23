export default class Account {
  constructor(accountNo, currency = "KGS", balance = 0) {
    this.AccountNo = accountNo;
    this.Currency = currency;
    this.Balance = balance;
  }
}
