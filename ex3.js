// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

let numero = prompt("Digite um numero: ")
    if ( numero % 2 === 0) {
        console.log("O numero é par.")
    } 
    
    else if (numero % 2 === 1){
        console.log("O numero é impar.")
    }
    
     else {
        console.log("O valor digitado não é um numero.")
    }

