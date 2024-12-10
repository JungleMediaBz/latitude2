document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-nav')) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    // Hero slider functionality
    const slides = document.querySelectorAll('.slide');
    const categoryTexts = document.querySelectorAll('.hero-categories span');
    let currentIndex = 0;

    function showNextSlide() {
        // Remove previous classes
        slides.forEach(slide => {
            slide.classList.remove('active', 'previous');
        });
        categoryTexts[currentIndex].classList.remove('active');

        // Add previous class to current slide
        slides[currentIndex].classList.add('previous');
        
        // Update index
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentIndex].classList.add('active');
        categoryTexts[currentIndex].classList.add('active');
    }

    // Initialize first slide
    slides[0].classList.add('active');
    categoryTexts[0].classList.add('active');

    // Start the slider
    setInterval(showNextSlide, 5000);

    document.getElementById('current-year').textContent = new Date().getFullYear();
});