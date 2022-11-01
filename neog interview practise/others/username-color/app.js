var inp = document.querySelector("#user-inp");
var red = document.querySelector("#color1");
var green = document.querySelector("#color2");
var orange = document.querySelector("#color3");
var pink = document.querySelector("#color4");


function changeToRed() {
    inp.style.color = "red";
}

function changeToGreen() {
    inp.style.color = "green";
}

function changeToOrange() {
    inp.style.color = "orange";
}

function changeToPink() {
    inp.style.color = "pink";
}

red.addEventListener("click", changeToRed)
green.addEventListener("click", changeToGreen)
orange.addEventListener("click", changeToOrange)
pink.addEventListener("click", changeToPink)