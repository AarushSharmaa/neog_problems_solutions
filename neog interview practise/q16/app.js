// two objects
var person1 = {
    name: "Ram",
    age: 24,
    power: 2500
}

var person2 = {
    name: "Sita",
    age: 12,
    power: 2325
}

// power calculation for both the objects
function calculatePower(p) {
    var length = p.name.length;
    var name_power = length * 35;
    var totalPower = name_power + p.power;
    return totalPower;
}

// comparison of powers
function comparePowers(p1, p2) {
    power1 = calculatePower(p1);
    power2 = calculatePower(p2);
    console.log("Total power of " + p1.name + " : " + power1);
    console.log("Total power of " + p2.name + " : " + power2);

    if (power1 === power2) {
        console.log("Both have same powers");
    } else if (power1 > power2) {
        console.log(p1.name + " has more power than " + p2.name);
    } else {
        console.log(p2.name + " has more power than " + p1.name);
    }
}

// calling the function which compares powers of both the objects
comparePowers(person1, person2)