// object1
var person1 = {
    name: "Ram",
    age: 25,
    power: 2500
}

// object2
var person2 = {
    name: "Krishna",
    age: 12,
    power: 12111
}

// defining the function that compares power of two objects and prints the result into the console
function comparePower(person1, person2) {
    if (person1.power === person2.power) {
        console.log("Both have equal power");

    } else if (person1.power < person2.power) {
        console.log(person2.name + " has more power than " + person1.name);
        console.log("Details about Krishna :", person2);


    } else {
        console.log(person1.name + " has more power than " + person2.name);
        console.log("Details about Ram :", person1);
    }
}

// function taking in two objects and doing the work
comparePower(person1, person2);