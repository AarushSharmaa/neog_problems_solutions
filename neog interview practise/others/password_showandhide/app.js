var inp = document.querySelector("#user-inp");
var btn = document.querySelector("#change");


function changeToGreen() {
    if (inp.value.length > 10) {
        inp.style.color = "green";
        
    }
}

function showHide() {
    if (btn.textContent === "Show") {
        inp.type = "text";
        btn.textContent = "Hide"
    } else {
        inp.type = "password";
        btn.textContent = "Show"
    }
}
inp.addEventListener("input", changeToGreen);
btn.addEventListener("click", showHide);