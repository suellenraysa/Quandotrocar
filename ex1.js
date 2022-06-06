const ps = require("prompt-sync")();

carro = function(){
    nome,
    valor,
    motor,
    combustivel,
    valorCombustivel,
    kmMes,
    quitado,
    financiamento
}

carro.nome = ps("Qual o nome do carro? ");
// console.log(`O nome do carro é : ${carro.nome}`);

carro.valor = ps("Quanto custa do carro? ");
// console.log(`O valor do carro é : ${carro.valor}`);

carro.motor = ps("Qual o motor do carro? ");
// console.log(`O motor do carro é : ${carro.motor}`);

carro.combustivel = ps("Qual o combustivel carro utiliza? ");
// console.log(`O combustivel é : ${carro.combustivel}`);

carro.valorCombustivel = ps("Quanto é o Combustivel? ");
// console.log(`O nome do carro é : ${carro.valorCombustivel}`);

carro.kmMes = ps("Quantos km o carro roda por mês? ");
// console.log(`Quantos km o carro roda por mês : ${carro.kmMes}`);

carro.quitado = ps("O carro está quitado? sim ou nao? ");
// console.log(`O carro está quitado : ${carro.quitado}`);

if (quitado = "nao") {
    carro.financiamento = ps("Quanto tempo para quitar o financiamento? ");
    // console.log(`O nome do carro é : ${carro.financiamento}`);
}

console.log(carro)

