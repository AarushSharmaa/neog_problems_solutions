var btn = document.querySelector("#call");

var serverURL = "https://randomuser.me/api/?results=10";

function errorHandler(error) {
    alert(error);
}

function clickHandler() {

    fetch(serverURL)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (var i = 0; i < json.results.length; i++) {
                console.log(i + 1);
                console.log(`Name is ${json.results[i].name.first} ${json.results[i].name.last} `)
                console.log(`Age is ${json.results[i].dob.age} `)

                if (`${json.results[i].dob.age}` > 45) {
                    console.log("ELIGIBLE FOR VACCINATION")

                }
                console.log("")
            }
        })
        .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);