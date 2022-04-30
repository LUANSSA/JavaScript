//JS00_index -> ReferenceError 

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

