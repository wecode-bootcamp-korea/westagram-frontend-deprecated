"use strict";

const saveReply = () => {
  const addPostPosition = document.querySelector(".reply_contents");
  const createReplyList = document.createElement("li");
  createReplyList.className = "reply_content";
  addPostPosition.appendChild(createReplyList);

  const createReplyInformation = document.createElement("div");
  createReplyInformation.className = "content_information";
  createReplyList.appendChild(createReplyInformation);

  const createReplyUserId = document.createElement("p");
  createReplyUserId.className = "user_id";
  createReplyUserId.innerHTML = document.querySelector(
    ".aside_user_id"
  ).innerText;
  createReplyInformation.appendChild(createReplyUserId);

  const createReplyComment = document.createElement("p");
  createReplyComment.className = "reply_user_comment";
  createReplyComment.innerHTML = replyTextLocation.value;
  createReplyInformation.appendChild(createReplyComment);

  const createButtonContainer = document.createElement("div");
  createButtonContainer.className = "button_container";
  createReplyList.appendChild(createButtonContainer);

  const createLikeButton = document.createElement("i");
  createLikeButton.className = "far fa-heart";
  createButtonContainer.appendChild(createLikeButton);
  createButtonContainer.style.cursor = "grab";

  const createDeleteButton = document.createElement("i");
  createDeleteButton.className = "fas fa-times";
  createButtonContainer.appendChild(createDeleteButton);
  createButtonContainer.style.cursor = "grab";
};

const replyTextLocation = document.querySelector(".reply_input_text");
const buttonLocation = document.querySelector(".reply_input_button");

replyTextLocation.addEventListener("keyup", function () {
  replyTextLocation.value.length > 0
    ? ((buttonLocation.style.color = "#0095F6"),
      (buttonLocation.style.cursor = "grab"))
    : ((buttonLocation.style.color = "#b2dffc"),
      (buttonLocation.style.cursor = "default"));
});

buttonLocation.addEventListener("click", function () {
  if (replyTextLocation.value.length > 0)
    saveReply(),
      (replyTextLocation.value = ""),
      (buttonLocation.style.color = "#b2dffc"),
      (buttonLocation.style.cursor = "default");
});

replyTextLocation.addEventListener("keydown", function (enter) {
  const isVaild = replyTextLocation.value.length > 0 && enter.keyCode === 13;
  if (isVaild)
    saveReply(),
      (replyTextLocation.value = ""),
      (buttonLocation.style.color = "#b2dffc"),
      (buttonLocation.style.cursor = "default");
});

document.addEventListener("click", function (likedEvent) {
  const clickedLocation = likedEvent.target;
  const getId = clickedLocation.className;

  if (getId === "far fa-heart" && clickedLocation.style.color === "") {
    clickedLocation.className = "fas fa-heart";
    clickedLocation.style.color = "red";
  } else if (
    getId === "fas fa-heart" &&
    clickedLocation.style.color === "red"
  ) {
    clickedLocation.className = "far fa-heart";
    clickedLocation.style.color = "";
  }
});

document.addEventListener("click", function (deleteEvent) {
  const eventLocation = deleteEvent.target;
  const getId = eventLocation.className === "fas fa-times";
  const deleteReply = eventLocation.parentNode.parentNode;

  if (getId) {
    deleteReply.remove();
  }
});

document.addEventListener("click", function (profile) {
  const eventLocation = profile.target;
  const getId = eventLocation.className === "profile_icon";
  const containerPosition = document.querySelector(".tool_container");

  if (
    (getId && containerPosition.style.visibility === "") ||
    (getId && containerPosition.style.visibility === "hidden")
  ) {
    containerPosition.style.visibility = "visible";
  } else if (containerPosition.style.visibility === "visible") {
    containerPosition.style.visibility = "hidden";
  }
});

