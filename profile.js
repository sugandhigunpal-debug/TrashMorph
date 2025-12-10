 // PROFILE PAGE 
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", (event) => {
        const email = document.querySelector("input[name='email']");
        const password = document.querySelector("input[name='password']");

        // Basic empty field check
        if (email.value.trim() === "" || password.value.trim() === "") {
            alert("Please fill all fields.");
            event.preventDefault();
            return false;
        }

        // Basic email check
        if (!email.value.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }

        // If everything is correct, allow PHP submit
        return true;
    });
});
