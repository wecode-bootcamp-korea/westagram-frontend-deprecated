var data = [
  { name: "simpleandpoint" },
  { name: "boll_ah" },
  { name: "___a_nna__" },
  { name: "a_hyun_jj" },
  { name: "a_avv" },
  { name: "kangcheol_official" },
  { name: "aaanumi" },
  { name: "youare__jin" },
  { name: "akstpdnr" },
  { name: "aloha_yeryung" },
  { name: "akacia__" },
  { name: "aksakfn12" },
  { name: "hyuna_high" },
  { name: "riv.vv_onjae" },
  { name: "kimgwanyeong" },
  { name: "1_9_mom" },
  { name: "linhyehan" },
  { name: "mer.aini" },
  { name: "ashtanga_yoga_seoul" },
  { name: "iamasiami" },
  { name: "atelierquince" },
  { name: "_dahee92_" },
  { name: "wanna.meaning" },
  { name: "ppp.aron" },
  { name: "lea.hi.ju" },
  { name: "anjubob.zip" },
  { name: "atopjin" },
  { name: "auoqq" },
  { name: "_amuse_design_" },
  { name: "mean.suh" },
  { name: "peterashlee" },
  { name: "daida.i93" },
  { name: "r.aboutcoffee" },
  { name: "afineday.official" },
  { name: "6gdam" },
  { name: "aa____zavix" },
  { name: "ali_michael" },
  { name: "so1ar__" },
  { name: "risabae_art" },
  { name: "roses_are_rosie" },
  { name: "ROSÉ" },
  { name: "euuecoco" },
  { name: "kojun_actor" },
  { name: "songain87" },
  { name: "kyungeun_acoustic" },
  { name: "yeseul0104" },
  { name: "adore_writing" },
  { name: "cat_babyc" },
  { name: "i_am_a_dancer_jay" },
  { name: "kimsuna_officia" },
];

// 태그 지정
const comment = document.querySelector(".comment");
const commentList = document.querySelector(".comment-list");
const commentPostingButton = document.querySelector(".comment-posting-button");
const searchInput = document.querySelector(".searchInput");
const searchResult = document.querySelector(".search-result");

// 기본 댓글
const commentPosting2 = () => {
  const liTag = document.createElement("li");

  liTag.innerText = comment.value;
  commentList.appendChild(liTag);

  comment.value = "";
};

// 댓글에 버튼 추가
const commentPosting = () => {
  const liTag = document.createElement("li");
  const divCommentTag = document.createElement("div");
  const divButtonTag = document.createElement("div");

  const spanHeartTag = document.createElement("span");
  const spanDelTag = document.createElement("span");

  divCommentTag.innerText = comment.value;

  spanHeartTag.innerText = "🖤";
  spanHeartTag.addEventListener("click", heartButtonClick);
  spanDelTag.innerText = "x";
  spanDelTag.addEventListener("click", delButtonClick);

  divButtonTag.appendChild(spanHeartTag);
  divButtonTag.appendChild(spanDelTag);

  liTag.appendChild(divCommentTag);
  liTag.appendChild(divButtonTag);

  commentList.appendChild(liTag);

  comment.value = "";
};

// 하트 버튼 변경
const heartButtonClick = (e) => {
  const spanButtonTag = e.path[0];
  const spanButtonTagText = spanButtonTag.innerText;
  spanButtonTag.innerText = spanButtonTagText === "🖤" ? "❤️" : "🖤";
};

// 삭제 버튼
const delButtonClick = (e) => {
  const liTag = e.path[2];
  liTag.remove();
};

// 댓글 추가
const commentPostingButtonControl = (e) => {
  if (comment.value.trim() && (e.code === "Enter" || e.type === "click")) {
    commentPosting();
  }

  commentPostingButton.disabled = comment.value.trim() ? false : true;
};

// 찾기 버튼
const searchUser = (e) => {
  const searchUserName = searchInput.value;
  const resultUserList = data.filter((user) =>
    user.name.indexOf(searchUserName) > -1 ? user : ""
  );

  searchResult.innerHTML = resultUserList.map((user) => listFormat(user.name));
};

// 찾기 리스트 포맷
const listFormat = (name) =>
  `<div class="user-profile">
        <div class="user-profile-link-middie-img">
        <a href="#">
            <img src="./images/man.jpeg" />
        </a>
        </div>
        <div class="user-profile-link-middie-span">
        <a href="#">
            <span class="user-name">${name}</span>
        </a>
        </div>
    </div>`;

const focusSearchInput = (e) => {
  searchResult.style.visibility = e.type === "focus" ? "visible" : "hidden";
};

// 이벤트 추가
comment.addEventListener("keyup", commentPostingButtonControl);
commentPostingButton.addEventListener("click", commentPostingButtonControl);
searchInput.addEventListener("keyup", searchUser);
searchInput.addEventListener("focus", focusSearchInput);
searchInput.addEventListener("blur", focusSearchInput);
