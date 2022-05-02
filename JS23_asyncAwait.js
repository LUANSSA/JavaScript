//assincronicidade
//promisses - Objeto de processamento assíncrono
//Promisse - .then() - .catch() - Promisse
//Primisse possui 3 estados  1 - Pending 2 - Fulfilled 3 - Rejected
//requisições de APIs

const myPromisse = new Promise((resolve, reject) =>{
    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);
});

await myPromisse
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou!")
    .catch((err) => console.log(err.message));
//Após 2 segundos, retornará o valor
//"Resolvida passando pelo then e agora acabou!"

console.log(myPromisse);