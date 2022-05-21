let elementos = [];

function push(elementos, num){
    topo = elementos.length;
    elementos[topo] = num;    
}



// ------- parte do código que usa a pilha -- //
push(elementos, 10);
push(elementos, 20);
push(elementos, 30);
console.log(elementos);

//Usando pilha para descobrir o número binário
let numDecimal = 10;
let resto = [];

while(numDecimal > 0){
    resto.push(numDecimal%2);
    numDecimal = Math.floor(numDecimal/2);
}

console.log("Divisão de 10/2 feita na ordem");
console.log(resto);
console.log("Número binário de 10");
console.log(resto.pop()+""+resto.pop()+""+resto.pop()+""+resto.pop());