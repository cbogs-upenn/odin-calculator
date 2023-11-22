"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "0";

const calcDisplay = document.querySelector('#display');

calcDisplay.textContent = displayValue; // clear the display

//let's listen for input





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
