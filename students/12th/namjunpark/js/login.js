// imgslide show
const articleImg = document.querySelectorAll(".image__slide");
let slideIndex = 0;
(function slideShow() {
  for (let i = 0; i < articleImg.length; i++) {
    articleImg[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > articleImg.length) {
    slideIndex = 1;
  }

  articleImg[slideIndex - 1].style.opacity = 1;
  setTimeout(slideShow, 3000);
})();

// button active
// 로그인 버튼 활성화 함수 패스워드 문자 6개 이상 && 아이디 문자 1개 이상
const formTag = document.querySelector("#loginform");
const loginBtn = document.querySelector("button.login__button");
const loginId = document.querySelector(".loginform__input__id");
const loginPassword = document.querySelector(".loginform__input__password");

(function activeButton() {
  formTag.addEventListener("keyup", () => {
    if (loginId.value.length >= 1 && loginPassword.value.length >= 6) {
      loginBtn.style.opacity = 1;
      loginBtn.classList.add("btnActive");
    } else {
      loginBtn.style.opacity = 0.3;
      loginBtn.classList.remove("btnActive");
    }
  });
})();

//  ID / PW validation
const BlockErrorMessage = document.querySelector("div.login__errorMessage");

function loginValidation() {
  loginId.value.includes("@") === true && loginPassword.value.length > 5
    ? console.log("good")
    : (BlockErrorMessage.innerHTML = `<p class="error__message">잘못된 비밀번호입니다. 다시 확인하세요.</p>`);
}

formTag.addEventListener("submit", (e) => {
  e.preventDefault();
  loginValidation();
});
