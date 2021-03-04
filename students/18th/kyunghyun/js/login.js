const Btn = document.querySelector('.btn') 
const id = document.getElementById('id');
const password = document.getElementById('password'); 

function validate() {
    Btn.style.opacity
    = id.value !== "" && password.value !== "" && password.value.length >= 5 ? "1" : "0.3";
}

id.addEventListener("input", ()=>{ 
    validate(); 
});
password.addEventListener("input", ()=>{
    validate();
});

