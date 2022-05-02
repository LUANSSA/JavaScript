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

//Usando async\await
const init = async() =>{
    const contents = await readFile("nameList00.txt");
    const contents2 = await readFile("nameList01.txt");
    //retornando os 2 contents
    return String(contents) + " " + String(contents2);
}
//Usando o .then para usar o valor retornado
/*
    O .then serve como Promise que retorna 2 funções Callback.
    Uma para sucesso e outra para facasso.

    .then retorna uma Promise
*/
init().then( contents => console.log(contents));
/*
"Luan"
"Ero"
"Paulo"
"Álvaro"
"Airan" "Gabriel"
"Rodrigo"
"Isadora"
"Cristiano"
"Aurea"
*/
