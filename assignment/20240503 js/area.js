const l = Number(prompt("enter the length"));
const b = Number(prompt("enter the breath"));
let area_of_rectangle = l * b;
let area_of_perimeter = 2 * (l + b);
if (area_of_rectangle > area_of_perimeter) {
  console.log("area of rectangle is greater than its perimeter");
} else {
  console.log("area of rectangle is less than its perimeter");
}
