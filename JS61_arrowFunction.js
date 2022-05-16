let isValid = false;

function verify(isValid){
    if(isValid)
        return true;
    else    
        return false;
}
console.log(verify(isValid));

const result = isValid ? true : false;
console.log(result);

function soma(x, y){
    return x + y;
}
console.log(soma(3, 10));

const multiplicacao = function(x, y){
    return x * y;
}
console.log(multiplicacao(10, 4));

const dividir = (x, y) => { return x/y }
console.log(dividir(26,3));