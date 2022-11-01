var input = document.querySelector("#user-inp");
var btn = document.querySelector("#call");
var display = document.querySelector("#output");

var serverURL = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

function getOutputURL(inp) {
    return serverURL + inp;
}

function errorHandler(error) {
    alert("server down, try again later")
}

function clickHandler() {

    fetch(getOutputURL(input.value))
        .then(response => response.json())
        .then(json => {
            //console.log("OTP : " + json.otp);
            display.innerText = "OTP : " + json.otp;

        })

    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler)