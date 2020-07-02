const id = document.getElementById('id');
const pw = document.getElementById('pw');

let loginBtn = document.getElementById('login');

changeLoginBtnColor = () => {
    if((id.value.length && pw.value.length) >= 1){
        loginBtn.style.backgroundColor = '#0095f6';
    }else{
        loginBtn.style.backgroundColor = '#b2dffc';
    }
}

id.addEventListener('keyup', changeLoginBtnColor);
pw.addEventListener('keyup', changeLoginBtnColor);

