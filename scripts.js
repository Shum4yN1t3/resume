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
            const emailText = emailElement.textContent.trim();
            navigator.clipboard.writeText(emailText).then(() => {
                // Показываем уведомление
                notification.textContent = 'Email скопирован!';
                notification.style.display = 'block'; // Убираем свойство 'display: none;'
                notification.style.opacity = '1';    // Устанавливаем видимость

                // Скрываем уведомление через 2 секунды
                setTimeout(() => {
                    notification.style.opacity = '0'; // Плавное исчезновение
                    setTimeout(() => {
                        notification.style.display = 'none'; // Полностью скрываем
                    }, 500); // Время для плавного исчезновения
                }, 2000);
            }).catch(err => {
                console.error('Ошибка копирования в буфер обмена: ', err);
            });
        });
    } else {
        console.error('Элемент email-copy или notification не найден.');
    }
});



function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var content = modal.querySelector('.modal-content');

    // Получаем размер и позицию элемента, на который был клик
    var rect = event.currentTarget.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Устанавливаем начальное положение и масштаб модального окна
    content.style.transform = `translate(${rect.left}px, ${rect.top + scrollTop}px) scale(0.5)`;
    content.style.opacity = "0";

    // Показать модальное окно
    modal.style.display = "block";

    // Анимация открытия модального окна
    setTimeout(() => {
        content.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        content.style.transform = "translate(0, 0) scale(1)";
        content.style.opacity = "1";
    }, 10);
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var content = modal.querySelector('.modal-content');

    // Анимация закрытия
    content.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    content.style.transform = "scale(0.5)";
    content.style.opacity = "0";

    // Скрыть модальное окно после завершения анимации
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

