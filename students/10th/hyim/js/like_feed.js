const likeBtn = document.querySelector(".like-feed");
let flag;

function submitLike() {
  flag = likeBtn.id;
  if (flag == 1) {
    // console.log("if를 도니?");
    likeBtn.src =
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    likeBtn.id = "0";
  } else {
    likeBtn.src = "img/red_heart.jpeg";
    likeBtn.id = "1";
  }
}

likeBtn.addEventListener("click", submitLike);
