let loginBtn = document.querySelector(".loginBtn");
let loginId = document.querySelector(".inputId");
let loginPw = document.querySelector(".inputPw");
let test = document.getElementById("loginForm");

test.addEventListener('keyup', function() {
    loginBtn.style.backgroundColor = loginId.value && loginPw.value ? "#0095F6":"#B2DFFC";

        // if(loginId.value && loginPw.value) {
    //     isLoginBtn.style.backgroundColor = "#aaaaaa";
    // } else {
    //     isLoginBtn.style.backgroundColor = "#333333";
    // }
});

// console.log(test);
// console.log(loginId, loginPw);
// test.addEventListener('keyup', function() {
//     console.log(isLoginBtn)

//     if(loginId.value && loginPw.value) {
//         isLoginBtn.style.backgroundColor = '#222222';
//     } else {
//         isLoginBtn.style.backgroundColor = '#444444';
//     }
// }
// );

// document.addEventListener('keyup', function() {
//     console.log(loginId.value, loginPw.value);
//    isLoginBtn.style.backgroundColor = loginId.value && loginPw.value ? 'red' : 'skyblue';
// });




// loginId.addEventListener('keyup', function() {
//     if(loginId.value && loginPw.value) {
//         isLoginBtn.style.backgroundColor = '#222222';
//     } else {
//         isLoginBtn.style.backgroundColor = '#333333';
//     }
// });
