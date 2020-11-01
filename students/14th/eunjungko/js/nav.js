// 인풋바
const search = document.querySelector('.search'),
  searchInput = document.querySelector('.searchInput'),
  xbtn = document.querySelector('.xbtn'),
  magnifier = document.querySelector('.magnifier'),
  searchText = document.querySelector('.searchText');

const searchResultList = document.querySelector('.searchResultList'),
  searchResultSet = document.querySelector('.searchREsultSet');

// 인풋바 활성화
function searchActive() {
  searchInput.value = '';
  const isActive = searchInput.classList.contains('active');
  magnifier.classList = isActive ? 'magnifier' : 'magnifier active';
  xbtn.classList = isActive ? 'xbtn' : 'xbtn active';
  search.classList = isActive ? 'search' : 'search active';
  searchInput.classList = isActive ? 'searchInput' : 'searchInput active';
}

// userId 검색 (and 조건) 공백을 기준으로 검색어 필터
function searchId() {
  const searchKeyword = searchInput.value;
  const searchKeywordArray = searchKeyword.split(' ');
  searchResultList.innerHTML = '';
  searchResultList.classList.remove('displayNone');
  let searchData = data.slice();
  if (searchKeyword.trim() == '') {
    searchResultList.classList.add('displayNone');
    return;
  }
  searchKeywordArray.forEach((key) => {
    let tempData = [];
    searchData.forEach((e) => {
      if (e.userId.includes(key)) {
        tempData.push(e);
      }
    });
    searchData = tempData.slice();
  });
  if (searchData.length == 0) {
    searchResultList.classList.add('displayNone');
  } else {
    searchData.forEach((e) => {
      searchResultList.innerHTML += `<div class="searchResultSet">
    <img src="${e.imgUrl}"
    alt="userProfile" class="searchResultImg middle">
    <span class="userId">${e.userId}</span></div>`;
    });
  }
}

const cleanData = () => {
  searchResultList.classList.add('displayNone');
};

function init() {
  searchInput.addEventListener('focus', searchActive);
  searchInput.addEventListener('blur', searchActive);
  searchInput.addEventListener('blur', cleanData);
  searchInput.addEventListener('keyup', searchId);
  xbtn.addEventListener('click', searchActive);
  xbtn.addEventListener('click', cleanData);
}

init();
