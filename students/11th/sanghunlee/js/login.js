const id = document.querySelector(".inputId");
const pw = document.querySelector(".inputPw");

const btnColorChangeid = () => {
    const idInput = id.value;
    const pwInput = pw.value;
    const btn = document.querySelector(".loginBtn"); 
    const makeLink = document.createElement("a");

    if(idInput.length >=5 && pwInput.length >=5 && idInput.search("@") !=-1){
        btn.style.backgroundColor = "blue";
        btn.appendChild(makeLink);
        btn.disabled = false;
    }
    else if(idInput.length>=1 && pwInput.length>=1){
        btn.style.backgroundColor ="blue";
        btn.disabled = true;
    }
    else{
        btn.style.backgroundColor = "#C0DFFD";
        btn.disabled = true;
    }
}
id.addEventListener("keyup",btnColorChangeid);
pw.addEventListener("keyup",btnColorChangeid);
/*logic 완성*/
