const myMap = new Map();
myMap.set("Luiz","ADMIN");
myMap.set("Aurea","ADMIN");
myMap.set("Luan","DEV");
myMap.set("Álvaro","PSICO");
myMap.set("João","ADMIN");

function getAdmins(map){
    let list = [];
    for(const [key, value] of map){
        if(value == "ADMIN")
            list.push(key, value);
    }
    return list;
}
//retornando apenas os ADMINs
listAdmins = getAdmins(myMap);
console.log(listAdmins);

// returnando um array sem números repetidos
const myArray = [30,30,40, 223, 2049, 3034, 5, 223];

function getUniqueValues(array){
    let mySet = new Set(array);
    //transformando o set em array, usando hash
    return [...mySet];
}
console.log(getUniqueValues(myArray));
