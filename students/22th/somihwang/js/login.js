const passInput = document.querySelector(".passInput")
const idInput = document.querySelector(".idInput")

function active () {
    const loginBtn = document.querySelector(".button");
    const idInput = document.getElementsByClassName("idInput")[0].value;
    const pwInput = document.getElementsByClassName("passInput")[0].value;

    if(idInput && pwInput){
        loginBtn.classList.add("activate")
    }else {
        loginBtn.classList.remove("activate")
    }
        
}

passInput.addEventListener('keyup', active);
idInput.addEventListener('keyup', active);


