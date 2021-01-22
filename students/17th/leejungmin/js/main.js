const replyInput = document.querySelector('.content_peed_reply');
const replySubmit = document.querySelector('.content_peed_submit');
const replyList = document.querySelector('.content_peed_text');
const navProfileBtn = document.querySelector('.nav_bar_profile_btn');
const navMenuDrop = document.querySelector('.drop_box_main');
const navMenuDropDia = document.querySelector('.drop_box_diamond');

let dropDownUp = 0;

function colorChange() {
    
    if(replyInput.value){
        replySubmit.removeAttribute('disabled');
        replySubmit.style.color = '#0095f6';
    }else {
        replySubmit.setAttribute('disabled', 'true');
        replySubmit.style.color = '#B2DFFC';
    }
}



function replyEnterAdd(event) {
    if(event.keyCode === 13 && replyInput.value){
        const replyP = document.createElement('p');
        replyP.innerHTML = 'meeeeen93 ' + replyInput.value;
        replyList.append(replyP);
        replyInput.value = "";
    }
}

function replyClickAdd() {
    if(replyInput.value){
        const replyP = document.createElement('p');
        replyP.innerHTML = 'meeeeen93 ' + replyInput.value;
        replyList.append(replyP);
        replyInput.value = null;
    }
}

function menuDrop() {
    if(dropDownUp === 0) {
        navMenuDrop.style.display = 'block';
        navMenuDropDia.style.display = 'block';
        dropDownUp = 1;
    }else if(dropDownUp === 1){
        navMenuDrop.style.display = 'none';
        navMenuDropDia.style.display = 'none';
        dropDownUp = 0;
    }
}



replyInput.addEventListener('keyup', colorChange);
replyInput.addEventListener('keydown', replyEnterAdd);
replySubmit.addEventListener('click', replyClickAdd);
navProfileBtn.addEventListener('click', menuDrop);