/*
Pesquisar objetos protótipos em JavaScript

Todos os objetos em JavaScript herdam de um Objeto protótipo
A classe Prtótipo é PAI de todos os outros objetos JavaScript

Os Arrays também possuem um objeto Pai potótipo

Exemplo: 
Cadeia de protótipos(prototype chain)

Crow é filha de Bird
Bird é filha de Animal.constructor
Animal.constructor é filha de Function
Function é filha de Function.prototype.constructor
Function.prototype.constructor é filha de Object () {}
Object () {} é filha de Object.prototype = null

Classes não existem nativamente no JavaScript
Syntatic sugar: uma sintaxe feita para facilitar a escrita

Ref: ECMAScript6
O que é utilizado é Objetos e classes são Syntatic sugar

Cria-se objetos e objetos tem protótipos

Atividade:
1 - Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2 - Dentro de ContaBancaria, construa o getter e o setter de saldo;
3 - Dentro de ContaBancaria, crie os métodos sacar e depositar;
4 - Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5 - Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6 - Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7 - Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8 - Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9 - Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

ref: https://github.com/stebsnusch/basecamp-javascript/tree/main/orientacao-a-objetos
*/


class ContaBancaria{

    agencia;
    numero;
    tipo;
    saldo;

    constructor(type = "Conta"){
        this.type = type;
    }
    get Saldo(){
        return this.saldo;
    }
    set Saldo(valor){
        this.saldo += valor;
    }

    set Sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        }
        return valor;
    }
    set Depositar(valor){
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria(){
    constructor (){
        super(ContaBancaria.name);
    }
    get Saldo(){
        return this.saldo;
    }
    set Saldo(valor){
        this.saldo += valor;
    }

    set Sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        }
        return valor;
    }
    set Depositar(valor){
        this.saldo += valor;
    }
}