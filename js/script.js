const form = document.getElementById("enquiryForm");
const nameInput  = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

let timer;

// Escape special HTML characters
function sanitize(text) {
    return text.replace(/[&<>"']/g, function (char) {
        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return characters[char];
    });
}

// Validate the form
function validateForm() {
    let errors = [];

    // CLear previous errors
    nameInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-invalid");
    messageInput.removeAttribute("aria-invalid");

    // Check name
    if (nameInput.value.trim() === "") {
        errors.push("Please enter your name.");
        nameInput.setAttribute("aria-invalid", "true");
    }

    // Check email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
        errors.push("Please enter a valid email.");
        emailInput.setAttribute("aria-invalid", "true");
    }

    // Check message
    if (messageInput.value.trim() === "") {
        errors.push("Please enter a message.")
        messageInput.setAttribute("aria-invalid", "true");
    }

    // Display errors safely
    formMessage.textContent = errors.join(" ");

    return errors.length === 0;
}

// Validate 300ms after typing
form.addEventListener("input", function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
        validateForm();
    }, 300);
});

// Submit the form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearTimeout(timer);

    if (validateForm()) {
        const data = Object.fromEntries(
            new FormData(form).entries()
        );

        // Sanitize text values
        for (const key in data) {
            data[key] = sanitize(data[key]);
        }

        console.log(JSON.stringify(data, null, 2));

        formMessage.textContent = "Form submitted successfully!"
    }
})
