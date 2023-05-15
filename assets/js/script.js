console.log("JS Ticket Form - Loaded");

let distance = document.getElementById("input-distance");
let age = document.getElementById("input-age");

const calculatorSubmit = document.getElementById("inputs-submit");

calculatorSubmit.addEventListener("click",
    function () {
        console.log(distance.value + age.value + "Inputs Taken Correctly");
    }
)