(slidePhotos = () => {
    const slides = document.querySelectorAll('.slider li');
    let current = 0;

    setInterval(() => {
        const hasClass = document.querySelector('.slider li.focus');

        hasClass.classList.remove('focus');
        slides[current].classList.add('focus');

        current === slides.length - 1 ? (current = 0) : current++;
    }, 3000);
})();

(hasValue = () => {
    const idInput = document.querySelector('input[type="text"]');
    const pwInput = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('button[type="submit"]');
    const loginForm = document.querySelector('.sign-in__form');

    loginForm.addEventListener('keyup', handleSubmitButtonClass);

    function handleSubmitButtonClass() {
        submitButton.className =
            idInput.value.includes('@') && pwInput.value.length >= 5 ? 'right' : '';
    }
})();
