// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission logic (this can be expanded based on backend setup)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});