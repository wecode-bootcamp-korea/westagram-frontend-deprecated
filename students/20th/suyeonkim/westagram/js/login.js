// login able & disable

const loginId = document.querySelector('.login__input__id');
const loginPw = document.querySelector('.login__input__pw');
const loginBtn = document.querySelector('.login__button');

const checkValue = () => {
    const Id = loginId.value;
    const Pw = loginPw.value;
    
    if(Id.length > 0 && Pw.length > 0) {
        loginBtn.removeAttribute('disabled','');
    } else {
        loginBtn.setAttribute('disabled', '');
    }
}


const init = () => {
    loginId.addEventListener('keydown', checkValue);
    loginPw.addEventListener('keydown', checkValue);
}
init();



// validation
const validation = () => {
    loginBtn.addEventListener('click', function() {
        if(loginId.value.indexOf('@') === -1) {
            alert('You should insert @ in ID')
        }
    })

    loginBtn.addEventListener('click', function() {
        if(loginPw.value.length < 5) {
            alert('You should insert long passwords')
        }
    })
}
validation();