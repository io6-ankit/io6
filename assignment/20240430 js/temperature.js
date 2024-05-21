let f = Number(prompt("enter the number"));
const c = (5 / 9) * (f - 32);
const fa = (9 / 5) * (5 / 9) * (f - 32) + 32;
const k = ((f - 32) * 5) / 9 + 273;
document.write("Celsius to fahrenheit=" + c);
document.write("<br/>Fahrenheit to celsius=" + fa);
document.write("<br/>Kelvin to celsius=" + k);
