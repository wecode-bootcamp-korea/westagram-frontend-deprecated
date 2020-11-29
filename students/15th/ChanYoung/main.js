const searchBar = document.querySelector('.search__bar');
const searchBtn = document.querySelector('.search__btn');
const likeComment = document.querySelector('.like__comment');

/* video */
const videoContainer = document.querySelector('.video__container');
const videoOverlay = document.querySelector('.video__overlay');
const meVideo = document.querySelector('.me__video');
const video = document.querySelector('.video__box');
const juice = document.querySelector('.orange__juice');
const playBtn = document.querySelector('#play-pause');
const videoCloseBtn = document.querySelector('.video__close');
const videoOpenBtn = document.querySelector('.video__open');

const openVideoModal = () => {
  videoContainer.classList.remove('video__hidden');
};

const closeVideoModal = () => {
  videoContainer.classList.add('video__hidden');
};

videoOverlay.addEventListener('click', closeVideoModal);
videoCloseBtn.addEventListener('click', closeVideoModal);
videoOpenBtn.addEventListener('click', openVideoModal);
function togglePlayPause() {
  if (video.paused) {
    playBtn.className = 'pause';
    video.play();
  } else {
    playBtn.className = 'play';
    video.pause();
  }
}
playBtn.onclick = function () {
  togglePlayPause();
};
video.addEventListener('timeupdate', function () {
  let juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + '%';
  if (video.ended) {
    playBtn.className = 'play';
  }
});

/* modal */
const openBton = document.querySelector('#elli__modal');
const modal = document.querySelector('.modal__ellipsis');
const overlay = modal.querySelector('.modal__overlay');
const closeBtn = modal.querySelector('#modal__close');
const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openBton.addEventListener('click', openModal);
/* info menu */

const toggleMenu = document.querySelector('.menu__bar');
function menuToggle() {
  toggleMenu.classList.toggle('active');
}

/* Heart */
const liHeart = document.querySelector('.liHeart');
const heart = document.querySelector('#heart');
const pVisible = document.createElement('p');
likeComment.appendChild(pVisible);

pVisible.textContent = '1개가 좋아합니다';

searchBtn.addEventListener('click', (e) => {
  searchBar.classList.toggle('active');
});

heart.addEventListener('click', (e) => {
  if (heart.classList.contains('far')) {
    heart.classList.remove('far');
    pVisible.textContent = '2개가 좋아합니다';
    heart.classList.add('fas');
  } else if (heart.classList.contains('fas')) {
    heart.classList.remove('fas');
    pVisible.textContent = '1개가 좋아합니다';
    heart.classList.add('far');
  }
});

/* 하트버튼 만들기 */

/* 댓글달기 */

const lists = document.querySelector('.lists');
const input = document.querySelector('.input__text');
const addBtn = document.querySelector('.card__btn');

function onAdd() {
  // 1. 사용자가 입력한 텍스트 받아옴
  const text = input.value;

  // 2. 받아온 텍스트로 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
  const item = createItem(text);

  // 3. items 컨테이너안에 새로만든 아이템을 넣는다
  lists.appendChild(item);
  /* 4. 새로 추가된 아이템으로 스크롤링 */
  input.value = '';
  input.focus();
  item.scrollIntoView({block: 'start'});
}

function createItem(text) {
  const list = document.createElement('li');
  list.setAttribute('class', 'list__row');

  const name = document.createElement('span');
  name.setAttribute('class', 'list__name');
  name.innerText = `Sexy Girls`;
  const userComment = document.createElement('span');
  userComment.setAttribute('class', 'user__coment');
  userComment.innerText = text;

  const likeCon = document.createElement('div');
  likeCon.setAttribute('class', 'like__con');

  const likeIcon = document.createElement('i');
  likeIcon.setAttribute('class', 'fa-heart far');
  likeIcon.addEventListener('click', (e) => {
    if (e.target.className === 'fa-heart far') {
      likeIcon.classList.remove('far');
      likeIcon.classList.add('fas');
    } else if (e.target.className === 'fa-heart fas') {
      likeIcon.classList.remove('fas');
      likeIcon.classList.add('far');
    }
  });

  const deleteBtn = document.createElement('div');
  deleteBtn.setAttribute('class', 'list__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    lists.removeChild(list);
  });

  list.appendChild(name);
  name.appendChild(userComment);
  list.appendChild(likeCon);
  likeCon.appendChild(deleteBtn);
  likeCon.appendChild(likeIcon);
  lists.appendChild(list);

  return list;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    onAdd();
  }
});

/*  sliders */

const sildesBox = document.querySelector('.feeds_container'),
  slides = document.querySelector('.slides'),
  slide = document.querySelectorAll('.slides li'),
  slideCount = slide.length,
  slideAutoCount = slideCount - 7,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');
