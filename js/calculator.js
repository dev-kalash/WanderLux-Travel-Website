function calculateTrip() {

    const destination =
        document.getElementById("destination").value;

    const travellers =
        parseInt(
            document.getElementById("travellers").value
        );

    const days =
        parseInt(
            document.getElementById("days").value
        );

    const style =
        parseFloat(
            document.getElementById("style").value
        );

    if (!travellers || !days) {

        document.getElementById("result").innerHTML =
            "Please enter valid details.";

        return;
    }

    let baseRate;

    switch(destination){

        case "Nepal":
            baseRate = 120;
            break;

        case "Pakistan":
            baseRate = 130;
            break;

        case "Bali":
            baseRate = 150;
            break;

        case "Japan":
            baseRate = 220;
            break;

        case "Australia":
            baseRate = 250;
            break;

        case "Paris":
            baseRate = 280;
            break;

        default:
            baseRate = 150;
    }

    const total =
        travellers *
        days *
        baseRate *
        style;

    let packageType = "";

    if(style === 1){
        packageType = "Budget";
    }
    else if(style === 1.5){
        packageType = "Standard";
    }
    else{
        packageType = "Luxury";
    }

    document.getElementById("result").innerHTML =

    `
    <div class="result-card">

        <h3>Trip Estimate</h3>

        <p>
            Estimated cost for
            ${travellers} traveller(s)
            to ${destination}
            for ${days} day(s)
        </p>

        <h2>$${total.toLocaleString()}</h2>

        <p>${packageType} Travel Package</p>

    </div>
    `;
}