//JS00_index -> ReferenceError

const fs = require("fs");

//callback com arrow function (err, ... contents) =>{}
const callback = (err, contents) =>{
    console.log(err, "\n" + String(contents));
}
fs.readFile("nameList00.txt", callback);
//null 
//"Gabriel"
//"Rodrigo"
//"Isadora"
//"Cristiano"
//"Aurea"
fs.readFile("nameList01.txt", callback);
//null 
//"Luan"
//"Ero"
//"Paulo"
//"Álvaro"
//"Airan"


console.log(1);
//1
console.log(2);
//2
console.log(3);
//3
