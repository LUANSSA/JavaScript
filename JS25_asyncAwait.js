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
            resolve("Resolvida!");
        }, 2000);

    });
    let resolved;
    try{
    resolved = await myPromise
        .then((result => result + " passando pelo .then()"))
        .then((result => result + " e agora acabou!"))
    }
    catch(err){
        resolved = err.message;
    }
    finally{
        console.log("FULFILLED!");
    }
    return resolved;
}

resolvePromise().then( result => console.log(result));
//no navegador await resolvePromise();