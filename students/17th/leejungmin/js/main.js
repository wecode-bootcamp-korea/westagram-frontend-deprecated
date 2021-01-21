const replyInput = document.querySelector('.content_peed_reply');
const replySubmit = document.querySelector('.content_peed_submit');
const replyList = document.querySelector('.content_peed_text');


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
        // event.preventDefault();
        const replyP = document.createElement('p');
        replyP.innerHTML = 'meeeeen93 ' + replyInput.value;
        replyList.append(replyP);
        // replyList.append('meeeeen93 '+replyInput.value);
        replyInput.value = null;
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



replyInput.addEventListener('keyup', colorChange);
replyInput.addEventListener('keydown', replyEnterAdd);
replySubmit.addEventListener('click', replyClickAdd);