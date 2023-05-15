console.log("JS Ticket Form - Loaded");

// Casting Variables
    // Inputs
    let distanceValue = document.getElementById("input-distance");
    let ageValue = document.getElementById("input-age");

    // Tickets
    let priceTicket = distanceValue * 0.233;


// Fixed Variables
const calculatorSubmit = document.getElementById("inputs-submit");

calculatorSubmit.addEventListener("click",
    function () {
        //Console message for making sure the inputs
        //from the user are get received correctly!
        console.log(distanceValue.value + " " + ageValue.value + " " + 
        "Digits Input Received Correctly");

    }
)