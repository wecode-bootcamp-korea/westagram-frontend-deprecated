const inputComment = document.querySelector('.feed__comment__input');
const feedComments = document.querySelector('.feed__comments');
const feedBTN = document.querySelector('.feed__comment__button');
const likeNumberText = document.querySelector(
  '.feed__content__like-number__text'
);
const navInput = document.querySelector('.nav__input');
const searchModalBox = document.querySelector('.search__modal__box');
const profileIcon = document.querySelector('.profile__img');
const profileModalBox = document.querySelector('.profile__modal__box');

let obj = {
  commentLike: [],
  dummyDate: [
    { id: 'wecode_bootcamp', description: '>wecode | 위코드' },
    { id: 'wecode_korea', description: 'Fun coding' },
    { id: 'ys', description: '이거 못풀면 죽는다는 마음으로...ㅜ😭' },
    { id: 'Wecode', description: '고난과 역경의 연속의 장' },
    { id: 'wecode_?', description: '선릉역멀다..' },
    { id: 'wecode_!', description: '화이팅!' },
    { id: 'wecode_yes', description: 'ㅎㅎㅎ' },
  ],
};

let likeNumber = 10;

function deleteObjCommentLike(id) {
  obj.commentLike = obj.commentLike.filter(item => {
    return item.id !== id;
  });
}

function addComment() {
  if (inputComment.value === '') {
    return;
  } else {
    const id = new Date().getTime();
    const commentList = document.createElement('li');
    commentList.setAttribute('class', 'feed__comment__row');
    commentList.setAttribute('data-id', id);
    commentList.innerHTML =
      //
      `
      <div class="feed__comment">
        <div class="feed__comment__left">
          <span class="feed__comment__id">ys&nbsp&nbsp</span>${inputComment.value}
        </div>
        <div class="feed__comment__right">
          <button class="feed__comment__likeBtn">
            <i class="fas fa-heart icon like__icon" data-id=${id}></i>
          </button>
          <button class="feed__comment__deleteBtn">
            <i class="far fa-trash-alt icon delete__icon" data-id=${id}></i>
          </button>
        </div>
      </>
      `;
    feedComments.appendChild(commentList);
    obj.commentLike.push({ id: id, like: false });
    commentList.scrollIntoView();
    inputComment.value = '';
  }
}

function deleteComment(event) {
  const id = parseInt(event.target.dataset.id);
  if (event.target.classList[3] === 'delete__icon') {
    const toBeDeleted = document.querySelector(
      `.feed__comment__row[data-id="${id}"]`
    );
    toBeDeleted.remove();
    deleteObjCommentLike(id);
    refreshLikeNumber();
  }
}

function countLike(event) {
  const target = event.target;
  const id = parseInt(event.target.dataset.id);
  if (target.classList[3] === 'like__icon') {
    obj.commentLike = obj.commentLike.map(item => {
      if (item.id === id) {
        if (item.like === true) {
          target.style.color = 'black';
          item.like = false;
        } else {
          target.style.color = 'red';
          item.like = true;
        }
      }
      return item;
    });
    refreshLikeNumber();
  }
}

function refreshLikeNumber() {
  const trueCount = obj.commentLike.filter(item => {
    return item.like === true;
  });
  likeNumberText.innerText = `ys 님 외 ${
    likeNumber + trueCount.length
  }명이 좋아합니다`;
}

function showSearchValue(value) {
  searchModalBox.innerHTML = '';
  if (value.length) {
    value.forEach(item => {
      const searchModalitem = document.createElement('li');
      searchModalitem.setAttribute('class', 'search__modal__item');
      searchModalitem.innerHTML = `
      <div class="search__modal__item">
        <strong class="search__modal__id">${item.id}</strong>
        <p class="search__modal__description">${item.description}</p>
      </div>`;
      searchModalBox.appendChild(searchModalitem);
    });
  } else {
    const searchModalitem = document.createElement('li');
    searchModalitem.setAttribute('class', 'search__modal__item');
    searchModalitem.innerHTML = `
      <div class="search__modal__item">
        <strong class="search__modal__id">검색한 id가 없습니다.</strong>
      </div>`;
    searchModalBox.appendChild(searchModalitem);
  }
}

function findSearchId() {
  const matchValue = obj.dummyDate.filter(x => {
    return x.id.indexOf(navInput.value) != -1;
  });
  showSearchValue(matchValue);
}

feedBTN.addEventListener('click', addComment);
inputComment.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    addComment();
  }
});

feedComments.addEventListener('click', deleteComment);
feedComments.addEventListener('click', countLike);

navInput.addEventListener('keyup', () => {
  if (navInput.value) {
    searchModalBox.style.display = 'block';
    findSearchId();
  } else {
    searchModalBox.style.display = 'none';
  }
});
navInput.addEventListener('focusout', () => {
  searchModalBox.style.display = 'none';
});
navInput.addEventListener('focusin', () => {
  if (navInput.value) {
    searchModalBox.style.display = 'block';
  } else {
    searchModalBox.style.display = 'none';
  }
});

window.addEventListener('click', event => {
  if (event.target.className === 'profile__img') {
    profileModalBox.style.display = 'block';
  } else if (event.target.classList[0] === 'profile') {
    profileModalBox.style.display = 'block';
  } else {
    profileModalBox.style.display = 'none';
  }
});
