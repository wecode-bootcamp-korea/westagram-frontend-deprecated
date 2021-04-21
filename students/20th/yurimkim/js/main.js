'use strict';

/* aside 위치 고정 */
const aside = document.querySelector('aside');
const article = document.querySelector('article');

window.addEventListener('load', function() {
  let x =  article.getBoundingClientRect();
  aside.style.left = `${x.left+660}px`;
})

window.addEventListener('resize', function() {
  let x =  article.getBoundingClientRect();
  aside.style.left = `${x.left+660}px`;
})


/* 댓글 기능 구현 */
const commentList = document.querySelector('.commentList');
const addBtn = document.querySelector('.addBtn');
const textArea = document.querySelector('.textarea');

/* 댓글 달기 */
function onAdd () {
  const comment = textArea.value;
  const newDiv= document.createElement('div');
  newDiv.className = 'delList';

  let elem =  '<div><span>yurim4545</span>' + comment+ '<span class="delBtn"><i class="fas fa-times"></i></span></div><button><i class="far fa-heart"></i></button>';
  commentList.append(newDiv);
  newDiv.innerHTML = elem;
  textArea.value = ''; 
  addBtn.style.color = '#8abdff';
}

textArea.addEventListener('keydown', function(e) {
  addBtn.style.color = '#0366D6';
  if (e.key === 'Enter') {
    onAdd ();
  }
});

addBtn.addEventListener('click', function() {
    onAdd ();
})

/* 댓글 삭제 */
commentList .addEventListener('click', function(e) {
  if  (e.target.className == 'fas fa-times') {
  const delList =e.target.parentNode;
  delList.parentNode.parentNode.remove();
  }
})

/* 댓글의 좋아요 */
commentList .addEventListener('click', function(e) {
  if  (e.target.className == 'far fa-heart') {
  const heart=e.target.parentNode;
  heart.innerHTML = `<i class="fas fa-heart"></i>`;
  heart.style.color = 'red';
  }
})

/* 댓글의 좋아요 해제 */
commentList .addEventListener('click', function(e) {
  if  (e.target.className == 'fas fa-heart') {
  const heart=e.target.parentNode;
  heart.innerHTML = `<i class="far fa-heart"></i>`;
  heart.style.color = 'black';
  }
})
