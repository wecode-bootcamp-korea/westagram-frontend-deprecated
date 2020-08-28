// 자동으로 시간 넣는거 구현하려 했으나...
const minutes = document.querySelector("div.feed__minutes");
minutes.classList.add("feed__minute");
minutes.innerHTML = `<div>42분 전</div>`;
const comment = document.querySelector(".feed__button > input");
const button = document.querySelector(".feed__button>button");
const feedComments = document.querySelector(".feed__comments");
const myId = document.querySelector("div.profile__id>div:first-child")
  .innerHTML;

comment.addEventListener("keyup", activeBtn);

function activeBtn() {
  comment.value.length >= 1
    ? button.classList.add("btnActive")
    : button.classList.remove("btnActive");
}

// 댓글 추가하기
button.addEventListener("click", addComment);
comment.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addComment();
  }
});

function addComment() {
  let comment_letter = comment.value;
  let reply = document.createElement("div");
  reply.classList.add("feed__comment");
  let replySpan = document.createElement("span");
  replySpan.innerHTML = `<div class="comment__block">
                                <span style="font-size: 16px; font-weight: 600;">${myId}</span> 
                                <span>${comment_letter} </span>
                                <img src="./img/빈하트.png" class="comment__heart">
                        </div>
                             `;
  reply.appendChild(replySpan);
  if (comment_letter.length !== 0) {
    feedComments.appendChild(reply);
  }
  comment.value = "";
  comment.focus();
  activeBtn();
  addHeart();
}

//  댓글 하트 추가하기
let heart = document.querySelectorAll(".comment__heart");
// comment.addEventListener('keyup', addHeart);

function addHeart() {
  heart = document.querySelectorAll(".comment__heart");
  // for (let i = 0; i < heart.length; i++) { for문으로 돌리면 왜 안되는지 이해가 안가서 놔둠
  let i = heart.length - 1;
  console.log(i);
  heart[i].addEventListener("click", () => {
    console.log(i);
    heart[i].getAttribute("src") === "./img/빈하트.png"
      ? heart[i].setAttribute("src", "./img/heart-1348868.svg")
      : heart[i].setAttribute("src", "./img/빈하트.png");
  });
}

// 아이디 로고 박스
const clickBox = document.querySelector(".ClickBox"),
  profileImg = document.querySelector(".nav__icon>a:nth-child(5)");

profileImg.addEventListener("click", (e) => {
  idClick();
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  // 바디 클릭하면 버튼 박스 사라지게 하는 코드 업데이트 필요
  if (e.clientY > 42 || e.clientY < 14) {
    clickBox.classList.remove("ClickBoxActive");
  }
});

function idClick() {
  clickBox.classList[1] === undefined
    ? clickBox.classList.add("ClickBoxActive")
    : clickBox.classList.remove("ClickBoxActive");
}
