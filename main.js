 /* ACTIVE NAVIGATION HIGHLIGHT */
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

/* CONTACT FORM VALIDATION */
function validateContactForm() {
    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const message = document.querySelector("textarea[name='message']");

    if (!name.value.trim()) {
        alert("Please enter your name.");
        return false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (message.value.trim().length < 5) {
        alert("Message must be at least 5 characters.");
        return false;
    }

    return true;
}

/* LOGIN FORM VALIDATION */
function validateLoginForm() {
    const email = document.querySelector("input[name='email']");
    const password = document.querySelector("input[name='password']");

    if (!email.value.trim() || !password.value.trim()) {
        alert("Please fill all fields.");
        return false;
    }

    if (!email.value.includes("@")) {
        alert("Enter a valid email.");
        return false;
    }

    return true;
}
