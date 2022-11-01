var btn = document.querySelector("#call-api");
var display = document.querySelector("#output");
var arr = [];

var serverURL = "https://nftbaazarapi.rawheatg.repl.co/product";


function getTranslationToURL() {
    return serverURL
}


function errorHandler(error) {
    alert("server down, try again later");
}

function clickHandler() {
    //console.log("button works");

    fetch(getTranslationToURL())
        .then(response => response.json())
        .then(json => {
            for (var i = 0; i < json.data.length; i++) {
                console.log("Id : " + json.data[i].id + " and Price : " + json.data[i].price);
                arr.push(`Id is : ${json.data[i].id} and Price is : ${json.data[i].price}`);

            }
            console.log(arr);
            display.innerText = `${arr}`;
            display.style.color = "red";
        })


    .catch(errorHandler);
}


btn.addEventListener("click", clickHandler);