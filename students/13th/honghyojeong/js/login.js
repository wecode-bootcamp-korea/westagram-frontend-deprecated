"use strict";

const loginInput = document.getElementById('id-input');
const passwordInput = document.getElementById('password-input');
const inputTags = document.getElementsByTagName('input');
const loginSubmitBtn = document.getElementById('submit-btn');


// 아이디, 패스워드 
for (let i = 0; i < inputTags.length; i++) {
	inputTags[i].addEventListener('keyup', function () {
		let loginInputValue = loginInput.value;
		let passwordInputValue = passwordInput.value;

		loginInputValue.length > 0 && passwordInputValue.length > 0 ?
			loginSubmitBtn.style.backgroundColor = '#68c9e9' :
			loginSubmitBtn.style.backgroundColor = 'rgba(0, 149, 246, 0.3)';
	});
}

loginSubmitBtn.addEventListener('click', function () {
	let loginInputValue = loginInput.value;
	let passwordInputValue = passwordInput.value;

	if (loginInputValue.indexOf('@') === -1) {
		loginInput.style.borderColor = '#ff7777';
		return alert('이메일 형식을 지켜주세요.')
	} else loginInput.style.borderColor = '#ddd';

	if (passwordInputValue.length < 5) {
		passwordInput.style.borderColor = '#ff7777';
		return alert('비밀번호는 5글자 이상이어야 합니다.')
	} else loginInput.style.borderColor = '#ddd';
});