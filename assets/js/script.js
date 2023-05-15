console.log("JS Ticket Form - Loaded");

let distance = document.getElementById("input-distance");
let age = document.getElementById("input-age");

const calculatorSubmit = document.getElementById("inputs-submit");

calculatorSubmit.addEventListener("click",
    function () {
        //Console message for making sure the inputs
        //from theuser are get received correctly!
        console.log(distance.value + " " + age.value + " " + 
        "Digits Input Received Correctly");
    }
)