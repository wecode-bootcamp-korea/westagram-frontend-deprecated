// 아이디 검색 기능 구현
// 먼저 아이디의 배열을 만든다
// 인풋바에 글자를 치면 (key up)하면 result 배열에 조건에 충족하는 객체들을 push함
// 인풋바
const search = document.querySelector('.search'),
  searchInput = document.querySelector('.searchInput'),
  xbtn = document.querySelector('.xbtn'),
  magnifier = document.querySelector('.magnifier'),
  searchText = document.querySelector('.searchText');

// 인풋바 활성화
function searchActive() {
  const isActive = searchInput.classList.contains('active');
  magnifier.classList = isActive ? 'magnifier' : 'magnifier active';
  xbtn.classList = isActive ? 'xbtn' : 'xbtn active';
  search.classList = isActive ? 'search' : 'search active';
  searchInput.classList = isActive ? 'searchInput' : 'searchInput active';
}

// 조건은 한 글자라도 들어가 있으면 포함시키는 것
const searchResultList = document.querySelector('.searchResultList'),
  searchResultSet = document.querySelector('.searchREsultSet');

function searchId() {
  const searchKeyword = searchInput.value;
  const searchKeywordArray = searchKeyword.split(' ');
  searchResultList.innerHTML = '';
  let searchData = data.slice();
  searchKeywordArray.forEach((key) => {
    let tempData = [];
    if (searchKeyword == '') {
      return;
    }
    searchData.forEach((e) => {
      if (e.userId.includes(key)) {
        tempData.push(e);
      }
    });
    searchData = tempData.slice();
  });
  searchData.forEach((e) => {
    searchResultList.innerHTML += `<div class="searchResultSet">
    <img src="${e.imgUrl}"
    alt="userProfile" class="searchResultImg middle">
    <span class="userId">${e.userId}</span></div>`;
  });
}

function cleanData() {
  searchResultList.innerHTML = '';
  searchInput.value = '';
}

function init() {
  searchInput.addEventListener('focus', searchActive);
  searchInput.addEventListener('blur', searchActive);
  xbtn.addEventListener('click', searchActive);
  searchInput.addEventListener('keyup', searchId);
  xbtn.addEventListener('click', cleanData);
  console.log(xbtn);
}

init();
