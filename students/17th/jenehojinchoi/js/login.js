const email = document.getElementById('email');
// const button = document.getElementsByClassName('mybutton')[0];
const pw = document.getElementById('password');

email.addEventListener('keyup', function(e) {
    var MyButton = document.getElementsByClassName('mybutton')[0];
    if (email.value !== "" && pw.value !== "") {
        MyButton.style.backgroundColor = '#1795f6';
    } else {
        MyButton.style.backgroundColor = '#c4e2f9';
    }
});

pw.addEventListener('keyup', function(e) {
    var MyButton = document.getElementsByClassName('mybutton')[0];
    if (email.value !== "" && pw.value !== "") {
        MyButton.style.backgroundColor = '#1795f6';
    } else {
        MyButton.style.backgroundColor = '#c4e2f9';
    }
});
