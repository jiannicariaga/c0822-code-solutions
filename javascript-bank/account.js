/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);

  if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
    return false;
  }

  this.transactions.push([transaction.type, transaction.amount]);

  return true;
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);

  if (isNaN(amount) || !Number.isInteger(amount) || amount <= 0) {
    return false;
  }

  this.transactions.push([transaction.type, transaction.amount]);

  return true;
};

Account.prototype.getBalance = function () {

};
