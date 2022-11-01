var input = document.querySelector("#user-inp");
var logBtn = document.querySelector("#log");
var warnBtn = document.querySelector("#warn");
var errorBtn = document.querySelector("#error");

function changeToBlack() {
    input.style.color = "orange";

}

function changeToYellow() {
    input.style.color = "green";
}

function changeToRed() {
    input.style.color = "red";
}


logBtn.addEventListener("click", changeToBlack);
warnBtn.addEventListener("click", changeToYellow);
errorBtn.addEventListener("click", changeToRed);