var btn = document.querySelector("#change");
var areaOfConcern = document.querySelector("#area");

function changeTheme() {
    //console.log("button works");
    if (btn.textContent === "Grey") {
        btn.textContent = "White";
        areaOfConcern.style.backgroundColor = "grey";

    } else {
        btn.textContent = "Grey";
        areaOfConcern.style.backgroundColor = "white";
    }

}

btn.addEventListener("click", changeTheme)