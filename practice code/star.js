// console.log("hello");
const squareStarTriangle = () => {
  let str = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 6; j++) {
      str = str + "* ";
    }
    str = str + "<br>";
  }
  document.write(str);
  // console.log("str");
};
squareStarTriangle();
