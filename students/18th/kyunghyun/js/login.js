const Btn = document.querySelector('.btn') 
const id = document.getElementById('id');
const password = document.getElementById('password'); 


// btnOn의 콜백 함수 정의
function allClear() {
    if (id.value !== "" && password.value !== "" && password.value.length >= 6) { 
        return true;
    } else {
        return false;
    }
}

// 이벤트 콜백 함수 정의
function btnOn(allClear) { 
    const check = allClear(); 
    const yes = () => Btn.style.opacity = "1"; 
    const no = () => Btn.style.opacity = "0.3";
    return (check ? yes() : no()) 
}


//이벤트 등록
id.addEventListener("keyup", ()=>{ 
    btnOn(allClear); 
});
password.addEventListener("keyup", ()=>{
    btnOn(allClear);
});



