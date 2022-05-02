var varExpBoolean = true;
let letExpBoolean = true;

/*
if(false){}                 //false
if(0 || -0){}               //false
if(NaN){}                   //false
if(null){}                  //false
if(undefined){}             //false
if('' || "" || ``){}        //false
*/

/*
if(true){}                  //true
if(1 || 2){}                //true
if(" "){}                   //true
if(-5 || -4){}              //true
if("LUAN"){}                //true
if({}){}                    //true
*/

if(""){
  console.log("\"\" True");
}else{
  console.log("\"\" False");
}
if("Luan"){
  console.log("\"Luan\"", true);
}else{
  console.log("\"Luan\"", false);
}

//------------------------------------------------------------------------------
if(varExpBoolean){
  console.log("True!");
  var num1Qualquer = 10; //MESMO QUE NÃO ENTRE NO if numQualquer PASSA A EXISTIR
}else{
  console.log("False!");
}

//CASO varExpBoolean FOSSE false num1Qualquer EXISTIRIA SENDO undefined

console.log(num1Qualquer); //var CONTINUA A EXISTIR FORA DO BLOCO.

//------------------------------------------------------------------------------

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 24;
var primo = 18;
if(idade < primo){
  console.log("Maior que o primo");
}else if(idade === primo){
  console.log("Mesma idade do primo");
}else{
  console.log("Mais novo que o primo");
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var DiferencaBrasilChina = (china-brasil)*1000000000;
console.log(DiferencaBrasilChina);


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Gato != gato');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
  //Vai aparecer Cão pois no caso de comparação com && o último verdadeiro é que é impresso
} else {
  console.log('Falso');
}

//------------------------------------------------------------------------------
