// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numTabuada = parseInt(prompt("Digite um numero para ver a sua tabuda até o 10: "))

if (!isNaN(numTabuada)){
    
    for(let contador = 1; contador <= 10; contador++) {
        console.log(numTabuada + " x " + contador + " = " + (numTabuada * contador));
    }
}else {
    
}


