document.addEventListener('DOMContentLoaded', function() {
    
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;
    const breakpoint = 1200;
    
    if (burgerBtn && menu) {
        
        function toggleMenu(e) {
            e.preventDefault();
            
            burgerBtn.classList.toggle('burger--open');
            menu.classList.toggle('header__menu--open');
            
            const isOpen = menu.classList.contains('header__menu--open');
            burgerBtn.ariaExpanded = isOpen;
            burgerBtn.ariaLabel = isOpen ? 'Закрыть меню' : 'Открыть меню';
            body.classList.toggle('page__body--no-scroll', isOpen);
        }
        function closeMenu() {
            if (window.innerWidth >= breakpoint) return;
            
            burgerBtn.classList.remove('burger--open');
            menu.classList.remove('header__menu--open');
            burgerBtn.ariaExpanded = false;
            burgerBtn.ariaLabel = 'Открыть меню';
            body.classList.remove('page__body--no-scroll');
        }
        burgerBtn.addEventListener('click', toggleMenu);
        menu.querySelectorAll('.menu__link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('click', function(e) {
            if (window.innerWidth >= breakpoint) return;
            
            if (!menu.contains(e.target) && !burgerBtn.contains(e.target) && menu.classList.contains('header__menu--open')) {
                closeMenu();
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth >= breakpoint) {
                burgerBtn.classList.remove('burger--open');
                menu.classList.remove('header__menu--open');
                body.classList.remove('page__body--no-scroll');
                burgerBtn.ariaExpanded = false;
                burgerBtn.ariaLabel = 'Открыть меню';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropbtn && dropdownContent) {
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                dropdownContent.classList.remove('show');
            }
        });

        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Выбрано:', e.target.textContent);
        });
    }
});

 const button = document.getElementById('showMoreBtn');
        
        button.addEventListener('click', function() {
            const newSlide1 = document.createElement('div');
            newSlide1.className = 'offers__choice-slide';
            newSlide1.innerHTML = '<a class="offers__choice-link" href="#">dyson стайлер красный</a>';
            const newSlide2 = document.createElement('div');
            newSlide2.className = 'offers__choice-slide';
            newSlide2.innerHTML = '<a class="offers__choice-link" href="#">dyson стайлер синий</a>';
            button.parentNode.insertBefore(newSlide1, button);
            button.parentNode.insertBefore(newSlide2, button);
            button.style.display = 'none';
        });



document.addEventListener('DOMContentLoaded', function() {
    
    const prevBtn = document.querySelector('.mySwiper-prev');
    const nextBtn = document.querySelector('.mySwiper-next');
    const cards = document.querySelectorAll('.swiper-slide');
    const pageNumber = document.querySelector('.mySwiper-pagination span:first-child');
    const totalPages = document.querySelector('.mySwiper-pagination span:last-child');

    if (!prevBtn || !nextBtn || !cards.length || !pageNumber || !totalPages) {
        console.log('Не найдены элементы для пагинации');
        return;
    }
    
    let currentPage = 1;
    
    const totalPagesCount = Math.ceil(cards.length / 6);
    totalPages.textContent = totalPagesCount;
    function showCurrentPage() {
        cards.forEach(card => {
            card.style.display = 'none';
        });
        
        let start = (currentPage - 1) * 6;
        let end = start + 6;
        
        for (let i = start; i < end && i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
        
        pageNumber.textContent = currentPage;
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPagesCount) {
            currentPage++;
            showCurrentPage();
        }
    });
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showCurrentPage();
        }
    });
    
    showCurrentPage();
    
});

