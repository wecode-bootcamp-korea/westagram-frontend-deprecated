/* .commentInput의 값을 추출하여 게시버튼 누를때 댓글이 추가되도록 기능 구현
Dom을 사용하여 자바스크립트를 사용하여 html태그를 넣어주는 작업
ex) <p>(댓글 달기 입력 값)</p>
*/
const commentInput = document.getElementsByClassName('commentInput')[0];
console.log(commentInput);

document.getElementsByClassName('commentBtn')[0].addEventListener('click', addList);
function addList(){
    if(commentInput.value !== ""){
        let commentInput = document.getElementsByClassName('commentInput')[0];
        //.commentInput에 해당하는 class 불러와 담기
        
        const commentDivTags = document.createElement('div');
        const commentPTags = document.createElement('p');
        const commentText = document.createTextNode(commentInput.value);
        const commentStrongTags = document.createElement('strong');
        const commentNickname = document.createTextNode("rudqo_723");

        commentPTags.appendChild(commentText);
        commentStrongTags.appendChild(commentNickname);
        
        document.getElementsByClassName('myCommentList')[0].appendChild(commentDivTags).appendChild(commentStrongTags);
        document.getElementsByClassName('myCommentList')[0].appendChild(commentDivTags).appendChild(commentPTags);

        commentInput.value = null;
        //댓글 다는 입력 값 null로 변경
    }
}

/* 댓글 달기와 기능적으로는 같고 이벤트만 다름*/

commentInput.addEventListener("keyup", function(event) {
    //keyup 이벤트를 통해 게시 버튼 색상 변경
    if(commentInput.value !== "") {
        document.getElementsByClassName('commentBtn')[0].style.color = "#0095f6";
    }
    
    /* .commentInput의 값을 추출하여 Enter키를 누를때 댓글이 추가되도록 기능 구현 Dom을 사용하여 자바스크립트를 사용하여 html태그를 넣어주는 작업
    ex) <p>(댓글 달기 입력 값)</p>
    */
    if (event.key === "Enter" && commentInput.value !== "") {
        let commentInput = document.getElementsByClassName('commentInput')[0];
        //.commentInput에 해당하는 class 불러와 담기
        
        const commentDivTags = document.createElement('div');
        const commentPTags = document.createElement('p');
        const commentText = document.createTextNode(commentInput.value);
        const commentStrongTags = document.createElement('strong');
        const commentNickname = document.createTextNode("rudqo_723");

        commentPTags.appendChild(commentText);
        commentStrongTags.appendChild(commentNickname);
        document.getElementsByClassName('myCommentList')[0].appendChild(commentDivTags).appendChild(commentStrongTags);
        document.getElementsByClassName('myCommentList')[0].appendChild(commentDivTags).appendChild(commentPTags);

        commentInput.value = null;
        //댓글 다는 입력 값 null로 변경
    }
});

//게시 버튼 색상 변경
//keydown을 통해 비어있는 값을 가져온다.
commentInput.addEventListener("keydown", function(event) {
    if(commentInput.value === "") {
        document.getElementsByClassName('commentBtn')[0].style.color = "#B2DFFC";
    }
});
