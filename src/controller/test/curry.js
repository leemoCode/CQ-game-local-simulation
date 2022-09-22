// let fn = (x,y) => x + y;

// const curry = function(fn) {
//   return function (x) {
//     return function(y) {
//       return fn(x, y);
//     }
//   }
// }

// let curryFn = curry(fn);

// console.log(curryFn(1)(2));


// 多参数函数柯里化
const curry = function (fn) {
  return function curryFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curryFn(...args.concat(...arguments))
      };
    }

    return fn(...args);
  }
}

const fn = (x, y) => x + y;
const myfn = curry(fn);
console.log(myfn(1)(2));
