const commentText = document.querySelector('.comment_text');
const submitText = document.querySelector('.submit_text');
const commentAdd = document.querySelector('.comment_add');
const submitBtn = document.querySelector('.submit');

// 댓글 입력 시 버튼 활성화
commentText.addEventListener('keyup', () => {
    const painBtn = 'submit_text-paint';
    let textVale = commentText.value;

    if (textVale) {
        submitText.classList.add(painBtn);
    } else {
        submitText.classList.remove(painBtn);
    }
})

//댓글 추가
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let commentArea1 = document.createElement('div');
    let commentArea2 = document.createElement('div');
    let commentId = document.createElement('span');
    let commentWord = document.createElement('span');

    commentArea1.classList = 'comment_Area1';
    commentArea2.classList = 'comment_Area2';
    commentId.classList = 'comment_Id';

    commentId.innerHTML = 'juyeoppark_ju';
    commentWord.innerHTML = commentText.value;

    commentAdd.appendChild(commentArea1);
    commentArea1.appendChild(commentArea2);
    commentArea2.appendChild(commentId);
    commentArea2.appendChild(commentWord);
})