let userRawDatas = [
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/67310977_465262937359727_378893107090948096_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fmeYpzEkgOsAX8mQfwo&oh=fedb73f8f1bb9edec3eb03799d809ac2&oe=5F989ED4",
    userId: "disneykorea",
    userDescription: "디즈니코리아",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64886997_457854294768762_7513079337617195008_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=78UjzutcToMAX8OU9vJ&oh=af863274b5081dce3a8d130f342251aa&oe=5F9ADBB2",
    userId: "giantpengsoo",
    userDescription: "펭수",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/c0.169.1349.1349a/s320x320/119980400_801169863965518_5184439686970691341_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=BYYKe2FrIRIAX-8Ppn5&_nc_tp=16&oh=2b002fe7f56d30cf0018506dbba0b4be&oe=5F9BDA91",
    userId: "jennie__kjn",
    userDescription: "블랙핑크 제니",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/81029750_853855851709834_4225748821373616128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=vvjhTFeXLD4AX-COAjR&oh=0a2266b19db8b8e2baa9bad12325531a&oe=5F9DDB32",
    userId: "eunbining0904",
    userDescription: "박은빈",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/c180.0.1080.1080a/s320x320/118293947_305068233924738_28355865494073702_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=7ewBEGtYt6cAX-2KLtY&_nc_tp=16&oh=0bc0ef6fbf4566d63c4dc7b98e2c8f86&oe=5F995807",
    userId: "xeesoxee",
    userDescription: "한소희",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/46340545_276152866424151_6709415171837657088_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=oh9ygZ6rvwwAX-sX9_B&oh=1173aa4d62e3f0980f6a7ecd1e70720a&oe=5F9A849D",
    userId: "kakao.ryan",
    userDescription: "라이언(ryan)",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=AvzZNh0xPhsAX8Vnzmb&oh=0befa5ccc96d044a9761674349617ebe&oe=5F9AA7A0",
    userId: "wecode_bootcamp",
    userDescription: ">wecode | 위코드",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/115712474_636071880347359_8950118108606968740_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yBe28sUfiRsAX-X4D2y&oh=4762091ce3839e9c80ec0a9837c1e6a8&oe=5F9B5FD7",
    userId: "kakaofriends_jp",
    userDescription: "KAKAO FRIENDS",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/36889174_210323869639938_8609241663996428288_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=F9s_57OklcEAX9dT66o&oh=22d7e129753c1e77783c9909653dda6e&oe=5F9BC8DF",
    userId: "officialqueenmusic",
    userDescription: "Queen",
  },
  {
    userImage:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/12424526_191584921194210_221720306_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=PMXnhYC2I5YAX_OY7oZ&oh=afc9a564af573be4ebe13e6701a5e9b8&oe=5F9C317D",
    userId: "visitjeju.kr    ",
    userDescription: "제주관광공사",
  },
];

const makeListBox = (filteredData) => {
  const searchBoxLocation = document.querySelector(".search_box");
  const createList = document.createElement("li");
  createList.className = "search_list";
  searchBoxLocation.appendChild(createList);

  const createUserContainer = document.createElement("div");
  createUserContainer.className = "search_user_container";
  createList.appendChild(createUserContainer);

  const createUserImage = document.createElement("img");
  createUserImage.className = "search_user_image";
  createUserImage.src = filteredData.userImage;
  createUserImage.alt = "user_image";
  createUserContainer.appendChild(createUserImage);

  const createInfoContainer = document.createElement("div");
  createInfoContainer.className = "search_user_info";
  createUserContainer.appendChild(createInfoContainer);

  const createUserId = document.createElement("p");
  createUserId.className = "search_user_id";
  createUserId.innerHTML = filteredData.userId;
  createInfoContainer.appendChild(createUserId);

  const createUserDescription = document.createElement("p");
  createUserDescription.className = "search_user_description";
  createUserDescription.innerHTML = filteredData.userDescription;
  createInfoContainer.appendChild(createUserDescription);
};

const makeNoDataBox = () => {
  const searchBoxLocation = document.querySelector(".search_box");
  const createList = document.createElement("li");
  createList.className = "no_data_box";
  createList.innerHTML = "검색 결과가 없습니다.";
  searchBoxLocation.appendChild(createList);
};

const makeFilteredList = (userDatas) => {
  userDatas.forEach((userData) => makeListBox(userData));
};

document.addEventListener("keyup", function (keyIn) {
  const typedInText = document.querySelector(".search").value;
  const initializeList = document.querySelectorAll(".search_list");
  const isMatchedList = userRawDatas.filter((data) => {
    return data.userId.indexOf(typedInText) >= 0;
  });

  if (typedInText === "") {
    document.querySelectorAll(".no_data_box").forEach((list) => list.remove());
    document.querySelector(".search_box").style.visibility = "hidden";
  } else if (isMatchedList.length > 0) {
    initializeList.forEach((list) => list.remove());
    document.querySelectorAll(".no_data_box").forEach((list) => list.remove());
    document.querySelector(".search_box").style.visibility = "visible";
    makeFilteredList(isMatchedList);
  } else {
    initializeList.forEach((list) => list.remove());
    document.querySelectorAll(".no_data_box").forEach((list) => list.remove());
    makeNoDataBox();
    document.querySelector(".no_data_box").style.visibility = "visible";
  }
});
