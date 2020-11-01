// checkIdPw

const loginBtn = document.querySelector("#loginButton");

loginBtn.addEventListener("click", function () {
  const idBox = document.querySelector("#idContainer");
  const pwBox = document.querySelector("#passwordContainer");
  const ID = idBox.value;
  const PW = pwBox.value;
  if (ID === "") {
    alert("Id를 입력해주세요!");
    document.querySelector("#idContainer").focus();
  } else if (PW === "") {
    alert("비밀번호를 입력해주세요!");
    document.querySelector("#passwordContainer").focus();
    return;
  } else {
    alert("로그인 성공!");
  }
});

// changeBtnColor

const inputForm = document.querySelector("#loginForm");
// EventListner는 한 줄이라도 더 줄이면 좋다! 그래서 inputForm으로 묶어서 진행함

function activateBtn() {
  const ID = document.querySelector("#idContainer").value;
  const PW = document.querySelector("#passwordContainer").value;
  if (ID.includes("@") && PW.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
  } else {
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}

inputForm.addEventListener("keyup", activateBtn);

// 인터넷에 다른 사람이 한 방식

// const button = document.getElementsByClassName('loginBtn')[0];
// const input = document.getElementsByClassName('input')[0];
// const name = document.getElementsByClassName("inputName")[0];
// const pw = document.getElementsByClassName("inputPw")[0];

// function changeColor() {
//     if(name.value && pw.value) {
//         button.removeAttribute('disabled');
//         button.style.backgroundColor='#0095F6';
//     }
// }

// input.addEventListener('keyup',changeColor);
