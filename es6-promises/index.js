const takeAChance = require('./take-a-chance');
const promiseObj = takeAChance('Jianni');

promiseObj.then(value => console.log(value));
promiseObj.catch(e => console.error(e.message));
