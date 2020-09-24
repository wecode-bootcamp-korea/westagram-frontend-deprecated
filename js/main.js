let pstdTime = document.getElementById('pstdTime');
let social = document.getElementById('social');
let cmnt = document.getElementById('newCmnt');
let bttn = document.getElementById('pstBttn');
let x = 'silverglasses';
let y = cmnt.value;
let z;
bttn.disabled = true;
bttn.style.opacity = '0.3';

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