/*
Utilizando o async/await

As palavras-chave async e await, implementadas a partir do ES2017, são uma sintaxe que simplifica
a programação assíncrona, facilitando o fluxo de escrita e leitura do código;

assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona.
O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais
fluída e simples de entender.

Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne
uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.

A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro).
Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. 
Se for finalizada com sucesso (o termo utilizado é fulfilled),
o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected),
é retornado o erro lançado pela exceção.
*/

async function getEndpoint(endpoint){
    let response = await fetch(`https://626ed7fac94c985b1e3a7b54.mockapi.io/projeto/${endpoint}`);
    let endpointData = await response.json();
    return endpointData;
}
console.log(getEndpoint("users"));

getEndpoint("users").then(data => console.log(data));