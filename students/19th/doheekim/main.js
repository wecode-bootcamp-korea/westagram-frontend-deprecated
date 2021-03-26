const commentBox = document.body.querySelector(".comment-write"); //input이 들어있는 ul
const commentInput = document.body.querySelector(".comment-inner"); //input class명
const commentBtn = document.body.querySelector(".submit"); // 게시 버튼

const commentAddBox = document.body.querySelector(".content-write"); //댓글구현 ul
const commentList = document.body.querySelector(".content-write li"); //댓글구현 li



//키업했을때 게시 버튼 활성화
commentInput.addEventListener('keyup', function () {
    let commentText = commentInput.value;
    console.log('commentList keyup function');
    
    if (commentText.length >= 1){
        commentBtn.style.color = '#0094f6';
        commentBtn.style.fontWeight = '600';
    } else {
        commentBtn.style.color = '#0094f64b';
    }
});

// 클릭시 댓글 ul에 li 추가하기
commentBtn.addEventListener('click', function(){
    let inputValue = commentInput.value; 
    let doheeId = '_dodo_hee';
    
    //추가할 요소 지정해주기
    let newLi = document.createElement('li');
    let newSpan = document.createElement('span');
    let newCon = document.createElement('span');

    //클래스이름 지정해주기
    newSpan.className = 'chat-id';
    newSpan.innerHTML = doheeId;
    newLi.className = 'commentList';
    newCon.innerHTML = inputValue;
    newCon.className = 'chat-content';

    //부모요소에 어팬드해주기
    newLi.appendChild(newSpan);
    newLi.appendChild(newCon);
    commentAddBox.appendChild(newLi);

    //댓글초기화
    commentInput.value = '' ;

});

// 엔터시 댓글 ul에 li 추가하기
commentInput.addEventListener('keypress', function(event){

    if(event.keyCode === 13){
        let inputValue = commentInput.value; 
        let doheeId = '_ggul_dodo';
        
        //추가할 요소 지정해주기
        let newLi = document.createElement('li');
        let newSpan = document.createElement('span');
        let newCon = document.createElement('span');

        //클래스이름 지정해주기
        newSpan.className = 'chat-id';
        newSpan.innerHTML = doheeId;
        newLi.className = 'commentList';
        newCon.innerHTML = inputValue;
        newCon.className = 'chat-content';

        //부모요소에 어팬드해주기
        newLi.appendChild(newSpan);
        newLi.appendChild(newCon);
        commentAddBox.appendChild(newLi);

        //댓글초기화
        commentInput.value = '' ;
    }

});

