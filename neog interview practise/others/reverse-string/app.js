var input = document.querySelector("#user-inp");
var btn = document.querySelector("#reverse");
var display = document.querySelector("#output");

function reverseTheInput() {
    // let the input be "aarush"

    var listOfWords = input.value.split(""); // ["a", "a", "r", "u", "s", "h"]
    var reversedListOfWords = listOfWords.reverse(); // ["h", "s", "u", "r", "a", "a"]
    var joinedListOfWords = reversedListOfWords.join(""); // hsuraa
    display.innerText = "Reversed form of text is : " + joinedListOfWords;
}

btn.addEventListener("click", reverseTheInput)


// split() method

// 1. The split() method splits a string into an array of substrings.
// 2. The split() method returns the new array.
// 3. The split() method does not change the original string.
// 4. If (" ") is used as separator, the string is split between words.