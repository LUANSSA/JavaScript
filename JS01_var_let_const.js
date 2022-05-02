//let, var e const

/*O let cria uma variável de bloco.
O var cria uma variável que passsa a existir também fora do bloco.
O const cria uma variável que não pode ter seu valor alterado.
*/
//--------------------------------------------------------------------
//exemplo - 1:

var ex1 = "oi";
{
	var ex1 = "olá";
	console.log(ex1);
}
console.log(ex1);

//#olá
//#olá

//NESTE EXEMPLO O olá SOBRESCREVE O oi
//--------------------------------------------------------------------
//exemplo - 2:

let ex2 = "oi";
{
	let ex2 = "olá";
	console.log(ex2);
}
console.log(ex2);

//#olá
//#oi

//NESTE CASO O olá SÓ EXISTE DENTRO DO BLOCO
//--------------------------------------------------------------------
//exemplo - 3:
{
	var ex3 = "oi";
}
console.log(ex3);

//#oi;
//NESTE CASO O oi CONTINUA A EXISTIR FORA DO BLOCO
//--------------------------------------------------------------------
//exemplo - 4:
{
	let ex4 = "oi;
}
console.log(ex4);

//#ERRO
//NESTE CASO O ex4 NÃO EXISTE FORA DO BLOCO E RESULTA EM ERRO

//--------------------------------------------------------------------
//exemplo - 5:

const numero = 10;
numero = 20;
//#ERRO
//O VALOR DA VARIÁVEL const NÃO PODE SER ALTERADO
//--------------------------------------------------------------------
//exemplo - 6:

const pessoa = {
	nome: "Luna",
	sobrenome: "Souza,
}
console.log(pessoa);
pessoa.nome = "Luan";
pessoa.idade = 20;
console.log(pessoa);

//#{nome:'Luna', sobrenome:'Souza'}
//#{nome:'Luan', sobrenome:'Souza', idade: 20}

//O VALOR DA CONST DO ENDEREÇO DE MEMÓRIA DO OBJETO PESSOA
//NÃO É ALTERADO!
//MAS OS VALORES DENTRO DESSE OBJETO PODEM SER ALTERADOS
//--------------------------------------------------------------------
//exemplo - 7:
const pessoa = {} recebe const pessoa2 = {}  false
const pessoa = {} recebe let pessoa2 = {}    false
const pessoa = {} recebe var pessoa2 = {}    false
let pessoa  =  {} recebe const pessoa2 = {}  true
let pessoa = {}   recebe let pessoa2 = {}    true
let pessoa = {}   recebe var pessoa2 = {}    true
var pessoa = {}   recebe const pessoa2 = {}  true
var pessoa = {}   recebe let pessoa2 = {}    true
var pessoa = {}   recebe var pessoa2 = {}    true
//--------------------------------------------------------------------
//exemplo - 8

var a = "qualquercoisa";
var a = "coisaalguma"; True

let b = "qualquercoisa";
let b = "coisaalguma" False
//--------------------------------------------------------------------
//exemplo - 9
console.log(pessoa);
var pessoa = "Luan";
console.log(pessoa);
//#undefined
//#Luan
//A VARIÁVEL pessoa EXISTE E VAI PARA O TOPO DO ARQUIVO. PÓREM É INIVSÍVEL
//A ATRIBUIÇÃO "Luan" PASSA A PODER SER VISUALIZADA A PARTIR DA LINHA SEGUINTE

