const weId = document.querySelector(".login_id"),
wePwd = document.querySelector(".login_pw"),
weSubmit = document.querySelector(".login_form_submit");

function changeColor() {
    if((weId.value && wePwd.value) && (wePwd.value.length >= 5) && (weId.value.indexOf("@") >= 0)){
        weSubmit.removeAttribute('disabled');
        weSubmit.classList.add("color_change");
        weSubmit.style.cursor = 'pointer';
    }else{
        weSubmit.setAttribute('disabled', 'true');
        weSubmit.style.cursor = 'default';
    }
}


weId.addEventListener("keyup", changeColor);
wePwd.addEventListener("keyup", changeColor);