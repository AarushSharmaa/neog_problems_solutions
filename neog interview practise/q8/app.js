var inp = document.querySelector("#input");
var btn = document.querySelector("#translate");
var display = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    alert("server down at the moment, try again later");
}

function clickHandler() {

    var inputText = inp.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            display.innerText = translatedText;
        })

    .catch(errorHandler);

}

btn.addEventListener("click", clickHandler);