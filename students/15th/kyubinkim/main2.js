const pushSubmit = document.querySelector(".box");
const pushText = document.querySelector("#textarea");
const pushList = document.querySelector("#list");
const searchBox = document.querySelector(".searchid");
const search = document.querySelector(".userinfo");
const searchInput = document.querySelector(".searchInput");

let comment = [];
const pushCommentLocal = "comment";
const loginLog = [
  {
    id: "wecode_bootcamp",
    img:
      "https://i.pinimg.com/564x/bd/b1/be/bdb1be1c455075537fcfcb13121b66d2.jpg",
    userProfile: ">wecode | 위코드",
  },
  {
    id: "wecode_founder",
    img:
      "https://i.pinimg.com/564x/34/dd/f2/34ddf290ab42740d1ff1673cf5796f72.jpg",
    userProfile: "송은우 (Eun Woo Song)",
  },
  {
    id: "wecode_korea",
    img:
      "https://i.pinimg.com/564x/b2/89/91/b289919d2df30475d7cb5386d49c77cb.jpg",
    userProfile: "",
  },
  {
    id: "9bin08",
    img:
      "https://i.pinimg.com/564x/71/8d/37/718d3757c3f300f28a37863313776578.jpg",
    userProfile: "나는야 김규빈",
  },
];

// 검색 기능 구현
function matchId(value) {
  const searchId = searchInput.value;
  return value.indexOf(searchId) != -1;
}

function showInput(userinfomation) {
  const userId = document.createElement("li");
  userId.className = "userinfo_id";
  userId.innerHTML = `
    <img class="id_img" src=${userinfomation.img}>
    <div class='id_content'>
        <span class='id_username'>${userinfomation.id}</span>
        <span class='id_userprofile'>${userinfomation.userProfile}</span>
    </div> 
    `;
  search.appendChild(userId);
}

searchInput.addEventListener("keyup", function () {
  search.innerHTML = "";

  if (searchInput.value) {
    const filterArr = loginLog.filter((e) => matchId(e.id));
    if (filterArr) {
      filterArr.forEach(function (e) {
        showInput(e);
      });
    }
  }
});

// 댓글 기능 구현 함수
function pushComment(text, num) {
  const li = document.createElement("li");
  const userName = document.createElement("span");
  const span = document.createElement("span");
  const fontawsome = document.createElement("i");
  const button = document.createElement("button");
  const delButton = document.createElement("button");
  const like = document.createElement("span");
  const newId = comment.length + 1;
  li.id = newId;
  num = 0;
  userName.innerHTML = "UserName";
  span.innerHTML = text;
  like.innerText = num;
  delButton.addEventListener("click", deleteComment);
  delButton.className = "delbutton";
  delButton.innerHTML = "X";
  fontawsome.addEventListener("click", changeColor);
  fontawsome.className = "heart";
  fontawsome.innerHTML = `<i class="far fa-heart"></img>`;
  button.innerHTML = "좋아요";
  pushList.appendChild(li);
  li.appendChild(userName);
  li.appendChild(span);
  li.appendChild(like);
  li.appendChild(delButton);
  li.appendChild(fontawsome);

  fontawsome.appendChild(button);

  // 클릭시 좋아요 카운트 && 컬러 변경
  function changeColor() {
    let change = false;
    if (!change) {
      like.innerText = 1 + num++;
      fontawsome.style.color = "red";
      button.innerHTML = "취소";
      change = true;
    }
  }

  const commentObj = {
    text,
    id: newId,
    num,
  };
  comment.push(commentObj);
  local();
}

//클릭시 댓글 삭제 && 로컬 스토리지 필터링

function deleteComment(e) {
  const btn = e.target;
  const li = btn.parentNode;
  pushList.removeChild(li);
  const removePushList = comment.filter((comment) => {
    return comment.id !== parseInt(li.id);
  });
  comment = removePushList;
  local();
}

// 버튼 클릭시 댓글 보내기 함수
function handleSubmit(e) {
  e.preventDefault();
  const pushWrite = pushText.value;
  if (pushWrite !== "") {
    pushComment(pushWrite);
    pushText.value = "";
  }
}

// 로컬 스토리지 함수
function local() {
  localStorage.setItem(pushCommentLocal, JSON.stringify(comment));
}

// 로컬 뿌려주기 함수
function getLoadList() {
  const getList = localStorage.getItem(pushCommentLocal);

  if (getList !== null) {
    const paresList = JSON.parse(getList);
    paresList.forEach((comment) => {
      pushComment(comment.text);
    });
  }
}

function init() {
  pushSubmit.addEventListener("submit", handleSubmit);
  getLoadList();
}

init();
