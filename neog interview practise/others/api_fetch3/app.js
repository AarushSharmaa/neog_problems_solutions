var display = document.querySelector("#output");
var btn = document.querySelector("#submit");

var serverURL = "https://quick-access-api.desaihetav.repl.co/";

function getTranslationToURL() {
    return serverURL

}

function errorHandler(error) {
    alert("server down, try again later");
}

function clickHandler() {
    //console.log("btn works");

    fetch(getTranslationToURL())
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            //console.log(json.success);
            //console.log(json.message);
            display.innerText = [json.success, json.message];
        })

    .catch(errorHandler);
}

btn.addEventListener('click', clickHandler);