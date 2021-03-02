class Polygon {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(v) {
    this._height = v;
  }

  get width() {
    return this._width;
  }

  get area() {
    return this._height * this._width;
  }
}

class Square extends Polygon {
  constructor(width) {
    super(width, width)
  }
}

const polygon = new Polygon(10, 10);
const square = new Square(10);
//
// console.log(square)
// console.log(square.area)

// console.log(polygon)
// console.log(polygon.area)
// polygon.height = 100
// console.log(polygon)
// console.log(polygon.area)

// Métodos ou Propriedades Estáticas

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static name = 'Point Name';

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
