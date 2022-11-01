var inp = document.querySelector("#input");
var btn = document.querySelector("#button");
var display = document.querySelector("#output");

var serverURL = 'https://api.agify.io/';

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    alert("error with server, try again later");
}

function clickHandler() {


    var inputText = inp.value;


    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var age = json.age;
            display.innerText = age;
        })

    .catch(errorHandler);

}

btn.addEventListener("click", clickHandler);