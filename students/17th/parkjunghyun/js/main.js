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

// 검색 창 아이디 검색 기능
const ids = [
  'wecode',
  'jung',
  'hyun',
  'we',
  'code',
  'dasom',
  'cheerup',
  'letsgo',
  'wework',
];

const search = document.querySelector("input[type ='search']");
const nav = document.querySelector('.navContainer nav');

function findId(e) {
  if (e.keyCode == 13) {
    const targetId = search.value;
    const result = ids.filter((id) => id.includes(targetId));
    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');

    if (result[0]) {
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        const matchedList = document.createElement('p');
        const profileImg = document.createElement('img');

        matchedList.classList.add(`matchedIdName`);
        matchedList.innerText = result[i];

        profileImg.src = '/img/profile.jpeg';

        listContainer.appendChild(profileImg);
        listContainer.appendChild(matchedList);
      }

      nav.appendChild(listContainer);

      const coordinate = this.getBoundingClientRect();
      const targetBottom = coordinate.bottom;
      const targetLeft = coordinate.left;

      listContainer.top = `${targetBottom + 20}px`;
      listContainer.left = targetLeft;
    } else {
      alert('검색하신 ID가 존재하지 않습니다.');
    }
  } else return;
}

function removeImg() {
  this.style.setProperty('background-image', 'none');
}

search.addEventListener('keydown', findId);
search.addEventListener('keydown', removeImg);
search.addEventListener('blur', () => window.location.reload());

// nav 프로필 사진 클릭 시 메뉴 박스 생성 (Mission 8)
const navProfile = document.querySelector('#profileImg');
const menuContainer = document.querySelector('.menuContainer');
const body = document.querySelector('body');

function showMenu(e) {
  if (e.target == navProfile) {
    const coordinate = this.getBoundingClientRect();
    const targetBottom = coordinate.bottom;
    const targetLeft = coordinate.left;

    menuContainer.top = `${targetBottom + 20}px`;
    menuContainer.left = targetLeft;

    menuContainer.style.display = 'block';
  } else {
    menuContainer.style.display = 'none';
  }
}

body.addEventListener('click', showMenu);
