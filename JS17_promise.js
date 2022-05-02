//JS00_index -> ReferenceError

/*
Promise cria uma camada em cima das funções Callbacks para que
esse Callback seja visto de maneira diferente.
*/

//Utilizando Promise
//fs significa File System
const fs = require("fs");

//Criando uma promise
//file representa um arquivo
const readFile = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents) =>{
        if(err){
            reject(err);
        }
        else{
            resolve(contents);
        }
    });
});

//Usando o .then
readFile("nameList00.txt").then( contents =>{
    console.log(String(contents),"\n");
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
});

readFile("nameList01.txt").then( contents =>{
    console.log(String(contents),"\n");
    //"Gabriel"
    //"Rodrigo"
    //"Isadora"
    //"Cristiano"
    //"Aurea"
})

console.log(1);
//1
console.log(2);
//2
console.log(3);
//3