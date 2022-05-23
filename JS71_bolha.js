let valores = [10, 9, 8, 7, 5, 4, 3, 2, 1, 0];

console.log("Valores sem ordenação: "+ valores);
//Valores sem ordenação: 10,9,8,7,5,4,3,2,1,0

function maiorValornaUltimaPosicao(vetor){
    let inicio = 0, 
        fim = vetor.length-1,
        tpm;
    //Esse algoritmo irá colocar o maior valor na ultima posição    
    for(let pos = inicio; pos < fim; pos++){
        if(valores[pos] > valores[pos+1]){
            tmp = valores[pos];
            valores[pos] = valores[pos+1];
            valores[pos + 1] = tmp;
        }
    }
}
maiorValornaUltimaPosicao(valores);
console.log("Valores com o maior valor na ultima posição: "+ valores);
//Valores com o maior valor na ultima posição: 9,8,7,5,4,3,2,1,0,10

//Algoritmo que irá ordenar o vetor em ordem crescente
function ordena(vetor){
    let inicio = 0,
        fim = vetor.length,
        tpm;
    for(vezes = inicio; vezes < fim; vezes++){    
        for(pos = inicio; pos < fim - vezes; pos++){
            if(vetor[pos] > vetor[pos + 1]){
                tmp = vetor[pos];
                vetor[pos] = vetor[pos + 1];
                vetor[pos + 1] = tmp;
            }
        }
    }
}
ordena(valores);
console.log("Valores ordenados: "+ valores);
//Valores ordenados: 0,1,2,3,4,5,7,8,9,10