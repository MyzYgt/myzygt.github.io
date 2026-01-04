const revealElements = document.querySelectorAll('.reveal, .service-group');

function revealOnScroll() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 80;

        if (top < trigger) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();