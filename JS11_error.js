//mensagem - nome - linha - Call Stack
//DOMException
//ECMAScript

//trhow e return
function verificaPalindromo(string){
    console.log(typeof string);
    if(typeof string !== "string") throw "String inválida";

    //verificando se a string invertida é igual a string original
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        console.log(e);
        throw e;
    }
    finally{
        //finally executa independente de erro ou não
        console.log("A string enviada foi: ", string);
    }
}
tryCatchExemplo(22);