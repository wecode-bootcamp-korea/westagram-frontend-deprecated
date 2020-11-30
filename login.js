const logBt = document.getElementById('bt');
const logId = document.getElementById('tx');
const logPw = document.getElementById('pw');

const changeColor = () => {
    console.log('changeColor');
    if(logId.value.length && logPw.value.length){
        logBt.style.backgroundColor = '#06204f';
    } else {
        logBt.style.backgroundColor = '#9ebbe6';
    }
};
document.addEventListener('keyup', changeColor)
