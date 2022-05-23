//Todas essas condições são falsas
if(false){}                 //false
if(0 || -0){}               //false
if(NaN){}                   //false
if(null){}                  //false
if(undefined){}             //false
if('' || "" || ``){}        //false


//Todas essas condições são verdadeiras
if(true){}                  //true
if(1 || 2){}                //true
if(" "){}                   //true
if(-5 || -4){}              //true
if("LUAN"){}                //true
if({}){}                    //true


//Condição false
if(""){
  console.log("\"\"", true);
}else{
  console.log("\"\"", false);
  //"" false
}

//Condição verdadeira
if("Luan"){
  console.log("\"Luan\"", true);
  //"Luan" true
}else{
  console.log("\"Luan\"", false);
}


// Verifique se a sua idade é maior do que a idade do primo
var idade = 24;
var primoIdade = 18;
if(idade > primoIdade){
  console.log("Tem mais idade que o primo");
  //Tem mais idade que o primo
}else if(idade === primoIdade){
  console.log("Mesma idade do primo");
}else{
  console.log("Mais novo que o primo");
}


// Qual valor é retornado na seguinte expressão? com && retorna o resultado da ultima expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 3);
console.log("expressao = ", expressao);
//expressoa = 2

// Verifique se as seguintes variáveis são True ou False
var nome = 'Andre';          //true
var idade = 28;              //true
var possuiDoutorado = false; //false
var empregoFuturo;           //false
var dinheiroNaConta = 0;     //false
var numero = 2;              //true
console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta, !!numero);
//true true false false false true



// O que irá aparecer no console? com && ambas as condições devem ser verdadeiras
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Gato != gato');
  //Gato != gato
}


// O que irá aparecer no console? com || uma, das condições, deve ser verdadeira
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
  //Vai aparecer Cão pois no caso de comparação com && o último verdadeiro é que é impresso
} else {
  console.log('Falso');
}


