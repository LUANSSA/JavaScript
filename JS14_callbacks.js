//JS00_index -> ReferenceError 
/*

Callback é uma função que será executada quando 
operações assíncronas forem executadas

Por exemplo, ler um arquivo pode demorar, por isso o sistema
deixa essa leitura em pendente, e quando ela for feita, a função
Callback é executada para realizar alguma operação relacionada a esse
processo de leitura.

*/

const fs = require("fs");

// callback(error, ... contents){}
function callback(err, contents){
    console.log(err,"\n" + String(contents));
}

fs.readFile("nameList00.txt", callback);
//null
//"Luan"
//"Ero"
//"Paulo"
//"Álvaro"
//"Airan"
fs.readFile("nameList01.txt", callback);
//null
//"Gabriel"
//"Rodrigo"
//"Isadora"
//"Cristiano"
//"Aurea"

console.log(1);
//1
console.log(2);
//2
console.log(3);
//3

