var text = document.querySelector("#name");
var btn1 = document.querySelector("#five");
var btn2 = document.querySelector("#ten");

//alert("Border of name initially is " + text.style.borderWidth);

function changeToFivePx() {
    text.style.borderWidth = "5px";
    alert("The border-width now is " + text.style.borderWidth);
}

function changeToTenPx() {
    text.style.borderWidth = "10px";
    alert("The border-width now is " + text.style.borderWidth);
}

btn1.addEventListener("click", changeToFivePx)
btn2.addEventListener("click", changeToTenPx)