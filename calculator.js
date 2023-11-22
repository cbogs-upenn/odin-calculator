"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "0";

const calcDisplay = document.querySelector('#display');

calcDisplay.textContent = displayValue; // clear the display

//let's make the buttons

const button0 = document.querySelector("#key0");
const button1 = document.querySelector("#key1");
const button2 = document.querySelector("#key2");
const button3 = document.querySelector("#key3");
const button4 = document.querySelector("#key4");
const button5 = document.querySelector("#key5");
const button6 = document.querySelector("#key6");
const button7 = document.querySelector("#key7");
const button8 = document.querySelector("#key8");
const button9 = document.querySelector("#key9");
const buttonpoint = document.querySelector("#keypoint");
const buttonclear = document.querySelector("#keyclear");
const buttonadd = document.querySelector("#keyadd");
const buttonsubtract = document.querySelector("#keysubtract");
const buttonmultiply = document.querySelector("#keymultiply");
const buttondivide = document.querySelector("#keydivide");
const buttonequals = document.querySelector("#keyequals");

//and listen for input
button0.addEventListener("click", () => {buttonClick("button0")});
button1.addEventListener("click", () => {buttonClick("button1")});
button2.addEventListener("click", () => {buttonClick("button2")});
button3.addEventListener("click", () => {buttonClick("button3")});
button4.addEventListener("click", () => {buttonClick("button4")});
button5.addEventListener("click", () => {buttonClick("button5")});
button6.addEventListener("click", () => {buttonClick("button6")});
button7.addEventListener("click", () => {buttonClick("button7")});
button8.addEventListener("click", () => {buttonClick("button8")});
button9.addEventListener("click", () => {buttonClick("button9")});
buttonpoint.addEventListener("click", () => {buttonClick("buttonpoint")});
buttonclear.addEventListener("click", () => {buttonClick("buttonclear")});
buttonadd.addEventListener("click", () => {buttonClick("buttonadd")});
buttonsubtract.addEventListener("click", () => {buttonClick("buttonsubtract")});
buttonmultiply.addEventListener("click", () => {buttonClick("buttonmultiply")});
buttondivide.addEventListener("click", () => {buttonClick("buttondivide")});
buttonequals.addEventListener("click", () => {buttonClick("buttonequals")});


// I think we're going to need to push the values onto an array for firstNumber, until the operator is chosen
// and then do the same for secondNumber until the equals is hit
// then flatten those to strings and numerize them, then do the compute.


//handle button presses

function buttonClick(button){
     
    switch(button){
        case "button0":
            writeDisplay("0");
            break;
        
        case "button1":
            writeDisplay("1");
            break;

        case "button2":
            writeDisplay("2");
            break;
            
        case "button3":
            console.log("3 was pressed");
            break;

        case "button4":
            console.log("4 was pressed");
            break;

        case "button5":
            console.log("5 was pressed");
            break;

        case "button6":
            console.log("6 was pressed");
            break;

        case "button7":
            console.log("7 was pressed");
            break;
            
        case "button8":
            console.log("8 was pressed");
            break;

        case "button9":
            console.log("9 was pressed");
            break;

        case "buttonpoint":
            console.log(". was pressed");
            break;

        case "buttonclear":
            console.log("clear was pressed");
            break;

        case "buttonadd":
        console.log("+ was pressed");
        break;

        case "buttonsubtract":
            console.log("- was pressed");
            break;

        case "buttonmultiply":
            console.log("* was pressed");
            break;

        case "buttondivide":
            console.log("/ was pressed");
            break;
        
        case "buttonequals":
            console.log("= was pressed");
            break;


    }
    
}

//write things to the display
function writeDisplay(input){
    calcDisplay.textContent = input;
}


//handle calculations
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

//perform basic arithmetic
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

