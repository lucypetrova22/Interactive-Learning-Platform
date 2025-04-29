// myScript.js

// Greet user when page loads
function greetUser() {
    console.log("Page Loaded Successfully.");
    alert("👋 Welcome to the Interactive Learning Platform!");
}

// Smoothly scroll to features section
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("❗ Features section not found.");
    }
}

// Validate contact form before submitting
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill out all fields before submitting.");
        return false;
    }

    const confirmation = confirm("✅ Are you sure you want to submit the form?");
    return confirmation; // If OK, submit. If Cancel, stop.
}
