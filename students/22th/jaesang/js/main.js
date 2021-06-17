const commentButton = document.getElementsByClassName('push_comment_button')[0]

commentButton.addEventListener('click', function() {

    const ptag = document.createElement('p');
    const comment = document.getElementsByClassName('input_comment')[0].value;
    const article = document.getElementsByTagName('article')[0];

    if (!comment) {
        return;      //댓글창에 아무것도 안쓰면 appendChild 못하게 하기
    }

    ptag.className = "insert";

    ptag.style.padding = "0px 52px 0px 52px";
    ptag.style.fontSize = "14px"

    ptag.innerHTML = comment;

    article.appendChild(ptag);
})


const commentInput = document.getElementsByClassName('input_comment')[0]

commentInput.addEventListener('keyup', function(e) {
    const ptag = document.createElement('p');
    const comment = document.getElementsByClassName('input_comment')[0].value;
    const article = document.getElementsByTagName('article')[0];
    const commentButton = document.getElementsByTagName('button')[0];

    if (comment) {
        commentButton.style.color = "#0095f6"; //댓글창에 글쓰면 파란색
    } else {
        commentButton.style.color = "#c7e3fb"; //댓글창에 글 없으면 하늘색
    }

    if (!comment) {
        return;
    }

    if(e.code === 'Enter') {         //댓글삽입
        ptag.className = "insert";
    
        ptag.style.padding = "0px 52px 0px 52px";
        ptag.style.fontSize = "14px"
    
        ptag.innerHTML = comment;
    
        article.appendChild(ptag);
        return;
    }
})
