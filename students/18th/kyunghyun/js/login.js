const btn = document.querySelector('.btn')
const id = document.getElementById('id'); //id 입력창
const password = document.getElementById('password'); //password 입력창


function allClear() {
    console.log(id.value !== "" && password.value !== "" && password.value.length >= 6);
    if (id.value !== "" && password.value !== "" && password.value.length >= 6) {
        return true;
    } else {
        return false;
    }
}

// 이벤트 콜백 함수 정의
function btnOn(allClear) {
    const check = allClear();
    function yes() {
        btn.style.opacity = "1";
    }

    function no() {
        btn.style.opacity = "0.3";
    }

    return (check ? yes() : no())
}



//이벤트 등록
id.addEventListener("keyup", ()=>{
    btnOn(allClear);
});
password.addEventListener("keyup", ()=>{
    btnOn(allClear);
});