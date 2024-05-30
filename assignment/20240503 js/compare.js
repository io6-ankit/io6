let n = Number(prompt("enter the five digit number"));
const m = n;
document.write("<br/>Five digit number is=", n);
let rev = 0;
for (let i = 1; i <= 5; i++) {
  let rem = n % 10;
  // document.write("rem", rem);
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}
document.write("<br/>Reverse number is=", rev);
//   document.write(rev);
//   document.write(77777 === 77777);
console.log(m, rev);
if (m > rev) {
  document.write("<br/>greater than is number");
} else if (rev > m) {
  document.write("<br/>greater than is reverse number");
} else {
  document.write("<br/>number is same");
}
