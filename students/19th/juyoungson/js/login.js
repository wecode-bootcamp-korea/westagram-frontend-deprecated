const loginButton = document.querySelector(".loginButton");

function checkInput() {
    loginButton.addEventListener("click", () => {
        const id = document.getElementById("inputId").value;
        const pw = document.getElementById("inputPw").value;
        
        const testId = "123@123";
        const testPw = "12345";

        if((id !== testId || pw !== testPw )|| (!id || !pw) ) {
            alert("ID/PW를 확인해주세요");
            return;
        }

        if(id === testId && pw === testPw) {
            if(id.indexOf("@") === -1){
                alert("e-mail형식으로 입력해주세요");
                return;
            }
            if(pw.length < 5){
                alert("pw를 5글자 이상 입력해주세요");
                return;
            }
            alert("환영합니다.");
            return;
        }
    });
}

checkInput();

