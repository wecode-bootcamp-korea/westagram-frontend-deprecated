//document
const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-form__comment-input");
const contentLikeBtn = document.querySelectorAll(".contents-container__btn")[0];
const searchInput = document.querySelector(".main-navbar__search");
const userIDList = document.querySelector(".userID-list");
const userIDSelectBox = document.querySelector(
  ".main-navbar__userID-select-box"
);
const IDArr = [
  "weconde_bootcamp",
  "wecode_founder",
  "wecode_Korea",
  "Wecode",
  "dlwlrma",
  "bangstagram",
  "ahnhani_92",
  "hyeri_0609",
  "rovvxhyo",
  "dok2gonzo",
  "redvlvet.smtown",
  "rain_oppa",
  "akmu_suhyun",
  "xxxibgdrgn",
];

// const IDArr = [["weconde_bootcamp", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670"],
//   ["wecode_Korea","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118404165_231868348195869_8580469197286780227_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=4zNrpkP_2aQAX-QCdxW&oh=4df121f572eb9cbab2b50ea1811223f3&oe=5F9A0EE2"],
//   ["wecode_founder","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670"],
//   ["Wecode","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670"],
//   ["dlwlrma","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RvwPjc4TrBcAX_ZMPZ2&oh=184d4cb8ac4c34e85e704ca95fa54e72&oe=5F99BE60"],
//   ["bangstagram","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79027887_477768239825725_6667415670197583872_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HkdtCsGcfE8AX_DNCqM&oh=07eda1b9e2334a16d1a9ad7be42159bd&oe=5F96A101"],
//   ["ahnhani_92","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/104341483_732598120860143_5300298685103431993_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=n36zLrR-XtsAX8WzcgW&oh=14e81221692836ae0fef33891952b3e4&oe=5F989F06"],
//   ["hyeri_0609","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119200381_331276324860172_1821211683805744261_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=eG96WvAB7asAX9OOfr1&oh=2d7cea246190623fa5a21de240849455&oe=5F973129]",
//   ["rovvxhyo","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/11417445_1616995708568384_1774259079_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8Fz6cXHUvLcAX8cmFfB&oh=d284e3a41912ee658d6d81dc9e974b08&oe=5F98F002"],
//   ["dok2gonzo","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118879378_605110107039841_9115459702318251431_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Xs5PcE7xIaMAX_Chwl_&oh=7e4795e44bfdfe80716f85b1a7fff8a6&oe=5F974EB7"],
//   ["redvlvet.smtown","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100960615_899289967207515_4391699026181881856_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Gp1QCow1IhcAX-ot_KA&oh=306c0206d73e7267afcb7a22c522c1df&oe=5F9A1934"],
//   ["rain_oppa","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94214426_220975295987805_6890963216101277696_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=vh2No-5uCEYAX9iTc9r&oh=d2e306bdf06d903209826d83975ecf56&oe=5F99B768"],
//   ["akmu_suhyun","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/44355569_1980306838728291_93296941756055552_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qC8unZruHD4AX_jDd3l&oh=396739a6c27bdad4195815f964a154a7&oe=5F966A0D"],
//   ["xxxibgdrgn","https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18950263_324780477958081_3378561527190650880_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SlPkEpVC8iIAX8oNAj6&oh=df48da5c2be89031b5db818361f20223&oe=5F995F43"]]
// const profileArr = [
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118404165_231868348195869_8580469197286780227_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=4zNrpkP_2aQAX-QCdxW&oh=4df121f572eb9cbab2b50ea1811223f3&oe=5F9A0EE2",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=H_f5rpNC-JcAX-H9XBL&oh=201ae308e04ca20b46abbd5339e91602&oe=5F969670",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RvwPjc4TrBcAX_ZMPZ2&oh=184d4cb8ac4c34e85e704ca95fa54e72&oe=5F99BE60",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79027887_477768239825725_6667415670197583872_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HkdtCsGcfE8AX_DNCqM&oh=07eda1b9e2334a16d1a9ad7be42159bd&oe=5F96A101",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/104341483_732598120860143_5300298685103431993_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=n36zLrR-XtsAX8WzcgW&oh=14e81221692836ae0fef33891952b3e4&oe=5F989F06",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119200381_331276324860172_1821211683805744261_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=eG96WvAB7asAX9OOfr1&oh=2d7cea246190623fa5a21de240849455&oe=5F973129",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/11417445_1616995708568384_1774259079_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8Fz6cXHUvLcAX8cmFfB&oh=d284e3a41912ee658d6d81dc9e974b08&oe=5F98F002",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118879378_605110107039841_9115459702318251431_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Xs5PcE7xIaMAX_Chwl_&oh=7e4795e44bfdfe80716f85b1a7fff8a6&oe=5F974EB7",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100960615_899289967207515_4391699026181881856_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Gp1QCow1IhcAX-ot_KA&oh=306c0206d73e7267afcb7a22c522c1df&oe=5F9A1934",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94214426_220975295987805_6890963216101277696_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=vh2No-5uCEYAX9iTc9r&oh=d2e306bdf06d903209826d83975ecf56&oe=5F99B768",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/44355569_1980306838728291_93296941756055552_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qC8unZruHD4AX_jDd3l&oh=396739a6c27bdad4195815f964a154a7&oe=5F966A0D",
//   "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18950263_324780477958081_3378561527190650880_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SlPkEpVC8iIAX8oNAj6&oh=df48da5c2be89031b5db818361f20223&oe=5F995F43",
// ];

