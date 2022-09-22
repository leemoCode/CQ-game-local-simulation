// function Parent() {
//   this.name = 'parent1';
//   this.play = [1, 2, 3];
// }

// function Child() {
//   this.type = 'child2';
// }

// Child.prototype = new Parent();

// const child1 = new Child();
// const child2 = new Child();
// const parent1 = new Parent();

// child1.play.push(4);
// child1.name = 'parent2';

// // 改变child1的属性 child2的也会改变
// console.log(child1.play); // [ 1, 2, 3, 4 ]
// console.log(child2.play); //[ 1, 2, 3, 4 ]
// // 浅拷贝 基本类型数据不受影响
// console.log(child1.name); // parent2
// console.log(child2.name); // parent1



// function Parent() {
//   this.name = 'parent1';
//   this.play = [1, 2, 3];

//   this.hello = function () {
//     console.log('hello');
//   }
// }

// Parent.prototype.bye = function() {
//   console.log('bye');
// }

// function Child () {
//   // 构造函数继承
//   Parent.call(this);
//   this.prototype = 'child';
// }

// // 原型链继承
// Child.prototype = new Parent();
// var s3 = new Child();
// var s4 = new Child();
// s3.play.push(4);
// console.log(s3.play, s4.play);  // 不互相影响
// console.log(s3.bye()); // 正常输出'parent3'
// console.log(s4.bye()); // 正常输出'parent3'


// let parent4 = {
//   name: "parent4",
//   friends: ["p1", "p2", "p3"],
//   getName: function() {
//     return this.name;
//   }
// };

// let person4 = Object.create(parent4);
// person4.name = "tom";
// person4.friends.push("jerry");

// let person5 = Object.create(parent4);
// person5.friends.push("lucy");

// console.log(person4.name); // tom
// console.log(person4.name === person4.getName()); // true
// console.log(person5.name); // parent4
// console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
// console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]


function Parent() {
  this.name = 'parent1';
  this.play = [1, 2, 3];

  this.hello = function () {
    console.log('hello');
  }
}

Parent.prototype.bye = function() {
  console.log(this.name);
}

function Child () {
  // 构造函数继承
  Parent.call(this);
  this.name = 'child';
}

// 原型式继承
Child.prototype = Object.create(Parent.prototype);
var s3 = new Child();
var s4 = new Child();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.bye()); // 正常输出'child'
console.log(s4.bye()); // 正常输出'child'
