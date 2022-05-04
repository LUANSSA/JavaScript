/*
Exercício:

    Crie uma função que recebe uma lista de preços e um número
    representando o saldo disponível. Calcule qual será o saldo
    final após subtrair todos os preços da lista enviada.

*/
const listaPreco = [
    {
        name: "sabao em po",
        preco: 30
    },
    {
        name: "cereal",
        preco: 12
    },
    {
        name: "toalha",
        preco: 30
    }
];
const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, listaPreco){
    return listaPreco.reduce(function(prev, current, index){
        console.log("rodada: ", index+1);
        console.log({prev});
        console.log(current)
        return prev - current.preco;
    }, saldoDisponivel);
}
console.log(calcularSaldo(saldoDisponivel, listaPreco));
/*
rodada:  1
{ prev: 100 }
{ name: 'sabao em po', preco: 30 }
rodada:  2
{ prev: 70 }
{ name: 'cereal', preco: 12 }
rodada:  3
{ prev: 58 }
{ name: 'toalha', preco: 30 }
28
*/