var inp = document.querySelector("#user-inp");
var btn = document.querySelector("#submit");
var pwd = document.querySelector("#password");
var display = document.querySelector("#output");

function checkValidity() {

    // checking if the wiring works

    //console.log("button works");
    //console.log("Name : " + inp.value);
    //console.log("Password : " + pwd.value);

    // core logic 

    userInput = inp.value;
    userPassword = pwd.value;

    if (userPassword.includes(userInput) === true) {
        display.innerText = "Password can't have name";
    } else {
        display.innerText = "Password is valid";
    }
}


btn.addEventListener("click", checkValidity);