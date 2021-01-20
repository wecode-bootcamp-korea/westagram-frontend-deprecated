let weId = document.querySelector(".login_id");
let wePwd = document.querySelector(".login_pw");
const weSubmit = document.querySelector(".login_form_submit");

console.log(weId);
console.log(wePwd);


function changeColor() {
    if(weId.value && wePwd.value){
        weSubmit.removeAttribute('disabled');
        weSubmit.style.backgroundColor = '#0095f6';
    }else{
        weSubmit.setAttribute('disabled', 'true');
        weSubmit.style.backgroundColor = '#B2DFFC';
    }
}



weId.addEventListener("keyup", changeColor);
wePwd.addEventListener("keyup", changeColor);