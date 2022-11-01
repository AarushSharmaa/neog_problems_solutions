var btn = document.querySelector("#submit");

// list of 3 objects
var listOfObjects = [{
        name: "dancing",
        status: true
    }, {
        name: "sleeping",
        status: false
    },
    {
        name: "studying",
        status: true
    },
    {
        name: "smoking",
        status: true
    }
]


function clickHandler() {

    for (var i = 0; i < listOfObjects.length; i++) {
        if (listOfObjects[i].status === true) {
            console.log(listOfObjects[i].name);
        }
    }
}

btn.addEventListener("click", clickHandler);