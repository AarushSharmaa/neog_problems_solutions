var yjhd = document.querySelector("#button1");
var znmd = document.querySelector("#button2");
var display = document.querySelector("#output");

serverURL = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";

function getTranslationURL(userInput) {
    return serverURL + userInput;
}

function errorHandler(error) {
    alert("server down, try again later");
}

function clickHandler1() {
    //console.log("yjhd button works");

    fetch(getTranslationURL(yjhd.value))
        .then(response => response.json())
        .then(json => {
            //console.log(json.message);
            display.innerText = json.message;
        })

}

function clickHandler2() {
    //console.log("znmd button works");

    fetch(getTranslationURL(znmd.value))
        .then(response => response.json())
        .then(json => {
            //console.log(json.message);
            display.innerText = json.message;
        })

    .catch(errorHandler);
}


yjhd.addEventListener("click", clickHandler1);
znmd.addEventListener("click", clickHandler2);