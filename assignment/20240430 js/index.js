// Ramesh's basic salary is input through the keyboard. His dearness allownance is 40% of basic salary, and house rent             <br/>
// allowance is 20% of basic salary.
// Write a program to calculate his gross salary

//  => Formula for Gross salary : Salary +  DA + RA

const s = Number(prompt("enter the basic salary"));
const da = 40;
const ra = 20;
var gs = s + (da * s) / 100 + (ra * s) / 100;
document.write("<h1> gross salary=" + gs);
