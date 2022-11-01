var checkPower = document.querySelector("#btn");
var display = document.querySelector("#output");

// 1st object
var person1 = {
    name: "Ram",
    age: 25,
    power: 2500
}

// 2nd object
var person2 = {
    name: "Krishna",
    age: 31,
    power: 2325
}

function calculatePower() {

    var length1 = person1.name.length;
    var totalPowerforPerson1 = length1 * 35 + person1.power;

    var length2 = person2.name.length;
    var totalPowerforPerson2 = length2 * 35 + person2.power;

    if (totalPowerforPerson1 > totalPowerforPerson2) {
        display.innerText = `${person1.name} has more power than ${person2.name}`
    } else {
        display.innerText = `${person2.name} has more power than ${person1.name}`
    }

}
checkPower.addEventListener("click", calculatePower)