// Operações aritiméticas
var idade = 24;
var pontos = 300;
var pi = 3.14;
var exp1 = 2e10;                  // ZERO A DIREITA
var exp2 = 2e5;                   // ZERO A DIREITA
var exp3 = 2e-5;                  // ZERO A ESQUERDA

var exp4 = 2e-6;                  // ZERO A ESQUERDA - QUATIDADE MÁXIMA

console.log(idade);               //24
console.log(pontos);              //300
console.log(pi);                  //3.14
console.log(exp1);                //20000000000
console.log(exp2);                //200000
console.log(exp3);                //0.00002
console.log(exp4);                //0.000002

var soma = 100 + 50;              //150
var subtracao = 100 - 50;         //50
var multiplicacao = 100 * 2;      //200
var divisao = 100 / 2;            //50
var expoente = 2 ** 4;            //16
var resto = 14 % 5;               //4


//Ordem das operações aritméticas
// 1 -> () parenteses
// 2 -> ** potenciação 
// 3 -> *  Multiplicação ou / divisão 
// 4 -> +  soma ou - subtração

var total1 = 10 + 5 + 10;         
var total2 = 200 / 5;             
var total3 = (20*5) / 2;  
var total4= 10+10+10/2;
var total5 = 10*2**2;

console.log("Ordem das operações aritiméticas");
console.log(total1);              //25
console.log(total2);              //40
console.log(total3);              //50
console.log(total4);              //25
console.log(total5);              //40


//Operações aritméticas com números em Strings
var somaStr = "100" + 50;         //concatena     
var subtracaoStr = "200" - 50;    //subtrai 
var multiplicacaoStr = "100" * 2; //multiplica 
var divisaoStr = "100" / 2;       //divide

console.log("Operações aritiméticas com números em String");
console.log(somaStr);             //10050
console.log(subtracaoStr);        //150
console.log(multiplicacaoStr);    //200
console.log(divisaoStr);          //50

//Incrementos ++ e --
console.log("Incrementos ++ e --");
var x = 10;
console.log(x++);                 //10
var y = 10;
console.log(++y);                 //11


