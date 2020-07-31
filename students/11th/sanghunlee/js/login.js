const id = document.querySelector(".inputId");
const pw = document.querySelector(".inputPw");

const btnColorChangeid = () => {
    const id = document.querySelector(".inputId").value;
    const pw = document.querySelector(".inputPw").value;
    const btn = document.querySelector(".loginBtn"); 
    if(id.length>=1 && pw.length>=1){
        btn.style.backgroundColor = "blue";
    }
    else
        btn.style.backgroundColor = "#C0DFFD";
    }

id.addEventListener("keyup",btnColorChangeid);
pw.addEventListener("keyup",btnColorChangeid);






/*
const inputValueSave = ()=>{
    const idvalue = document.querySelector("inputId").value;
    const id = document.querySelector("inputId");
    id.value = idvalue;
    console.log(idvalue)
}

id.addEventListener("keyup",inputValueSave);

*/





