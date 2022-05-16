//Destruct

const pessoa = {
    nome: "Luan",
    sobrenome: "Souza",
    idade: 25,
    profissao: "Desenvolvedor Front-end"
};

console.log(pessoa);
/* 
{
  nome: 'Luan',
  sobrenome: 'Souza',
  idade: 25,
  profissao: 'Desenvolvedor Front-end'     
}
*/

//Forma tradicional
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
console.log(nome); //Luan
console.log(sobrenome);//Souza
console.log(idade);//25
console.log(profissao);//Desenvolvedor Front-end

//Outra forma - erro!
//Como já criei em cima essas variáveis -> da erro!
//let {nome, sobrenome, idade, profissao} = pessoa;

//Outra forma - undefined
//Criando várias variáveis
let {nome1, sobrenome1, idade1, profissao1} = pessoa;
console.log(nome1); //undefined
console.log(sobrenome1);//undefined
console.log(idade1);//undefined
console.log(profissao1);//undefined


const carro = {
    cor: "Preta",
    ano: 2012
};
let {cor, ano1} = carro;
console.log(carro); //{ cor: 'Preta', ano: 2012 }
console.log(cor);//Preta
console.log(ano1);//undefined


const bicicleta = {
    cor: "Azul",
    tipo: "Corrida"
};
//Da erro pois a variável cor já foi usada. Existe!
//let {cor, tipo} = bicicleta;
console.log(bicicleta); //{ cor: 'Azul', tipo: 'Corrida' }

const caneta = {
    tinta: "Azul",
    ponta: "0.5"
}
//As variáveis criandas dentro do {} precisam ter o mesmo nome dos atributos em caneta
let {tinta, ponta} = caneta;
console.log(caneta); //{ tinta: 'Azul', ponta: '0.5' }
console.log(tinta);//Azul
console.log(ponta);//0.5

