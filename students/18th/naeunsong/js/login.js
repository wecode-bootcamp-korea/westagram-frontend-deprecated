const login_btn = document.getElementsByTagName('button')[0];
const thisIsPw = document.getElementById('user_password')

thisIsPw.addEventListener("keyup", function(){
    const user_id = document.getElementById('user_id').value;
    const user_password = document.getElementById('user_password').value;
    
    login_btn.className = user_id && user_password ? 'active_btn' : ''
})
