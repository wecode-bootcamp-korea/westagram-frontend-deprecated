const loginBtn = document.querySelector(".loginBtn");
const loginInputs = document.querySelectorAll(".loginInputs");

loginInputs.forEach((loginInput) => {
    loginInput.addEventListener("input", () => {
        const inputId = document.querySelector(".loginId");
        const inputPw = document.querySelector(".loginPw");

        String(inputId.value).includes("@") && inputPw.value.length > 4
            ? loginBtn.classList.add("blueBackgroundColor")
            : loginBtn.classList.remove("blueBackgroundColor");
    });
});
