const ps = require("prompt-sync")();

var carro = function(){
    nome,
    valor,
    motor,
    combustivel,
    valorCombustivel,
    kmMes,
    quitado,
    financiamento,
    combustivelMes
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

if (carro.quitado == "nao") {
    carro.financiamento = ps("Quanto tempo para quitar o financiamento? ");
    // console.log(`O nome do carro é : ${carro.financiamento}`);
} 

if (carro.motor == "1.0"){
    if (carro.combustivel == "Gasolina"){
        carro.litroMes = carro.kmMes / 15;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    } else if (carro.combustivel == "Alcool") {
        carro.litroMes = carro.kmMes / 10,5;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    }
}

if (carro.motor == "1.6"){
    if (carro.combustivel == "Gasolina"){
        carro.litroMes = carro.kmMes / 12;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    } else if (carro.combustivel == "Alcool") {
        carro.litroMes = carro.kmMes / 8,4;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    }
}

if (carro.motor == "2.0"){
    if (carro.combustivel == "Gasolina"){
        carro.litroMes = carro.kmMes / 10;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    } else if (carro.combustivel == "Alcool") {
        carro.litroMes = carro.kmMes / 7;
        carro.combustivelMes = carro.litroMes * carro.valorCombustivel
        console.log(`O carro gasta por mês : ${carro.combustivelMes}`);
    }
}

console.log(carro)

// Aula 2 - Combustível e sem gás (06/06)
//  - Calcular o custo mensal do Km de acordo com o combustível

// Carros com Motor:
//  1.0 - 15KM - Gasolina - Alcool 30% a menos
//  1.6 - 12KM - Gasolina - Alcool 30% a menos
//  2.0 - 10KM - Gasolina - Alcool 30% a menos