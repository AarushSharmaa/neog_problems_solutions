var input = document.querySelector("#user-inp");
var btn = document.querySelector("#check");
var display = document.querySelector("#output");


function calculateSquare(number) {
    return (number * number)
}

function checkAutomorphic() {
    if (input.value.length === 0 || input.value.length > 1) {
        display.innerText = "You must enter a single digit number between 0-9";
        return;

    }
    // we convert the square of input to a string
    // we access the last element of this string
    // we compare this last element with the given input

    var square_of_input = calculateSquare(Number(input.value));
    var string = String(square_of_input);
    var length = string.length;
    var last_digit = string[length - 1];

    if (Number(last_digit) === Number(input.value)) {
        display.innerText = "result : it is AUTOMORPHIC";
        display.style.color = "green";
        display.style.fontWeight = "bold";
    } else {
        display.innerText = "result : it is NOT AUTOMORPHIC";
        display.style.color = "red";
        display.style.color = "bold";
    }

}

btn.addEventListener("click", checkAutomorphic);