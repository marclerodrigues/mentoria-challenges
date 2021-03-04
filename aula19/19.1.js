// 1. Escreva uma classe chamada Point que representa
// um ponto em duas dimensões. Essa classe ela tem que
// ter o seguindo construtor:
//
// constructor(x, y)
//
// A classe deve ter duas propriedades públicas:
// x, y
//
// A nossa classe tem que ter um método chamado toString
// que ele retorna a representação do ponto na seguinte
// forma: [x=1, y=2]

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[x=${this.x}, y=${this.y}]`;
  }
}

const point = new Point(1, 2);
