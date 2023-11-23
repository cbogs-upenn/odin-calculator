"use strict";

let firstNumber = 0;
let secondNumber = 0;
let result = 0;
const currentArray = [];
const firstArray = [];
const secondArray = [];
let operator = "";
let operatorFlag = false;
let initialDisplayValue = "0";

const calcDisplay = document.querySelector('#display');

calcDisplay.textContent = initialDisplayValue; // clear the display

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
button0.addEventListener("click", () => {buttonClick(0)});
button1.addEventListener("click", () => {buttonClick(1)});
button2.addEventListener("click", () => {buttonClick(2)});
button3.addEventListener("click", () => {buttonClick(3)});
button4.addEventListener("click", () => {buttonClick(4)});
button5.addEventListener("click", () => {buttonClick(5)});
button6.addEventListener("click", () => {buttonClick(6)});
button7.addEventListener("click", () => {buttonClick(7)});
button8.addEventListener("click", () => {buttonClick(8)});
button9.addEventListener("click", () => {buttonClick(9)});
buttonpoint.addEventListener("click", () => {buttonClick("point")});
buttonclear.addEventListener("click", () => {buttonClick("clear")});
buttonadd.addEventListener("click", () => {buttonClick("add")});
buttonsubtract.addEventListener("click", () => {buttonClick("subtract")});
buttonmultiply.addEventListener("click", () => {buttonClick("multiply")});
buttondivide.addEventListener("click", () => {buttonClick("divide")});
buttonequals.addEventListener("click", () => {buttonClick("equals")});


// I think we're going to need to push the values onto an array for firstNumber, until the operator is chosen
// and then do the same for secondNumber until the equals (or another operator) is hit
// then flatten those to strings and numerize them, then do the compute.

// need to handle decimals
// maybe separate out numerals and operators into separate functions, this would save a lot of if-thens


//handle button presses

function buttonClick(value){
     
    // is it a number or an operator?

    if (!operatorFlag){
        if (typeof value === "string"){                     //it's an operator!
            if (value === "equals") {
                writeDisplay(currentArray.join(""));

            } else {
            operator = value;                               //note the operator
            operatorFlag = true;                            //flag it
            firstNumber = parseInt(currentArray.join(""));    //get that first number numerized
            currentArray.splice(0, currentArray.length);    //erase currentArray
            console.log(firstNumber);
            console.log(firstNumber*2);
            }
        } else {
                currentArray.push(value);
                console.log("you're typing numbers into the first array!")
                writeDisplay(currentArray.join(""));
                console.log(currentArray);
            }
    }

    if (operatorFlag) {
        if (typeof value === "number"){
                currentArray.push(value);
                console.log("YOU'RE THERE!");
                writeDisplay(currentArray.join(""));
                console.log(currentArray);
        } else {
            if (value === "equals") {
                secondNumber = parseInt(currentArray.join(""));
                result = calculate(operator, firstNumber, secondNumber);
                writeDisplay(result);
                currentArray.splice(0, currentArray.length);
                currentArray.push(result);
              }

         }
      
    }

}



//write things to the display
function writeDisplay(input){
    calcDisplay.textContent = input;
}

function whichArray(){
    if (operator !== "") {    //then we're on the second array
        return "secondArray";
    } else {return "firstArray";}  // be sure to clear the operator after the operation!
}


//handle calculations
function calculate(operator, firstNumber, secondNumber){
    switch(operator){
        case "add":
            return add(firstNumber, secondNumber);
            break;
        
        case "subtract":
            return subtract(firstNumber, secondNumber);
            break;

        case "multiply":
            return multiply(firstNumber, secondNumber);
            break;
        
        case "divide":
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

