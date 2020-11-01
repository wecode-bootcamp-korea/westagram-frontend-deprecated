document.getElementById('logInBtn').onclick = function() {
    let logInId = document.getElementById('logInId').value;
    let logInPw = document.getElementById('logInPw').value;
    if ( logInId === "a" && logInPw === "a") {
        return alert("로그인 성공!");} alert("로그인 실패!")
}

let id = document.getElementById("logInId");
let button = document.getElementById("logInBtn");
let pw = document.getElementById("logInPw");

// id.addEventListener('keyup', function() {
//     if (id.value == null || id.value == "" ) {
//         button.style.backgroundColor = "black";
//     } else {
//         button.style.backgroundColor = "blue";
//     }

// pw.addEventListener('keyup', function() {
//     if (pw.value == null || pw.value == "" ) {
//         button.style.backgroundColor = "black";
//     } else {
//         button.style.backgroundColor = "blue";
//     }
// } )
// });

document.addEventListener('keyup', function() {
    button.style.backgroundColor = id.value && pw.value ? "green" : "black"
});


// document.addEventListener('keyup', function() {
//     button.style.backgroundColor = id.value && pw.value ? "green" : "button.classList.toggle('active')"
// });

// document.addEventListener('keyup', function() {
//    button.style.backgroundColor = id.value && pw.value ? button.classList.toggle("active") : "black" 
// })

// changeColor = function(event) {
//     let buttonColor = event.target;
//     buttonColor.classList.toggle('active')
// }