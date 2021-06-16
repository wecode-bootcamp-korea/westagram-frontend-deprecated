const commentBox = document.querySelector('.detail-comments');
const commentInput = document.querySelector('.feed-comments-input input');
const postBtn = document.querySelector('.feed-comments-input button');
const commentIconBoxes = document.querySelectorAll('.comment-icons');
const myProfileBtn = document.querySelector('.my-profile-btn');
const myProfileMenu = document.querySelector('.my-profile-menu');

let writtenComment = '';

const postComment = (cmt) => {
  
  if(writtenComment === '') return;

  const article = document.createElement('article');
  const em = document.createElement('em');
  const span = document.createElement('span');
  const iconBox = document.createElement('div');
  const heartIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');

  article.classList.add('comment');
  em.classList.add('user-name');
  iconBox.classList.add('comment-icons');
  heartIcon.classList.add('far', 'fa-heart', 'cmt-like');
  deleteIcon.classList.add('fas', 'fa-times', 'cmt-del');

  iconBox.addEventListener('click', e => {
    handleCommentClick(e)
  });

  commentBox.appendChild(article);
  article.appendChild(em);
  article.appendChild(span);
  article.appendChild(iconBox);
  iconBox.appendChild(heartIcon);
  iconBox.appendChild(deleteIcon);

  em.innerText = 'hi_user';
  span.innerText = cmt;

  commentInput.value = '';
  writtenComment = '';
}

const handleCommentClick = (e) => {
  if(e.target.tagName !== 'I') return;

  let btnType = '';
  let targetComment = e.target.parentElement.parentElement;

  e.target.className.includes('cmt-like') ? btnType = 'cmtLike' : btnType = 'cmtDel';
  
  btnType === 'cmtLike' 
  ? handleCommentLike(e.target) 
  : handleCommentDel(targetComment);
};

const handleCommentLike = (cmt) => {
  if(cmt.className.includes('far')) {
      cmt.classList.remove('far');
      cmt.classList.add('fas');
  } else {
    cmt.classList.remove('fas');
    cmt.classList.add('far')
  }
};

const handleCommentDel = (cmt) => {
  cmt.remove();
};

const handleProfileBtnClick = () => {
  myProfileMenu.style.display === 'none' 
  ? myProfileMenu.style.display = 'flex' 
  : myProfileMenu.style.display = 'none'
};


(function() {
  commentInput.addEventListener('keyup', e => {
    e.keyCode === 13 
    ? postComment(writtenComment)
    : writtenComment = e.target.value;
  });
  
  postBtn.addEventListener('click', () => {
    postComment(writtenComment)
  });

  commentIconBoxes.forEach( box => {
    box.addEventListener('click', e => {
      handleCommentClick(e)
    });
  });

  myProfileBtn.addEventListener('click', () => {
    handleProfileBtnClick()
  })
})();