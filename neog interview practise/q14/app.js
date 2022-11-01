var output = document.querySelector("#result");

var obj1 = {
    name: "Ram",
    age: 35,
    yuga: "Treta"
}

var obj2 = {
    name: "Krishna",
    age: 91,
    yuga: "Dwapar"
}


function compare(obj1, obj2) {
    if (obj1.age > obj2.age) {
        output.innerText = obj1.name + " has more age than " + obj2.name;

    } else {
        output.innerText = obj2.name + " has more age than " + obj1.name;
    }
}

compare(obj1, obj2);