// The distance between two cities (in km) entered through key board.
//  write a program to calculate distance in meters, feets and centimeter

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)
let c1 = prompt("enter the city-1");
let c2 = prompt("enter the city-2");
let distance = Number(prompt("enter the distance(in km)"));
var distance1 = distance;
var distance2 = distance * 3280.84;
var distance3 = distance * 1000 * 100;
var distance4 = distance * 3280.84 * 12 * 1;
document.write("First city name=" + c1);
document.write("<br/>Second city name=" + c2);
document.write("<br/>Distance the city (in km)=" + distance1);
document.write("<br/>Distance the city(feet from km)=" + distance2);
document.write("<br/>Distance the city(inch from km)=" + distance4);

document.write("<br/>Distance the city(km to mtr)=" + distance3);
