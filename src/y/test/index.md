// https://mp.weixin.qq.com/s/a-6ck3i6b5OLhEAgxRHkDA



https://juejin.cn/post/6844904093828251662

## 构造函数
构造函数上可以附带 实例成员 和 静态成员

实例成员： 实例成员就是在构造函数内部，通过this添加的成员。实例成员只能通过实例化的对象来访问。
静态成员： 在构造函数本身上添加的成员，只能通过构造函数来访问。


function Star(name,age) {
    //实例成员
    this.name = name;
    this.age = age;
}
//静态成员
Star.sex = '女';

let stars = new Star('小红',18);
console.log(stars);      // Star {name: "小红", age: 18}
console.log(stars.sex);  // undefined     实例无法访问sex属性

console.log(Star.name); //Star     通过构造函数无法直接访问实例成员
console.log(Star.sex);  //女       通过构造函数可直接访问静态成员



