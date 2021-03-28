'use strict';

const chatInput = document.querySelector('.feed__content__chat-input');
const chatButton = document.querySelector('.feed__content__chat-button');
const chatComment = document.querySelector('.add-comment-lists');

// 필수 구현사항: 입력시 버튼 색 바꾸기
const changeBtnColor = () => {
    const chatLength = chatInput.value.length;
    (chatLength > 0 ? chatButton.classList.add('change-btn') : chatButton.classList.remove('change-btn'));
}
// 필수 구현사항: 댓글 추가
const innerComment = (e) => {
    const inputValue = chatInput.value;
    if (e.code == 'Backspace' || inputValue.length == 0) {
        return;
    } else if (e.code == 'Enter' || e.type == 'click') {
        const createElement = document.createElement('li');
        const appendElement = chatComment.appendChild(createElement)
        const result = appendElement.innerHTML = `<span><strong class="add-comment-list">nakiaathome</strong>${inputValue}</span>`;
        return result; 
    }
}

chatInput.addEventListener('input', changeBtnColor);
chatInput.addEventListener('keyup', innerComment);
chatButton.addEventListener('click', innerComment);