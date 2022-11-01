var age = document.querySelector("#user-inp");
var btn = document.querySelector("#submit");
var display = document.querySelector("#output");


function clickHandler() {
    //console.log("button works");
    //console.log(age.value);
    var userAge = age.value;
    if (userAge > 18) {
        display.innerText = "You are eligible to drive"
    } else {
        var remainingYears = 18 - userAge;
        display.innerText = `${remainingYears} years are remaining before you can drive`
        display.style.color = "red";
    }

}

btn.addEventListener("click", clickHandler)