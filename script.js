// Smooth Scroll Functionality
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Scroll Reveal Animation
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;

        if (isVisible) {
            section.classList.add('visible');
        }
    });
});
