//Promise

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
    console.log(String(contents));
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