abstract class Base {
  abstract greet(): void
}

class Derived extends Base {
  greet() {
    console.log('Hello, World!')
  }
}

// 构造函数类型作为参数
function createInstance(ctor: new () => Base): Base {
  return new ctor()
}

const instance = createInstance(Derived)
instance.greet() // 输出: Hello, World!

// const anotherInstance = createInstance(Base) // 错误: 无法创建抽象类的实例
