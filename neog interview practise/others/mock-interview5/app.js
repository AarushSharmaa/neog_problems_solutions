var userInput = document.querySelector("#user-inp");
var changeColor = document.querySelector("#btn1");
var removeText = document.querySelector("#btn2");


function changeColorOfText() {

    changeColor.disabled = false;
    userInput.style.color = "blue";
}

function removeTheText() {
    // way 1 
    //var str = userInput.value.replace(userInput.value, "");
    //userInput.value = str;

    // way 2
    userInput.value = "";
    removeText.disabled = true;
    changeColor.disabled = true;

}

changeColor.disabled = true;
removeText.disabled = true;

function disableAndEnable() {
    console.log("input box fired")
    if (userInput.value.length === 0) {
        changeColor.disabled = true;
        removeText.disabled = true;
    } else {
        changeColor.disabled = false;
        removeText.disabled = false;
    }

}
changeColor.addEventListener("click", changeColorOfText)
removeText.addEventListener("click", removeTheText)
userInput.addEventListener("input", disableAndEnable)