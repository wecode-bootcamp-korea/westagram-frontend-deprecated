import articleData from "./articleData.js";

const contentWrap = document.querySelector(".content-wrap");
const scrollTrigger = document.querySelector(".scroll-trigger");

const getUserName = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const { name } = getUserName();

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

const toggleComment = (e, commentTextBox) => {
  const target = e.target;
  if (target.innerText === "더보기") {
    target.innerText = "가리기";
    commentTextBox.classList.remove("close");
  } else if (target.innerText === "가리기") {
    target.innerText = "더보기";
    commentTextBox.classList.add("close");
  }
};

const checkUser = e => {
  const listOther = e.target.parentElement;
  const otherUserName = listOther.classList.contains("article-title")
    ? listOther.querySelector(".user-name").innerText
    : listOther.querySelector(".other-main").innerText;
  if (otherUserName !== name) {
    alert("다른 사용자의 댓글, 게시물은 삭제할 수 없습니다.");
    return false;
  } else return true;
};

const resizeTextArea = element => {
  element.style.height = "0px";
  element.style.height = element.scrollHeight + "px";
};

const addComment = (e, commentTextArea, addButton, commentList) => {
  const emptyTextCheck = commentTextArea.value.replace(/(\r\n\t|\n|\r\t)/gm, "")
    .length;
  if (!commentTextArea.value) addButton.classList.remove("active");
  else addButton.classList.add("active");
  if ((e.keyCode === 13 || e.type === "click") && emptyTextCheck !== 0) {
    const commentText = commentTextArea.value;
    const liTag = document.createElement("li");
    liTag.classList.add("list-other");
    liTag.innerHTML = `
    <p class="comment-wrap">
      <a class="other-main">seung_ok12</a><span class="comment-text">${commentText}</span><a class="more-comment">더보기</a>
    </p>
    <i class="far fa-heart"></i><span class="delete-wrap comment"><span class="delete-btn"></span></span>`;
    commentList.append(liTag);

    const commentWrap = liTag.querySelector(".comment-wrap");
    const commentTextBox = commentWrap.querySelector(".comment-text");
    const moreCommentButton = commentWrap.querySelector(".more-comment");

    if (commentTextBox.clientHeight > 14) {
      moreCommentButton.classList.add("active");
      commentTextBox.classList.add("close");
      moreCommentButton.addEventListener("click", e => {
        toggleComment(e, commentTextBox);
      });
    }

    const heart = liTag.querySelector("i");
    const deleteBtn = liTag.querySelector(".delete-wrap");
    heart.addEventListener("click", toggleHeart);
    deleteBtn.addEventListener("click", e => {
      deleteComment(e, commentList, liTag);
    });
    commentTextArea.value = "";
    addButton.classList.remove("active");
  }
};

const deleteComment = (e, commentList, liTag) => {
  const check = checkUser(e);
  if (!check) return;
  selectType(commentList, liTag);
};

const selectType = (commentList, liTag) => {
  const popup = document.querySelector(".popup-wrap");
  const deleteBtn = popup.querySelector(".delete");
  const cancelBtn = popup.querySelector(".cancel");
  popup.classList.add("active");
  popup.addEventListener("click", e => {
    const target = e.target;
    if (target === deleteBtn) {
      if (commentList.nodeName === "ARTICLE") {
        commentList.remove();
      } else liTag.remove();
      popup.classList.remove("active");
    } else if (target === cancelBtn) popup.classList.remove("active");
  });
};

const slideImage = (e, prevButton, nextButton, articleSlide) => {
  const target = e.target;
  const imageWidth = articleSlide.clientWidth;
  const leftValue = Number(articleSlide.style.left.split("px")[0]);
  const totalWidth =
    (articleSlide.querySelectorAll("li").length - 1) * imageWidth;

  if (target === prevButton) {
    if (leftValue + imageWidth === 0) {
      articleSlide.style.left = "0px";
      prevButton.classList.remove("active");
      return;
    } else {
      prevButton.classList.add("active");
      nextButton.classList.add("active");
      articleSlide.style.left = `${leftValue + imageWidth}px`;
    }
  } else if (target === nextButton) {
    if (leftValue - imageWidth === totalWidth * -1) {
      nextButton.classList.remove("active");
      articleSlide.style.left = `${leftValue - imageWidth}px`;
      return;
    } else {
      prevButton.classList.add("active");
      nextButton.classList.add("active");
      articleSlide.style.left = `${leftValue - imageWidth}px`;
    }
  } else return;
};

