const $emailInput = document.querySelectorAll("input")[0];
const $passwordInput = document.querySelectorAll("input")[1];
const $button = document.querySelector("button");
const $slideImage = document.querySelectorAll(".slide-img");
const id = "test";
const pw = "1234";
let imageNumber = 0;

const checkRealtimeValue = () => {
  const emailValue = document.querySelectorAll("input")[0].value;
  const pwValue = document.querySelectorAll("input")[1].value;
  const disabledFalse = () => {
    $button.classList.add("activate-button");
    $button.disabled = false;
  };
  const disabledTrue = () => {
    $button.classList.remove("activate-button");
    $button.disabled = true;
  };

  emailValue && pwValue ? disabledFalse() : disabledTrue();
};

const loginHandler = () => {
  const emailValue = document.querySelectorAll("input")[0].value;
  const pwValue = document.querySelectorAll("input")[1].value;
  if (emailValue === id && pwValue === pw) {
    location.href = "../main.html";
  } else {
    const $notice = document.querySelector(".notice");
    if (emailValue !== "test") {
      $notice.innerHTML =
        "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.";
    } else {
      $notice.innerHTML = "잘못된 비밀번호입니다. 다시 확인하세요.";
    }
    $notice.style.display = "initial";
  }
};

$button.addEventListener("click", loginHandler);
$passwordInput.addEventListener("keyup", checkRealtimeValue);
$emailInput.addEventListener("keyup", checkRealtimeValue);
$slideImage[0].classList.add("visible");
$passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") loginHandler();
});

const slide = setInterval(() => {
  const lastImageIndex = $slideImage.length - 1;
  if (imageNumber < lastImageIndex) {
    $slideImage[imageNumber].classList.remove("visible");
    $slideImage[imageNumber + 1].classList.add("visible");
    imageNumber++;
  } else {
    $slideImage[imageNumber - lastImageIndex].classList.add("visible");
    $slideImage[imageNumber].classList.remove("visible");
    imageNumber = 0;
    // clearInterval(slide); // 만약 slide를 종료해야 한다면 사용
  }
}, 2500);
