document.getElementById('logInBtn').onclick = function() {
    let logInId = document.getElementById('logInId').value;
    let logInPw = document.getElementById('logInPw').value;
    if ( logInId === "a" && logInPw === "a") {
        alert("로그인 성공!");
    } else {
        alert("로그인 실패!");
    }
}

let id = document.getElementById("logInId");
let button = document.getElementById("logInBtn");
let pw = document.getElementById("logInPw");

let input= document.querySelector("input")

id.addEventListener('keyup', function() {
    if (id.value == null || id.value == "" ) {
        button.style.backgroundColor = "black";
    } else {
        button.style.backgroundColor = "blue";
    }

pw.addEventListener('keyup', function() {
    if (pw.value == null || pw.value == "" ) {
        button.style.backgroundColor = "black";
    } else {
        button.style.backgroundColor = "blue";
    }
} )
});