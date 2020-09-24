const btn = document.querySelector('.comment-btn');
const input = document.querySelector('.add-comment');

function addWithEnter() {
 if(window.event.keyCode == 13){
    const commentContainer = document.getElementsByClassName('js-container')[0];

    const commentDiv = document.createElement('div');
    const commentId = document.createElement('p');
    const commentTxt = document.createElement('p');
    const commentLike = document.createElement('img');
    commentLike.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"

    commentDiv.className = 'comments-list';
    commentId.className = 'comment-id';
    commentTxt.className = 'comment';
    commentLike.className = 'comment-like';

    commentTxt.innerHTML = input.value;
    commentId.innerHTML = "wecode_bootcamp"; 

    commentContainer.appendChild(commentDiv);
    commentDiv.appendChild(commentId);
    commentDiv.appendChild(commentTxt);
    commentDiv.appendChild(commentLike);
    
    input.value = '';
    }
}

function addWithBtn() {
    
       const commentContainer = document.getElementsByClassName('js-container')[0];
   
       const commentDiv = document.createElement('div');
       const commentId = document.createElement('p');
       const commentTxt = document.createElement('p');
       const commentLike = document.createElement('img');
       commentLike.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
   
       commentDiv.className = 'comments-list';
       commentId.className = 'comment-id';
       commentTxt.className = 'comment';
       commentLike.className = 'comment-like';
   
       commentTxt.innerHTML = input.value;
       commentId.innerHTML = "wecode_bootcamp"; 
   
       commentContainer.appendChild(commentDiv);
       commentDiv.appendChild(commentId);
       commentDiv.appendChild(commentTxt);
       commentDiv.appendChild(commentLike);

   }


input.addEventListener('keydown', function() {
    addWithEnter();
})

btn.addEventListener('click', function(){
    addWithBtn();
})