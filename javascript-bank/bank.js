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
    for (var j = 0; j < this.accounts[i].transactions.length; j++) {
      if (this.accounts[i].transactions[j].type === 'deposit') {
        totalAssets += this.accounts[i].transactions[j].amount;
      } else {
        totalAssets -= this.accounts[i].transactions[j].amount;
      }
    }
  }

  return totalAssets;
};
