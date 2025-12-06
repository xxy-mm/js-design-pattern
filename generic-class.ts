class Box<Type> {
  contents: Type
  constructor(value: Type) {
    this.contents = value
  }
}

const stringBox = new Box<string>('Hello, Generics!')
console.log(stringBox.contents) // 输出: Hello, Generics!

const numberBox = new Box<number>(42)
console.log(numberBox.contents) // 输出: 42
// 泛型类允许我们创建可以处理多种数据类型的类，同时保持类型安全。
// 通过在类定义中使用类型参数，我们可以在实例化类时指定具体的类型，从而确保类的属性和方法能够正确地处理该类型的数据。

class Box2<Type> {
  // static defaultValue: Type; // Static members cannot reference class type parameters.
}
// 静态成员无法引用类的类型参数。
// 这是因为静态成员属于类本身，而不是类的实例。
// 类的类型参数是在实例化类时确定的，而静态成员在类被加载时就已经存在，
// 因此它们无法访问实例特定的类型信息。
