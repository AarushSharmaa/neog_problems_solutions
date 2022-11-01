var inp = document.querySelector("#text");
var btn = document.querySelector("#submit");

btn.disabled = true;

function inputByUser() {
    if (inp.value.length === 0) {
        btn.disabled = true

    } else if (inp.value.length > 0 && inp.value.length <= 10) {
        btn.disabled = false

    } else {
        btn.disabled = true;

        alert("You have reached your quota of 10 characters!!")
    }
}

function clickHandler() {
    alert("You were able to click the button as you typed within 10 characters")
}

btn.addEventListener("click", clickHandler);
inp.addEventListener("input", inputByUser)