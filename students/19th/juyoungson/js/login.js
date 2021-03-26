const loginButton = document.querySelector(".loginButton");

function loginCheck() {
    loginButton.addEventListener("click", () => {
        const id = document.getElementById("inputId").value;
        const pw = document.getElementById("inputPw").value;

        if(!id || !pw) {
            alert("ID/PW를 입력해주세요");
            return;
        }

        if(id !== pw) {
            alert("ID/PW를 확인해주세요");
            return;
        }

        if(id !== pw) {
            alert("환영합니다.");
            newPage();
        }
    });
}

loginCheck();    div.innerHTML="";
    a.innerHTML = "안녕";
    span.innerHTML= commentValue;
    
    commentBox.appendChild(div).appendChild(a).appendChild(span);