const loadArticle = () => {
  articleData.map(data => {
    const article = document.createElement("article");
    article.classList.add("content-article");
    article.innerHTML = `
        <div class="article-title">
          <div class="article-profile ${
            data.storyActive ? "story-active" : ""
          }"><img src="${data.imgURL1}" alt="프로필 사진">
          </div>
            <div class="title-user">
                <div class="user-name">${data.username}</div>
                <div class="user-place">${data.userplace}</div>
            </div>
            <span class="delete-wrap title"><span class="delete-btn"></span></span>
        </div>
        <div class="article-img">
            <ul class="article-slide"></ul>
            <div class="slide-button-wrap">
              <a class="slide-button prev"></a>
              <a class="slide-button next"></a>
            </div>
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
            <ul class="comments-list">
                <li class="list-like"><span><a class="like-main">
                ${data.likeMain}</a></span>님 <span><a class="like-other">
                ${data.like >= 100 ? "여러 명" : data.like + " 명"}
                </a>이 좋아합니다.</span></li>
                <li class="list-user"><p><a class="user-main">${
                  data.username
                }</a><span>${data.userComment}</span></p>
                <li class="list-comments"><span class="gray"><a>댓글 
                ${data.comment}개 모두 보기</a></span></li>
                <li class="list-other">
                    <p class="comment-wrap"><a class="other-main">${
                      data.firstComment.name
                    }</a>
                    <span class="comment-text">${
                      data.firstComment.comment
                    }</span>
                    </p>
                    <i class="far fa-heart"></i>
                    <span class="delete-wrap comment"><span class="delete-btn"></span>
                </li>
                <li class="list-other">
                    <p class="comment-wrap"><a class="other-main">${
                      data.secondComment.name
                    }</a>
                    <span class="comment-text">${
                      data.secondComment.comment
                    }</span>
                    </p>
                    <i class="far fa-heart"></i>
                    <span class="delete-wrap comment"><span class="delete-btn"></span></span>
                </li>
            </ul>
            <span class="list-time gray">${data.time}시간 전</span>
        </div>
        <div class="article-myComment">
            <i class="far fa-smile"></i>
            <textarea class="comment-input" type="text"></textarea>
            <a class="myComment-add">게시</a>
        </div>`.replace(/\n/g, "");
    contentWrap.append(article);

    const articleImg = article.querySelector(".article-img");
    if (contentWrap.clientWidth - 70 > 300) {
      articleImg.style.height = `${contentWrap.clientWidth - 151}px`;
    } else {
      articleImg.style.height = `300px`;
    }
    const articleSlide = article.querySelector(".article-slide");
    articleSlide.style.left = "0px";
    data.imgURL2.map(image => {
      const slideList = document.createElement("li");
      slideList.classList.add("slide-list");
      slideList.innerHTML = `
      <img src="${image}" alt="게시물 이미지"/>`;
      articleSlide.append(slideList);
    });

    const commentList = article.querySelector(".comments-list");
    const commentTextArea = article.querySelector(".comment-input");
    const myCommentAdd = article.querySelector(".myComment-add");
    const hearts = article.querySelectorAll(".fa-heart");
    const deleteBtns = article.querySelectorAll(".delete-wrap");
    const slideButtons = article.querySelector(".slide-button-wrap");
    const prevButton = slideButtons.querySelector(".prev");
    const nextButton = slideButtons.querySelector(".next");

    if (data.imgURL2.length > 1) nextButton.classList.add("active");

    slideButtons.addEventListener("click", e => {
      slideImage(e, prevButton, nextButton, articleSlide);
    });
    hearts.forEach(heart => heart.addEventListener("click", toggleHeart));
    deleteBtns.forEach(deleteBtn =>
      deleteBtn.addEventListener("click", e => {
        const liTag = deleteBtn.parentElement;
        const commentList = liTag.parentElement;
        deleteComment(e, commentList, liTag);
      })
    );
    myCommentAdd.addEventListener("click", e => {
      addComment(e, commentTextArea, myCommentAdd, commentList);
    });
    commentTextArea.addEventListener("keyup", e => {
      addComment(e, commentTextArea, myCommentAdd, commentList);
      resizeTextArea(commentTextArea);
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

window.addEventListener("resize", () => {
  const articleImg = document.querySelectorAll(".article-img");

  articleImg.forEach(article => {
    const articleSlide = article.querySelector(".article-slide");
    const leftValue = Number(articleSlide.style.left.split("px")[0]);
    const prevButton = article.querySelector(".prev");
    const nextButton = article.querySelector(".next");

    if (leftValue !== 0) {
      articleSlide.style.left = `0px`;
      prevButton.classList.remove("active");
      nextButton.classList.add("active");
    }

    article.style.width = `${contentWrap.clientWidth}px`;
    // 이미지 min-height는 300px
    if (contentWrap.clientWidth - 151 > 300) {
      article.style.height = `${contentWrap.clientWidth - 151}px`;
    } else {
      article.style.height = `300px`;
    }
  });
});
