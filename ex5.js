// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let n1 = parseFloat (prompt("Digite o primeiro número da sequência: "))
let n2 = parseFloat (prompt("Digite o segundo número da sequência: "))
let n3 = parseFloat (prompt("Digite o terceiro número da sequência: "))

if (n1 < n2 && n2 < n3) 
    console.log("A sequência está em ordem crescente.")

else {
    console.log("A sequência não está em ordem crescente.")
}
