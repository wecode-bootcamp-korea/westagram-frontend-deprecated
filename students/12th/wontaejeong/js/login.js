'use strict';

// 유효성 검사
const loginForm = document.querySelector('.sign-in__form');

loginForm.addEventListener('keyup', checkValidation);

function checkValidation() {
    const idInputValue = document.querySelector('input[type="text"]').value;
    const pwInputValue = document.querySelector('input[type="password"]').value;
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.className =
        idInputValue.includes('@') && pwInputValue.length >= 5 ? 'right' : '';
}

// 슬라이드
const slideData = [
    {
        id: 'screenshot1',
        src:
            'https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg',
        alt: '메인 페이지 (mobile)',
    },
    {
        id: 'screenshot2',
        src:
            'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg',
        alt: '보정 페이지 (mobile)',
    },
    {
        id: 'screenshot3',
        src:
            'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
        alt: '다이렉트 메시지 (mobile)',
    },
    {
        id: 'screenshot4',
        src:
            'https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg',
        alt: '사진 촬영 화면 (mobile)',
    },
    {
        id: 'screenshot5',
        src:
            'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg',
        alt: '유저 페이지 (mobile)',
    },
];

(function createSlideElements() {
    const slider = document.querySelector('.slider');

    slideData.map((slide) => {
        return (slider.innerHTML = `
                    ${slider.innerHTML}
                    <li>
                        <img alt="${slide.alt}" src="${slide.src}">
                    </li>
                `);
    });
})();

(function moveSlidePhotos() {
    const slides = document.querySelectorAll('.slider li');
    let current = 0;

    slides[0].className = 'focus';
    setInterval(() => {
        const hasClass = document.querySelector('.slider li.focus');

        hasClass.classList.remove('focus');
        slides[current].classList.add('focus');

        current === slides.length - 1 ? (current = 0) : current++;
    }, 3000);
})();
