// 1. take all inputs from HTML world

var num1 = document.querySelector("#input1");
var num2 = document.querySelector("#input2");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#subtract");
var multiplyBtn = document.querySelector("#multiply");
var divideBtn = document.querySelector("#divide");
var outputArea = document.querySelector("#output");

function addition() {
    var ans = Number(num1.value) + Number(num2.value);
    outputArea.innerText = `Addition result : ${ans}`;
}

function subtract() {
    var ans = Number(num1.value) - Number(num2.value);
    outputArea.innerText = `Subtraction result : ${ans}`;
}

function multiply() {
    var ans = Number(num1.value) * Number(num2.value);
    outputArea.innerText = `Multiplication result : ${ans}`;
}

function divide() {
    var ans = Number(num1.value) / Number(num2.value);
    outputArea.innerText = `Division result : ${ans}`;
}

addBtn.addEventListener("click", addition);
subBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);