document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('showMoreBtn');
    const hiddenReviews = document.querySelectorAll('.feedback-list li:nth-child(n+9)');
    let visible = false;
    
    btn.onclick = function() {
        if (!visible) {
            hiddenReviews.forEach(item => {
                item.style.display = 'flex';
            });
            btn.innerHTML = 'Скрыть <div class="feedback-button__img">🔽</div>';
            visible = true;
        } else {
            hiddenReviews.forEach(item => {
                item.style.display = 'none';
            });
            btn.innerHTML = 'Показать еще <div class="feedback-button__img">🔼</div>';
            visible = false;
        }
    };
});

 document.addEventListener('click', (e) => {
        const btn = e.target.closest('.counter__button');
        if (!btn) return;

        e.preventDefault();
        const container = btn.closest('.counter');
        const input = container.querySelector('input');
        const btnMinus = container.querySelector('.counter__button-minus');

        let value = Number(input.value) || 1;
        const maxLimit = 99;

        if (btn.classList.contains('counter__button-plus')) {
            if (value < maxLimit) value++;
        }
        else if (btn.classList.contains('counter__button-minus')) {
            if (value > 1) value--;
        }

        input.value = value;

        if (value <= 1) {
            btnMinus.classList.add('is-disabled');
        } else {
            btnMinus.classList.remove('is-disabled');
        }
    });

    document.querySelectorAll('.counter__button-minus').forEach(btn => {
        const input = btn.closest('.counter').querySelector('input');
        if (Number(input.value) <= 1) btn.classList.add('is-disabled');
    });

 const ratingGroups = document.querySelectorAll('.rating');

    ratingGroups.forEach(group => {
        const stars = group.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('active', i <= index);
                });

                const ratingValue = star.getAttribute('data-value');
                console.log(`Рейтинг в блоке ${group.id || 'без ID'}: ${ratingValue}`);
            });
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('hover', i <= index);
                });
            });
        });
        group.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });


const viewAllBtn1 = document.getElementById('view-all');
if (viewAllBtn1) {
    viewAllBtn1.addEventListener('click', function (e) {
        e.preventDefault();
        const gallery = document.getElementById('photo-gallery');
        
        if (!gallery) return;

        const extraPhotos = [
            './images/feedback.png',  
            './images/feedback.png',
            './images/feedback.png',
            './images/feedback.png'
        ];

        const html = extraPhotos.map(url => `
            <a class="feedback__slide" href="${url}" data-fslightbox="gallery">
                <img src="${url}" alt="новое фото" loading="lazy">
            </a>
        `).join('');

        gallery.insertAdjacentHTML('beforeend', html);
        this.style.display = 'none';
    });
}

const viewAllBtn2 = document.getElementById('vw-all');
if (viewAllBtn2) {
    viewAllBtn2.addEventListener('click', function (e) {
        e.preventDefault();
        const gallery = document.getElementById('pht-gallery');
        
        if (!gallery) return;

        const extraPhotos = [
            './images/feedback.png', 
            './images/feedback.png',
            './images/feedback.png',
            './images/feedback.png'
        ];

        const html = extraPhotos.map(url => `
            <a class="feedback__slide" href="${url}" data-fslightbox="gallery">
                <img src="${url}" alt="новое фото" loading="lazy">
            </a>
        `).join('');

        gallery.insertAdjacentHTML('beforeend', html);
        this.style.display = 'none';
    });
}

const showMoreBtn = document.getElementById('showMore');
const feedbackList = document.getElementById('myList');

if (showMoreBtn && feedbackList) {
    const originalHTML = showMoreBtn.innerHTML;
    
    showMoreBtn.addEventListener('click', function() {
        feedbackList.classList.toggle('is-open');
        
        if (feedbackList.classList.contains('is-open')) {
            showMoreBtn.innerHTML = 'Скрыть <div class="feedback-button__img"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7031 25.722L3.22199 5.13588C2.82325 4.75375 2.80978 4.12073 3.19191 3.72199C3.57403 3.32325 4.20706 3.30978 4.6058 3.69191L26.1919 24.3786V7.44733C26.1919 6.89504 26.6396 6.44733 27.1919 6.44733C27.7442 6.44733 28.1919 6.89504 28.1919 7.44733V26.722C28.1919 27.2743 27.7442 27.722 27.1919 27.722H7.03635C6.48406 27.722 6.03635 27.2743 6.03635 26.722C6.03635 26.1697 6.48406 25.722 7.03635 25.722H24.7031Z" fill="#111111"/></svg></div>';
        } else {
            showMoreBtn.innerHTML = originalHTML;
        }
    });
}


    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__link');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

            const clIcon = document.querySelector('.accordion-list__icon');
            btnIcon.addEventListener('click', () => {
                btnIcon.classList.toggle('active');
            });

        });

    });

     const bn = document.getElementById('showBtn');
    const lis = document.getElementById('newsList');
    const initialCont = bn.innerHTML;

    bn.addEventListener('click', function () {

        lis.classList.toggle('is-open');

        if (lis.classList.contains('is-open')) {
            bn.textContent = 'Скрыть';
        } else {
            bn.innerHTML = initialCont;
        }
    });