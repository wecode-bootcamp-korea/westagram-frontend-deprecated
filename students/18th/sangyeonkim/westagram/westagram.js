document.addEventListener('keyup', () => {
    const buttonId = document.querySelector('.id').value;
    const buttonPw = document.querySelector('.pw').value;
    const button = document.querySelector('.login-btn');

    if(buttonId.includes('@') && (buttonPw.length > 4)) {
        button.style.backgroundColor="blue"
    }
    if(!buttonId || !buttonPw) {
        button.style.backgroundColor="lightskyblue"
    }
})
