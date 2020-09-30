//input의 길이가 1이상이면 '게시'버튼의 색 바뀜
const commentInput = document.querySelector("#commentsInput");
const commentPostBtn = document.querySelector("#commentsPost");

document.addEventListener('keyup',function() {
    commentInput.value.length >= 1? commentPostBtn.style.opacity = "1" : commentPostBtn.style.opacity = "0.3";
})

//게시'버튼을 누르면 기존의 댓글목록에 추가됨


//추가된 댓글까지 화면에 렌더링


//댓글을 게시한 후 input에 남아있는 value 삭제

//댓글 좋아요 삭제 기능

//아이디 검색 기능

//nav프로필 사진 클릭 시 메뉴 박스 생성