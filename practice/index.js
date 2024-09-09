// let arr = [1, 25, 2, 4, 8];
// // let arr2 = [6, 8, 4, 5, 2];
// // arr3.sort(...arr1, ...arr2);
// // console.log(arr3);

// arr.sort((a, b) => b - a);
// console.log(arr);
let arr1 = [2, 5, 4, 6, 3, 7, 80];
let arr2 = [3, 8, 9, 3, 5];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr3.length);
document.write(arr3.length);
arr3.sort();
console.log(arr3);
arr3 = [...new Set(arr3)];
console.log("arr3", arr3);
