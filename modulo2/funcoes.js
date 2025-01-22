function soma(num1, num2) {
    return num1 + num2;
}

function subtrai(num1, num2) {
    return num1 - num2;
}

function multiplica(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function mostraResultado(num1, num2) {
    console.log(`Soma entre ${num1} e ${num2}`, soma(num1, num2))
    console.log(`Subtração entre ${num1} e ${num2}`, subtrai(num1, num2))
    console.log(`Multiplicação entre ${num1} e ${num2}`, multiplica(num1, num2))
    console.log(`Divisão entre ${num1} e ${num2}`, divide(num1, num2))
}
let num1 = 10;
let num2 = 20;
console.log(mostraResultado(num1, num2));
