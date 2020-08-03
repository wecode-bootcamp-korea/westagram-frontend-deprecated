const inputComment = document.querySelector(".inputComment"),
    submitButton = document.querySelector(".submitButton");  //게시 버튼 
let commentList = document.querySelector(".commentList"); // 댓글 받아서 저장하는 리스트


// let text_comment;

//  인풋값을 저장,삭제 기능이 담긴  함수  
function paintList(text) {
    const CRE_LI = document.createElement("li");
    const USER_ID = document.createElement("span");
    const USER_COMMENT = document.createElement("span");
    const LIKE_IMG = document.createElement("span");
    LIKE_IMG.innerHTML = `
    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
    `
    LIKE_IMG.className = "LIKE_IMG"
    USER_ID.className = "USER_NEW";
    USER_ID.innerHTML = "ssamwonn";
    USER_COMMENT.innerHTML = text;
    CRE_LI.appendChild(USER_ID);
    CRE_LI.appendChild(USER_COMMENT);
    CRE_LI.appendChild(LIKE_IMG)
    commentList.appendChild(CRE_LI);

}

submitButton.addEventListener('click', function (e) {
    paintList(inputComment.value);
    inputComment.value = '';


})

//리스트 삭제할때                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
// delBtn.addEventListener('click', function () {
//     const btn = event.target;
//     const li = btn.parentNode;
//     comment_list.remove(li);

// });





//인풋값을 전달 받아 이벤트 발생시키는 함수 







//리스트에 추가된 내용 삭제하는 함수 