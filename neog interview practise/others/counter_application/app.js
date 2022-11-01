var increment = document.querySelector("#add");
var decrement = document.querySelector("#subtract");
var display = document.querySelector("#output");
var counter = 0;

display.innerText = `Couner initially : 0`;

function increase() {
    counter += 1;
    display.innerText = `Counter : ${counter}`;

}

function decrease() {
    counter -= 1;
    display.innerText = `Counter : ${counter}`;
}
increment.addEventListener("click", increase);
decrement.addEventListener("click", decrease);