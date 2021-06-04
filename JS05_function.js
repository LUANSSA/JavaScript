function areaQuadrado (lado){
  return "função areaQuadrado ativa\n"+"area: "+lado*lado;

}
console.log(areaQuadrado(2));//imprime 4
console.log(areaQuadrado(4));//imprime 16
console.log(areaQuadrado(8));//imprime 64

function imc(peso, altura){
  let imc = peso/ (altura**2);
  return "funcão imc ativa\n"+"imc: "+imc.toFixed(2);
}
console.log(imc(80,1.8));

function corFavorita(cor){
  (cor)? cor=cor.toLowerCase():cor; // verifica se cor é true e caso seja utiliza a função toLowerCase()
  switch(cor){
    case "azul": return "função corFavorita ativa\n"+"cor: Azul Gosta do céu!";
    case "verde": return "função corFavorita ativa\n"+
    "cor: Verde Gosta de floresta!";
    default: return "função corFavorita ativa\n"+"cor: não foi passada como argumento";
  }
}
console.log(corFavorita("azul"));
console.log(corFavorita("verde"))
console.log(corFavorita());
