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
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Инициализация AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });

     // Обработка клика по элементу email
     const emailElement = document.getElementById('email-copy');
     const notification = document.getElementById('notification');
 
     if (emailElement && notification) {
         emailElement.addEventListener('click', () => {
             // Копируем текст в буфер обмена
             const emailText = emailElement.textContent.replace('Почта: ', '').trim();
             navigator.clipboard.writeText(emailText).then(() => {
                 // Показываем уведомление
                 notification.textContent = 'Email скопирован!';
                 notification.style.display = 'block';
                 notification.style.opacity = '1'; // Показываем уведомление
                 
                 // Скрываем уведомление через 2 секунды
                 setTimeout(() => {
                     notification.style.opacity = '0'; // Плавное исчезновение
                     setTimeout(() => {
                         notification.style.display = 'none'; // Полностью скрываем
                     }, 500); // Задержка для плавного исчезновения
                 }, 2000);
             }).catch(err => {
                 console.error('Ошибка копирования в буфер обмена: ', err);
             });
         });
     } else {
         console.error('Элемент email-copy или notification не найден.');
     }
 });
