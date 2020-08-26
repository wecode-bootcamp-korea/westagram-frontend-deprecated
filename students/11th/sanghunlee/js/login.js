const id = document.querySelector(".inputId");
const pw = document.querySelector(".inputPw");

const btnColorChangeid = () => {
    const idInput = id.value;
    const pwInput = pw.value;
    const btn = document.querySelector(".loginBtn"); 

    if(idInput.length >=5 && pwInput.length >=5 && idInput.search("@") !=-1){
        btn.style.backgroundColor = "blue";
        btn.innerHTML = "<a>Log in</a>";
        btn.disabled = false;
        btn.style.cursor = "pointer";
    }
    else if(idInput.length>=1 && pwInput.length>=1){
        btn.style.backgroundColor ="blue";
        btn.disabled = false;
    }
    else{
        btn.style.backgroundColor = "#C0DFFD";
        btn.disabled = true;
    }
}
id&&pw.addEventListener("keyup",btnColorChangeid);
