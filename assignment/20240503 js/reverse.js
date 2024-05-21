let n = Number(prompt("enter the number"));
document.write("<br/>Entered number is", n);
let rev = 0;
for (let i = 1; i <= 5; i++) {
  let rem = n % 10;
  console.log("rem", rem);
  rev = rev * 10 + rem;
  n = parseInt(n / 10);
}
document.write("<br/>Reverse number is", rev);
console.log(rev);
