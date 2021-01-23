const replyInput = document.querySelector('.content_peed_reply'),
replySubmit = document.querySelector('.content_peed_submit'),
replyList = document.querySelector('.content_peed_sub_text');



// 댓글 작성 시 게시 버튼 색상 변화

function colorChange() {
    if(replyInput.value){
        replySubmit.removeAttribute('disabled');
        replySubmit.style.color = '#0095f6';
    }else {
        replySubmit.setAttribute('disabled', 'true');
        replySubmit.style.color = '#B2DFFC';
    }
}

// enter키로 댓글 추가

function replyEnterAdd(event) {
    if(event.keyCode === 13 && replyInput.value){
        const reply = document.createElement('div');
        reply.classList.add('content_peed_text_reply')
        reply.innerHTML = '<div><li>meeeeen93 ' +replyInput.value+'</li></div><div><i class="far fa-heart reply_like"></i> <i class="far fa-trash-alt reply_remove"></i></div>';
        replyList.append(reply);
        replyInput.value = '';
    }
}

// 게시 클릭 시 댓글 추가

function replyClickAdd() {
    if(replyInput.value){
        const reply = document.createElement('div');
        reply.classList.add('content_peed_text_reply')
        reply.innerHTML = '<div><li>meeeeen93 ' +replyInput.value+'</li></div><div><i class="far fa-heart reply_like"></i> <i class="far fa-trash-alt reply_remove"></i></div>';
        replyList.append(reply);
        replyInput.value = '';
    }
}


// 댓글 좋아요
replyList.addEventListener('click', function(event){
    let targetLike = event.target;
    let hasLikeOne = targetLike.classList.contains('reply_like');
    let hasLikeTwo = targetLike.classList.contains('likeit_change');
        if(hasLikeOne && hasLikeTwo) {
            targetLike.classList.remove("likeit_change");
        }else if(hasLikeOne && !hasLikeTwo) {
            targetLike.classList.add("likeit_change");
        }
});

// 댓글 삭제
replyList.addEventListener('click', function(event){
    let targetRemove = event.target;
    let hasRemove = targetRemove.classList.contains('reply_remove');
    if(hasRemove) {
        const parentMom = targetRemove.parentNode;
        const parentGrandMom = parentMom.parentNode;
        replyList.removeChild(parentGrandMom);
    }
})

replyInput.addEventListener('keyup', colorChange);
replyInput.addEventListener('keydown', replyEnterAdd);
replySubmit.addEventListener('click', replyClickAdd);