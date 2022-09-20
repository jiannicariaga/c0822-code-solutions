/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var account = new Account(this.nextAccountNumber, holder);

  if (isNaN(balance) || !Number.isInteger(balance) || balance <= 0) {
    return null;
  }

  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;

  return account.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }

  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;

  if (!this.accounts.length) {
    return 0;
  }

  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }

  return totalAssets;
};
