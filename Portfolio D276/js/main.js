document.addEventListener('DOMContentLoaded', function() {
    console.log("Resume page loaded successfully.");

    const dateElement = document.getElementById('current-date');

    if (dateElement) {
        dateElement.textContent = `Today's Date: ${new Date().toLocaleDateString()}`;
    }
});
