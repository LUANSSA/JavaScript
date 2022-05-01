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
    })
})

//Usando async\await e try catch
const init = async() =>{
    try{
        const contents = await(readFile("nameList00.txt"));
        //A linha abaixo está com erro no nome do arquivo txt
        //const contents2 = await(readFile("nameList1.txt"));
        return String(contents) + "\n" + String(contents2);
    }
    catch(err){
        //caso a linha 30 seja executada o catch entra
        err.name = "Falha no readFile";
        console.log(err.name +" "+ err.message);
    }
}
init().then( contents => console.log(contents));
/*
"Luan"
"Ero"
"Paulo"
"Álvaro"
"Airan"
"Gabriel"
"Rodrigo"
"Isadora"
"Cristiano"
"Aurea"
*/