var btn = document.querySelector("#submit");
var inp = document.querySelector("#inpu");

var serverURL = "https://jsonplaceholder.typicode.com/todos";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    alert("server is down, try again later");
}


function clickHandler() {
    console.log("button works");

    var inputText = inp.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())

    .then(json => {
        for (var i = 0; i < 100; i++) {
            console.log(json[i].title);
        }
    })


    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);