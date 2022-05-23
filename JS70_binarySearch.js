var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function binarySearch(num, vetor){
    let inicio, meio, fim;
    inicio = 0;
    fim = vetor.length -1;
    while(inicio <= fim){
        meio = parseInt((inicio+fim)/2);
        if(num == vetor[meio]) return meio;
        else if(num > valores[meio]) inicio = meio + 1;
        else fim = meio -1;
        
    }
    return -1;
}
console.log(binarySearch(5, valores));
//0
console.log(binarySearch(120, valores));
//9
console.log(binarySearch(100, valores))
//8
console.log(binarySearch(38, valores))
//4
