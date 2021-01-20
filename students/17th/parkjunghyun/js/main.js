const feeds = document.querySelector('.feeds');
const input = document.querySelector('.postingCmt');
const button = document.querySelector('#post');

function addPost() {
  const cmtText = input.value;

  const newCmt = document.createElement('p');
  const likeImg = document.createElement('img');
  const likeCount = document.createElement('span');
  const removeCmt = document.createElement('button');
  // let classNum = Number(1);

  // newCmt.classList.add(`newCmt${classNum}`);
  // likeImg.classList.add(`likeImg${classNum}`);
  // likeCount.classList.add(`likeCount${classNum}`);
  // removeCmt.classList.add(`removeCmt${classNum}`);

  likeImg.src = '/img/heart.png';
  likeCount.innerText = 0;

  removeCmt.innerText = '삭제';

  newCmt.classList.add('newCmt');
  newCmt.innerText = cmtText;
  newCmt.appendChild(removeCmt);
  newCmt.appendChild(likeCount);
  newCmt.appendChild(likeImg);

  feeds.appendChild(newCmt);

  input.value = '';
  // classNum += 1;

  // 댓글 좋아요 카운트 기능 추가
  const likes = document.querySelectorAll('.newCmt img');

  function likeUp() {
    let likeNum = this.previousSibling.innerText;
    console.log(likeNum);
    // likeNum = 10;

    // this.parentNode.innerText += 1;
  }

  likes.forEach((like) => {
    like.addEventListener('click', likeUp);
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
