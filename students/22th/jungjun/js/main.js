const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  addList();
});

// form이 subbit안되어도 기본으로 적용될 사항
likedComment();
deleteList();

function addList() {
  const commentList = input.value;
  if (commentList === '') {
    return alert('댓글을 입력해주세요');
  } else {
    let createEle = document.createElement('div');
    let innerEle = (createEle.innerHTML = `
      <div class="commentSection">
      <p class="personalAccount">아이디 <span class="commnets">${commentList}</span></p>
      <div class="commentIconWrap">
        <i class="likesBtn far fa-heart"></i> 
        <i class="far fa-trash-alt deleteBtn"></i>
      </div>
      </div>
      `);
    document.getElementById('mbWrittenComments').innerHTML += innerEle;
  }
  //   새로운 댓글이 생성될때 like와 delete할 수 있는 기능을 준다.
  likedComment();
  deleteList();
  input.value = '';
}
function likedComment() {
  const likesBtn = document.querySelectorAll('.likesBtn');

  for (let i = 0; i < likesBtn.length; i++) {
    likesBtn[i].addEventListener('click', e => {
      let result = likesBtn[i].classList.contains('far');
      if (result) {
        likesBtn[i].classList.remove('far');
        likesBtn[i].classList.add('fas');
      } else {
        likesBtn[i].classList.remove('fas');
        likesBtn[i].classList.add('far');
      }
    });
  }
}

function deleteList() {
  const deleteBtn = document.querySelectorAll('.deleteBtn');

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
      deleteBtn[i].parentElement.parentElement.remove();
    });
  }
}