let Timer = undefined;
let currentIndex = 1;
function MoveSlide(num) {
  slides.classList.add('animated');
  slides.style.left = -num * 68 + 'px';
  currentIndex = num;
}

/* auto slide */

/* 재사용하기위해 함수만듬 */
function startAutoSlide() {
  Timer = setInterval(function () {
    /* MoveSlide(num) 0,1,2,3,...15 */
    let nextIndex = (currentIndex + 1) % slideAutoCount; //나눈 나머지
    MoveSlide(nextIndex);
  }, 2000);
}

/* mouse input / output */

sildesBox.addEventListener('mouseenter', function () {
  clearInterval(Timer);
});

sildesBox.addEventListener('mouseleave', function () {
  startAutoSlide();
});

nextBtn.addEventListener('click', function () {
  if (currentIndex < slideCount - 7) {
    MoveSlide(currentIndex + 1);
  } else {
    MoveSlide(0);
  }
});
prevBtn.addEventListener('click', function () {
  if (currentIndex > 0) {
    MoveSlide(currentIndex - 1);
  } else {
    MoveSlide(slideCount - 7);
  }
});
startAutoSlide();

/* search  */

let meArray = [
  {
    id: 'wecode_bottcamp',
    comment: 'wecodea',
    picture: './images/사람1.png',
  },
  {id: 'bhabi222', comment: '문진호', picture: './images/사람1.png'},
  {id: 'yoon__222', comment: '귀여우엉나나나', picture: './images/사람2.png'},
  {id: 'umienu2', comment: '코로나 짱시러!!', picture: './images/사람3.png'},
  {id: 'pro_ch12', comment: '나랑사귈래??', picture: './images/사람4.png'},
  {
    id: 'soo11_08',
    comment: '사진보고 괜찮으면 한잔?',
    picture: './images/사람5.png',
  },
  {id: 'dym_d0', comment: '채린이', picture: './images/사람6.png'},
  {id: 'miki50581', comment: '다민이하트뽕', picture: './images/사람2.png'},
  {id: 'fz_177', comment: 'come as you are', picture: './images/사람4.png'},
  {id: 'flere_ice', comment: '피드패션', picture: './images/사람2.png'},
  {id: 'fly_offf', comment: '하느릉으을두두둥', picture: './images/사람6.png'},
  {id: 'taefan', comment: '데이식슷 영케이', picture: './images/사람1.png'},
  {
    id: 'dkdkdkq',
    comment: '쇼미더머니 우승은 송민호',
    picture: './images/사람2.png',
  },
  {
    id: 'rothfee',
    comment: '일본못가서 짜잉나ㅠㅠ',
    picture: './images/사람4.png',
  },
  {id: 'caffee123', comment: '피네케이크먹자', picture: './images/사람4.png'},
  {
    id: 'feedsectin',
    comment: '팔로우한번해영!!',
    picture: './images/사람3.png',
  },
  {id: 'zozlo12', comment: '공무원 친구해여', picture: './images/사람3.png'},
  {id: 'goodjob123', comment: '나는 이뻐영', picture: './images/사람4.png'},
  {id: 'man__sle', comment: '사귀자', picture: './images/사람5.png'},
];

/* 600px 이상 */

const searchTable = document.querySelector('.seacrh__table');
const searchLists = document.querySelector('#search__list');
let inputTable = document.querySelector('.searh__input');
const main = document.querySelector('#main');

function showFilteredID(id) {
  searchTable.style.display = 'flex';
  const filterdUser = document.createElement('li');
  filterdUser.innerHTML = `
  <div class ="profile__img">
     <img src = ${id.picture} ">
     </div>
     <div class ="profile-text">
     <p class="sub sub__id">${id.id}</p>
     <p class="sub sub__comment">${id.comment}</p>
     </div>
  `;
  searchLists.appendChild(filterdUser);
}

inputTable.addEventListener('keyup', function () {
  main.classList.add('zIndex');
  searchLists.innerHTML = '';
  searchTable.style.display = 'none';

  if (inputTable.value) {
    const filteredID = meArray.filter((data) => matchSearch(data.id));

    if (filteredID) {
      console.log('flitered : ', filteredID);
      filteredID.forEach(function (e) {
        console.log(e);
        showFilteredID(e);
      });
    }
  }
  if (inputTable.value) {
    const filteredComment = meArray.filter((data) => matchSearch(data.comment));

    if (filteredComment) {
      filteredComment.forEach(function (e) {
        showFilteredID(e);
      });
    }
  }
});

function matchSearch(id) {
  const searchID = inputTable.value;
  return id.indexOf(searchID) != -1;
}
function matchComment(comment) {
  const searchComment = inputTable.value;
  return comment.indexOf(searchComment) != -1;
}
inputTable.addEventListener('focusout', function () {
  main.classList.remove('zIndex');
  searchTable.style.display = 'none';
});

/* 600px 이하 */
