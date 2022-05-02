<<<<<<< HEAD
//JS00_index ReferenceError

/*
    Embelezador sintático
    Async/Await é uma forma mais bonita de se enxergar Promise

    Promise é uma maneira diferente de se executar funções Callback

    função Callback é uma função que será executada quando um
    processo assíncrono for executado.  
*/

const fs = require("fs");

//criando uma Promise
const readFile = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(contents);
        }
    });
});

console.log(readFile("nameList00.txt"));
//Promise { <pending> }

//Async/Await é um embelezador sintático de Promise
const initOne = async() =>{

}
initOne();
//
console.log(initOne());
//Promise { undefined } - está undefined pois não tem nada escrito no bloco da função async() =>{}

const initTwo = async() =>{
    console.log("funcionou!");
}
initTwo();
//funcionou!
console.log(initTwo());
//funcionou!
//funcionou!
=======
//JS00_index ReferenceError

/*
    Embelezador sintático
    Async/Await é uma forma mais bonita de se enxergar Promise

    Promise é uma maneira diferente de se executar funções Callback

    função Callback é uma função que será executada quando um
    processo assíncrono for executado.  
*/

const fs = require("fs");

//criando uma Promise
const readFile = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(contents);
        }
    });
});

console.log(readFile("nameList00.txt"));
//Promise { <pending> }

//Async/Await é um embelezador sintático de Promise
const initOne = async() =>{

}
initOne();
//
console.log(initOne());
//Promise { undefined } - está undefined pois não tem nada escrito no bloco da função async() =>{}

const initTwo = async() =>{
    console.log("funcionou!");
}
initTwo();
//funcionou!
console.log(initTwo());
//funcionou!
//funcionou!
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
//Promise { undefined }