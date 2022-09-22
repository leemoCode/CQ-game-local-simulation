/*
  只输出最后n次console
*/
let msgList = [];
let timeout = 0;
const TIME_TO_CONSOLE = 500;
function cons(msgItem, num = 1) {
  clearTimeout(timeout);
  msgList.push(msgItem);

  timeout = setTimeout(() => {
    for (let i = msgList.length - num; i < msgList.length; i++) {
      console.log(msgList[i]);
    }

  }, TIME_TO_CONSOLE);
}


/*
  构造函数
*/
function Person(name, age) {
  this.name = name;
  this.age = age;

  return [1, 2];
}

const person1 = new Person('Tom', 28);
cons(person1);

cons([] instanceof Object)

// Person.prototype.sayName = function() {
//   cons(this.name);
// }


// person1.sayName();

/*
  手动实现new
*/
function myNew(Func, ...args) {
  let obj = {};
  obj.__proto__ = Func.protoType;

  let res = Func.apply(obj, args);
  return res instanceof Object ? res : obj;
}


/*
  Object.create() 实现的是深拷贝还是浅拷贝？
*/

const a_obj = {
  a: 1,
  b: 2,
}

var b_obj = Object.create(a_obj);

a_obj.a = 6;
cons(a_obj);
cons(b_obj);


/*
  手写浅拷贝
*/
const a_obj_2003 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 2,
  },
}

const clone = (obj) => {
  let obj2 = {}
  for (const item in obj) {
    obj2[item] = obj[item];
  }

  return obj2;
}

const b_obj_2003 = clone(a_obj_2003);

a_obj_2003.a = 4;
a_obj_2003.c.d = 5;

cons(a_obj_2003);
cons(b_obj_2003);


/*
  手写深拷贝
*/

const deepClone = (obj) => {
  if (typeof obj !== Object) {
    return obj;
  }

  let obj1 = {};

  for (const item in obj) {
    obj1[item] = typeof item === Object ? deepClone(item) : obj[item];
  }

  return obj1;
}

const a_obj_2019 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 1,
    e: 2,
  },
  f: undefined,
}

const a_obj_2022 = {
  a: 1,
  b: 2,
}

const c_obj_2019 = deepClone(a_obj_2019);

a_obj_2019.a = 4;
a_obj_2019.b = [2, 4];

cons(a_obj_2019);
cons(c_obj_2019, 0);


// 声明一个需要防抖的test函数
function test(str) {
  console.log(str);
}

// 写个demo
function debounce(func, delay = 2500) {
  let timeout = null;
  console.log('out', timeout);

  return function () {
    console.log('in', timeout);
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// 包装一层使用
const debounceFn = debounce(test, 1500);

// 测试一下

debounceFn('demo');  // demo

