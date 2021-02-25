const idTextBox = document.getElementsByTagName("input")[0];
const passwordTextBox = document.getElementsByTagName("input")[1];
const button = document.querySelector('button');

idTextBox.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('loginId')[0].value;
    const password = document.getElementsByClassName('loginPassword')[0].value;
    return (id && password) ? button.style.backgroundColor = "#0095F6" : button.style.backgroundColor = "#B2DFFC"
});

passwordTextBox.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('loginId')[0].value;
    const password = document.getElementsByClassName('loginPassword')[0].value;
    return (id && password) ? button.style.backgroundColor = "#0095F6" : button.style.backgroundColor = "#B2DFFC"
});

/*
button.addEventListener('mouseover', function() {
    return (button.style.backgroundColor == "#B2DFFC") ? button.style.cursor = "pointer" : button.style.cursor = "default"
});
// 버튼이 활성화됐을 때 버튼에 mouseover 시 cursor가 pointer로 바뀌는 것을 구현하고 싶음
*/