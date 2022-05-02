<<<<<<< HEAD
//JS00_index -> ReferenceError

//Promise

/*
Promise cria uma camada em cima das funções Callbacks para que
esse Callback seja visto de maneira diferente.
*/

const { Console } = require("console");
const fs = require("fs");

//criando uma Promise
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

//lendo arquivos
readFile("nameList00.txt").then(contents =>{
    console.log(String(contents),"\n");
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
    //sem o return, o próximo .then é undefined
    return readFile("nameList01.txt");
}).then(contents =>{
    console.log(String(contents),"\n");
    //"Gabriel"
    //"Rodrigo"
    //"Isadora"
    //"Cristiano"
    //"Aurea"
})


//Criando outra Promessa
const readFileTwo = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents) =>{
        if(err){
            reject(err);
        }
        else{
            resolve(contents);
        }
    })
})

//Essa segunda promessa foi a segunda a ser entregue
readFileTwo("nameList00.txt").then( contents => {
    console.log("Segunda promessa\n",String(contents),"\n");
    //Segunda promessa 
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
});


console.log(readFile("nameList00.txt"));
//Promise { <pending> }
console.log(readFileTwo("nameList01.txt"));
//Promise { <pending> }
setTimeout(() => console.log(readFile("nameList01.txt")), 5000);
//depois de 5 segundos Promise { <pending> }

console.log(1);
//1
console.log(2);
//2
console.log(3);
=======
//Promise

/*
Promise cria uma camada em cima das funções Callbacks para que
esse Callback seja visto de maneira diferente.
*/

const { Console } = require("console");
const fs = require("fs");

//criando uma Promise
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

//lendo arquivos
readFile("nameList00.txt").then(contents =>{
    console.log(String(contents),"\n");
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
    //sem o return, o próximo .then é undefined
    return readFile("nameList01.txt");
}).then(contents =>{
    console.log(String(contents),"\n");
    //"Gabriel"
    //"Rodrigo"
    //"Isadora"
    //"Cristiano"
    //"Aurea"
})


//Criando outra Promessa
const readFileTwo = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents) =>{
        if(err){
            reject(err);
        }
        else{
            resolve(contents);
        }
    })
})

//Essa segunda promessa foi a segunda a ser entregue
readFileTwo("nameList00.txt").then( contents => {
    console.log("Segunda promessa\n",String(contents),"\n");
    //Segunda promessa 
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
});


console.log(readFile("nameList00.txt"));
//Promise { <pending> }
console.log(readFileTwo("nameList01.txt"));
//Promise { <pending> }
setTimeout(() => console.log(readFile("nameList01.txt")), 5000);
//depois de 5 segundos Promise { <pending> }

console.log(1);
//1
console.log(2);
//2
console.log(3);
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
//3