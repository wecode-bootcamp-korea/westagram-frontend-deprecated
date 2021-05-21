document.querySelector(".id_input").value ='';
document.querySelector(".pw_input").value ='';
const idInput = document.querySelector('.id_input');
const pwInput = document.querySelector('.pw_input');
const loginBtn = document.querySelector('.login_Btn');

function changeBtn(){
    
    let idValue = idInput.value;
    let pwValue = pwInput.value;

    if(idValue.length>0 && pwValue.length>0){
        loginBtn.style.backgroundColor = "black"; //버튼색 변화

        //링크로 이동
        loginBtn.addEventListener('click',successLogin);
         function successLogin(){
        location.href ="/main.html"
            }
        } else {
            loginBtn.style.backgroundColor = "rgba(64, 149, 225,0.35)";
        } 
    
}

idInput.addEventListener('keyup',changeBtn);
pwInput.addEventListener('keyup',changeBtn);

