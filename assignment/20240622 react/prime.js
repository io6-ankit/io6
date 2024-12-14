var number = prompt("Please inter a number");
if (number == 1) {
  console.log(`${number}is the neither prime nor composite number`);
} else if (number < 1) {
  console.log(`${number} is not a prime number`);
} else {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      var res = `${number} is a not a prime number`;
      break;
    } else {
      var res = `${number} is prime number`;
    }
  }
  console.log(res);
}
