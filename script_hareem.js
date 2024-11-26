
// Add simple fade-in animations on scroll (to be extended)
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.style.opacity = 1;
    });
});
