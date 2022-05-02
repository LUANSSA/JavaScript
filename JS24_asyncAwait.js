<<<<<<< HEAD
/*
    Embelezador sintático
    Async/Await é uma forma mais bonita de se enxergar Promise

    Promise é uma maneira diferente de se executar funções Callback

    função Callback é uma função que será executada quando um
    processo assíncrono for executado.  
*/

//pending
//fulfilled
//rejected



async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve("Resolvida");
        }, 5000);
    });
    const resolved = await myPromise
        .then((result) => result + " passando pelo then")
        .then((result) => result + " e agora acabou!")
        .catch((err) => console.log(err.message));
    
        return resolved;
=======
/*
    Embelezador sintático
    Async/Await é uma forma mais bonita de se enxergar Promise

    Promise é uma maneira diferente de se executar funções Callback

    função Callback é uma função que será executada quando um
    processo assíncrono for executado.  
*/

//pending
//fulfilled
//rejected



async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve("Resolvida");
        }, 5000);
    });
    const resolved = await myPromise
        .then((result) => result + " passando pelo then")
        .then((result) => result + " e agora acabou!")
        .catch((err) => console.log(err.message));
    
        return resolved;
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
}