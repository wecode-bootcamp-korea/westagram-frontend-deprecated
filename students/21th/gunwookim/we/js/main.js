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

const comment = document.querySelector(".comment");
const commentList = document.querySelector(".comment-list");
const commentPostingButton = document.querySelector(".comment-posting-button");
const searchInput = document.querySelector(".searchInput");
const searchResult = document.querySelector(".search-result");
const profileLinkImg = document.querySelector(".profile-link-img");

const commentPosting2 = () => {
  const liTag = document.createElement("li");

  liTag.innerText = comment.value;
  commentList.appendChild(liTag);

  comment.value = "";
};

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

const heartButtonClick = (e) => {
  const spanButtonTag = e.target;
  const spanButtonTagText = spanButtonTag.innerText;
  spanButtonTag.innerText = spanButtonTagText === "🖤" ? "❤️" : "🖤";
};

const delButtonClick = (e) => {
  const liTags = document.querySelectorAll("li");
  liTags.forEach((liTag) => {
    liTag.contains(e.target) ? liTag.remove() : "";
  });
};

const commentPostingButtonControl = (e) => {
  if (comment.value.trim() && (e.code === "Enter" || e.type === "click")) {
    commentPosting();
  }
  commentPostingButton.disabled = comment.value.trim() ? false : true;
};

const searchUser = (e) => {
  const searchUserName = searchInput.value;
  const resultUserList = data.filter((user) =>
    user.name.indexOf(searchUserName) > -1 ? user : ""
  );

  searchResult.innerHTML = resultUserList.map((user) => listFormat(user.name));
};

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

const clickProfileLinkImg = (e) => {
  const userInfo = document.querySelector(".user-info");

  profileLinkImg.contains(e.target)
    ? userInfo.classList.remove("displayNone")
    : userInfo.classList.add("displayNone");
};

comment.addEventListener("keyup", commentPostingButtonControl);
commentPostingButton.addEventListener("click", commentPostingButtonControl);
searchInput.addEventListener("keyup", searchUser);
searchInput.addEventListener("focus", focusSearchInput);
searchInput.addEventListener("blur", focusSearchInput);
profileLinkImg.addEventListener("click", clickProfileLinkImg);
document.body.addEventListener("click", clickProfileLinkImg);
