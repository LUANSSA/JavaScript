//MOCKAPI.IO

//Pegando um endpoit
function getUser(userId){
    const userData = fetch(`https://626ed7fac94c985b1e3a7b54.mockapi.io/projeto/${userId}`)
        .then(response => response.json()) //corpo da requisição é convertido para JSON
        .then( data => console.log(data))
        .catch( err => console.log(err)) //metodo para caso de erro - reject - função callback para erro
        .finally(() => console.log("operação finalizada"));//metodo para fim de operação - função callback para fim
        
}
//chamando a função getUsers e passando o endpoint
getUser("users");


//Pegando 2 endpoits
const endpoits = [
    "https://626ed7fac94c985b1e3a7b54.mockapi.io/projeto/users/",
    "https://626ed7fac94c985b1e3a7b54.mockapi.io/projeto/pets/"
    
];

//consumindo 2 endpoints diferentes
const promises = endpoits.map( url => fetch(url).then(res => res.json()));
Promise.all(promises).then(body => console.log(body));