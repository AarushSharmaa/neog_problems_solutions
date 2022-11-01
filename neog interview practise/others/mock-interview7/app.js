var btn = document.querySelector("#call");
var display = document.querySelector("#output");

var serverURL = "https://jsonplaceholder.typicode.com/todos";

var array = [];

function errorHandler(error) {
    display.innerText = error;

}

function clickHandler() {
    //console.log("button works");

    fetch(serverURL)

    .then(response => {
        console.log(response.status);
        if (response.status === 404) {
            throw ("page not found")
        }
        if (response.status === 401) {
            throw ("user not logged in")
        }
    })


    .catch(errorHandler)
}


btn.addEventListener("click", clickHandler)