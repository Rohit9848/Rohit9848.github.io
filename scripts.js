document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded successfully!");

    // Add smooth scrolling to all links in navbar
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
