var btn = document.querySelector("#call");
var display = document.querySelector("#message");

var serverURL = "https://unitube-server.herokuapp.com/playlists";

function errorHandler(error) {
    display.innerText = error;
}

function clickHandler() {
    //console.log("button works");
    //display.innerText = "wiring works";
    fetch(serverURL)
        .then(response => {
            console.log(response.status)
            if (response.status === 401) {
                throw ("page not found 😑")
            } else if (response.status === 404) {
                throw ("you are not logged in 🤐")
            }
        })

    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler)


/* 
What is throw in JavaScript?
The throw statement throws a user-defined exception.
Execution of the current function will stop (the statements after throw won't be executed)
and control will be passed to the first catch block in the call stack. 
If no catch block exists among caller functions, the program will terminate
*/