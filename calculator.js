"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

console.log ("10+5 equals: " + add(10, 5));
console.log ("10-5 equals: " + subtract(10,5));
console.log ("10*5 equals: " + multiply(10,5));
console.log ("10/5 equals: " + divide(10,5));



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
