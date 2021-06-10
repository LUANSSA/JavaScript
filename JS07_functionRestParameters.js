//Funções com parametros Rest são funções que podem receber vários argumentos
//sem que está quantidade de argumentos sejá pre definida

// Primeiro exemplo
function somaTotal(...args){
  let tam = args.length; // a variável tam recebe a quantidade de parametros existentes em args
  let soma = 0;
  // o for está percorrendo cada index de args e somando a variável soma o valor contido em cada index
  for(let i = 0; i < tam; i++){
    soma+= args[i];
  }
  return soma;
}
console.log("           somaTotal(...args)");
console.log("somaTotal(10,10,10,5) =",somaTotal(10,10,10,5)); // imprime 35
console.log("somaTotal(5,5,5) =",somaTotal(5,5,5));     // imprime 15
console.log("somaTotal() =",somaTotal());           // imprime 0

//É possíverl observar que a quantidade de argumentos passados na função vária.

//Segundo exemplo
//colocando o parametro a à esquerda de ...args
function testTwo(a,...args){
  let tam = args.length; // a variavel tam cebe a quantidade de parametros existentes em ...args
  let total = 0;
  for(let i = 0; i < tam; i++){
    total += args[i]*a;
  }
  return total;
}
console.log("           testTwo(a,...args)");
console.log("testTwo(1,5,5,5) =",testTwo(1,5,5,5)); // a = 1; args = [5,5,5];
console.log("testTwo(2,5,5,5) =",testTwo(2,5,5,5)); // a = 2; args = [5,5,5];

//Terceiro exemplo
//neste exemplo é possível perceber que pode ter mais de 1 parametro a esquerda de ...args
function testThree(a,b,...args){
  let tam = args.length;
  let total = 0;
  for(let i = 0; i < tam; i++){
    total += args[i] * (a+b);
  }
  return total;
}
console.log("           testThree(a,b,...args)");
console.log("testThree(1,5,5,5) =",testTree(1,5,5,5)); //a = 1; b = 5; args = [5,5];
console.log("testThree(2,5,5,5) =",testTree(2,5,5,5)); //a = 2; b = 5; args = [5,5];
