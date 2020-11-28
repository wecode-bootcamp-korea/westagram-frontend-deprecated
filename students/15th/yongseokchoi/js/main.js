const inputComment = document.querySelector('.feed__comment__input');
const feedComments = document.querySelector('.feed__comments');
const feedBTN = document.querySelector('.feed__comment__button');
const likeNumberText = document.querySelector(
  '.feed__content__like-number__text'
);

let obj = {
  commentLike: [],
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

feedBTN.addEventListener('click', addComment);
inputComment.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    addComment();
  }
});

feedComments.addEventListener('click', deleteComment);
feedComments.addEventListener('click', countLike);
