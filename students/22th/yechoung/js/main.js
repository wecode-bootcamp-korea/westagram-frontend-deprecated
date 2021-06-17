const commentBox = document.querySelector('.detail-comments');
const commentInput = document.querySelector('.feed-comments-input input');
const postBtn = document.querySelector('.feed-comments-input button');
const commentIconBoxes = document.querySelectorAll('.comment-icons');
const myProfileBtn = document.querySelector('.my-profile-btn');
const myProfileMenu = document.querySelector('.my-profile-menu');
const feedLikeBtn = document.querySelector('.feed-btns-left button:first-of-type');
const feedBookmarkBtn = document.querySelector('.feed-btns-right button');
const searchInput = document.querySelector('.search-container input');
const searchUl = document.querySelector('.search-result');

let writtenComment = '';
const userInfoLi = [
  {
    userImg: './images/profile7.jpg',
    userId: 'wecode_bootcamp'
  },
  {
    userImg: './images/profile1.jpg',
    userId: 'wecode_founder'
  },
  {
    userImg: './images/profile3.jpg',
    userId: 'wecode_korea'
  },
  {
    userImg: './images/profile5.jpg',
    userId: 'test_user1'
  },
  {
    userImg: './images/profile2.jpg',
    userId: 'test_user2'
  },
  {
    userImg: './images/profile3.jpg',
    userId: 'asdfg'
  },
  {
    userImg: './images/profile8.jpg',
    userId: 'qwert'
  },
  {
    userImg: './images/profile4.jpg',
    userId: 'zxcvb'
  },
  {
    userImg: './images/myprofile.jpg',
    userId: 'usually_summer'
  }
];

const handleSearchInput = (value) => {
  if(searchUl.children.length !== 0) {
    const needDeleteArr = [...searchUl.children];
    handleDelete(needDeleteArr);
  };

  const searchResults = userInfoLi.filter(li => {
    return li.userId.includes(value);    
  });
  
  if(value === '') {
    searchUl.style.display = 'none';
    handleDelete(searchResults);
  };
  
  printSearchResult(searchResults);
};

const printSearchResult = (items) => {
  items.length === 0 ?  searchUl.style.display = 'none' : searchUl.style.display = 'block' ;   

  items.forEach((item) => {
    li = document.createElement('li');
    searchUl.appendChild(li);
    li.innerHTML = `
      <img class="user-img" src="${item.userImg}" alt="${item.userId}">
      <em class="user-name">${item.userId}</em>
    `
  });
};

const postComment = (cmt) => {
  if(writtenComment === '') return;

  const article = document.createElement('article');
  article.classList.add('comment');
  const iconBox = document.createElement('div');
  iconBox.classList.add('comment-icons');
  iconBox.addEventListener('click', e => {
    handleCommentClick(e)
  });

  article.innerHTML = ` 
    <em class="user-name">im_user</em>
    <span>${cmt}</span>
  `
  iconBox.innerHTML = `
    <i class="far fa-heart cmt-like"></i>
    <i class="fas fa-times cmt-del"></i>
  `

  commentBox.appendChild(article);
  article.appendChild(iconBox);

  commentInput.value = '';
  writtenComment = '';
}

const handleCommentClick = (e) => {
  if(e.target.tagName !== 'I') return;

  let btnType = '';
  let targetComment = e.target.parentElement.parentElement;

  e.target.className.includes('cmt-like') ? btnType = 'cmtLike' : btnType = 'cmtDel';
  
  btnType === 'cmtLike' 
  ? handleLikeBtn(e.target) 
  : handleDelete(targetComment);
};

const handleLikeBtn = (likeBtn) => {
  if(likeBtn.className.includes('far')) {
      likeBtn.classList.remove('far');
      likeBtn.classList.add('fas');
  } else {
    likeBtn.classList.remove('fas');
    likeBtn.classList.add('far')
  }
};

const handleDelete = (item) => {
  if(item.tagName === 'ARTICLE') {
    item.remove();
  } else {
    item.forEach((i) => {i.remove()})
  }
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

  feedLikeBtn.addEventListener('click', e => {
    handleLikeBtn(e.target)
  });

  feedBookmarkBtn.addEventListener('click', e => {
    handleLikeBtn(e.target)
  });

  myProfileBtn.addEventListener('click', () => {
    handleProfileBtnClick()
  })

  searchInput.addEventListener('keyup', (e) => {
    handleSearchInput(e.target.value)
  })
})();