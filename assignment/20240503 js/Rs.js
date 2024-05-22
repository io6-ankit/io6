let Rs1 = Number(prompt("enter the number-1"));
let Rs2 = Number(prompt("enter the number-2"));
let Rs3 = Number(prompt("enter the number-3"));
let Rs4 = Number(prompt("enter the number-4"));
let Rs5 = Number(prompt("enter the number-5"));
let Rs6 = Number(prompt("enter the number-6"));
if (Rs1 < Rs2 && Rs1 < Rs3 && Rs1 < Rs4 && Rs1 < Rs5 && Rs1 < Rs6) {
  console.log("Rs1 is smallest number", Rs1);
} else if (Rs2 < Rs3 && Rs2 < Rs4 && R2 < Rs5 && R2 < Rs6 && R2 < Rs1) {
  console.log("Rs2 is smallest number", Rs2);
} else if (Rs3 < Rs4 && Rs3 < Rs5 && Rs3 < Rs6 && Rs3 < Rs1 && Rs3 < R2) {
  console.log("Rs3 is smallest number", Rs3);
} else if (Rs4 < Rs5 && Rs4 < Rs6 && Rs4 < Rs1 && Rs4 < R2 && Rs4 < Rs3) {
  console.log("Rs4 is smallest number", Rs4);
} else if (Rs5 < Rs6 && Rs5 < Rs1 && Rs5 < R2 && Rs5 < Rs3 && Rs5 < Rs4) {
  console.log("Rs5 is smallest number ", Rs5);
} else if (Rs6 < Rs1 && Rs6 < R2 && Rs6 < Rs3 && Rs6 < Rs4 && Rs6 < Rs5) {
  console.log("Rs6 is smallest number", Rs6);
} else {
  console.log("Rs. is invalid number");
}
