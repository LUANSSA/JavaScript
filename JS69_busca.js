let valores = [5, 8, 10, 22, 45, 38];

function busca(num, vetor){
    let tam = vetor.length;
    for(let i = 0; i < tam; i++){
        if(num == valores[i]) return i;
    }
    return -1;
}

console.log(valores);
console.log(busca(5, valores));
//0
console.log(busca(10, valores));
//2
console.log(busca(50, valores));
//-1