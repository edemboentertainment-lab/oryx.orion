document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (can be added later)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // You can add mobile menu functionality here
    // For now it's just a placeholder
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // You can add more interactive elements here
    console.log('Orioneam website loaded successfully!');
});

// Дополнительные функции для страницы игры
function initGamePage() {
    // Увеличение скриншотов при клике
    document.querySelectorAll('.screenshots-grid img').forEach(img => {
        img.addEventListener('click', function() {
            // Здесь можно реализовать лайтбокс для просмотра скриншотов
            console.log('Открыть скриншот:', this.alt);
        });
    });
    
    // Инициализация рейтинга
    const ratingStars = document.querySelectorAll('.rating-stars i');
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Заполняем звезды до выбранной
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('fas');
                    s.classList.remove('far');
                } else {
                    s.classList.add('far');
                    s.classList.remove('fas');
                }
            });
        });
    });
    
    // Другие интерактивные элементы...
}

// Инициализация при загрузке страницы
if (document.querySelector('.game-page')) {
    initGamePage();
}