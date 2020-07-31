let inputId = document.querySelector('.input-id');
let inputPw = document.querySelector('.input-pw');
let btn = document.querySelector('.log-content-1-btn');

// 버튼 활성화 //
const btnOn = () => {
        if (inputId.value && inputPw.value) {
        btn.disabled = false; 
        btn.classList ='btn-active';
        btn.classList.remove = 'btn-off';
    }
};
// 버튼 비활성화 //
const btnOff = () => {
    if (!inputId.value || !inputPw.value) {
        btn.disabled = 'disabled';
        btn.classList = 'btn-off';
        btn.classList.remove = 'btn-active';
    }
};

inputId.addEventListener('keydown', function(){
    btnOn();
    btnOff();
})
inputPw.addEventListener('keydown', function(){
    btnOn();
    btnOff();
});
