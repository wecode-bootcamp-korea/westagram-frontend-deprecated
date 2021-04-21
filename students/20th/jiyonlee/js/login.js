const loginBtn = document.querySelector(".loginBtn");
const loginInput = document.querySelectorAll(".loginInput");
const login = document.querySelector(".login");

loginInput.forEach((element) => {
    element.addEventListener("input", () => {
        const inputId = document.querySelector(".loginId");
        const inputPw = document.querySelector(".loginPw");

        inputId.value.length > 0 && inputPw.value.length > 0
            ? loginBtn.classList.add("blueBackgroundColor")
            : loginBtn.classList.remove("blueBackgroundColor");
    });
});

// 위에랑 비슷한 코드인데  addEventListener를 먼저 쓰는게 좋은지 forEach를 먼저 쓰는게 좋은지 궁금

// login.addEventListener("input", () => {
//     loginInput.forEach((e) => {
//         const inputId = document.querySelector(".loginId");
//         const inputPw = document.querySelector(".loginPw");

//         inputId.value.length > 0 && inputPw.value.length > 0
//             ? console.log("hi")
//             : null;
//     });
// });
