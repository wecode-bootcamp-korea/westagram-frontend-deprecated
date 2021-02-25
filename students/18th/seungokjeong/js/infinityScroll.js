import articleData from "./articleData.js";

const contentWrap = document.querySelector(".content-wrap");
const scrollTrigger = document.querySelector(".scroll-trigger");
const userName = "seung_ok12";

const toggleHeart = e => {
  const target = e.target;
  if (target.className.includes("fa-heart")) {
    if (target.classList.contains("far")) {
      target.classList.remove("far");
      target.classList.add("fas");
    } else {
      target.classList.add("far");
      target.classList.remove("fas");
    }
  }
};

const toggleBookMark = () => {};

const checkUser = e => {
  const listOther = e.target.parentElement;
  const otherUserName = listOther.classList.contains("article-title")
    ? listOther.querySelector(".user-name").innerText
    : listOther.querySelector(".other-main").innerText;
  if (otherUserName !== userName) {
    alert("다른 사용자의 댓글, 게시물은 삭제할 수 없습니다.");
    return false;
  } else return true;
};

const addComment = (e, input, addButton, commentList) => {
  if (!input.value) addButton.classList.remove("active");
  else addButton.classList.add("active");
  if ((e.keyCode === 13 || e.type === "click") && input.value) {
    const commentText = input.value;
    const pTag = document.createElement("p");
    pTag.classList.add("list-other");
    pTag.innerHTML = `<span><a class="other-main">seung_ok12</a> ${commentText}</span>
      <i class="far fa-heart"></i><span class="delete-wrap comment"><span class="delete-btn"></span></span>`;
    commentList.append(pTag);

    const heart = pTag.querySelector("i");
    const deleteBtn = pTag.querySelector(".delete-wrap");
    heart.addEventListener("click", toggleHeart);
    deleteBtn.addEventListener("click", e => {
      deleteComment(e, commentList, pTag, deleteBtn);
    });
    input.value = "";
    addButton.classList.remove("active");
  }
};

const deleteComment = (e, commentList, pTag, deleteBtn) => {
  if (e.target !== deleteBtn) return;
  const check = checkUser(e);
  if (!check) return;
  selectType(commentList, pTag);
};

const selectType = (commentList, pTag) => {
  const popup = document.querySelector(".popup-wrap");
  const deleteBtn = popup.querySelector(".delete");
  const cancelBtn = popup.querySelector(".cancel");
  popup.classList.add("active");
  popup.addEventListener("click", e => {
    const target = e.target;
    if (target === deleteBtn) {
      if (commentList.nodeName === "ARTICLE") {
        commentList.remove();
      } else pTag.remove();
      popup.classList.remove("active");
    } else if (target === cancelBtn) popup.classList.remove("active");
  });
};

const loadArticle = () => {
  articleData.map(data => {
    const article = document.createElement("article");
    article.classList.add("content-article");
    article.innerHTML = `
        <div class="article-title">
            <img class="${data.storyActive ? "story-active" : ""}" src="${
      data.imgURL1
    }" alt="프로필 사진">
            <div class="title-user">
                <div class="user-name">${data.username}</div>
                <div class="user-place">${data.userplace}</div>
            </div>
            <span class="delete-wrap title"><span class="delete-btn"></span></span>
        </div>
        <div class="article-img">
            <img src="${data.imgURL2}" alt="게시물 사진">
        </div>
        <div class="article-comments">
            <div class="comments-reaction">
                <div class="reaction-type">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <div class="">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
            <div class="comments-list">
                <p class="list-like"><span><a class="like-main">
                ${data.likeMain}</a></span>님 <span><a class="like-other">
                ${data.like >= 100 ? "여러 명" : data.like + " 명"}
                </a>이 좋아합니다.</span></p>
                <p class="list-user"><span><a class="user-main">${
                  data.username
                }</a>${data.userComment}</span></p>
                <p class="list-comments"><span class="gray"><a>댓글 
                ${data.comment}개 모두 보기</a></span></p>
                <p class="list-other">
                    <span><a class="other-main">${data.firstComment.name}</a>${
      data.firstComment.comment
    }</span>
                    <i class="far fa-heart"></i>
                    <span class="delete-wrap comment"><span class="delete-btn"></span></span>
                </p>
                <p class="list-other">
                    <span><a class="other-main">${data.secondComment.name}</a>${
      data.secondComment.comment
    }</span>
                    <i class="far fa-heart"></i>
                    <span class="delete-wrap comment"><span class="delete-btn"></span></span>
                </p>
            </div>
            <span class="list-time gray">${data.time}시간 전</span>
        </div>
        <div class="article-myComment">
            <i class="far fa-smile"></i>
            <input class="comment-input" type="text" />
            <a class="myComment-add">게시</a>
        </div>`.replace(/\n/g, "");
    contentWrap.append(article);

    const commentList = article.querySelector(".comments-list");
    const commentInput = article.querySelector(".comment-input");
    const myCommentAdd = article.querySelector(".myComment-add");
    const hearts = article.querySelectorAll(".fa-heart");
    const deleteBtns = article.querySelectorAll(".delete-wrap");
    const bookMark = article.querySelector(".fa-bookmark");

    bookMark.addEventListener("click", toggleBookMark);
    hearts.forEach(heart => heart.addEventListener("click", toggleHeart));
    deleteBtns.forEach(deleteBtn =>
      deleteBtn.addEventListener("click", e => {
        const pTag = deleteBtn.parentElement;
        const commentList = pTag.parentElement;
        deleteComment(e, commentList, pTag, deleteBtn);
      })
    );
    myCommentAdd.addEventListener("click", e => {
      addComment(e, commentInput, myCommentAdd, commentList);
    });
    commentInput.addEventListener("keyup", e => {
      addComment(e, commentInput, myCommentAdd, commentList);
    });
  });
};

const option = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        loadArticle();
      }, 2000);
    }
  });
}, option);

loadArticle();
observer.observe(scrollTrigger);
