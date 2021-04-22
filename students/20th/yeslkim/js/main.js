const commentForm = document.commentForm,
    submitBtn = commentForm.submitComment,
    inputComment = commentForm.inputComment

// 댓글 추가
function addComment(e) {
e.preventDefault();

const commentValue = inputComment.value,
    commentBox = document.querySelector('.js-comments'),
    p = document.createElement('p'),
    span = document.createElement('span'),
    comment = document.createTextNode(` ${commentValue}`),
    myId = document.querySelector('#user-profile .userName').textContent;

span.className = 'userName';
span.innerText = myId;
p.appendChild(span);
p.appendChild(comment);
commentBox.appendChild(p);
inputComment.value = '';
}

// 게시 버튼 비활성화 / 활성화
function checkBtnDisabled() {
    const commentValue = inputComment.value;
    submitBtn.disabled = commentValue.length > 0 ? false : true;
    return;
}

submitBtn.addEventListener('click', addComment);
inputComment.addEventListener('keyup', checkBtnDisabled);


/*
메세지 인자를 받아온다
요소를 만든다 (p, span)
span.innerText = my_id;
p.innerText = inputComment.value;

+ 아이디 가져오기


+ 정규표현식?
innerComment.value 중에
/@^\w+\s$/로 표현되는 표현은 a 태그에 담기

글자 수에 따라 게시 버튼 비활성화, 활성화
*/