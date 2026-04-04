document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklenme animasyonu
    const content = document.querySelector('.hero-card, .page-card');
    if(content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    }

    // Aktif sayfa işaretleme
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobil tıklama efekti
    const buttons = document.querySelectorAll('.btn, .contact-btn, nav a');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.96)');
        btn.addEventListener('mouseup', () => btn.style.transform = '');
    });
});
