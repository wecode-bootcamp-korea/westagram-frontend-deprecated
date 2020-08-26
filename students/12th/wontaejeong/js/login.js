const slidePhotos = () => {
    const slides = document.querySelectorAll('.slider li');
    let current = 0;

    setInterval(() => {
        const hasClass = document.querySelector('.slider li.focus');

        hasClass.classList.remove('focus');
        slides[current].classList.add('focus');

        current === slides.length - 1 ? (current = 0) : current++;
    }, 3000);
};

slidePhotos();

const hasValue = () => {
    const idInput = document.querySelector('input[type="text"]');
    const pwInput = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('button[type="submit"]');

    const inputs = [idInput, pwInput];

    inputs.forEach((input) => {
        input.addEventListener('keyup', handleSubmitButtonClass);
    });

    function handleSubmitButtonClass() {
        const id = idInput.value;
        const password = pwInput.value;

        submitButton.className = id.includes('@') && password.length >= 5 ? 'right' : '';
    }
};

hasValue();
