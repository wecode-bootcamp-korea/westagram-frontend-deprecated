
let input = document.querySelector('.comment_input'); 
let button = document.querySelector('.comment_button');

function addComment() {
    let inputValue = input.value;
    let ul = document.querySelector('.comments_loaded');
    let li = document.createElement('li'); // 새로운 li element를 만들고
    li.innerHTML = inputValue; // inputBox의 value값을 가져와서 li의 안에 텍스트로 써주기
    ul.appendChild(li); // ul 에 넣기
    input.value="";
}

button.addEventListener('click', addComment); // 인풋박스에 이벤트리슨하다가 이벤트핸들러를 실행
