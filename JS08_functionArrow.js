//ARROW FUNCTION
// => significa 'vai para'

//Primeiro exemplo - concise body - o "return é implícito"

var funcFristExemple = x => x*x;          // x*x é retornado implícitamente
console.log(funcFristExemple);
console.log(funcFristExemple());          // [Function: funcFristExemple]
console.log(funcFristExemple(0));         // NaN
console.log(funcFristExemple(10));        // 100
console.log(funcFristExemple(10,5));      // 100
console.log(funcFristExemple(10,5,5));    // 100

var funcFristExemple = (x,y) => x*y;       //x*y é retornado implícitamente
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // NaN
console.log(funcFristExemple(0));         // NaN
console.log(funcFristExemple(10));        // NaN
console.log(funcFristExemple(10,5));      // 50
console.log(funcFristExemple(10,5,5));    // 50
console.log(funcFristExemple(10,5,5,5));  // 50

var funcFristExemple = (...args) => args; // args é retornado implícitamente
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // []
console.log(funcFristExemple(0));         // [ 0 ]
console.log(funcFristExemple(10));        // [ 10 ]
console.log(funcFristExemple(10,5));      // [ 10, 5 ]
console.log(funcFristExemple(10,5,5));    // [ 10, 5, 5 ]
console.log(funcFristExemple(10,5,5,5));  // [ 10, 5, 5, 5 ]

 //x*x retorna implícitamente para args.map e args.map retorna implícitamente
var funcFristExemple = (...args) => args.map(x => x*x);
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // []
console.log(funcFristExemple(0));         // [ 0 ]
console.log(funcFristExemple(10));        // [ 100 ]
console.log(funcFristExemple(10,5));      // [ 100, 25 ]
console.log(funcFristExemple(10,5,5));    // [ 100, 25, 25 ]
console.log(funcFristExemple(10,5,5,5));  // [ 100, 25, 25, 25 ]

//Segundo exemplo
var funcFristExemple = x => {return x*x;};         // x*x é retornado implícitamente
console.log(funcFristExemple);
console.log(funcFristExemple());          // [Function: funcFristExemple]
console.log(funcFristExemple(0));         // NaN
console.log(funcFristExemple(10));        // 100
console.log(funcFristExemple(10,5));      // 100
console.log(funcFristExemple(10,5,5));    // 100

var funcFristExemple = (x,y) => {return x*y;};       //x*y é retornado implícitamente
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // NaN
console.log(funcFristExemple(0));         // NaN
console.log(funcFristExemple(10));        // NaN
console.log(funcFristExemple(10,5));      // 50
console.log(funcFristExemple(10,5,5));    // 50
console.log(funcFristExemple(10,5,5,5));  // 50

var funcFristExemple = (...args) => {return args}; // args é retornado implícitamente
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // []
console.log(funcFristExemple(0));         // [ 0 ]
console.log(funcFristExemple(10));        // [ 10 ]
console.log(funcFristExemple(10,5));      // [ 10, 5 ]
console.log(funcFristExemple(10,5,5));    // [ 10, 5, 5 ]
console.log(funcFristExemple(10,5,5,5));  // [ 10, 5, 5, 5 ]

var funcFristExemple = (...args) => {return args.map(x => {return x*x})};// x*x retorna  para args e args retorna
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // []
console.log(funcFristExemple(0));         // [ 0 ]
console.log(funcFristExemple(10));        // [ 100 ]
console.log(funcFristExemple(10,5));      // [ 100, 25 ]
console.log(funcFristExemple(10,5,5));    // [ 100, 25, 25 ]
console.log(funcFristExemple(10,5,5,5));  // [ 100, 25, 25, 25 ]
 
