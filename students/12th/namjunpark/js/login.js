// imgslide show
const articleImg = document.querySelectorAll('.image__slide');
let slideIndex = 0;
(function slideShow() {

    for (let i = 0; i < articleImg.length; i++) {
        articleImg[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > articleImg.length) { slideIndex = 1 }

    articleImg[slideIndex - 1].style.opacity = 1;
    setTimeout(slideShow, 3000);
})();

// button active
// 로그인 버튼 활성화 함수 패스워드 문자 6개 이상 && 아이디 문자 1개 이상
// ++ 비활성화도 포함 ++ 마우스 커서  
const loginBtn = document.querySelector('button.login__button'),
    loginId = document.querySelector('.loginform__input__id'),
    loginPassword = document.querySelector('.loginform__input__password'),
    passwordLength = loginPassword.value.length,
    formTag = document.querySelector('#loginform');

formTag.addEventListener('keyup', e => {
    activeButton();
    if (loginId.value.length >= 1 && loginPassword.value.length >= 6 && e.code ===
        "Enter") {
        loginBtn.style.opacity = 1;
    }
});

function activeButton() {
    if (loginId.value.length >= 1 && loginPassword.value.length >= 6) {
        loginBtn.style.opacity = 1;
        loginBtn.classList.add('btnActive');
    }
    if (!(loginId.value.length >= 1 && loginPassword.value.length >= 6)) {
        loginBtn.style.opacity = 0.3;
        loginBtn.classList.remove('btnActive');
    }
    // loginId.value.length >= 1 && loginPassword.value.length > 5 ? (loginBtn.style.opacity = 1 && loginBtn.classList.add('btnActive')) : (loginBtn.style.opacity = 0.3 && loginBtn.classList.remove('btnActive'))
    // 위의 코드를 삼항 연산자로 바꾸는 거 진행중 
}


//  ID / PW validation 
const errorText = document.createElement('div'),
    BlockErrorMessage = document.querySelector('div.login__errorMessage');

errorText.innerHTML = `<p class="error__message">잘못된 비밀번호입니다. 다시 확인하세요.</p> `;

function loginValidation() {
    loginId.value.includes('@') === true && loginPassword.value.length > 5 ? console.log('good') : BlockErrorMessage.appendChild(errorText);
}

formTag.addEventListener('submit', e => {
    e.preventDefault();
    loginValidation();
})