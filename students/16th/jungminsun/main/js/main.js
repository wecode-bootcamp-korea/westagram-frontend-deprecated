'use strict';

const commentBtns = document.querySelectorAll('.commentBtn'),
      commentInputs = document.querySelectorAll('.commentInput'),
      commentForms = document.querySelectorAll('.commentForm');
      
// 댓글 추가 기능

function commentInputHandler(evt) {
  const targetVal = evt.target.value;
  if (evt.target.id === 'input1') {
    if (targetVal !== '') {
      commentBtns[0].removeAttribute('disabled');
      return;
    }
  }
  if (evt.target.id === 'input2') {
    if (targetVal !== '') {
      commentBtns[1].removeAttribute('disabled');
      return;
    }
  }
}

function addCommentPaint(inputIdx, listIdx) {
  const inputVal = commentInputs[inputIdx].value;
  const commentLists = document.querySelectorAll('.commentsList');
  const li = document.createElement('li');
  li.classList.add('commentItem');
  const aTag = document.createElement('a');
  aTag.setAttribute("href", "#");
  aTag.classList.add('userId');
  aTag.innerText = 'usersssss';
  li.appendChild(aTag);
  const pTag = document.createElement('p');
  pTag.innerText = inputVal;
  li.appendChild(pTag);

  const button = document.createElement('button');
  button.setAttribute("type", "button");
  button.classList.add("addLikeToCommentBtn");
  button.innerHTML = `<img src="./assets/heart.png" alt="like" />`;
  button.addEventListener('click', addLikeHandler);

  const delButton = document.createElement('button');
  delButton.setAttribute("type", "button");
  delButton.classList.add('deleteCommentBtn');
  delButton.innerHTML = `<img src="./assets/cancel.png" alt="cancel">`;
  delButton.addEventListener('click', removeComment);

  li.appendChild(delButton);
  li.appendChild(button);
  commentLists[listIdx].appendChild(li);
  commentInputs[inputIdx].value = '';
}

function addCommentHandler(evt) {
  const targetId = evt.target.id;
  evt.preventDefault();
  if (targetId === 'btn1') {
    addCommentPaint(0, 0);
  }
  if (targetId === 'btn2') {
    addCommentPaint(1, 1);
  }
}

function clickCommentBtn() {
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', addCommentHandler);
  })
}

function inputSubmit() {
  commentForms.forEach((form) => {
    form.addEventListener('submit', addCommentHandler);
  })
}

function activeBtn() {
  commentInputs.forEach((input) => {
    input.addEventListener('input', commentInputHandler);
  })
}

//댓글 좋아요 기능
function addLikeHandler(evt) {
  const target = evt.target;
  if (target.classList[0] === 'liked') {
    target.setAttribute("src", "./assets/heart.png");
    target.classList.remove('liked');
  } else {
    target.setAttribute("src", "./assets/redheart.png");
    target.classList.add('liked');
  }
}

function addLike() {
  const likeBtns = document.querySelectorAll('.addLikeToCommentBtn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', addLikeHandler);
  })
}

// 댓글 삭제 기능
function removeComment(e) {
  return e.target.parentElement.parentElement.remove();
}

// 프로필 메뉴 박스
function openMenuBox() {
  const profileBtn = document.querySelector('.accountInfoBtn');
  profileBtn.addEventListener('click', openMenuBoxHandler);
}

function openMenuBoxHandler() {
  const menuBox = document.querySelector('.profileMenuBox');
  window.addEventListener('click', (e) => {
    if (e.target.parentElement.id === 'downMenu' || e.target.parentElement.id === 'profileBtn') {
      menuBox.classList.remove('hide');
    } else {
      menuBox.classList.add('hide');
    }
  })
}

// 검색 기능
const searchData = [
  {
    userId: 'moonjungwon',
    userName: '문정원',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/131999852_691820884851451_676644135174423410_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CO1Fs0hDsIEAX9tyC1q&tp=1&oh=a1f011ccce35fac066ad4e58ef3684e0&oe=60115A3E'
  },
  {
    userId: 'wedapluggrecords',
    userName: 'WEDAPLUGG RECORDS',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/83272907_834230477014689_2552974207654821888_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=s1OrJSj7t9IAX_l9896&tp=1&oh=6e3d3f4f5b87eaf49b75c3040f392f83&oe=6010446B'
  },
  {
    userId:'wecanrun_officail',
    userName: '위캔런코리아',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/132093215_744431506161903_7154338458712395268_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xZrRqkTTJwwAX-TQc9o&tp=1&oh=5c02089e9483449c7d47c40e8403a9c5&oe=600FE660'
  },
  {
    userId: 'wecode_bootcamp',
    userName: '>wecode | 위코드',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pHGOsRYRKv0AX9MjtG3&tp=1&oh=61669ec622c76c7c5c844e8b0ad8dd17&oe=601131F0'
  },
  {
    userId: 'wecode_founder',
    userName: '송은우 (Eun Woo Song)',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118404165_231868348195869_8580469197286780227_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=DRFc7USKRoQAX8Xld3z&tp=1&oh=e0cea04c1b025013da0982490d5e1351&oe=6010B5E2'
  },
  {
    userId: 'we__code_',
    userName: 'WE CODE',
    imgUrl: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118198537_171278331152188_6203529355182388111_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=mUl9skTkYiwAX9v1Hsw&tp=1&oh=56f20bd0f54a32fb16074f19b810a804&oe=60117FB9'
  }
]

function paintSearchList(id, name, url) {
  const ul = document.createElement('ul');
  ul.classList.add('searchBoxList');
  const li = document.createElement('li');
  li.classList.add('searchBoxItem');
  ul.appendChild(li);
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  li.appendChild(a);
  const img = document.createElement('img');
  img.setAttribute('src', url);
  a.appendChild(img);
  const div = document.createElement('div');
  div.classList.add('accountInfoContainer');
  const p = document.createElement('p');
  p.classList.add('searchId');
  p.innerText = id;
  const span = document.createElement('span');
  span.innerText = name;
  div.appendChild(p);
  div.appendChild(span);
  a.appendChild(div);
  const searchBox = document.querySelector('.searchBox');
  searchBox.appendChild(ul);
}

function noneOfResult() {
  const ul = document.createElement('ul');
  ul.classList.add('searchBoxList');
  const li = document.createElement('li');
  li.classList.add('searchBoxItem');
  ul.appendChild(li);
  const span = document.createElement('span');
  span.innerText = '검색 결과가 없습니다';
  li.appendChild(span);
  const searchBox = document.querySelector('.searchBox');
  searchBox.appendChild(ul);
}

function showSearchResult() {
  const searchBox = document.querySelector('.searchBox');
  const value = document.querySelector('.searchInput').value;
  const result = searchData.filter((e) => {
    if (e.userId.includes(value)) {
      paintSearchList(e.userId, e.userName, e.imgUrl);
      searchBox.classList.remove('hide');
    } else {
      noneOfResult();
    }
    if (value === '') {
      searchBox.classList.add('hide');
    }
  })
  return result;
}

function hideSearchBox() {
  const searchBox = document.querySelector('.searchBox');
  window.addEventListener('click', (e) => {
    if (e.target.parentElement.id !== 'searchArea') {
      searchBox.classList.add('hide');
      document.querySelector('.searchInput').value = '';
    }
  })
}

function activeSearchbar() {
  const searchInput = document.querySelector('.searchInput');
  searchInput.addEventListener('input', showSearchResult);
}

function init() {
  clickCommentBtn();
  inputSubmit();
  activeBtn();
  addLike();
  openMenuBox();
  activeSearchbar();
  hideSearchBox();
}

init();