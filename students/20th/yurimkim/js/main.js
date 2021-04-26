'use strict';

/* 검색바 */
const search = document.querySelector('.search');
const searchBar = document.querySelector('.searchBar');
const searchList = document.querySelector('.searchList');

/* 아이디 검색 기능 */
const idArr = ['yurim', 'wecode01기', 'wecode_bootcamp', 'wecode10기', 'wecode20기', 'BTS', 'bts'];
const searchResult = idArr => {
  if (!search.value) {
    alert ("검색할 단어를 입력해주세요!");
  } 
  const idFilter = idArr.filter(id => id.includes(search.value))
  idFilter.forEach(elem => {
  searchList.innerHTML = `
    <li>
      <a href="#">
      <img alt="bts" src="imgs/btsjpg.jpg" />
      <div>
        <div>
          <p>${elem}</p>
          <p>${elem} world</p>
        </div>
        <button class="searchDel">×</button>
      </div>
      </a>
    </li>
    `;
  });
}

search.addEventListener('click', () => {
  searchBar.style.display = "block"
})

window.addEventListener('click', (e) => {
  if (e.target.className !== 'search'){
    searchBar.style.display = "none"
  } 
})

search.addEventListener('keyup', (e) => {
  searchResult(idArr);
  if (e.keyCode == 8){
    searchList.remove(searchList.children);
  }
});

const searchDel = document.querySelector('.searchDel');
searchDel.addEventListener('click', (e) => {
  console.log(e.target);
  // e.target.parentNode.parentNode.parentNode.parentNode.remove();
})

const profilePage = document.querySelector('.profilePage');
const profileImg = document.querySelector('.profileImage');
const profilePageList = document.querySelector('.profilePageList');

profileImg.addEventListener('click', () => {
  profilePage.style.display = "block";
})

window.addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG'){
    profilePage.style.display = "none"
  }
})

/* 댓글 */
const commentList = document.querySelector('.commentList');
const addBtn = document.querySelector('.addBtn');
const textArea = document.querySelector('.textarea');

const  onAdd = () => {
  const comment = textArea.value;
  const newDiv = document.createElement('div');
  newDiv.className = 'delList';
  commentList.append(newDiv);
  newDiv.innerHTML = `
    <div>
      <span>yurim4545</span>
      ${comment}
      <span class="delBtn"><i class="fas fa-times"></i></span>
    </div>
    <button><i class="far fa-heart"></i></button>`;
  textArea.value = ''; 
  addBtn.className = 'addBtnReset';
}

textArea.addEventListener('keyup', (e) => {
  addBtn.className = 'addBtnColor';
  if (e.keyCode === 13 ) {
    onAdd ();
  }
});

addBtn.addEventListener('click', () => {
    onAdd ();
})

commentList.addEventListener('click', (e) => {
  if  (e.target.className == 'fas fa-times') {
    const delList =e.target.parentNode;
    delList.parentNode.parentNode.remove();
  }
})

commentList .addEventListener('click', (e) => {
  if  (e.target.className == 'far fa-heart') {
    const heart=e.target.parentNode;
    heart.innerHTML = `<i class="fas fa-heart"></i>`;
    heart.style.color = 'red';
  }
})

commentList .addEventListener('click', (e) => {
  if  (e.target.className == 'fas fa-heart') {
    const heart=e.target.parentNode;
    heart.innerHTML = `<i class="far fa-heart"></i>`;
    heart.style.color = 'black';
  }
})