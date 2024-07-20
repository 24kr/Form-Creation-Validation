document.addEventListener('DOMContentLoaded', (event) => {
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        let isValid = true; 
        let messages = []; 

        // Reset feedback div
        feedbackDiv.style.display = "block";
        feedbackDiv.innerHTML = "";
        feedbackDiv.style.color = ""; 

        // Get form values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate email format
        if (!isValidEmail(email)) {
            isValid = false;
            messages.push("Invalid email format.");
        }

        // Validate password length
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display validation messages
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; 
        }
    });

    // function validation for email
    function isValidEmail(email) {
        return email.includes('@') && email.includes('.');
    }
});
