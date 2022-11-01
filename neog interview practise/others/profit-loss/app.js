var cp = document.querySelector("#cost-price");
var sp = document.querySelector("#current-price");
var btn = document.querySelector("#calculate");
var display = document.querySelector("#output");


function calculateProfitOrLoss() {

    if (Number(cp.value) === Number(sp.value)) {
        display.innerText = "Result : no profit no loss";
        document.body.style.backgroundColor = "orange";

    } else if (Number(cp.value) > Number(sp.value)) {
        var loss = Number(cp.value) - Number(sp.value);
        display.innerText = `Result : we have a loss of ${loss}`;
        document.body.style.backgroundColor = "red";

    } else {
        var profit = Number(sp.value) - Number(cp.value);
        display.innerText = `Result : we have a profit of ${profit}`;
        document.body.style.backgroundColor = "green";
    }
}

btn.addEventListener("click", calculateProfitOrLoss);