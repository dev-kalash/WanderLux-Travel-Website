function validateAppointment() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        message === ""
    ) {

        document.getElementById(
            "appointmentResult"
        ).innerHTML =
            "Please complete all fields.";

        return;
    }

    document.getElementById(
        "appointmentResult"
    ).innerHTML =
        `Thank you ${name}! Your appointment request has been submitted successfully.`;
}


function validateContact() {

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        document.getElementById(
            "contactResult"
        ).innerHTML =
            "Please complete all fields.";

        return;
    }

    const templateParams = {

        from_name: name,

        from_email: email,

        message: message

    };

    emailjs.send(
        "service_zpnlcnl",
        "template_y1nfhco",
        templateParams
    )

    .then(function () {

        document.getElementById(
            "contactResult"
        ).innerHTML =
            "✅ Message sent successfully!";

        document.getElementById(
            "contactForm"
        ).reset();

    })

    .catch(function (error) {

        console.log(error);

        document.getElementById(
            "contactResult"
        ).innerHTML =
            "❌ Failed to send message.";

    });

}