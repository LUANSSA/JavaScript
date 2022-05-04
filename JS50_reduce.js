//Reduce
const array = [1, 2, 3, 4, 5];
console.log(array);
//[1, 2, 3, 4, 5]
//Accumulator/prevValue:acumulador de todas as chamadas de callbackFn
//CurrentValue: elemento atual sendo acessado pela função 
const callbackFn = function(accumulator, currentValue, index, array){
    accumulator+=currentValue;
    return accumulator;
};
//.reduce(callbackFn, initialValue);
console.log(array.reduce(callbackFn, 0));
//15


const arr = [1, 2, 3, 4, 5];
console.log(arr);
//[1, 2, 3, 4, 5]
function somaNumeros(arr){
    //prev = accumulator
    //current = valor atual
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        /*
        { prev: 0 }
        { current: 1 }
        { prev: 1 }
        { current: 2 }
        { prev: 3 }
        { current: 3 }
        { prev: 6 }
        { current: 4 }
        { prev: 10 }
        { current: 5 }
        */
        return prev + current;
    }, 0);
}
console.log(somaNumeros(arr));
//15