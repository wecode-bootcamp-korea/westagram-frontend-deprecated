const userId = document.querySelector(".userId");
const userPassword = document.querySelector(".userPassword");
const loginBtn = document.querySelector(".loginBtn");
const goToMain = document.getElementsByTagName("a")[0];

userId.addEventListener("keyup", (e) => {
    changeBtnColor();
    if (e.key === "Enter") {
        validateId();
        validatePassword();
        window.location.replace("main.html");
    }
});

userPassword.addEventListener("keyup", (e) => {
    changeBtnColor();
    if (e.key === "Enter") {
        validateId();
        validatePassword();
        window.location.replace("main.html");
    }
});

loginBtn.addEventListener("click", (e) => {
    validateId();
    validatePassword();
    window.location.replace("main.html");
});

const changeBtnColor = () => {
    let idValue = userId.value;
    let passValue = userPassword.value;
    if (idValue && passValue) {
        loginBtn.disabled = false;
        loginBtn.classList.add("changeColor");
    } else {
        loginBtn.classList.remove("changeColor");
        loginBtn.disabled = true;
    }
};

const validateId = () => {
    let idValue = userId.value;

    if (!isEmail(idValue)) {
        alert("email 형식이 맞지 않습니다!");
    } else {
        alert("로그인 성공");
    }
};

const validatePassword = () => {
    let passwordValue = userPassword.value;

    if (!isPassword(passwordValue)) {
        alert("password는 숫자 5자 이상, 10자 이하로 작성해야 합니다.");
    }
};

const isEmail = (value) => {
    let regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(value);
};

const isPassword = (value) => {
    let regExp = /[0-9]{5,10}$/;
    return regExp.test(value);
};
