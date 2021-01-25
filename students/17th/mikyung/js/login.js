const thisisIDPW = document.getElementsByClassName('first_div')[0];

thisisIDPW.addEventListener('keyup', function() {
    const id = document.getElementById('userID').value;
    const password = document.getElementById('userPW').value;
    const button = document.getElementById('btn_login');

    if (id.length > 0 && password.length > 0) {
        return button.removeAttribute('disabled');
    }
    else {
        return button.setAttribute('disabled','disabled')
    }   
})