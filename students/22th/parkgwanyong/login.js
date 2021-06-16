const userId = document.querySelector(".userId");
const userPassword = document.querySelector(".userPassword");
const loginBtn = document.querySelector(".loginBtn");

userId.addEventListener("keyup", () => {
    changeBtnColor();
});

userPassword.addEventListener("keyup", () => {
    changeBtnColor();
});

const changeBtnColor = () => {
    if (userId.value && userPassword.value) {
        loginBtn.style.backgroundColor = "rgb(83, 150, 246)";
    } else if (!userId.value || userPassword.value) {
        loginBtn.style.backgroundColor = "rgb(192, 223, 253);";
    }
};
