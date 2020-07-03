function onclick_comment() {
  //1. text 값 가지고 옴
  let data = document.getElementById("comment").value;

  //2. 기존 ul
  let originUl = document.getElementById("post-comment-ul");

  //3. new li 추가
  let str =
    `<span class="post-comment-span-border">sdc3737dc</span> \n` +
    `<span class="post-comment-span-normal">${data}</span> \n`;
  let elem = document.createElement("li");
  elem.classList.add("post-comment-li");
  elem.innerHTML = str;
  originUl.append(elem);

  //4.기존 ui 변경

  //센터 div
  let orign_center_height = document.getElementsByClassName("post")[0].style
    .height;
  if (orign_center_height === "") {
    orign_center_height = 810;
  } else {
    orign_center_height = orign_center_height.split("px")[0];
  }
  let new_center_height = (document.getElementsByClassName(
    "post"
  )[0].style.height = parseInt(orign_center_height) + 21 + "px");
  console.log(new_center_height);

  //센터 아래 div

  let orign_footer_height = document.getElementsByTagName("main")[0].style
    .height;
  if (orign_footer_height === "") {
    orign_footer_height = 1400;
  }
  let new_footer_height = (document.getElementsByTagName(
    "main"
  )[0].style.height = parseInt(orign_footer_height) + 50 + "px");

  //댓글 div
  let orign_content_height = document.getElementById("post-footer-content")
    .style.height;
  if (orign_content_height === "") {
    orign_content_height = 120;
  }
  let new_content_height = (document.getElementById(
    "post-footer-content"
  ).style.height = parseInt(orign_content_height) + 21 + "px");

  //5. input 초기화
  document.getElementById("comment").value = "";
}

function onclick_heart() {
  let classData = document.getElementById("posts-heart");
  let data = document.getElementById("posts-heart-value").innerHTML.trim();

  if (data === "false") {
    classData.src = "./img/heart.png";
    document.getElementById("posts-heart-value").innerHTML = "true";
  } else {
    classData.src =
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    document.getElementById("posts-heart-value").innerHTML = "false";
  }
}
