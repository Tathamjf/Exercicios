// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let a = 0
let b = 1
let c = 0

for(let i = 2; i <= 10; i++){
    console.log(c)

    c = a + b
    b = a
    a = c
}