//JS00_index -> ReferenceError

/*
    Embelezador sintático
    Async/Await é uma forma mais bonita de se enxergar Promise

    Promise é uma maneira diferente de se executar funções Callback

    função Callback é uma função que será executada quando um
    processo assíncrono for executado.  
*/

const fs = require("fs");

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

//usando o .then()
readFile("nameList00.txt").then( contents =>{
    console.log("Usando o .then()");
    console.log(String(contents));
});
//Usando o .then()
//"Luan"
//"Ero"
//"Paulo"
//"Álvaro"
//"Airan"

//usando async/await
const init = async() =>{
    const contents = await readFile("nameList00.txt");
    //Posso criar quantas contents forem necessárias
    console.log("Usando o async/await");
    console.log(String(contents));
    
}

init();
//Usando o async/await
//"Luan"
//"Ero"
//"Paulo"
//"Álvaro"
//"Airan"

const initTwo = async() =>{
    const contents = await readFile("nameList00.txt");
    const contents2 = await readFile("nameList01.txt");
    console.log("Criando dois contents no mesmo init");
    console.log(String(contents));
    console.log(String(contents2));
}
initTwo();
//Criando dois contents no mesmo init
//"Luan"
//"Ero"
//"Paulo"
//"Álvaro"
//"Airan"
//"Gabriel"
//"Rodrigo"
//"Isadora"
//"Cristiano"
//"Aurea"