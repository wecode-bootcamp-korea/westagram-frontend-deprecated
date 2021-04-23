// 댓글입력기능

const submitBtn = document.querySelector('.submit');
const commentInput = document.querySelector('.instaPost_input');
const commentFeeds = document.querySelector('.instaPost_content');

// 버튼 클릭시 댓글 입력
submitBtn.addEventListener('click' , function(){
    makeComment();
});

// 엔터 눌렀을시 댓글 입력
commentInput.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        makeComment();
    }
});

// 댓글다는 함수
function makeComment (){
    let commentDiv = document.createElement('div');
    let commentId = document.createElement('span');
    let commentContent = document.createElement('span');
    let deleteBtn = document.createElement('button');

    deleteBtn.className = "deleteBtn";
    commentDiv.className = "instaPost_content";
    commentId.className = "instaPost_id";
    commentDiv.appendChild(commentId);
    commentDiv.appendChild(commentContent);
    commentDiv.appendChild(deleteBtn);

    if(commentInput.value !== null){
        commentId.innerHTML = "_seeul"
        commentContent.innerHTML = commentInput.value;
        deleteBtn.innerHTML = "삭제";
        commentFeeds.appendChild(commentDiv);
        
    }else{
        return;
    };

    deleteBtn.addEventListener('click', function(e){
        commentDiv.remove();
    });

};

// 댓글 달고나서 input.value 없애기
