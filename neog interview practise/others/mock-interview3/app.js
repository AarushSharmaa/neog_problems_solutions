var inp = document.querySelector("#para");
var btn1 = document.querySelector("#increase");
var btn2 = document.querySelector("#decrease");
var display = document.querySelector("#displaySize");

display.innerText = "Current fontSize : 16px"

var size = 16;

function increaseTheFontSize() {
    //console.log("button 1 works");
    size = size + 4;
    inp.style.fontSize = `${size}px`
    inp.style.color = "black";
    display.innerText = `Current fontSize : ${size}px`
    if (size % 5 === 0) {
        inp.style.color = "red";
    }
}

function decreaseTheFontSize() {
    //console.log("button 2 works");
    size = size - 4;
    inp.style.fontSize = `${size}px`
    inp.style.color = "black";
    display.innerText = `Current fontSize : ${size}px`
    if (size % 5 === 0) {
        inp.style.color = "red";
    }
}

btn1.addEventListener("click", increaseTheFontSize)
btn2.addEventListener("click", decreaseTheFontSize)

// theory - why do we not use brackets in the callback functions
// because then, function would be called without even clicking the button