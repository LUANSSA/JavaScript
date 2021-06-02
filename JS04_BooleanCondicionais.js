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
if(letExpBoolean){
  console.log("True!");
  let num2Qualquer = 10; //SÓ PASSA A EXISTIR DENTRO DO BLOCO SE letExpBoolean FOR true
}else{
  console.log("False!");
}
//console.log(num2Qualquer); ERRO! POIS num2Qualquer SÓ EXISTE DENTRO DO BLOCO

//------------------------------------------------------------------------------
