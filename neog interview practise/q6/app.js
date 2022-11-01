var btn = document.querySelector("#button");
var txt = document.querySelector("#loading-div");
var result = document.querySelector("#output");

function showHide() {
    //console.log("hide button works");
    console.log("button works");
    if (btn.textContent === "Loaded") {
        btn.textContent = "Loading"
        txt.style.display = "none";
        result.innerText = "You clicked the Loaded button, so text above is hidden. Click on Loading button now to make it appear again."
        document.body.style.backgroundColor = "lightgreen";


    } else {
        btn.textContent = "Loaded"
        txt.style.display = "block"
        result.innerText = "You clicked on Loading button, so text above is now visible. Click on the Loaded button to make it disappear again."
        document.body.style.backgroundColor = "red";
    }

}


btn.addEventListener("click", showHide);