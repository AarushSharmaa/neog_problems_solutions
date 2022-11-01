var input = document.querySelector("#user-inp");
var btn = document.querySelector("#tweet");
var display = document.querySelector("#output"); // for showing counter
var display1 = document.querySelector("#output1"); // for showing tweet

btn.disabled = false;
var counter = 30;

function checkValidity() {

    counter = 30 - input.value.length;

    if (counter > 15) {
        display.innerText = `Counter : ${counter}`;
        btn.disabled = false;
        display.style.color = "black";
    } else if (counter >= 0 && counter <= 15) {
        display.innerText = `Counter : ${counter}`;
        display.style.color = "blue";
        btn.disabled = false;
    } else {
        display.style.color = "red";
        btn.disabled = true;
        display.innerText = `Counter : ${counter}`;
    }
}


function postTweet() {
    if (0 <= counter <= 15) {
        display1.innerText = input.value;
        display1.style.color = "blue";

    }

    display1.innerText = input.value;

}

btn.addEventListener("click", postTweet)
input.addEventListener("input", checkValidity);