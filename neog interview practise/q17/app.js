var info = document.querySelector("#news");
var src = document.querySelector("#source");
var verify = document.querySelector("#check");
var output = document.querySelector("#result");

var fakeSources = ["facebook", "whatsapp", "telegram"];

function factCheck() {

    // checking if the source exists in our list of fake sources
    if (fakeSources.includes(src.value.toLowerCase())) {
        output.innerText = "News is fake. Do not believe things on FB and Whatsapp";
        //console.log("Fake news");
    } else {
        output.innerText = "News is real";
        //console.log("Real news");
    }
}

verify.addEventListener("click", factCheck);