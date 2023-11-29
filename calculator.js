"use strict";

let firstNumber = 0;
let secondNumber = 0;
let result = 0;
const currentArray = [];
const firstArray = [];
const secondArray = [];
let operator = "";
let tempOperator = "";
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
button0.addEventListener("click", () => {numberClick(0)});
button1.addEventListener("click", () => {numberClick(1)});
button2.addEventListener("click", () => {numberClick(2)});
button3.addEventListener("click", () => {numberClick(3)});
button4.addEventListener("click", () => {numberClick(4)});
button5.addEventListener("click", () => {numberClick(5)});
button6.addEventListener("click", () => {numberClick(6)});
button7.addEventListener("click", () => {numberClick(7)});
button8.addEventListener("click", () => {numberClick(8)});
button9.addEventListener("click", () => {numberClick(9)});
buttonpoint.addEventListener("click", () => {numberClick("point")});

buttonclear.addEventListener("click", () => {clearClick()});

buttonadd.addEventListener("click", () => {operatorClick("add")});
buttonsubtract.addEventListener("click", () => {operatorClick("subtract")});
buttonmultiply.addEventListener("click", () => {operatorClick("multiply")});
buttondivide.addEventListener("click", () => {operatorClick("divide")});

buttonequals.addEventListener("click", () => {equalsClick()});


// I think we're going to need to push the values onto an array for firstNumber, until the operator is chosen
// and then do the same for secondNumber until the equals (or another operator) is hit
// then flatten those to strings and numerize them, then do the compute.

// need to handle decimals
// maybe separate out numerals and operators into separate functions, this would save a lot of if-thens


//handle button presses

function numberClick(value){
     
    // just handle numbers

    currentArray.push(value);
    writeDisplay(currentArray.join(""));
    console.log(currentArray);

}

function operatorClick(value){

    if (operatorFlag){
        tempOperator = value;  //note the new operator and hold it till after func
        secondNumber = parseInt(currentArray.join(""));
        evaluateEquation();  // currentArray now has the result
        operator = tempOperator; // now we can store that permanently
        firstNumber = parseInt(currentArray.join("")); // so move it to firstNumber
        currentArray.splice(0, currentArray.length);   //erase currentArray        

    } else {

    operator = value;                               //note the operator
    operatorFlag = true;                            //flag it
    firstNumber = parseInt(currentArray.join(""));  //get that first number numerized
    currentArray.splice(0, currentArray.length);    //erase currentArray
    console.log(firstNumber);                       // TESTING - note number
    //console.log(firstNumber*2);                     // TESTING - make sure it's mathable
}
}

function equalsClick(){

    if ((firstArray.length === 0)||(secondArray.length === 0)){
        return firstNumber;
    }

    operatorFlag = false;
    evaluateEquation();
}




function clearClick(){

    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    operatorFlag = false;
    currentArray.splice(0, currentArray.length);
    firstArray.splice(0, firstArray.length);
    secondArray.splice(0, secondArray.length);
    writeDisplay(firstNumber);



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

function evaluateEquation(){
   
    secondNumber = parseInt(currentArray.join(""));
    result = calculate(operator, firstNumber, secondNumber);
    writeDisplay(result);
    currentArray.splice(0, currentArray.length);
    currentArray.push(result);

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

    return parseFloat((firstNumber + secondNumber).toPrecision(8));
}

function subtract(firstNumber, secondNumber) {
    return parseFloat((firstNumber - secondNumber).toPrecision(8));
}

function multiply(firstNumber, secondNumber) {
    return parseFloat((firstNumber * secondNumber).toPrecision(8));
}

function divide(firstNumber, secondNumber) {
    return parseFloat((firstNumber / secondNumber).toPrecision(8));
}

