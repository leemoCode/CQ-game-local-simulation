
// var name = "lucy";
// const obj = {
//   name: "martin",
//   say: function () {
//     console.log('--', this)
//     console.log(this.name);
//   }
// };
// obj.say(); //martin，this指向obj对象
// setTimeout(obj.say, 0); //lucy，this指向window对象


// function a(...args) {
//   console.log(args);
// }

// console.log(a(1, 2, 3, 4, 5))



/*
  手动实现call
  call具体都做了什么？
  1. call改变了this的指向
  2. 目标函数的执行
*/

/*
  实现思路：
  1. 将函数设为传入对象的属性
  2. 执行该函数
  3. 删除该属性
*/

// 简易版 - 无参情况
Function.prototype._call = function (obj) {
  // 将函数设为传入对象的属性
  obj.fn = this;
  // 执行该函数
  const res = obj.fn();
  // 删除该属性
  delete obj.fn;

  // 返回结果
  return res;
}


Function.prototype._call = function (obj = window, ...args) {
  obj = obj || window;

  if (typeof this !== 'function') {
    throw TypeError('Error');
  }

  obj.fn = this;
  const res = obj.fn(...args);
  delete obj.fn;

  return res;
}



Function.prototype._apply = function (obj = window, args) {
  obj = obj || window;

  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  obj.fn = this;
  const res = obj.fn(...args);
  delete obj.fn;

  return res;

}


var foo = {
  value: 1
};

function bar(a, b, c, d) {
  console.log(this.value, a + b + c + d);
  return a * b * c * d;
}

console.log(bar._apply(foo, [1, 2, 3, 4]));


Function.prototype._bind = function (obj = window, ...args) {
  obj = obj || window;

  if (typeof this !== 'function') {
    throw TypeError('Error');
  }

  const fn = this;

  return function Fn(...newArgs) {
    return fn.apply(this instanceof Fn ? this : obj, [...args, ...newArgs]);
  }
}
