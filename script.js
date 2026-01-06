const form = document.querySelector(".contact form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const cityInput = document.getElementById("city");
const messageInput = document.getElementById("message");
const formMsg = document.getElementById("form-msg");

/* Phone: sirf number allow */
phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // reset message
    formMsg.textContent = "";
    formMsg.className = "";

    if (nameInput.value.trim() === "") {
        showError("Please enter your full name");
        return;
    }

    if (!validateEmail(emailInput.value.trim())) {
        showError("Please enter a valid email address");
        return;
    }

    if (!validatePhone(phoneInput.value.trim())) {
        showError("Please enter a valid 10-digit phone number");
        return;
    }

    if (subjectInput.value.trim() === "") {
        showError("Please enter email subject");
        return;
    }

    if (cityInput.value === "") {
        showError("Please select your city");
        return;
    }

    if (messageInput.value.trim().length < 10) {
        showError("Message must be at least 10 characters");
        return;
    }

    // Success
    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.classList.add("success");

    form.reset();
});

/* Helper functions */
function showError(text) {
    formMsg.textContent = text;
    formMsg.classList.add("error");
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[6-9]\d{9}$/.test(phone); // Indian numbers
}
