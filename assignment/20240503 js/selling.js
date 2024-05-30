let c = Number(prompt("enter the number"));
let s = Number(prompt("enter the number"));
document.write("<br/>Coast price=", c);
document.write("<br/>Selling price=", s);
if (c < s) {
  document.write("<br/>profit");
  let p = s - c;
  document.write(p);
} else {
  let l = c - s;
  document.write("<br/>loss=", l);
  // document.write(l);
}
