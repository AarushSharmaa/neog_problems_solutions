var inp = document.querySelector("#user-name");
var pwd = document.querySelector("#user-password");
var btn = document.querySelector("#verify");
var display = document.querySelector("#output");

function clickHandler() {
    // check if name exists in pwd or not : if it exists -> display its an error
    //console.log("Name : " + inp.value);
    //console.log("Password : " + pwd.value);

    if ((pwd.value).includes(inp.value)) {
        //console.log("error");
        display.innerText = "Your password contains your name. ERROR";

    } else {
        //console.log("this is a valid password");
        display.innerText = "Valid Password";
    }
}

btn.addEventListener("click", clickHandler);