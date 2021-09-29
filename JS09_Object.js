var a = {} // object
console.log(a) // {}

var a = {
  nome:"Luan",
  idade:24,
  profissao: "Desenvolvedor de Sistemas"
}
console.log(a); // { nome: 'Luan', idade: 24, profissao: 'Desenvolvedor de Sistemas' }

const b = {} // Object
b = {
  nome:"LUAN",
  idade:24,
  profissao:"Desenvolvimento de Sistemas"
}

var rafa = {nome:"Rafa", vitorias:2, empates:5, derrotas:1, pontos:0};

function calcularPontos(jogador){
  var pontos = jogador.vitorias*3+jogador.empates;
  jogador.pontos = pontos;
}

calcularPontos(rafa);
console.log(rafa);
/*
{
  "nome": "Rafa",
  "vitorias": 3,
  "empates": 1,
  "derrotas": 1,
  "pontos": 10
}
*/

