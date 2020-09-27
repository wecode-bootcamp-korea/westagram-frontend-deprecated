const commentPostBtn = document.querySelectorAll(".commentPostBtn");
const commentTextArea = document.querySelectorAll(".commentTextArea");
const likeBtnBlack = document.querySelectorAll(".likeBtnBlack");
let commentLikeBtnBlack = document.querySelectorAll(".commentLikeBtnBlack");
let delBtn = document.querySelectorAll(".delBtn");

let tempInput = "";

for (let i = 0; i < commentTextArea.length; i++) {
  commentTextArea[i].addEventListener("keyup", inputFuncEnter);
  commentPostBtn[i].addEventListener("click", inputFuncClick);
  likeBtnBlack[i].addEventListener("click", likeBtnToggle);

  function inputFuncEnter(e) {
    if (event.keyCode === 13) {
      appendComment();
      commentTextArea[i].value = "";
    } else if (commentTextArea[i].value.length === 0) {
      return false;
    }
    postBtnActivate();
  }

  function inputFuncClick() {
    if (commentTextArea[i].value.length != 0) {
      appendComment();
      commentTextArea[i].value = "";
    } else if (commentTextArea[i].value.length === 0) {
      return false;
    }
    postBtnActivate();
  }

  function postBtnActivate() {
    if (commentTextArea[i].value.length >= 1) {
      commentPostBtn[i].style.color = "rgba(0,149,246,1)";
      commentPostBtn[i].style.cursor = "pointer";
      commentPostBtn[i].disabled = false;
    } else {
      commentPostBtn[i].style.color = "rgba(0,149,246,0.3)";
      commentPostBtn[i].style.cursor = "default";
      commentPostBtn[i].disabled = true;
    }
  }

  function appendComment() {
    let commentList = document.querySelectorAll(".commentList");
    let commentListItems = document.createElement("li");
    let nameAndComment = document.createElement("div");
    let commentNames = document.createElement("div");
    let userNameAnchor = document.createElement("a");
    let commentContents = document.createElement("div");
    let commentLikes = document.createElement("span");
    let likeBtn = document.createElement("button");
    let likeSpan = document.createElement("span");
    let txtNode = document.createTextNode("\u00A0");
    let commentLikeIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let commentLikeIconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    let delBtn = document.createElement("button");

    commentListItems.className = "commentListItems";
    nameAndComment.className = "nameAndComment";
    commentNames.className = "commentNames";
    userNameAnchor.className = "userNameATags";
    commentContents.className = "commentContents";
    commentLikes.className = "commentLikes";
    delBtn.className = "delBtn";

    commentLikeIcon.setAttribute("class", "commentLikeBtnBlack");
    commentLikeIcon.setAttribute("fill", "#262626");
    commentLikeIcon.setAttribute("viewBox", "0 0 48 48");
    commentLikeIcon.setAttribute("height", "12");
    commentLikeIcon.setAttribute("width", "12");
    commentLikeIconPath.setAttribute("class", "commentLikeBtnPath");
    commentLikeIconPath.setAttribute(
      "d",
      "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    );

    commentNames.innerHTML = "user_id_here";
    commentContents.innerHTML = commentTextArea[i].value;
    delBtn.innerHTML = "✕";

    commentList[i].appendChild(commentListItems);
    commentListItems.appendChild(nameAndComment);
    commentListItems.appendChild(commentLikes);
    nameAndComment.appendChild(commentNames);
    commentNames.appendChild(userNameAnchor);
    nameAndComment.appendChild(txtNode);
    nameAndComment.appendChild(commentContents);
    commentLikes.appendChild(delBtn);
    commentLikes.appendChild(likeBtn);
    likeBtn.appendChild(likeSpan);
    likeSpan.appendChild(commentLikeIcon);
    commentLikeIcon.appendChild(commentLikeIconPath);

    // const delComment = commentListItems.querySelector(".delBtn");
    delBtn.addEventListener("click", delFunc);
    function delFunc(event) {
      event.target.parentNode.parentNode.remove();
    }

    const extraLikes = commentListItems.querySelector(".commentLikeBtnBlack");
    extraLikes.addEventListener("click", extraLikeToggle);
    function extraLikeToggle(event) {
      if (event.target.getAttribute("fill") === "#262626") {
        event.target.firstChild.setAttribute(
          "d",
          "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
        );
        event.target.setAttribute("fill", "#ed4956");
      } else {
        event.target.setAttribute(
          "d",
          "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
        );
        event.target.parentNode.setAttribute("fill", "#262626");
      }
    }
  }

  function ignoreSpace() {
    if (tempInput.length === 0 && event.keyCode === 13) {
      console.log("ignoreSpace");
      return false;
    } else if (tempInput.length != 0 && event.keyCode === 8) {
      tempInput = tempInput.slice(0, tempInput.length - 9);
      console.log(tempInput);
    }
  }

  function likeBtnToggle() {
    let checkFill = likeBtnBlack[i].getAttribute("fill");
    checkFill === "#262626" ? BtnToRed() : btnToBlack();
  }

  function BtnToRed() {
    const likeBtnPath = document.querySelectorAll(".likeBtnBlack path");
    likeBtnBlack[i].setAttribute("fill", "#ed4956");
    likeBtnPath[i].setAttribute(
      "d",
      "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    );
  }

  function btnToBlack() {
    const likeBtnPath = document.querySelectorAll(".likeBtnBlack path");
    likeBtnBlack[i].setAttribute("fill", "#262626");
    likeBtnPath[i].setAttribute(
      "d",
      "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    );
  }
}

for (let j = 0; j < commentLikeBtnBlack.length; j++) {
  commentLikeBtnBlack = document.querySelectorAll(".commentLikeBtnBlack");
  commentLikeBtnBlack[j].addEventListener("click", commentLikeBtnToggle);

  function commentLikeBtnToggle() {
    let commentCheckFill = commentLikeBtnBlack[j].getAttribute("fill");
    commentCheckFill === "#262626" ? commentBtnToRed() : commentBtnToBlack();
  }

  function commentBtnToRed() {
    const commentLikeBtnPath = document.querySelectorAll(
      ".commentLikeBtnBlack path"
    );
    commentLikeBtnBlack[j].setAttribute("fill", "#ed4956");
    commentLikeBtnPath[j].setAttribute(
      "d",
      "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    );
  }

  function commentBtnToBlack() {
    const commentLikeBtnPath = document.querySelectorAll(
      ".commentLikeBtnBlack path"
    );
    commentLikeBtnBlack[j].setAttribute("fill", "#262626");
    commentLikeBtnPath[j].setAttribute(
      "d",
      "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    );
  }
}
