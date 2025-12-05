document.addEventListener('DOMContentLoaded', function () {
    // Получаем все кнопки навигации
    const navButtons = document.querySelectorAll('.top-button');
    
    // Функция для установки активной кнопки
    function setActiveButton(activeId) {
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.id === activeId) {
                button.classList.add('active');
            }
        });
    }

    // Обработчики событий для кнопок навигации
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonId = this.id;
            // Устанавливаем активный класс
            setActiveButton(buttonId);

            // Перенаправление в зависимости от ID
            switch (buttonId) {
                case 'btnHome':
                    // Если уже на index.html, не переходим
                    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                        return;
                    }
                    window.location.href = 'index.html';
                    break;
                case 'btnGames':
                    window.location.href = 'games.html';
                    break;
                case 'btnOrioneam':
                    window.location.href = 'Orioneam/index.html';
                    break;
                case 'btnTheVeilRepository':
                    window.location.href = 'TheVeilRepository/index.html';
                    break;
            }
        });
    });

    // Устанавливаем активную кнопку при загрузке страницы
    const path = window.location.pathname;
    if (path.includes('games.html')) {
        setActiveButton('btnGames');
    } else if (path.includes('Orioneam/index.html')) {
        setActiveButton('btnOrioneam');
    } else if (path.includes('TheVeilRepository/index.html')) {
        setActiveButton('btnTheVeilRepository');
    } else {
        setActiveButton('btnHome');
    }

    // Обработчик для кнопки поиска (только для примера)
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Имитация поиска Google, но в рамках концепции "браузера Oryx"
                alert('Имитация поиска Oryx: ' + query);
                // В реальном проекте здесь будет логика поиска по контенту Oryx
            } else {
                alert('Введите поисковый запрос!');
            }
        });
    }
});