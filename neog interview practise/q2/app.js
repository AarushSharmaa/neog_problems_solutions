// take all inputs from our html world

var inp = document.querySelector("#input");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#subtract");
var outputArea = document.querySelector("#output");

var height = 22;

// increase font
function fontIncrease() {
    //console.log("add btn works");
    height += 2;
    inp.style.fontSize = `${height}px`
}

// decrease font
function fontDecrease() {
    //console.log("subtract btn works");
    height -= 2;
    inp.style.fontSize = `${height}px`;
}

// event handling
addBtn.addEventListener("click", fontIncrease);
subBtn.addEventListener("click", fontDecrease);