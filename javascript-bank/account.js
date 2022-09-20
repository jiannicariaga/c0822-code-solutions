/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);

  if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
    return false;
  }

  this.transactions.push(deposit);

  return true;
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);

  if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
    return false;
  }

  this.transactions.push(withdrawal);

  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;

  if (!this.transactions.length) {
    return 0;
  }

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }

  return balance;
};
