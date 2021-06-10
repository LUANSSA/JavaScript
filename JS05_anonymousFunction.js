//funções anônimas são funções que estão dentro de uma váriavel.
var soma = function(a,b){
  return a + b;
}
console.log(soma(10,20));
//quando uma função não tem return, ela passa a retornar undefined.
var subtracao = function(a,b){
  console.log("subtração de",a,"-",b,"=",a-b);
}
//a funcao será camada, irá imprimir o console.log() e ira retornar undefined.
subtracao(10,20);
//neste caso, irá imprimir o console.log() e iŕa imprimir também o undefined que é o retorno padrão da função.
console.log(subtracao(10,20));
//outro exemplo.
var returnFunction = subtracao(10,20);
console.log(returnFunction,typeof(returnFunction));

//essas funcões anônimas ficam anônimas, dentro de uma váriavel.
