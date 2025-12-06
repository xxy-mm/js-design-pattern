// Javascript 中的继承

// Javascript 中的继承基于原型链。

// 创建一个父类
class Parent {
  static staticMethod() {
    console.log('This is a static method on Parent class')
  }
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log('Hello, my name is ' + this.name)
  }
}

// 创建一个子类
class Child extends Parent {
  constructor(name, age) {
    // 调用父类构造函数
    super(name)
    this.age = age
  }
  // 为子类添加方法
  introduce() {
    console.log('I am ' + this.name + ' and I am ' + this.age + ' years old.')
  }
}

// 使用继承的类
const childInstance = new Child('Alice', 10)
childInstance.greet() // 输出: Hello, my name is Alice
childInstance.introduce() // 输出: I am Alice and I am 10 years old.
Child.staticMethod() // 输出: This is a static method on Parent class

// 为什么 Child 能调用 Parent 的方法？
// 因为 Child 通过 extends 关键字继承了 Parent 类，
// 这使得 Child 的原型链上包含了 Parent 的方法。
// 当调用 childInstance.greet() 时，JavaScript 引擎会在 Child 的原型链上查找 greet 方法，
// 找到后执行它。
// 同样，Child 类本身也继承了 Parent 的静态方法 staticMethod。
// 这就是 JavaScript 中基于原型链的继承机制。

Object.getPrototypeOf(Child) === Parent // true
Object.getPrototypeOf(childInstance) === Child.prototype // true
Object.getPrototypeOf(Child.prototype) === Parent.prototype // true

// 当我们访问 Child.staticMethod() 时，JavaScript 引擎会按照以下顺序查找方法：
// 1. 在 Child 类本身查找 staticMethod 方法。
// 2. 如果没有找到，则在 Child 的原型（即 Parent 类）上查找 staticMethod 方法。
// 3. 找到后执行它。
// 这就是为什么 Child 能调用 Parent 的静态方法的原因。

// 当我们访问 childInstance.greet() 时，JavaScript 引擎会按照以下顺序查找方法：
// 1. 在 childInstance 对象本身查找 greet 方法。
// 2. 如果没有找到，则在 childInstance 的原型（即 Child.prototype）上查找 greet 方法。
// 3. 如果仍然没有找到，则在 Child.prototype 的原型（即 Parent.prototype）上查找 greet 方法。
// 4. 找到后执行它。
// 这就是为什么 childInstance 能调用 Parent 的实例方法的原因。

// Object.create 和 extends 的区别
// Object.create 是一种更底层的继承方式，允许我们直接创建一个对象并指定其原型。
// 而 extends 是一种更高级的语法糖，允许我们使用类的概念来实现继承。
// 使用 extends 时，JavaScript 引擎会自动设置原型链，
// 使得子类能够继承父类的属性和方法。

// 将上面的继承例子改写为 Object.create 方式
function ParentFunc(name) {
  this.name = name
}
ParentFunc.staticMethod = function () {
  console.log('This is a static method on ParentFunc')
}
ParentFunc.prototype.greet = function () {
  console.log('Hello, my name is ' + this.name)
}

function ChildFunc(name, age) {
  ParentFunc.call(this, name) // 调用父类构造函数
  this.age = age
}
ChildFunc.prototype = Object.create(ParentFunc.prototype) // 设置原型链
ChildFunc.prototype.constructor = ChildFunc // 修正 constructor 指向

ChildFunc.prototype.introduce = function () {
  console.log('I am ' + this.name + ' and I am ' + this.age + ' years old.')
}

// 使用继承的函数
const childFuncInstance = new ChildFunc('Bob', 12)
childFuncInstance.greet() // 输出: Hello, my name is Bob
childFuncInstance.introduce() // 输出: I am Bob and I am 12 years old.

// ChildFunc.staticMethod() // 输出: error: ChildFunc.staticMethod is not a function

Object.setPrototypeOf(ChildFunc, ParentFunc) // 手动设置静态方法的继承
ChildFunc.staticMethod() // 输出: This is a static method on ParentFunc

// 总结：
// ES6 的 extends 自动处理了这一点，因为它在内部使用 Object.setPrototypeOf 来设置原型链。
// 而 Object.create 方式只设置了实例的原型链，没有设置函数对象本身的原型链，
// 所以需要手动复制或设置静态方法的继承。
