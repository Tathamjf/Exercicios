// Fazer um menu de exercicios  utulix=zando i exemplo dado em aula
// Criar um menu, onde é possivel executar 6 dos exercicios anteriores.
// Cada exercicio deve ser encapsuladovem uma função, e o menu deve executar essas funções
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.

function exercicioTabuada() {
    let numTabuada = parseInt(prompt("Digite um numero para ver a sua tabuda até o 10: "))

    if (!isNaN(numTabuada)) {

        for (let contador = 1; contador <= 10; contador++) {
            console.log(numTabuada + " x " + contador + " = " + (numTabuada * contador));
        }
    } else {
        console.log("Numero invalido. Digite outro numero.")
    }
}



function exercicioFibonacci() {
    let a = 0
    let b = 1
    let c = 0

    for (let i = 2; i <= 10; i++) {
        console.log(c)

        c = a + b
        b = a
        a = c
    }
}



function exercicioSomaDos100Numeros() {
    let a = 1
    let b = 0

    while (a <= 100) {
        b += a++
    }
    console.log("A soma dos numros de 1 a 100 é: " + b);
}




function exercicioMenor18() {
    let idade = 0

    while (idade < 18) {
        idade = parseInt(prompt("Digite a sua idade (maior de 18 anos): "))
        if (idade < 18) {
            console.log("Você é menor de idade, digite sua idade novamente: ")
        }
    }

    console.log("Você é maior de idade!")
}


function exercicioNotasEscolares() {
    let n1 = parseFloat(prompt("Digite a primeria nota do aluno: "))
    let n2 = parseFloat(prompt("Digite a segunda nota do aluno: "))
    let n3 = parseFloat(prompt("Digite a terceira nota do aluno: "))
    let n4 = parseFloat(prompt("Digite a quarta nota do aluno: "))

    let media = (n1 + n2 + n3 + n4) / 4;

    if (media >= 7) {
        console.log("O aluno está aprovado!")
    }

    else if (media >= 5 && media < 7)
        console.log("O aluno está de recuperação.")

    else {
        console.log("O aluno está reprovado.")
    }
}



function exercicioImparouPar() {
    let numero = prompt("Digite um numero: ")
    if (numero % 2 === 0) {
        console.log("O numero é par.")
    }

    else if (numero % 2 === 1) {
        console.log("O numero é impar.")
    }

    else {
        console.log("O valor digitado não é um numero.")
    }
}

let opcao;

while (opcao != 0) {
    opcao = parseInt(prompt("Escolha qual o exercicio que você deseja executar: \n0 - Digite 0 para sair do programa. \n1 - ✖️​ TABUADA ✖️​\n2 - ​🔢​ FIBONACCI ​🔢​ \n3 ​​​✨​ SOMA DOS 10 NUMEROS ​​​✨​ \n4 - ​🔞​ MENOR DE 18 ​🔞​ \n5 - ​✅​ NOTAS ESCOLARES ​✅​ \n6 - ​​​💢​ IMPAR OU PAR ​​​💢​"))
    switch (opcao) {
        case 1:
            exercicioTabuada(console.log("Tabuada!!!"));
            break;

        case 2:
            exercicioFibonacci(console.log("Exercício Fibonacci... desgra-"));
            break;

        case 3:
            exercicioSomaDos100Numeros(console.log("Soma de 1 a 100"));
            break;

        case 4:
            exercicioMenor18(console.log("Menor de 18"));
            break;

        case 5:
            exercicioNotasEscolares(console.log("Notas Escolares"));
            break;

        case 6:
            exercicioImparouPar(console.log("Impar ou par"));
            break;

    }
}