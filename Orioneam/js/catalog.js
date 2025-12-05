document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
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
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    console.log('Orioneam website loaded successfully!');
});

document.addEventListener('DOMContentLoaded', function() {
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', function() {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                
                if (!this.querySelector('i')) { 
                    this.classList.add('active');
                }
                
                console.log('Переход на страницу', this.textContent);
            });
        }
    });

    const favoriteBtn = document.querySelector('.btn-favorite');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.innerHTML = '<i class="fas fa-heart"></i> В избранном';
                console.log('Добавлено в избранное');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.innerHTML = '<i class="far fa-heart"></i> В избранное';
                console.log('Удалено из избранного');
            }
        });
    }

    const screenshots = document.querySelectorAll('.screenshots-grid img');
    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = '&times;';
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(modalImg);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    if (gameId) {
        console.log('Загрузка данных для игры с ID:', gameId);
    }
});

const modalStyle = document.createElement('style');
modalStyle.textContent = `
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    align-items: center;
    justify-content: center;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.modal-content img {
    max-width: 100%;
    max-height: 90vh;
    display: block;
}

.close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}
`;
document.head.appendChild(modalStyle);
