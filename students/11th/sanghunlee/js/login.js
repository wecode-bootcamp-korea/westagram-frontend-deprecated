const id = document.querySelector(".inputId");
const pw = document.querySelector(".inputPw");

const btnColorChangeid = () => {
    const idInput = id.value;
    const pwInput = pw.value;
    const btn = document.querySelector(".loginBtn"); 
    if(idInput.length>=1 && pwInput.length>=1){
        btn.style.backgroundColor = "blue";
    }
    else
        btn.style.backgroundColor = "#C0DFFD";
    }

id.addEventListener("keyup",btnColorChangeid);
pw.addEventListener("keyup",btnColorChangeid);




