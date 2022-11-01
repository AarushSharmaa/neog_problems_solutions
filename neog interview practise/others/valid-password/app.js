var pwd1 = document.querySelector("#user-inp1");
var pwd2 = document.querySelector("#user-inp2");
var btn = document.querySelector("#verify");
var display = document.querySelector("#output");

// disabling the button
btn.disabled = true;

function verificationOfPasswords() {

    if (pwd1.value.length === 0 || pwd2.value.length === 0) {
        display.innerText = "Please do not leave any field blank";
        return;
    }

    if (pwd1.value === pwd2.value) {
        btn.disabled = false;


    } else {
        btn.disabled = true;
    }
}

function clickHandler() {
    // console.log("passwords match yo");
    display.innerText = "Your passwords match, that is why you were able to click the button. :)"
}

btn.addEventListener("click", clickHandler);