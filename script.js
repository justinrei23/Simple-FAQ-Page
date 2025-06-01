// This script handles the FAQ page functionality
function submit() {
    const p = document.getElementById("message");
    const input = document.getElementById("question").value;
    p.innerHTML = "You asked: " + input + "<br>Thank you for your question! We will get back to you soon.";
    document.getElementById("question").value = ""; // Clear the input field
}