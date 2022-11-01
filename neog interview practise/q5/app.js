// readline-sync : 1st way of taking input
// 1. this article explains everything : https://education.launchcode.org/intro-to-professional-web-dev/chapters/data-and-variables/input.html
// 2. First you import the modules via the given line and store it in a variable named readlineSync --> const readlineSync = require("readline-sync");
// 3. Then you use it --> examples have been commented out at line 22, 26 and so on



// Prompt : 2nd Way of taking input 
// 1. The prompt() method displays a dialog box that prompts the user for input.
// 2. The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.

var names = [];
var unitTestMarks = [];
var preFinalMarks = [];
var finalMarks = [];
var totalMarks = [];
var average = [];

for (var i = 0; i < 5; i++) {
    // let name = readlineSync.question("Name : ");
    let name = prompt("name? ");
    names.push(name);

    //let unitMarks = readlineSync.question("Unit Test Marks : ");
    let unitMarks = prompt("Unit Test Marks? ");
    unitTestMarks.push(Number(unitMarks));

    let pfm = prompt("pre final marks? ");
    preFinalMarks.push(Number(pfm));

    let final = prompt("final marks?");
    finalMarks.push(Number(final));
}
console.log(names);
console.log(unitTestMarks);
console.log(preFinalMarks);
console.log(finalMarks);

for (var j = 0; j < 5; j++) {
    var total = unitTestMarks[j] + preFinalMarks[j] + finalMarks[j];
    totalMarks.push(total);
}
console.log(totalMarks);

for (var k = 0; k < 5; k++) {
    var avg = totalMarks[k] / 5;
    average.push(avg);
}

console.log("Averages :", average);