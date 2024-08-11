// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Добавление Vanta.js фона
    VANTA.NET({
        el: "#vanta-bg",
        color: 0x00ffcc,
        backgroundColor: 0x0e0e0e,
        points: 20.0,
        maxDistance: 20.0,
        spacing: 18.0
    });

    // Плавная прокрутка к разделам
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Инициализация AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });
});
