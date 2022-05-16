//Match - Usando quando não se ter certeza da informação

const textoCpf = "Meu CPF é 123.123.123-20";

//Expressão Regular
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
const regex2 = '[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}';

console.log(textoCpf);//Meu CPF é 123.123.123-20
console.log(textoCpf.match(regex));
/*
[
  '123.123.123-20',
  index: 10,
  input: 'Meu CPF é 123.123.123-20',
  groups: undefined
]
*/
let cpf = textoCpf.match(regex);
console.log(typeof cpf); //object;
console.log(cpf.index); //10
console.log(cpf.input);//'Meu CPF é 123.123.123-20'
console.log(cpf.groups);//undefined


let cpf2 = textoCpf.match(regex2);
console.log(cpf2);
/*
[
  '123.123.123-20',
  index: 10,
  input: 'Meu CPF é 123.123.123-20',
  groups: undefined
]
*/
