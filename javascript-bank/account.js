/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  // var deposit = new Transaction('deposit', amount);

  if (typeof amount !== 'number' || amount <= 0) {
    return false;
  }

  // deposit.transactions.push(amount);
  return true;
};

Account.prototype.withdraw = function (amount) {

};

Account.prototype.getBalance = function () {

};
