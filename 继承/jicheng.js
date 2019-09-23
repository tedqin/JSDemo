//js的几种继承方式

//1. 利用构造函数和call/apply
//缺点：子类无法继承父类原型上的属性
function Parent() {
    this.name = 'parentName'
}
function Child() {
    Parent.call(this)
    this.age = 10
}

//2. 利用原型链
//缺点：如果改变一个实例的属性，其他的实例也会被改变，原因是公用一个原型   
function Parent() {
    this.name = 'parentName'
}
function Child() {
    this.age = 10
}
Child.prototype = new Parent()

//3. 组合继承
function Parent() {
    this.name = 'parentName'
}
function Child() {
    Parent.call(this)
    this.age = 10
}
Child.prototype = new Parent()

//4. es6 class继承
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
    
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
}

let cp = new ColorPoint(25, 8, 'green');

//