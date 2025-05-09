
// Basic script for accessibility enhancements and future interactivity
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for joining PIRCA! We'll be in touch.");
            form.reset();
        });
    }

    // Accessibility: Ensure buttons are focusable
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.setAttribute("tabindex", "0");
        btn.setAttribute("role", "button");
    });
});
