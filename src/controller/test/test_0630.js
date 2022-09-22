// var result = [];
// var a = 3;
// var total = 0;

// function foo(a) {
//     for (var i = 0; i < 3; i++) {
//         result[i] = function () {
//             total += i * a;
//             console.log(total);
//         }
//     }
// }

// foo(1);
// result[0]();
// result[1]();
// result[2]();




/*

输出 3 6 9

*/



function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}

const a = 0.14164864151561;
const b = 0.2455757463131;

console.log(add(a, b));
console.log(a + b);

