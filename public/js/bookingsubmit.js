const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

function validateInputs() {
    const hasEmail = email.value.trim().length > 0;
    const hasPhone = phone.value.trim().length > 0;

    if (hasEmail || hasPhone) {
        submitBtn.disabled = false;
        error.style.display = "none";
    } else {
        submitBtn.disabled = true;
    }
}

// validation
email.addEventListener("input", validateInputs);
phone.addEventListener("input", validateInputs);

// Final check
form.addEventListener("submit", (e) => {
    const hasEmail = email.value.trim();
    const hasPhone = phone.value.trim();

    if (!hasEmail && !hasPhone) {
        e.preventDefault();
        error.style.display = "block";
    }
});