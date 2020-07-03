
function idPasswordComparison() {
    const keyupPwValue = keyupPw.value;
    const keyupIdValue = keyupId.value;

    if(keyupPwValue !== "" && keyupIdValue !== ""){
        let activeBtn = document.getElementsByClassName('loginBtn')[0];
        activeBtn.disabled = false;
        activeBtn.style = "cursor:pointer";
        activeBtn.style.backgroundColor = "#0095F6";
    }else{
        let activeBtn = document.getElementsByClassName('loginBtn')[0];
        activeBtn.disabled = true;
        activeBtn.style = "cursor:default";
        activeBtn.style.backgroundColor = "#B2DFFC";
    }
}

const keyupId = document.getElementsByClassName('loginInputId')[0];
const keyupPw = document.getElementsByClassName('loginInputPw')[0];
keyupId.addEventListener('keyup', function(){
    idPasswordComparison();
});
keyupPw.addEventListener('keyup', function(){
    idPasswordComparison();
});





