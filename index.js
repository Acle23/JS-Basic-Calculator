const operator = prompt("Enter operator: (+, -, /, *)", "+")
let firstNumber = parseInt(prompt("Enter a number"))
let secondNumber = parseInt(prompt("Enter a second number"))

let sum

if (operator === "+") {
    sum = firstNumber + secondNumber
} else if (operator === "-") {
    sum = firstNumber - secondNumber
} else if (operator === "*") {
    sum = firstNumber * secondNumber
} else {
    (operator === "/")
    sum = firstNumber / secondNumber
}

alert(sum)