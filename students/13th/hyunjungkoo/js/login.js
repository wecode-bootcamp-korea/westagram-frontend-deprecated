const button = document.querySelector(".loginBtn");
button.disabled = true;

let inputs = document.querySelectorAll(".inputBox input");
inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    let inputIdValue = document.querySelector(".inputBox .loginId").value;
    let inputPwValue = document.querySelector(".inputBox .loginPw").value;

    inputIdValue.includes("@") && inputPwValue.length >= 5
      ? (button.disabled = false)
      : (button.disabled = true);
    if (button.disabled) {
      button.disabled = true;
      button.style.cursor = "initial";
      button.style.opacity = "40%";
    }
    if (!button.disabled) {
      button.style.cursor = "pointer";
      button.style.opacity = "100%";
      button.addEventListener("click", () => {
        document.location.href = "../html/main.html";
      });
    }
  });
});
