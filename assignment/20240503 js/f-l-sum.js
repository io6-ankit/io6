let n = Number(prompt("enter the four digit number"));
let m = 0;
let d = 0;

if (n % 10 != 0) {
  m = n % 10;
  console.log("M VALUE", m);
} else {
  console.log("enter the correct number");
}
if (n / 1000) {
  d = parseInt(n / 1000);

  console.log(d);
} else {
  console.log("enter the correct number");
}
let sum = m + d;
console.log("Add=", sum);
