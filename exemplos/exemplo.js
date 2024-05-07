// Escrevs um programa que solicite o nome do usuário e lhe de boas-vindas,
// exibindo uma mensagem pelo console.

// prompt -> Recebe uma mensagem digitada
// let nome = prompt("Olá, digite seu nome:")

//  Concatenação
// console.log("Seja bem vindo " + nome + "!"); 

let pontos = 100

// parseInt -> Transforma o que está entre () em número inteiro.
// let bonus = parseInt( prompt("Quantos pontos você deseja somar?"))

console.log(pontos + bonus)

// parseFloat() -> Transforma o que está entre () em numero com , (quebrado)
let notaAluno = parseFloat(prompt("Digite a nota do aluno:"))

console.log(notaAluno)


// == -> verifica se um valor é igual á outro
// === -> verifica se um valor e o tipo dos itens são iguais




//for - Loop contado

for(let cont=10; cont >=0; cont--){
    console.log(cont);
}

//while - Loop condicional
let contador =0;

while(contador <= 5){
    console.log(contador);
    contador+=1
}

//do - while -> Loop condicional

let num2 = 0;

do {

    console.log(num2);
    num+=1;
    
} while (num2 < 10);


//ForEach(Para cada) - percorrer a lista

let num = [1,2,3,4,5,6,7];

num.forEach(elemento => {
    console.log("O número é: " + elemento)

});

for(let elemento of num){
    console.log(elemento)
}