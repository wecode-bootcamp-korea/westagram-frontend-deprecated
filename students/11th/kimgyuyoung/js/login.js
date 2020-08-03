
const inputTextId = document.getElementsByClassName('inputId')[0];
const inputTextPw = document.getElementsByClassName('inputPw')[0];

inputTextId.addEventListener ('keydown', function(){
        inputTextId.style.fontSize="12px"
        inputTextId.style.padding="14px 0 2px 8px"
});


//로그인 버튼이 Id와 Pw가 조건에 맞게(Id는 1글자이상 Pw는 8글자이상) 써졌으면 파랗게변함
inputTextId.addEventListener ('keyup', function(){
    if (inputTextId.value.length >= 1 && inputTextPw.value.length >= 8){
        document.getElementsByClassName('loginButton')[0].style.background = "#2a96f6"
    }
});

inputTextPw.addEventListener ('keyup', function(){
    if (inputTextId.value.length >= 1 && inputTextPw.value.length >= 8){
        document.getElementsByClassName('loginButton')[0].style.background = "#2a96f6"
    }
});