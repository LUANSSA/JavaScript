// fileNAME E lineNumber não são aceitos em todos os navegadores
//new Error(message, lineNumber, fileNumber);
const meuErro = new Error("Mensagem inválida");
meuErro.name = "Teste de Tratamento de Erro";
console.log(meuErro.stack);
console.log(meuErro.name);
console.log(meuErro);
throw meuErro;