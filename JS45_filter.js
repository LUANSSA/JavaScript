
const frutas = ["maçã fuji", "maçã verde", "laranja", "abavaxi"];
console.log(frutas);
//["maçã fuji", "maçã verde", "laranja", "abavaxi"]
console.log(frutas.filter((fruta) => fruta.includes("maçã")));
//["maçã fuji", "maçã verde"]



const meuArray = [1, 23, 55, 67, 30, 2, 4];
console.log(meuArray);
//[1, 23, 55, 67, 30, 2, 4 ]
function filtraPares(arr){
    return arr.filter(callbackFilter);
}
function callbackFilter(item){
    return item % 2 === 0;
}
console.log(filtraPares(meuArray));
//[ 30, 2, 4 ]