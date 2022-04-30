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
});

const init = async() =>{
    const contents = await readFile("nameList00.txt");
    const contents2 = await readFile("nameList01.txt");
    console.log(String(contents));
    console.log(String(contents2));
}
init();