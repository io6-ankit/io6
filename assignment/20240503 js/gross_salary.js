let s = Number(prompt("enter the salary"));
document.write("<h1>Salary=", s);
let da = 0;
let gs = 0;
if (s < 1500) {
  hra = (s * 10) / 100;
  da = (s * 90) / 100;
  gs = s + da + hra;
  document.write("<br/><h1>Gross salary if salary is less than Rs. 1500=", gs);
} else if (s >= 1500) {
  hra = 500;
  da = (s * 98) / 100;
  gs = s + da + hra;
  document.write(
    "<br/><h1>Gross salary if salary is equal to or more than Rs.1500=",
    gs
  );
} else {
  document.write("invalid salary");
}
