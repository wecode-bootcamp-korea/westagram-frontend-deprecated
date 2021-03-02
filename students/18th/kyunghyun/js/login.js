const Btn = document.querySelector('.btn') 
const id = document.getElementById('id');
const password = document.getElementById('password'); 

function allClear() {
    if (id.value !== "" && password.value !== "" && password.value.length >= 5) { 
        return true;
    } else {
        return false;
    }
}

function btnOn(allClear) { 
    const check = allClear(); 
    const yes = () => Btn.style.opacity = "1"; 
    const no = () => Btn.style.opacity = "0.3";
    return (check ? yes() : no()) 
}

id.addEventListener("keyup", ()=>{ 
    btnOn(allClear); 
});
password.addEventListener("keyup", ()=>{
    btnOn(allClear);
});



