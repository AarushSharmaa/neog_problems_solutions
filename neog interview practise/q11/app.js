var pwd = document.querySelector("#pass-word");
var btn = document.querySelector("#submit");
var result = document.querySelector("#output");


function passwordValidity() {
    //console.log("submit btn works");
    if (pwd.value.length < 10) {
        result.innerText = "error : password must of atleast 10 characters";
        result.style.color = "red";
    } else {
        result.innerText = "success :  you entered a valid password";
        result.style.color = "green";
    }

}

btn.addEventListener("click", passwordValidity);