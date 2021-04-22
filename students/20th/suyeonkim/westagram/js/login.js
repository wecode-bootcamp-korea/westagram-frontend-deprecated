// login able & disable
const loginBars = document.querySelectorAll('.login__input');
const loginBtn = document.querySelector('.login__button');

const checkValue = () => {
    const loginBarsArr = Array.from(loginBars);
    const loginBarsValue = loginBarsArr.map(element => {
        return element.value;
    })

    if(loginBarsValue[0] && loginBarsValue[1]) {
        loginBtn.removeAttribute('disabled', '');
    } else {
        loginBtn.setAttribute('disabled', '');
    }
}

const init = () => {
    loginBars.forEach(element => {
        element.addEventListener('keyup', checkValue);
    })
}
init();

// validation
const validation = () => {
    loginBtn.addEventListener('click', () => {
        if(loginBars[0].value.indexOf('@') === -1) {
            alert('You should insert @ in ID')
        }
    })

    loginBtn.addEventListener('click', () => {
        if(loginBars[1].value.length < 5) {
            alert('You should insert long passwords')
        }
    })
}
validation();