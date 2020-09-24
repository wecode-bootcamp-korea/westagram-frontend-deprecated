// get feedlist to array
const articlelist = document.getElementsByClassName("feed");
const article = Array.from(articlelist);

// feed별 기능 구현
article.forEach((ele) => {
  // 댓글기능
  const ul = ele.getElementsByTagName("ul"); // get ul
  const commentBtn = ele.getElementsByClassName("commentBtn")[0]; // get buttton
  const comment = ele.getElementsByClassName("comment")[0]; // get textarea
  const appendComment = function () {
    let newCommentValue = comment.value; // get textarea Value
    const commentbox = document.createElement("li"); //li tag make
    const commentListLeft = document.createElement("div"); //commentListLeft div tag make
    const commentListRight = document.createElement("div"); // commentListRight div tag make
    const commentAuthor = document.createElement("a"); //a tag make
    const newComment = document.createElement("span"); // span tag make
    const heart = document.createElement("img"); // img tag make
    const deleteBtn = document.createElement("button"); // deleteBtn make
    const deleteImg = document.createElement("img"); // deleteBtn img make
    newComment.innerHTML = `&nbsp${newCommentValue}`;
    heart.setAttribute("class", "commentLikeBtn");
    heart.setAttribute("alt", "like-to-comment");
    heart.setAttribute("src", "./img/heart.png");
    commentListRight.setAttribute("class", "commentListRight");
    deleteBtn.setAttribute("class", "commentDeleteBtn");
    deleteImg.setAttribute("alt", "deletebutton");
    deleteImg.setAttribute("src", "./img/del.png");
    commentAuthor.setAttribute("class", "name");
    commentListLeft.setAttribute("class", "commentListLeft");
    commentAuthor.innerHTML = "sotonghaeyo"; // make author default name, 나중에 로그인 한 아이디로 바꾸는 로직 추가하면 좋을 듯
    commentListLeft.appendChild(commentAuthor); // a > leftdiv
    commentListLeft.appendChild(newComment); // span > leftdiv
    deleteBtn.appendChild(deleteImg); // del img > del btn
    commentListRight.appendChild(heart); // heartimg > rightdiv
    commentListRight.appendChild(deleteBtn); //delbtn > rightdiv
    commentbox.appendChild(commentListLeft); // leftdiv > li
    commentbox.appendChild(commentListRight); // rightdiv > li
    ul[0].appendChild(commentbox); // li > ul
    comment.value = ""; // reset textarea value

    // - 추가된 댓글 삭제 -
    deleteBtn.addEventListener("click", () => {
      commentbox.remove();
    }); //

    // - 추가된 댓글 좋아요 -
    let commentClickCount = 0;
    heart.addEventListener("click", () => {
      commentClickCount++;
      if (commentClickCount % 2 === 0) {
        heart.setAttribute("src", "./img/heart.png");
      }
      if (commentClickCount % 2 === 1) {
        heart.setAttribute("src", "./img/redheart.png");
      }
    });
  };

  // - 댓글 추가 -
  commentBtn.addEventListener("click", appendComment);
  comment.addEventListener("keydown", (e) => {
    let enter = e.keyCode ? e.keyCode : e.which;
    if (enter === 13) {
      appendComment();
    }
  });

  // - 댓글 삭제 -
  const liarray = Array.from(ele.getElementsByTagName("li"));
  liarray.forEach((liitem) => {
    const deleteBtn = liitem.getElementsByClassName("commentDeleteBtn")[0];
    deleteBtn.addEventListener("click", () => {
      liitem.remove();
    });
  });

  // - 좋아요 기능-
  // - 메인피드 -
  const heartIcon = ele.getElementsByClassName("heartIcon")[0];
  const likeCount = ele.getElementsByClassName("likeCount")[0];
  let likeCountNum = Number(likeCount.textContent);
  let mainClickCount = 0;
  heartIcon.addEventListener("click", () => {
    mainClickCount++;
    if (mainClickCount % 2 === 0) {
      heartIcon.setAttribute("src", "./img/heart.png");
      likeCountNum--;
    }
    if (mainClickCount % 2 === 1) {
      heartIcon.setAttribute("src", "./img/redheart.png");
      likeCountNum++;
    }
    likeCount.textContent = likeCountNum;
  });

  // - 기존 댓글 좋아요 -
  const commentLikeBtnList = Array.from(
    ele.getElementsByClassName("commentLikeBtn")
  );
  commentLikeBtnList.forEach((commentLikeBtn) => {
    let orgcommentClickCount = 0;
    commentLikeBtn.addEventListener("click", () => {
      orgcommentClickCount++;
      if (orgcommentClickCount % 2 === 0) {
        commentLikeBtn.setAttribute("src", "./img/heart.png");
      }
      if (orgcommentClickCount % 2 === 1) {
        commentLikeBtn.setAttribute("src", "./img/redheart.png");
      }
    });
  });
});
