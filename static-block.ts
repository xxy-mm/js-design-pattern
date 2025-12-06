class StaticBlockExample {
  static staticValue: number
  static {
    // 静态代码块中可以执行复杂的初始化逻辑
    StaticBlockExample.staticValue = Math.random() * 100
    console.log(
      `StaticBlockExample initialized with staticValue: ${this.staticValue}`,
    )
  }
}
console.log(`Accessing staticValue: ${StaticBlockExample.staticValue}`)
// Static blocks allow you to write a sequence of statements with their own scope
// that can access private fields within the containing class.
// This means that we can write initialization code with all the capabilities of writing statements,
//  no leakage of variables, and full access to our class’s internals.
