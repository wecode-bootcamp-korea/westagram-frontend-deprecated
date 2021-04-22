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

// 위에랑 비슷한 코드인데  addEventListener를 먼저 쓰는게 좋은지 forEach를 먼저 쓰는게 좋은지 궁금

// const login = document.querySelector(".login");
// loginInputs.addEventListener("input", () => {
//     loginInput.forEach((e) => {
//         const inputId = document.querySelector(".loginId");
//         const inputPw = document.querySelector(".loginPw");

//         inputId.value.length > 0 && inputPw.value.length > 0
//             ? console.log("hi")
//             : null;
//     });
// });
