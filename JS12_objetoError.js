<<<<<<< HEAD
// fileNAME E lineNumber não são aceitos em todos os navegadores
//new Error(message, lineNumber, fileNumber);
const meuErro = new Error("Mensagem inválida");
meuErro.name = "Teste de Tratamento de Erro";
console.log(meuErro.stack);
console.log(meuErro.name);
console.log(meuErro);
=======
// fileNAME E lineNumber não são aceitos em todos os navegadores
//new Error(message, lineNumber, fileNumber);
const meuErro = new Error("Mensagem inválida");
meuErro.name = "Teste de Tratamento de Erro";
console.log(meuErro.stack);
console.log(meuErro.name);
console.log(meuErro);
>>>>>>> 4e625aae086b8411738f69ec976a616c78c94dda
throw meuErro;