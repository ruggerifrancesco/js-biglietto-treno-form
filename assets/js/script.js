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
        if (ageValue.value <= 0 || ageValue.value > 110) {
            getDiscountMessage = "Dati non corretti!";
        } else if (ageValue.value < 18) {
            getDiscountMessage = "Prezzo Scontato per minori 18!";
            priceTicket = priceTicket * (19.4 / 100);
        } else if (ageValue.value >= 65) {
            getDiscountMessage = "Prezzo Scontato per over 65!";
            priceTicket = priceTicket * (37.7 / 100);
        } else {
            
        }

        alert(priceTicket);

        // Return State
            // Console Log
            console.log("Prezzo biglietto:" + priceTicket.toFixed(2));
            // DOM Element
            document.getElementById("calc-ticket-output").innerHTML += 
                priceTicket.toFixed(2) + "&euro;" + getDiscountMessage;
    }
)