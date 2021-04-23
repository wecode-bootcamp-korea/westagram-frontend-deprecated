const loginForm = document.querySelector('.login_form');
const userId = document.querySelector('#user_id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login_btn');
const reg = /^\d{3}[. -]?\d{3,4}[. -]?\d{4}$|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+|[a-zA-Z ]+/;
const displayPassword = document.querySelector('.display_password');
const hidePassword = document.querySelector('.hide_password');

loginForm.addEventListener('input', checkValidation);

function checkValidation() {
	if (reg.test(userId.value) && password.value.length >= 6) {
		loginBtn.disabled = false;
		loginBtn.classList.add('active');
	} else {
		loginBtn.disabled = true;
		loginBtn.classList.remove('active');
	}
}

password.addEventListener('input', () => {
	if (password.value) {
		displayPassword.classList.add('show');
	} else {
		displayPassword.classList.remove('show');
	}
});

displayPassword.addEventListener('click', () => {
	password.removeAttribute('type');
	displayPassword.classList.remove('show');
	hidePassword.classList.add('show');
});

hidePassword.addEventListener('click', () => {
	password.setAttribute('type', 'password');
	displayPassword.classList.add('show');
	hidePassword.classList.remove('show');
});
