<<<<<<< HEAD
//verificando possiveis erros ao enviar um array e um número
function verificaArray(array, num){
    try{    
        if(!array && !num) throw new ReferenceError("Envie os parametros");
    
        if(typeof array !== "object") throw new TypeError("Envie um objeto");
    
        if(typeof num !== "number") throw new TypeError("Envie um number");

        if(array.length !== num) throw new RangeError("Tamanho inválido");
        
        //caso o array seja válido. Retorna-lo
        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else{
            console.log("Erro não esperado: "+ e);
        }
    }
}


console.log(verificaArray());
//ReferenceError
console.log(verificaArray(5));
//TypeError
console.log(verificaArray([],"a"));
//TypeError
console.log(verificaArray([2,3],1));
//RangeError
=======
//verificando possiveis erros ao enviar um array e um número
function verificaArray(array, num){
    try{    
        if(!array && !num) throw new ReferenceError("Envie os parametros");
    
        if(typeof array !== "object") throw new TypeError("Envie um objeto");
    
        if(typeof num !== "number") throw new TypeError("Envie um number");

        if(array.length !== num) throw new RangeError("Tamanho inválido");
        
        //caso o array seja válido. Retorna-lo
        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log("Mensagem: "+ e.message);
            console.log("Nome: "+ e.name);
            //console.log("Pilha: "+ e.stack);
        }
        else{
            console.log("Erro não esperado: "+ e);
        }
    }
}


console.log(verificaArray());
//ReferenceError
console.log(verificaArray(5));
//TypeError
console.log(verificaArray([],"a"));
//TypeError
console.log(verificaArray([2,3],1));
//RangeError
console.log(verificaArray([1,2,3,4,5],5));
//[1,2,3,4,5]
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
