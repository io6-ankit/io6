let Rs1 = Number(prompt("enter the number-1"));
let Rs2 = Number(prompt("enter the number-2"));
let Rs3 = Number(prompt("enter the number-3"));
let Rs4 = Number(prompt("enter the number-4"));
let Rs5 = Number(prompt("enter the number-5"));
let Rs6 = Number(prompt("enter the number-6"));
if (Rs1 < Rs2 && Rs1 < Rs3 && Rs1 < Rs4 && Rs1 < Rs5 && Rs1 < Rs6) {
  document.write("<h1>Rs1 is smallest number", Rs1);
} else if (Rs2 < Rs3 && Rs2 < Rs4 && Rs2 < Rs5 && Rs2 < Rs6 && Rs2 < Rs1) {
  document.write("<h1>Rs2 is smallest number", Rs2);
} else if (Rs3 < Rs4 && Rs3 < Rs5 && Rs3 < Rs6 && Rs3 < Rs1 && Rs3 < Rs2) {
  document.write("<h1>Rs3 is smallest number", Rs3);
} else if (Rs4 < Rs5 && Rs4 < Rs6 && Rs4 < Rs1 && Rs4 < Rs2 && Rs4 < Rs3) {
  document.write("<h1>Rs4 is smallest number", Rs4);
} else if (Rs5 < Rs6 && Rs5 < Rs1 && Rs5 < Rs2 && Rs5 < Rs3 && Rs5 < Rs4) {
  document.write("<h1>Rs5 is smallest number ", Rs5);
} else if (Rs6 < Rs1 && Rs6 < Rs2 && Rs6 < Rs3 && Rs6 < Rs4 && Rs6 < Rs5) {
  document.write("<h1>Rs6 is smallest number", Rs6);
} else {
  document.write("<h1>Rs. is invalid number");
}
