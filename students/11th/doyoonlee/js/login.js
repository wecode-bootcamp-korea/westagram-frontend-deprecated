function handleBtnColor() {
    const button = document.getElementsByClassName("button")[0]; 
    let valueOfId = document.getElementsByClassName("user_id")[0].value; 
    let valueOfPw = document.getElementsByClassName("user_pw")[0].value; 
    if (valueOfId !== "" && valueOfPw !== "") {
        button.style.backgroundColor = "#1a96f4";
        button.removeAttribute("disabled");
    }
    else {
        button.style.backgroundColor = "#C0DFFD";
        button.setAttribute("disabled", ""); // 이 부분 disabled 추가가 안됩니다. 
    }
}

let inputId = document.getElementsByClassName("user_id")[0];
let inputPw = document.getElementsByClassName("user_pw")[0];
inputId.addEventListener("keyup", handleBtnColor);
inputPw.addEventListener("keyup", handleBtnColor);



