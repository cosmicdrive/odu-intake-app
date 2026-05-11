const supabaseUrl = "https://supabase.com/dashboard/project/ojlhgogmefxhwfhrjjmm;"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbGhnb2dtZWZ4aHdmaHJqam1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1ODk3MTUsImV4cCI6MjA5MzE2NTcxNX0.LJd9YrlBZHtNswypNw9ymTOErKMXZnrVH88soa_j8Ao";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
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
