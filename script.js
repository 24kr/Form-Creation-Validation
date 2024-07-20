window.onload = function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = getElementById("form-feedback");
    const username = getElementById("username").value.trime();
    const password = getElementById("password").value.trime();
    const email = getElementById("email").value.trime();
    const btn = document.getElementsByTagName("button");

    function Submit(event) {
        feedbackDiv.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
        event.preventDefault();
    }
    form.addEventListener("submit", Submit);

    let isValid = true;
    let messages=[];
    
}