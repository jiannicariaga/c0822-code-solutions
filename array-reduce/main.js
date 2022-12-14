const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousVal, currentVal) => previousVal + currentVal);
const product = numbers.reduce((previousVal, currentVal) => previousVal * currentVal);
const balance = account.reduce((previousVal, currentVal) =>
  (currentVal.type === 'deposit')
    ? previousVal + currentVal.amount
    : previousVal - currentVal.amount
, 0);
const composite = traits.reduce((previousVal, currentVal) => Object.assign(previousVal, currentVal));

console.log('sum:', sum);
console.log('product:', product);
console.log('balance:', balance);
console.log('traits:', composite);
