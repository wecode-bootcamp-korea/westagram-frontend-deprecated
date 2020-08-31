const commentInput = document.getElementById('commentInput');
const commentButton = document.getElementsByTagName('button')[0];
const commentList = document.getElementsByTagName('ul')[0];

// 댓글 삽입 함수
function appendComment(){
    if (commentInput.value !== ''){
        commentList.innerHTML = `
            ${commentList.innerHTML}
            <li>
                ${commentInput.value}
                <div>
                    <img 
                    class = 'comment--like'
                    alt = 'heartImg'
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    style = 'cursor:pointer'>
                    <span class = 'comment--remove'
                    style = 'cursor:pointer'>
                    삭제
                    </span>
                </div>        
            </li>
        `
        // 댓글 입력 값 초기화
        commentInput.value = "";
        // 댓글 삭제 기능
        const thisIsRemove = document.getElementsByClassName('comment--remove');
        removeComment(thisIsRemove);
        // 댓글 좋아요 기능
        // let thisIsLike = document.querySelectorAll('.comment--like');
        // likeComment(thisIsLike);
}}

// 댓글 삭제 함수(이벤트)
function removeComment(parameter){
    for (let el of parameter){
        el.addEventListener('click', function(){
            el.parentElement.parentElement.remove();
        })
    }
}

// 댓글 하트 함수(이벤트)
function likeComment(parameter){
    parameter.forEach(el => {
        el.addEventListener('click', function(e){
        e.target.src="./img/heart.png";
        })
    })
}

// 엔터 및 클릭 이벤트
commentInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        appendComment();
    }
})
commentButton.addEventListener('click', appendComment);

let thisIsLike = document.querySelectorAll('.comment--like');
thisIsLike.addEventListener('click', function(){
    console.log(thisIsLike);
})