//JS00_index -> ReferenceError 

const fs = require("fs");
//maneira 1
fs.readFile("nameList00.txt", (err, contents) => {
    console.log(err, "\n" + String(contents));
    //err: null 
    //"Luan"
    //"Ero"
    //"Paulo"
    //"Álvaro"
    //"Airan"
});

//maneira 2
fs.readFile("nameList00.txt", (err, contents)=>{
    fs.readFile("nameList01.txt", (errTwo, contentsTwo) =>{
        console.log(err,"\n" + String(contents));
        //err: null 
        //"Luan"
        //"Ero"
        //"Paulo"
        //"Álvaro"
        //"Airan"
        console.log(errTwo, "\n" + String(contentsTwo));
        //errTwo: null
        //"Gabriel"
        //"Rodrigo"
        //"Isadora"
        //"Cristiano"
        //"Aurea"
    });
});

console.log(1);
//1
console.log(2);
//2
console.log(3);
//3

