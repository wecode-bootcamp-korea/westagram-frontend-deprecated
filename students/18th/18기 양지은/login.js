
document.addEventListener('keyup', function() {
    const userId = document.getElementById('userid');
    const userPassword = document.getElementById('password');

    if (userId.value && userPassword.value ) {                        
            let color = document.getElementsByClassName('btn')[0];
            color.style.backgroundColor = "#1565c0";
    }
    if (!userId.value || !userPassword.value ) {
            let color = document.getElementsByClassName('btn')[0];
            color.style.backgroundColor = "lightskyblue";
    }
});
