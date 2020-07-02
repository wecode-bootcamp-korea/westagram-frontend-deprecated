const shortenStoryProfileId = document.querySelectorAll(".story-profile-id");
const commentForm = document.querySelectorAll(".comment-input");
const commentBox = document.querySelectorAll(".comment");
const commentInput = document.querySelectorAll(".input");
const commentBtn = document.querySelectorAll(".comment-btn");
const commentId = document.querySelector(".right-profile-id").textContent;
const heartIcon = document.querySelectorAll(".heart");
const fillHeart = document.querySelectorAll(".fillheart");

function handleHeartColor() {
  for (let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener("click", function () {
      heartIcon[i].style.visibility = "hidden";
      fillHeart[i].style.visibility = "visible";
    });
  }
}

function handleFillheartColor() {
  for (let i = 0; i < fillHeart.length; i++) {
    fillHeart[i].addEventListener("click", function () {
      fillHeart[i].style.visibility = "hidden";
      heartIcon[i].style.visibility = "visible";
    });
  }
}

function handleComment() {
  for (let i = 0; i < commentForm.length; i++) {
    commentForm[i].addEventListener("submit", function (e) {
      e.preventDefault();
      const commentLi = document.createElement("li");
      const comment = commentInput[i].value;
      commentLi.innerHTML = `<strong>${commentId}</strong> ${comment}`;
      commentBox[i].appendChild(commentLi);
      commentInput[i].value = "";
    });
  }
}

function handleCommentBtnColor() {
  for (let i = 0; i < commentBtn.length; i++) {
    commentInput[i].addEventListener("keyup", function () {
      if (commentInput[i].value.length >= 1) {
        commentBtn[i].style.opacity = 1;
      } else {
        commentBtn[i].style.opacity = 0.5;
      }
    });
  }
}

function shortenId() {
  for (let i = 0; i < shortenStoryProfileId.length; i++) {
    if (shortenStoryProfileId[i].textContent.length >= 10) {
      shortenStoryProfileId[i].textContent =
        shortenStoryProfileId[i].textContent.slice(0, 10) + "...";
    }
  }
}

function handleSearchIcon() {
  const navSearch = document.querySelector(".search");
  const searchIcon = document.querySelector(".search-icon");
  navSearch.addEventListener(
    "click",
    (search = () => {
      searchIcon.style.left = "10px";
    })
  );
  navSearch.addEventListener(
    "blur",
    (search = () => {
      searchIcon.style.left = "78px";
    })
  );
}

function init() {
  shortenId();
  handleComment();
  handleCommentBtnColor();
  handleHeartColor();
  handleFillheartColor();
  handleSearchIcon();
}

init();
