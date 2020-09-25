function addCommentToFeed(e) {
  const commentList = e.target.parentNode.previousElementSibling;
  const getCommentText = e.target.parentNode.children[0].children[0];
  const newCommentListDiv = document.createElement('div');
  newCommentListDiv.className = "comment-list-child";
  const newCommentListDivSpan = document.createElement('span');
  newCommentListDivSpan.className = "comment-id";
  newCommentListDivSpan.innerText = "wecode_bootcamp";
  const heartContainerDiv = document.createElement('div');
  heartContainerDiv.className = "comment-heart";
  const heartIcon = document.createElement('i');
  heartIcon.className = "fa fa-heart-o";
  const removeIconContainerDiv = document.createElement('div');
  removeIconContainerDiv.className = 'comment-delete';
  const removeIcon = document.createElement('i');
  removeIcon.className = "fa fa-times";
  removeIcon.addEventListener('click', removeComment);
  heartIcon.addEventListener('click', toggleHeartColor);
  heartContainerDiv.appendChild(heartIcon);
  removeIconContainerDiv.appendChild(removeIcon);
  newCommentListDiv.appendChild(newCommentListDivSpan);
  newCommentListDiv.append(getCommentText.value);
  newCommentListDiv.appendChild(heartContainerDiv);
  newCommentListDiv.appendChild(removeIconContainerDiv);
  getCommentText.value = "";
  e.target.classList.remove('active');
  commentList.appendChild(newCommentListDiv);
}

function activateCommentButton(obj) {
  const addCommentButton = obj.parentNode.parentNode.children[1];
  obj.value ? addCommentButton.classList.add('active') : addCommentButton.classList.remove('active');
}

function addHeartColorWhenClicked() {
  const heartCollection = document.querySelectorAll('.fa-heart-o');
  heartCollection.forEach(heart => heart.addEventListener('click', toggleHeartColor));
}

function toggleHeartColor(e) {
  e.target.className = e.target.className === "fa fa-heart-o" ? "fa fa-heart" : "fa fa-heart-o";
}

function removeComment(e) {
  e.target.parentNode.parentNode.remove();
}

function enterPushSubmit() {
  const commentTextAreaCollection = document.querySelectorAll('.comment-textarea');
  commentTextAreaCollection.forEach((commentTextArea) => commentTextArea.addEventListener('keyup', enterSubmit));
}

function enterSubmit(e) {
  if (e.keyCode === 13) {
    if (!e.target.value) return;
    e.preventDefault;
    e.target.parentNode.parentNode.children[1].click();
  }
}

function personalProfileClickSubMenu() {
  const personalProfile = document.querySelector('.personal-profile-img');
  personalProfile.addEventListener('click', activatePersonalProfileSubMenu);

}

function activatePersonalProfileSubMenu() {
  const personalProfileSubMenu = document.querySelector('.personal-profile-sub-menu');
  personalProfileSubMenu.classList.value.includes('active') ? personalProfileSubMenu.classList.remove('active') : personalProfileSubMenu.classList.add('active');
}

function searchProfile() {
  const searchInput = document.querySelector('.search input');
  searchInput.addEventListener('keyup', liveSearchForProfile);
}

function allocateStoryProfileList() {
  let dataContainer = [];
  let storyElementContainer = document.querySelector('.story-element-container');
  PROFILE_DATA.forEach((data) => {
    if (data["id"] >= 14) return;
    let tempArr = [];
    tempArr.push(data["imgUrl"]);
    tempArr.push(data["userId"]);
    dataContainer.push(tempArr);
  });
  dataContainer.forEach((data) => {
    let storyElement = document.createElement('div');
    storyElement.className = "story-element";
    storyElement.innerHTML =
      `
        <div class="story-image">
            <div class="story-image-inner-circle">
              <img src="${data[0]}" alt="">
            </div>
        </div>
        <div class="story-id">
          <span>${data[1]}</span>
        </div>
      `;
    storyElementContainer.appendChild(storyElement);
  });
}

function liveSearchForProfile(e) {
  let elementCount = 0;
  const dataContainer = [];
  const searchDiv = e.target.parentNode;
  const searchIdResultContainer = document.querySelector('.search-id-result-container');
  searchIdResultContainer.innerHTML = "";
  if (!e.target.value) {
    e.target.classList.remove('active');
    searchDiv.style.setProperty('--search-left', '90px');
    searchIdResultContainer.className = "search-id-result-container";
    return;
  }
  searchDiv.style.setProperty('--search-left','10px');
  e.target.className="active";
  searchIdResultContainer.classList.add("active");
  PROFILE_DATA.forEach((data) => {
    if (data["userId"].includes(e.target.value) || data["name"].includes(e.target.value)) {
      let tempArr = [];
      tempArr.push(data["imgUrl"]);
      tempArr.push(data["userId"]);
      tempArr.push(data["name"]);
      tempArr.push(data["linkUrl"]);
      dataContainer[elementCount++] = tempArr;
    }
  });
  if (elementCount <= 5) {
    searchIdResultContainer.style.height = "auto";
    searchIdResultContainer.style.overflow = "visible"
  } else {
    searchIdResultContainer.style.height = "255px";
    searchIdResultContainer.style.overflow = "auto";
  }
  dataContainer.length >= 1 ? dataContainer.forEach((data) => createSearchProfileResult(...data)) : createSearchProfileResult();
}

function createSearchProfileResult(imgUrl, userId, name, linkUrl) {
  let searchIdResultElement = document.createElement('div');
  searchIdResultElement.className = "search-id-result-element";
  let searchIdResultContainer = document.querySelector('.search-id-result-container');
  if (!imgUrl && !userId && !name) {
    searchIdResultElement.innerHTML = "<span>검색 결과가 없습니다</span>";
  } else {
    searchIdResultElement.innerHTML =
      `
        <a href=${linkUrl}>
          <div class="search-profile-container">
            <div class="search-profile-image">
              <img src=${imgUrl} alt="">
            </div>
          </div>
          <div class="info-container">
            <span>${userId}</span>
            <span>${name}</span>
          </div>
        </a>
      `;
  }
  searchIdResultContainer.appendChild(searchIdResultElement);
}

function clickThreedotsDisplaySubMenu() {
  const threedotsSubMenuBackground = document.querySelector('.threedots-sub-menu-background');
  const threedotsSubMenuElement = document.querySelector('.threedots-sub-menu');
  const threedotsSubMenuClose = document.querySelectorAll('.threedots-sub-menu-element')[6];
  threedotsSubMenuClose.addEventListener('click', () => {
    threedotsSubMenuBackground.classList.remove('active');
    threedotsSubMenuElement.classList.remove('active');
  },{once: true});
  threedotsSubMenuBackground.className.includes('active') ? threedotsSubMenuBackground.classList.remove('active') : threedotsSubMenuBackground.classList.add('active');
  threedotsSubMenuElement.className.includes('active') ? threedotsSubMenuElement.classList.remove('active') : threedotsSubMenuElement.classList.add('active');
}

function commentSubmitButtonEventAdd() {
  const buttonTarget = document.querySelectorAll('.add-comment-btn');
  buttonTarget.forEach(button => button.addEventListener('click', addCommentToFeed));
}

function mainPageStart() {
  commentSubmitButtonEventAdd();
  enterPushSubmit();
  addHeartColorWhenClicked();
  personalProfileClickSubMenu();
  searchProfile();
  allocateStoryProfileList();
}

mainPageStart();

// SlickJS For Story And Feed Image Showing
$(function () {
  $('.story-element-container').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    }]
  });
});

$(function () {
  $('.article-image').slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
