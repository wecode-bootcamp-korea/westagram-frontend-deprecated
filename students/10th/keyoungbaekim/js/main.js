/*  .commentInput의 값을 추출하여 게시버튼 누를때 댓글이 추가되도록 기능 구현
Dom을 사용하여 자바스크립트를 사용하여 html태그를 넣어주는 작업
ex) <p>(댓글 달기 입력 값)</p>
 */

function writingComment() {
    let commentInput = document.getElementsByClassName('commentInput')[0];
        //.commentInput에 해당하는 class 불러와 담기

        const commentDivTags = document.createElement('div');
        const commentPTags = document.createElement('p');
        const commentText = document.createTextNode(commentInput.value);
        const commentStrongTags = document.createElement('strong');
        const commentNickname = document.createTextNode("rudqo_723");

        commentPTags.appendChild(commentText);
        commentStrongTags.appendChild(commentNickname);

        const myCommentList = document.getElementsByClassName('myCommentList')[0];

        myCommentList
            .appendChild(commentDivTags)
            .appendChild(commentStrongTags);
        myCommentList
            .appendChild(commentDivTags)
            .appendChild(commentPTags);

        commentInput.value = null;
        //댓글 다는 입력 값 null로 변경
}


const commentInput = document.getElementsByClassName('commentInput')[0];
// console.log(commentInput);
const commentBtn = document.getElementsByClassName('commentBtn')[0];
commentBtn.addEventListener('click', addList);
function addList() {
    if (commentInput.value !== "") {
        writingComment();
    }
}

commentInput.addEventListener("keyup", function (event) {
    //keyup 이벤트를 통해 게시 버튼 색상 변경

    /* .commentInput의 값을 추출하여 Enter키를 누를때 댓글이 추가되도록 기능 구현 Dom을 사용하여 자바스크립트를 사용하여 html태그를 넣어주는 작업
    ex) <p>(댓글 달기 입력 값)</p>
    */
    if (event.key === "Enter" && commentInput.value !== "") {
        writingComment();
    }

    if (commentInput.value !== "") {
        document
            .getElementsByClassName('commentBtn')[0]
            .style
            .color = "#0095f6";
    }else {
        document
            .getElementsByClassName('commentBtn')[0]
            .style
            .color = "#B2DFFC";
        // console.log("test");
    }
});

const commentIconBtn = document.querySelector('.commentIconBtn');
// let heartImgSrc = document.getElementById('heartImg').src;
const heartImg = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"

commentIconBtn.addEventListener('click', event => {

    let heartImgSrc = document
        .getElementById('heartImg')
        .src;
    if (heartImgSrc === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png") {
        heartImgSrc = document
            .getElementById('heartImg')
            .src = "../keyoungbaekim/img/heart.png"
    } else {
        heartImgSrc = document
            .getElementById('heartImg')
            .src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    }
});

const searchInput = document.getElementsByClassName('fas searchInput')[0];
const iconAddSearch = document.getElementsByClassName('searchIconContainer')[0];

focusNavSearch = () => {
    searchInput.placeholder = "검색";

    const  searchIcon = document.createElement('i');
    iconAddSearch.appendChild(searchIcon).classList.add('fas', 'fa-search');
}

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = " 검색";
    document.getElementsByClassName('fas', 'fa-search')[0].remove();
});