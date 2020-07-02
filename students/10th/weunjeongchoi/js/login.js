// //1. id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// - 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!


var lgName = document.getElementById('id');
var lgPw = document.getElementById('pw');
var lgBtn = document.getElementById('btn');

var activateBtn = function () {
    if (lgName.value.length !== 0 && lgPw.value.length !==0) {
        lgBtn.style.backgroundColor = 'blue';
    }
};

lgName.addEventListener('keyup', activateBtn);
lgPw.addEventListener('keyup', activateBtn);



