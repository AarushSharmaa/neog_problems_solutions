// 1. input

var inp = document.querySelector("#input");
var btn1 = document.querySelector("#red");
var btn2 = document.querySelector("#blue");
var btn3 = document.querySelector("#green");


// 2. processing and output
function toRed() {
    //console.log("red button works");
    inp.style.color = "red";
}

function toBlue() {
    //console.log("blue button works");
    inp.style.color = "blue";
}

function toGreen() {
    //console.log("green button works");
    inp.style.color = "green";
    
}


btn1.addEventListener("click", toRed);
btn2.addEventListener("click", toBlue);
btn3.addEventListener("click", toGreen);