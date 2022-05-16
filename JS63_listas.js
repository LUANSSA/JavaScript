let arr = ["a", "b", "c"];
//arr2 se torna uma referência para arr
let arr2 = arr;

console.log(arr); //[ 'a', 'b', 'c' ]
console.log(arr2); //[ 'a', 'b', 'c' ]

arr2.push("x");
console.log(arr); //[ 'a', 'b', 'c', 'x' ]
console.log(arr2); //[ 'a', 'b', 'c', 'x' ]



//arr3 faz uma cópia dos valores que existem em arr
let arr3 = [...arr];
console.log(arr3); //[ 'a', 'b', 'c', 'x' ]
arr3.push("z");
console.log(arr);//[ 'a', 'b', 'c', 'x' ]
console.log(arr3);//[ 'a', 'b', 'c', 'x', 'z']