var inp = document.querySelector("#paragraph");
var increment = document.querySelector("#incr");
var decrement = document.querySelector("#decr");
var display = document.querySelector("#output");

display.innerText = `fontSize is 16px`;

// initialising the default size of paragraphs
var currentSize = 16;


function increaseBy4px() {
    currentSize = (currentSize + 4)
    var size = `${currentSize}px`;
    inp.style.fontSize = size;
    inp.style.color = "black";
    if ((currentSize % 5) == 0) {
        inp.style.color = "red";
    }

    display.innerText = `fontSize is ${currentSize}px`;
}

function decreaseBy4px() {
    currentSize = (currentSize - 4);
    var size = `${currentSize}px`;
    inp.style.fontSize = size;
    inp.style.color = "black";
    if ((currentSize != 0) && (currentSize % 5) == 0) {
        inp.style.color = "red";
    }

    display.innerText = `fontSize is ${currentSize}px`;
}

increment.addEventListener("click", increaseBy4px);
decrement.addEventListener("click", decreaseBy4px);