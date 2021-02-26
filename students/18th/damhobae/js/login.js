const userId = document.querySelector(".loginId");
const userPw = document.querySelector(".loginPw");
const userBtn = document.querySelector(".loginBtn");

const Validation = () => {
    const memberId = userId.value;
    const memberPw = userPw.value;
    if (memberId.includes("@") && memberPw.length >= 5) {
        userBtn.classList.add("active");
    } else {
        userBtn.classList.remove("active");
    }
}
userId.addEventListener('keyup', Validation);
userPw.addEventListener('keyup', Validation);