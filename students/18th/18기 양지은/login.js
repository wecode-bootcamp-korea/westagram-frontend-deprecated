const userId = document.getElementById('userid');
const userPassword = document.getElementById('password');
document.addEventListener('keyup', function(e) {
    if (userId.vlaue !== "") {
        if (userPassword.value !== "") {                        
            let color = document.getElementsByClassName('btn')[0];
            color.style.backgroundColor = "#1565c0";
        }
    }
});
