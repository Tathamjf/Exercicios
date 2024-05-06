// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let ano = parseFloat (prompt("Digite seu ano de nascimento: "))

let idade = (2024 - ano)

if (idade > 18)
    console.log("Você é maior de idade!")

    else {
        console.log("Você ainda não é maior de idade")
    }