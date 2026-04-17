const form = document.getElementById("intakeForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    responseMessage.textContent = "Submission received";

    form.reset();
});
