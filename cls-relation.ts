class Point1 {
  x = 0
  y = 0
}

class Point2 {
  x = 1
  y = 1
}

class Point3 {
  x = 2
  y = 2
  z = 3
}

const p: Point1 = new Point2() // 允许，Point2 包含 Point1 的所有属性
const p1: Point1 = new Point2() // 允许，Point3 包含 Point1 的所有属性
const p2: Point2 = new Point3() // 允许，Point3 包含 Point2 的所有属性
// const p3: Point3 = new Point1() // 错误，Point1 不包含 Point3 的所有属性
