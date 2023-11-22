"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

console.log (calculate("*", 2, 3));


function calculate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber, secondNumber);
            break;
        
        case "-":
            return subtract(firstNumber, secondNumber);
            break;

        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        
        case "/":
            return divide(firstNumber, secondNumber);
    }
}


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
