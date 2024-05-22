let first = Number(prompt("enter the fist subject number"));
if (first <= 100) {
} else {
  document.write("<br/><h1>enter the correct number");
}
let second = Number(prompt("enter the second subject number"));
if (second <= 100) {
} else {
  document.write("<br/><h1>enter the correct number");
}
let third = Number(prompt("enter the third subject number"));
if (third <= 100) {
} else {
  document.write("<br/><h1>enter the correct number");
}
let fourth = Number(prompt("enter the fourth subject number"));
if (fourth <= 100) {
} else {
  document.write("<br/><h1>enter the correct number");
}
let five = Number(prompt("enter the five subject number"));
if (five <= 100) {
} else {
  document.write("<br/><h1>enter the correct number");
}
let maximum_num = Number(prompt("enter the maximum number "));
document.write("<br/><h1>maximum number", maximum_num);
let total_marks = first + second + third + fourth + five;
document.write("<br/><h1>Total marks=", total_marks);
let percentage = ((first + second + third + fourth + five) * 100) / maximum_num;
document.write("<br/><h1>percentage=", percentage);
if (percentage >= 60 && percentage <= 100) {
  document.write("<br/>first division");
} else if (percentage < 60 && percentage >= 45) {
  document.write("<br/><h1>second division");
} else {
  document.write("<br/><h1>fail");
}
