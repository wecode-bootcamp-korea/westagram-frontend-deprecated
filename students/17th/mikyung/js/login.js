const thisIsButton = document.getElementById('b0tn_login')

thisIsButton.addEventListener('click' function() {
    const id = document.getElementById('userID').value;
    const password = document.getElementById('userPW').value;

    if (!id) {
        alert('전화번호, 사용자 이름 또는 이메일을 입력해주세요!')
        return;

        if (!password) {
            alert('비밀번호를 입력해주세요!')
returnl}
alert('로그인 성공!')
    }
}