console.log("JS Ticket Form - Loaded");

// Casting Variables
    // Inputs
    let distanceValue = document.getElementById("input-distance");
    let ageValue = document.getElementById("input-age");


// Fixed Variables
const calculatorSubmit = document.getElementById("inputs-submit");

// Tickets
calculatorSubmit.addEventListener("click",
    function () {
        let priceTicket = distanceValue.value * 0.233;
        let discountPrice = 0;
        let discountMessage;

        //Console message for making sure the inputs
        //from the user are get received correctly!
        console.log(distanceValue.value + " " + ageValue.value + " " + 
        "Digits Input Received Correctly");

        // Ticket Age Cycle
        if (ageValue.value <= 0 || ageValue.value > 110) {
            discountMessage = "Dati non corretti!";
        } else if (ageValue.value < 18) {

            discountPrice = priceTicket * (19.4 / 100);
            priceTicket = priceTicket - discountPrice;
            discountMessage = "Prezzo Scontato per minori 18!";

        } else if (ageValue.value >= 65) {

            discountPrice = priceTicket * (37.7 / 100);
            priceTicket = priceTicket - discountPrice;
            discountMessage = "Prezzo Scontato per over 65!";

        } else {
            discountMessage = "";
        }
        
        // Return State
            // Console Log
            console.log("Prezzo biglietto:" + priceTicket.toFixed(2));
            // DOM Element
            document.getElementById("calc-ticket-output").innerHTML = 
                priceTicket.toFixed(2) + "&euro; " + discountMessage;
    }
)