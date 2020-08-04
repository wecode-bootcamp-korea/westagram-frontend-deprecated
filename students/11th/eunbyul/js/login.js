const userId = document.getElementsByClassName("userId")[0]
const userPw = document.getElementsByClassName("userPw")[0]
const button = document.getElementsByClassName("loginButton")[0]

userId.addEventListener('keyup', function(e) {
    if (userId.value && userPw.value) {
        button.style.backgroundColor = "blue"
    } else {
        button.style.backgroundColor = "rgba(0,149,246,.3)"
    }
    console.log(userId.value);
} 
)

userPw.addEventListener('keyup', function(e) {
    if (userId.value && userPw.value) {
        button.style.backgroundColor = "blue"
    } else {
        button.style.backgroundColor = "rgba(0,149,246,.3)"
    }
    console.log(userPw.value);   
}
)