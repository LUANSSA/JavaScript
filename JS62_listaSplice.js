let lista = [1, 3, 4, 5];
let listaIn = [8, 1, 3, 6 ,7, 2, 6];

console.log(lista);
console.log(listaIn);
var string = "";
for(let i = 0; i < listaIn.length; i++){
    //Copiando processo
    string += ""+listaIn[i]+" ->";
    for(let j = 0; j < lista.length; j++){
       //Copiando processo
       string += " "+lista[j];
       if(lista[j] < listaIn[i] && (lista[j+1] == undefined || lista[j+1] > listaIn[i])){
           //splice(index, qtDelet, num que ficara na posição do num do index)
           lista.splice(j+1, 0,listaIn[i]); 
           j++;
       }
    }
    //Copiando processo
    string+="\n";
}
//Imprimindo processo
console.log(string);
/*
8 -> 1 3 4 5
1 -> 1 3 4 5 8
3 -> 1 3 4 5 8
6 -> 1 3 4 5 8
7 -> 1 3 4 5 6 8
2 -> 1 3 4 5 6 7 8
6 -> 1 2 3 4 5 6 7 8
*/
console.log(lista); // [1, 2, 3, 4, 5, 6, 7, 8]

//Outra forma de concatenar elemenos de 2 listas diferentes
let listaNomes = ["Luan", "Carlos", "Gabriel"];
let novaListaNomes = ["Lucas", "Airan", ...listaNomes];

console.log(listaNomes); // [ 'Luan', 'Carlos', 'Gabriel' ]
console.log(novaListaNomes); // [ 'Lucas', 'Airan', 'Luan', 'Carlos', 'Gabriel' ]
