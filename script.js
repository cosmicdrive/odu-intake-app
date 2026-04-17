const form = document.getElementById("intakeForm");
const responseMessage = document.getElementById("responseMessage");
// getting the form element so we can listen for submission
// getting the message area to show feedback to the user


form.addEventListener("submit", function(event) {
    event.preventDefault();
    // listen for when the form is submitted
    // stop the page from refreshing when the form is submitted

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // get the value the user typed into the name field

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    

    responseMessage.textContent = "Submission received";
    // show a confirmation message on the page

    form.reset();
    // clear all the form inputs after submission
});
