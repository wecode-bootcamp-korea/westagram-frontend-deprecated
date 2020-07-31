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
    const commentListLeft = document.createElement("div"); //div tag make
    const commentAuthor = document.createElement("a"); //a tag make
    const newComment = document.createElement("span"); // span tag make
    const heart = document.createElement("img"); // img tag make
    newComment.innerHTML = `&nbsp${newCommentValue}`;
    heart.setAttribute("src", "./img/heart.png");
    heart.setAttribute("alt", "like-to-comment");
    commentAuthor.setAttribute("class", "name");
    commentListLeft.setAttribute("class", "commentListLeft");
    commentAuthor.innerHTML = "sotonghaeyo"; // make author default name, 나중에 로그인 한 아이디로 바꾸는 로직 추가하면 좋을 듯
    commentListLeft.appendChild(commentAuthor); // a > div
    commentListLeft.appendChild(newComment); // span > div
    commentbox.appendChild(commentListLeft); // div > li
    commentbox.appendChild(heart); // heart > li
    ul[0].appendChild(commentbox); // li > ul
    comment.value = ""; // reset textarea value
  };

  commentBtn.addEventListener("click", appendComment);
  comment.addEventListener("keydown", (e) => {
    let enter = e.keyCode ? e.keyCode : e.which;
    if (enter === 13) {
      appendComment();
    }
  });

  // - 좋아요 기능-
  const heartIcon = ele.getElementsByClassName("heartIcon")[0];
  const likeCount = ele.getElementsByClassName("likeCount")[0];
  let likeCountNum = Number(likeCount.textContent);
  let clickCount = 0;
  heartIcon.addEventListener("click", () => {
    clickCount++;
    if (clickCount % 2 === 0) {
      heartIcon.setAttribute("src", "./img/heart.png");
      likeCountNum--;
    }
    if (clickCount % 2 === 1) {
      heartIcon.setAttribute("src", "./img/redheart.png");
      likeCountNum++;
    }
    likeCount.textContent = likeCountNum;
  });
});
