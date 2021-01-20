// 신규 댓글 추가 관련 기능

const feeds = document.querySelector('.feeds');
const input = document.querySelector('.postingCmt');
const button = document.querySelector('#post');

function addPost() {
  const cmtText = input.value;

  const newCmt = document.createElement('p');
  const likeImg = document.createElement('img');
  const likeCount = document.createElement('span');
  const removeCmt = document.createElement('button');

  likeImg.src = '/img/heart.png';

  removeCmt.innerText = '삭제';

  newCmt.classList.add('newCmt');
  newCmt.innerText = cmtText;
  newCmt.appendChild(removeCmt);
  newCmt.appendChild(likeCount);
  newCmt.appendChild(likeImg);

  feeds.appendChild(newCmt);

  input.value = '';

  // 댓글 좋아요 기능 추가(토글 버튼 방식)
  const likes = document.querySelectorAll('.newCmt img');
  let likeFlag = false;

  function likeChange() {
    if (!likeFlag) {
      this.src = '/img/heartRed.png';
      likeFlag = !likeFlag;
    } else if (likeFlag) {
      this.src = '/img/heart.png';
      likeFlag = !likeFlag;
    }
  }

  likes.forEach((like) => {
    like.addEventListener('click', likeChange);
  });

  // 댓글 삭제 기능 추가
  const removeCmts = document.querySelectorAll('.newCmt button');

  function deleteCmt() {
    this.parentNode.remove();
  }

  removeCmts.forEach((rmcmt) => {
    rmcmt.addEventListener('click', deleteCmt);
  });
}

button.addEventListener('click', addPost);
window.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    addPost();
  }
});

const profiles = document.querySelector('.profiles');
const goNext = document.querySelector('#arrow');

function scrollToRight() {
  profiles.scrollLeft += 50;
}

goNext.addEventListener('click', scrollToRight);
