// checkIdPw

const loginBtn = document.querySelector("#loginButton");
const idBox = document.querySelector("#idContainer");
const pwBox = document.querySelector("#passwordContainer");

loginBtn.addEventListener("click", function() {
  // const pwBox = document.getElementById("passwordContainer");
  if (idBox.value == "") {
    alert("Id를 입력해주세요!");
    idBox.focus();
  } else if (pwBox.value == "") {
    alert("비밀번호를 입력해주세요!");
    pwBox.focus();
    return;
  } else {
    alert("로그인 성공!");
  }
});

// changeBtnColor

const inputForm = document.querySelector("#loginForm");
// EventListner는 한 줄이라도 더 줄이면 좋다! 그래서 inputForm으로 묶어서 진행함

function activateBtn() {
  if (idBox.value && pwBox.value) {
    loginBtn.style.backgroundColor = "#0095F6";
  } else if (idBox.value || pwBox.value) {
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
