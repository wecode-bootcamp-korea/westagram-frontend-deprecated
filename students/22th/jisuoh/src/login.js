"use strict";

// 아이디 받아오기
// 패스워드 받아오기
// 버튼 받아오기
// 아이디, 패스워드 각각 한 글자 이상이면
// true -> 버튼 활성화
// false -> 버튼 비활성화
const inputId = document.querySelector(".text-id");
const inputPw = document.querySelector(".pw");
const btn = document.querySelector(".btn-login");
const facebookBtn = document.querySelector(".facebook-btn");

function moveFacebookPage() {
  location.href =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522cftcz41iqmyxw1n12rhl1e2u740s2d9qn1jn4gfo1o3qjhl1hl9gsm%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd8468ef0-c45b-4fec-84ea-0dafe3d6c8c4%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522cftcz41iqmyxw1n12rhl1e2u740s2d9qn1jn4gfo1o3qjhl1hl9gsm%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0";
}

function checkMoreThanOneLetter() {
  // input : onChange or onKeyPress 이벤트 걸어서 값이 있는지를 실시간으로 검사
  // 버튼 -> setAttribute('disable', 'disabled');
  // removeAttribute('disable');
  const lengthId = inputId.value.length;
  const lengthPw = inputPw.value.length;

  if (!lengthId || !lengthPw) {
    btn.setAttribute("disabled", "disabled");
  } else {
    btn.removeAttribute("disabled", "disabled");
  }
}

inputId.addEventListener("keyup", checkMoreThanOneLetter);
inputPw.addEventListener("keyup", checkMoreThanOneLetter);
facebookBtn.addEventListener("click", moveFacebookPage);
