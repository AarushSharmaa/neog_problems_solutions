// 1. we will retrieve all inputs from our html world

var inp = document.querySelector("#input");
var btn1 = document.querySelector("#btn-h1");
var btn2 = document.querySelector("#btn-h2");
var btn3 = document.querySelector("#btn-h3");
var display = document.querySelector("#output");


function toh1() {
    display.innerHTML = `<h1>${inp.value} </h1>`
}

function toh2() {
    display.innerHTML = `<h2>${inp.value} </h2>`

}

function toh3() {
    //inp.style.fontSize = "20px";
    display.innerHTML = `<h3>${inp.value} </h3>`

}


btn1.addEventListener("click", toh1);
btn2.addEventListener("click", toh2);
btn3.addEventListener("click", toh3);