const heartbeat = (targetLikeBtn) => {
  targetLikeBtn.classList.remove("heartbeat");
  targetLikeBtn.offsetWidth = targetLikeBtn.offsetWidth; // ?????????구글링해서 넣은 코드인데 이줄이 없으면 동작안함.. 너비가 뭔상관이쥐..?
  targetLikeBtn.classList.add("heartbeat");
};

const handleLikeBtn = (event) => {
  const targetLikeBtn = event.target;
  targetLikeBtn.classList.toggle("like-btn-fill");
  heartbeat(targetLikeBtn);
  // -> and re-adding the class
};

const delComment = (event) => {
  const targetcommentLi = event.target.parentNode.parentNode.parentNode;

  targetcommentLi.remove();
};

const addComment = (comment) => {
  //댓글창에 넣을 element
  const comments = document.querySelector(".comments-list");
  const commentLi = document.createElement("li");
  const comentBtns = document.createElement("div");
  const commentLikeBtn = document.createElement("button");
  const commentDelBtn = document.createElement("button");

  commentLi.className = "comment-container";
  comentBtns.className = "comment-container__btns";
  commentLikeBtn.className = "comment-container__likeBtn";
  commentDelBtn.className = "comment-container__delBtn";

  commentLi.innerHTML = `
  <div class="comment-container__coment">
    <span class="comment-container__ID">k.minhhh</span>
    <span class="comment-container__text"> ${comment} </span>
  </div>`;
  commentDelBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

  comentBtns.appendChild(commentLikeBtn);
  comentBtns.appendChild(commentDelBtn);
  commentLi.appendChild(comentBtns);
  comments.appendChild(commentLi);
  commentDelBtn.addEventListener("click", delComment);
  commentLikeBtn.addEventListener("click", handleLikeBtn);
};

const handleCommentSubmit = (event) => {
  event.preventDefault();
  const comment = commentInput.value;
  if (comment !== "") {
    addComment(comment);
    commentInput.value = "";
  }
};

const initSearchInput = () => {
  searchInput.value = "";
  userIDSelectBox.classList.remove("showing");
};

const handleSearchinput = () => {
  const searchKeyword = searchInput.value;

  if (searchKeyword === "") {
    initSearchInput();
  } else {
    const searchResult = IDArr.filter(
      (userID) => userID.indexOf(searchKeyword) !== -1
    );
    makeResultElements(searchResult);
  }
};

const makeResultElements = (searchResult) => {
  userIDList.innerHTML = ``;
  for (let i in searchResult) {
    const profileLi = document.createElement("li");
    profileLi.className = "userID";
    profileLi.innerHTML = `<div class="profile-container">
    <img
      class="profile-container__img"
      src="https://mblogthumb-phinf.pstatic.net/MjAxOTAxMDlfNTMg/MDAxNTQ3MDE4MzI4NDIy.O4sP_QpdWO9GiVpfkp92MLvnMGBRzm82q3VhEfz8GMQg.kTDiopuqqvHXHZJ784QiGWX-DwGaEj3mvQ04aCqPC0Qg.PNG.designpress2016/Instagram_logo_2016.png?type=w800"
    />
    <div class="profile-container__text">
      <span class="profile-container__name">${searchResult[i]}</span>
      <span class="profile-container__subtext">${searchResult[i]}</span>
    </div>
  </div>`;
    userIDList.appendChild(profileLi);
  }
  userIDSelectBox.classList.add("showing");
};

const mainInit = () => {
  commentForm.addEventListener("submit", handleCommentSubmit); //댓글 form에 eventlistner 추가
  contentLikeBtn.addEventListener("click", handleLikeBtn);
  searchInput.addEventListener("focusout", initSearchInput);
  searchInput, addEventListener("input", handleSearchinput);
};

mainInit();
