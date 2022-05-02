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

//Segundo exemplo - block body - o "return" precisa existir dentro do bloco
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


//Terceiro Exemplo - Retornando Objetos Literais usando concise body

var funcFristExemple = () => ({nome:"Luan",idade:25}); //Precisa envolver o objeto retornado, com ( )
console.log(funcFristExemple);            // [Function: funcFristExemple]
console.log(funcFristExemple());          // { nome: 'Luan', idade: 25 }
console.log(funcFristExemple(0));         // { nome: 'Luan', idade: 25 }
console.log(funcFristExemple(10));        // { nome: 'Luan', idade: 25 }
console.log(funcFristExemple(10,5));      // { nome: 'Luan', idade: 25 }
console.log(funcFristExemple(10,5,5));    // { nome: 'Luan', idade: 25 }

var funcFristExemple = (nome,idade) => ({nome:nome,idade:idade}); //Precisa envolver o objeto retornado, com ( )
console.log(funcFristExemple);                // [Function: funcFristExemple]
console.log(funcFristExemple());              // { nome: undefined, idade: undefined }
console.log(funcFristExemple(0));             // { nome: 0, idade: undefined }
console.log(funcFristExemple("Luan"));        // { nome: 'Luan', idade: undefined }
console.log(funcFristExemple("Luan",24));     // { nome: 'Luan', idade: 24 }
console.log(funcFristExemple("Luan",24,5));   // { nome: 'Luan', idade: 24 }

var funcFristExemple = (nome,idade) => ({nome:nome,idade:idade, ativo: ()=>"Função retornada com sucesso!"}); //Precisa envolver o objeto retornado, com ( )
console.log(funcFristExemple);                // [Function: funcFristExemple]
console.log(funcFristExemple());              // { nome: undefined, idade: undefined, ativo: [Function: ativo] }
console.log(funcFristExemple(0));             // { nome: 0, idade: undefined, ativo: [Function: ativo] }
console.log(funcFristExemple("Luan"));        // { nome: 'Luan', idade: undefined, ativo: [Function: ativo] }
console.log(funcFristExemple("Luan",24));     // { nome: 'Luan', idade: 24, ativo: [Function: ativo] }
console.log(funcFristExemple("Luan",24,5));   // { nome: 'Luan', idade: 24, ativo: [Function: ativo] }

//Verificando "ativo" que está dentro do objeto
console.log(funcFristExemple.ativo);          // undefined
console.log(funcFristExemple().ativo);        // [Function: ativo]
console.log(funcFristExemple().ativo());      // Função retornada com sucesso!
//Testando "ativo com "a" antes da função anônima
var funcFristExemple = (nome,idade) => ({nome:nome,idade:idade, ativo: a = ()=>"Função retornada com sucesso!"});
console.log(funcFristExemple.ativo);          // undefined
console.log(funcFristExemple().ativo);        // [Function: a]
console.log(funcFristExemple().ativo());      // Função retornada com sucesso!
 
