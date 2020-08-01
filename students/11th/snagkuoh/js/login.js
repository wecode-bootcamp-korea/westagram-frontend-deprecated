let inputId = document.querySelector('.inputId');
let inputPw = document.querySelector('.inputPw');
let btn = document.querySelector('.loginBoxBtn');

// 버튼 활성화 //
const btnOn = () => {
    if (inputId.value && inputPw.value) {
    btn.disabled = false; 
    btn.classList ='btn-active';
    btn.classList.remove = 'btn-off';
    }
    else if (!inputId.value || !inputPw.value) {
    btn.disabled = 'disabled';
    btn.classList = 'btn-off';
    btn.classList.remove = 'btn-active';
}
};

inputId.addEventListener('keydown', function(){
    btnOn();
})
inputPw.addEventListener('keydown', function(){
    btnOn();
});
