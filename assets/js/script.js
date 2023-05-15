console.log("JS Ticket Form - Loaded");

// Casting Variables
    // Inputs
    let distanceValue = document.getElementById("input-distance");
    let ageValue = document.getElementById("input-age");

    // Tickets
    let priceTicket = distanceValue.value * 0.233;
    let getDiscountMessage;
    let getOutputMessage;


// Fixed Variables
const calculatorSubmit = document.getElementById("inputs-submit");

calculatorSubmit.addEventListener("click",
    function () {
        //Console message for making sure the inputs
        //from the user are get received correctly!
        console.log(distanceValue.value + " " + ageValue.value + " " + 
        "Digits Input Received Correctly");

        // Ticket Age Cycle
        if (ageValue.value < 18) {
            getDiscountMessage = "Prezzo Scontato per minori 18!";
            priceTicket = priceTicket * (20 / 100);
        } else if (ageValue.value >= 65) {
            getDiscountMessage = "Prezzo Scontato per over 65!";
            priceTicket = priceTicket * (40 / 100);
        } else {
            priceTicket = 0;
        }

        let getOutputMessage = priceTicket;

        console.log("Prezzo biglietto:" + priceTicket);
        document.getElementById("calc-ticket-output").innerHTML += getOutputMessage;
    }
)