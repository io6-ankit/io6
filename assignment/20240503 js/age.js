let a1 = Number(prompt("enter the ram age"));
let a2 = Number(prompt("enter the shyam age"));
let a3 = Number(prompt("enter the ajay age"));
if (a1 > a2 && a1 > a3) {
  document.write("Ram is youngest");
} else if (a2 > a3 && a2 > a1) {
  document.write("Shyam is youngest");
} else if (a3 > a1 && a3 > a2) {
  document.write("Ajay is youngest");
} else {
  document.write("Ram,Syam and Ajay same age");
}
