var userName = document.querySelector("#user-inp");
var btn = document.querySelector("#call");
var display = document.querySelector("#output");


var serverURL = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

function getTheApiResults(nameOfUser) {
    return serverURL + nameOfUser;
}

function callAPI() {
    //console.log("button works");
    //console.log(userName.value);

    fetch(getTheApiResults(userName.value))
        .then(response => response.json())
        .then(json => {
            var array = json.otp.split("-");
            display.innerText = `OTP : ${array[1]}`;
        })

}

btn.addEventListener("click", callAPI);