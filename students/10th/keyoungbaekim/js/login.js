// # 로그인 페이지
// 1. id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// - 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
const keyupIdValue = document.getElementsByClassName('id')[0].value;
const keyupPwValue = document.getElementsByClassName('pw')[0].value;

const keyupId = document.getElementsByClassName('id')[0];
keyupId.addEventListener('keyup', function(){
    const keyupPwValue = document.getElementsByClassName('pw')[0].value;
    const keyupIdValue = document.getElementsByClassName('id')[0].value;

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
});

const keyupPw = document.getElementsByClassName('pw')[0];
keyupPw.addEventListener('keyup', function(){
    const keyupIdValue = document.getElementsByClassName('id')[0].value;
    const keyupPwValue = document.getElementsByClassName('pw')[0].value;
    
    if(keyupIdValue !== "" && keyupPwValue !== ""){
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
});





