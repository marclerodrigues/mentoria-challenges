let myFunction = function() {
  this.a = 1;
  this.b = 2;
}

let myFunction2 = function() {
  this.a = 1;
}

let myObject = new myFunction();
let myObject2 = new myFunction2();

console.log(myObject);

myFunction.prototype.b = 3;
myFunction.prototype.c = 4;

myFunction2.prototype.b = 3;
myFunction2.prototype.c = 4;

console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.c);
console.log(myObject.d);

// Herança de Métodos

let obj =  {
  a: 2,
  plusOne: function() {
    return this.a + 1;
  }
};

console.log(obj.plusOne());

let obj3 = Object.create(obj);

obj3.a = 13;

console.log(obj3.plusOne());

// =================

function Graph() {
  this.vertexes = []
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertexes.push(v);
  },
  addEdge: function(e) {
    this.edges.push(e);
  }
  //...
}

const g = new Graph();
