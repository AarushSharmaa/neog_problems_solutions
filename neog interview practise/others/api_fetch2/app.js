var btn = document.querySelector("#submit");

var serverURL = "https://stock-api.desaihetav.repl.co/list";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    alert("server is down, try again later");
}


function clickHandler() {
    console.log("button works");

    var inputText = "";
    fetch(getTranslationURL())
        .then(response => response.json())
        .then(json => {
            //console.log(json.data[0].name);
            //console.log(json.data[0].id);

            for (var i = 0; i < json.data.length; i++) {
                console.log(json.data[i].id + " - " + json.data[i].name);
            }
        })

    .catch(errorHandler);
}


btn.addEventListener("click", clickHandler);