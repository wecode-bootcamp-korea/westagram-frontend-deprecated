const button = document.querySelector(".loginBtn");
button.disabled = true;

const inputs = document.querySelectorAll(".inputBox input");
inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    const inputIdValue = document.querySelector(".inputBox .loginId").value;
    const inputPwValue = document.querySelector(".inputBox .loginPw").value;
    const isValid = inputIdValue.includes("@") && inputPwValue.length >= 5;

    button.disabled = !isValid;

    if (!isValid) {
      isValid = true;
      button.style.cursor = "initial";
      button.style.opacity = "40%";
    }
    if (isValid) {
      button.style.cursor = "pointer";
      button.style.opacity = "100%";
      button.addEventListener("click", () => {
        document.location.href = "../html/main.html";
      });
    }
  });
});
