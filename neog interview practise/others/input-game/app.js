var inp = document.querySelector("#user-inp");
var btn = document.querySelector("#submit");
var display = document.querySelector("#output");


function showTheMessage() {
    // console.log("button works");
    // console.log(inp.value);
    if (inp.value === "Tanvi") {
        display.innerText = "She is the best CEO ever!";
    } else if (inp.value === "Tanay") {
        display.innerText = "He is our FUNNY mentor!";
    } else if (inp.value === "Swapnil") {
        display.innerText = "He helps us CONQUER jobs!";
    } else if (inp.value === "Akanksha") {
        display.innerText = "She is our CHEERFUL Interviewer!";
    } else {
        display.innerText = "But we expected a different name 😯"
    }
}

btn.addEventListener("click", showTheMessage);