const pstdTime = document.getElementsByClassName('pstdTime');
const social = document.getElementsByClassName('social');
const cmnt = document.getElementsByClassName('newCmnt');
const bttn = document.getElementsByClassName('pstBttn');
let x = 'silverglasses';
let y = cmnt.value;
let z;
bttn.disabled = true;
cmnt.addEventListener('input', function(e){
    if(e !== '') {
        bttn.disabled = false;
        bttn.style.opacity = '1';
        bttn.style.cursor = 'pointer';
    };
    y = cmnt.value;
})

bttn.addEventListener('click', function(){
    y = cmnt.value;
    let sct = document.createElement('section');
    sct.innerText = y;
    z = social.insertBefore(sct, pstdTime);
    return z;
});