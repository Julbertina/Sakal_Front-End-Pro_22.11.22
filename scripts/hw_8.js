let numOrStr= prompt("input number or string")
console.log(numOrStr);


if (numOrStr !== null) {
switch (numOrStr.trim()) {
  case "":
    console.log("Empty String");
    break;
  case !isNaN(numOrStr) || numOrStr:
    console.log(" number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}} else {console.log("ви скасували");}


// не поняла как использовать .trim() в switch

// let numOrStr = prompt("input number or string")
// console.log(numOrStr)

// switch (numOrStr) {
//   case null:
//     console.log("ви скасували");
//     break;
//   case "":
//     console.log("Empty String");
//     break;
//   case !isNaN(numOrStr) || numOrStr:
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }