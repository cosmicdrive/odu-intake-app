const form = document.getElementById("intakeForm");
const responseMessage = document.getElementById("responseMessage");
// getting information from the user via the intakeForm. Understanding the submission of the user
// getting information from the responceMessage in the textbox from the users input.


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // check if any field is empty
    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "Please fill out all fields";
        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    responseMessage.textContent = "Submission received";

    form.reset();
});
    // clear all the form inputs after submission.
