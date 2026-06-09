document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

        if (burgerBtn && mobileMenu) {

            burgerBtn.addEventListener('click', () => {

            burgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');

        document.body.style.overflow =
            mobileMenu.classList.contains('active')
            ? 'hidden'
            : '';
    });

    mobileLinks.forEach(link => {

        link.addEventListener('click', () => {

            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

    });
}

    // База данных реальных кейсов
    const casesData = {
        'case-1': {
            title: 'firdBro — Персональное портфолио разработчика',
            tag: 'Personal Brand / Web Design / Frontend',
            client: 'Фирдавс (firdBro)',
            timeline: '2024–2025',
            url: 'https://firdbro.github.io/Me/',
            task: 'Разработка личного сайта-портфолио для fullstack-разработчика. Задача — создать запоминающийся онлайн-образ, отражающий характер и стек технологий автора, с нестандартной визуальной подачей.',
            solution: 'Реализована киберпанк-эстетика с неоновыми акцентами (electric blue, cyber pink, neon green). Анимированный прелоадер с "обманным" прогресс-баром добавляет уникальную интерактивность. Полная адаптивность, поддержка русского и английского языков, плавные scroll-анимации.',
            result: 'Сайт стал визитной карточкой разработчика. Раздел портфолио демонстрирует реальные коммерческие проекты, а юмористический стиль "обо мне" делает профиль запоминающимся среди клиентов и работодателей.'
        },
        'case-2': {
            title: 'mksiz.ru — Коммерческий сайт с каталогом',
            tag: 'E-Commerce / Full Stack / Web Design',
            client: 'Коммерческий заказчик',
            timeline: '2024–2025',
            url: 'https://mksiz.ru',
            task: 'Разработка полноценного коммерческого сайта с каталогом товаров, системой управления контентом и административной панелью. Сайт должен был закрыть все потребности бизнеса: от витрины до управления заказами.',
            solution: 'Реализован полный цикл разработки: Frontend + Backend. Создан каталог товаров с удобной навигацией, административная панель для управления контентом без участия разработчика, адаптивный дизайн под все устройства.',
            result: 'Готовый коммерческий продукт, работающий под ключ. Заказчик получил независимую систему управления контентом и полноценную витрину для своего бизнеса.'
        }
    };

    // Кастомный курсор
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Интерактивный свет на фоне
    const heroGlow = document.querySelector('.hero-glow');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        if (heroGlow) {
            heroGlow.style.transform = `translate(${(x - window.innerWidth / 2) / 15}px, ${(y - window.innerHeight / 2) / 15}px)`;
        }
    });

    // Модальные окна кейсов
    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.querySelector('.modal-body-content');
    const modalClose = document.querySelector('.modal-close');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const caseKey = card.getAttribute('data-case');
            const data = casesData[caseKey];

            if (data) {
                modalBody.innerHTML = `
                    <div class="project-tags"><span>${data.tag}</span></div>
                    <h3 class="modal-project-title">${data.title}</h3>
                    <div class="modal-project-meta">
                        <span><strong>Клиент:</strong> ${data.client}</span>
                        <span><strong>Период:</strong> ${data.timeline}</span>
                    </div>
                    <div class="modal-section">
                        <h4>01. Задача & Проблема</h4>
                        <p>${data.task}</p>
                    </div>
                    <div class="modal-section">
                        <h4>02. Решение & Процесс</h4>
                        <p>${data.solution}</p>
                    </div>
                    <div class="modal-section">
                        <h4>03. Результат</h4>
                        <p>${data.result}</p>
                    </div>
                    <a href="${data.url}" target="_blank" class="modal-site-link">Открыть сайт ↗</a>
                `;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие модалки
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Ховер-эффекты курсора
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .modal-close');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
            cursor.style.borderColor = 'transparent';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.borderColor = 'var(--accent)';
        });
    });

    // Скролл анимации
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.project-card, .section-title, .about-text, .contact-block');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        observer.observe(el);
    });
});