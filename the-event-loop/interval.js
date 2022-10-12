let count = 3;
let intervalId = null;

intervalId = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);
