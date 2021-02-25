const navSearch = document.querySelector(".nav_search");
const searchContainer = document.querySelector(".search_container");
const searchInput = document.querySelector(".search");
const searchSpan = document.querySelector(".search_span");
const searchCancleBtn = document.querySelector(".cancle_search_btn");
const sectionList = document.querySelectorAll("section");
const imgContentsList = document.querySelectorAll(".img_contents");
const imgDateList = document.querySelectorAll("time");
const imgArticlesList = document.querySelectorAll(".img_articles");
const showAllArticleBtn = document.querySelectorAll(".show_all_article");
const commentsInputList = document.querySelectorAll(".comments_text");
const addCommentBtnList = document.querySelectorAll(".add_comment_btn");
const commentsBlockList = document.querySelectorAll(".comments_column");
const likesNum = document.querySelectorAll(".likes_num");

// //좋아요 개수 변수
// let likesCount = 0;

//naviation bar에 검색창 클릭 이벤트
searchContainer.addEventListener("click", function (e) {
    console.log(e.target.childNodes, e.target.children);
    searchInput.style.display = "flex";
    searchInput.focus();
    searchCancleBtn.style.display = "flex";
    searchSpan.style.display = "none";
});

//검색창 x버튼 클릭 이벤트
searchCancleBtn.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.style.display = "none";
    searchCancleBtn.style.display = "none";
    searchSpan.style.display = "flex";
});

//feed 내의 이벤트
for (let i = 0; i < sectionList.length; i++) {
    //더보기 버튼 이벤트
    showAllArticleBtn[i].addEventListener("click", function () {
        showAllArticleBtn[i].style.display = "none";
        imgArticlesList[i].style["white-space"] = "normal";
    });

    //댓글창 입력시 게시버튼 활성화 이벤트
    commentsInputList[i].addEventListener("keyup", function () {
        if (commentsInputList[i].value === "") {
            addCommentBtnList[i].style.opacity = 0.3;
        } else {
            addCommentBtnList[i].style.opacity = 1;
        }
    });

    //댓글 달기 이벤트
    addCommentBtnList[i].addEventListener("click", function () {
        if (addCommentBtnList[i].style.opacity === "1") {
            if (imgDateList[i].previousElementSibling.tagName !== "UL") {
                let parentTag = imgDateList[i].parentElement;
                let ul = document.createElement("ul");
                ul.className = "comments_container";
                parentTag.insertBefore(ul, imgDateList[i]);
            }
            let comment = commentsInputList[i].value;
            let li = document.createElement("li");
            let commentContents = document.createElement("div");
            let commentUser = document.createElement("span");
            let commentLike = document.createElement("i");
            commentContents.className = "comment_contents";
            commentUser.className = "comment_user";
            commentLike.className = "far fa-heart comment_like";
            commentUser.innerHTML = "Jhon Doe";
            commentContents.appendChild(commentUser);
            commentUser.after(comment);
            li.appendChild(commentContents);
            commentContents.after(commentLike);
            imgDateList[i].previousElementSibling.appendChild(li);
            commentsInputList[i].value = "";

            //좋아요 기능 구현중
            // const commentLikeBtn = document.querySelectorAll(".comment_like");

            // for (let j = 0; j < commentLikeBtn.length; j++) {
            //     commentLikeBtn[j].addEventListener("click", function () {
            //         commentLikeBtn[j].style.color === "red"
            //             ? ((commentLikeBtn[j].style.color = "black"),
            //               (commentLikeBtn[j].className =
            //                   "far fa-heart comment_like"),
            //               likesCount--)
            //             : ((commentLikeBtn[j].style.color = "red"),
            //               (commentLikeBtn[j].className =
            //                   "fas fa-heart comment_like"),
            //               likesCount++);
            //         likesNum[i].innerHTML = likesCount;
            //     });
            // }
        }
    });
}
