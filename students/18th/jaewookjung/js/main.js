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

//naviation bar에 검색창 클릭 이벤트
searchContainer.addEventListener("click", function (e) {
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

//댓글달기 이벤트 callback
function addComment(i) {
    if (addCommentBtnList[i].style.opacity === "1") {
        if (imgDateList[i].previousElementSibling.tagName !== "UL") {
            let parentTag = imgDateList[i].parentElement;
            let ul = document.createElement("ul");
            ul.id = i;
            ul.className = "comments_container";
            parentTag.insertBefore(ul, imgDateList[i]);
        }
        let comment = commentsInputList[i].value;
        let li = document.createElement("li");
        let commentContents = document.createElement("div");
        let commentIcons = document.createElement("div");
        let commentUser = document.createElement("span");
        let commentLike = document.createElement("i");
        let commentDelete = document.createElement("i");
        commentContents.className = "comment_contents";
        commentIcons.className = "comment_icons";
        commentUser.className = "comment_user";
        commentLike.className = "far fa-heart comment_like";
        commentDelete.className = "far fa-trash-alt comment_delete";
        commentUser.innerHTML = "Jhon Doe";
        commentContents.appendChild(commentUser);
        commentUser.after(comment);
        commentIcons.appendChild(commentDelete);
        commentIcons.appendChild(commentLike);
        li.appendChild(commentContents);
        commentContents.after(commentIcons);
        imgDateList[i].previousElementSibling.appendChild(li);
        li.id = "0" + li.parentElement.childElementCount;
        commentsInputList[i].value = "";

        //localStorage 저장
        let commentListObj = {
            id: li.id,
            body: comment,
        };
        if (localStorage.getItem(i) === null) {
            let commentList = [];
            commentList.push(commentListObj);
            localStorage.setItem(i, JSON.stringify(commentList));
        } else {
            let storageComment = JSON.parse(localStorage.getItem(i));
            storageComment.push(commentListObj);
            localStorage.setItem(i, JSON.stringify(storageComment));
        }
    }
}

//feed 내의 이벤트
for (let i = 0; i < sectionList.length; i++) {
    commentNum = 0;
    //더보기 버튼 이벤트
    showAllArticleBtn[i].addEventListener("click", function () {
        showAllArticleBtn[i].style.display = "none";
        imgArticlesList[i].style["white-space"] = "normal";
    });

    //댓글창 입력시 게시버튼 활성화 이벤트
    commentsInputList[i].addEventListener("keyup", function () {
        commentsInputList[i]
            ? (addCommentBtnList[i].style.opacity = 1)
            : (addCommentBtnList[i].style.opacity = 0.3);
    });

    //댓글 달기 이벤트
    addCommentBtnList[i].addEventListener("click", function () {
        addComment(i);
    });
    commentsInputList[i].addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            addComment(i);
        }
    });
}
