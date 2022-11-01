var btn = document.querySelector("#change");
var portion = document.querySelector("#area");

function changeTheme() {
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
        document.body.style.backgroundColor = "grey";
        btn.style.backgroundColor = "white";
        //area.style.backgroundColor = "grey";
    } else {
        btn.textContent = "Dark Mode"
        document.body.style.backgroundColor = "white";
        btn.style.backgroundColor = "grey";

        //area.style.backgroundColor = "white";
    }


}

btn.addEventListener("click", changeTheme);