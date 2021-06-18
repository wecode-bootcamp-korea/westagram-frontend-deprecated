"use strict"

const commentBox = document.querySelector('.detail-comments');
const commentInput = document.querySelector('.feed-comments-input input');
const postBtn = document.querySelector('.feed-comments-input button');

const myProfileBtn = document.querySelector('.my-profile-btn');
const myProfileMenu = document.querySelector('.my-profile-menu');

const feedLikeBtn = document.querySelector('.feed-btns-left button:first-of-type');
const feedBookmarkBtn = document.querySelector('.feed-btns-right button');

const searchInput = document.querySelector('.search-container input');
const searchUl = document.querySelector('.search-result');

const postTextBox = document.querySelector('.detail-text');
const postText = document.querySelector('.text-contents');
const sumLikeNum = document.querySelector('.sum-like b');

let sumLike = 0;
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


// 피드 내용 더보기 기능
if(postText.innerText.length > 15) {
  const originText = postText.innerText;
  const previewText = originText.slice(0, 16) + '...';

  postText.innerText = previewText; 

  const viewMoreBtn = document.createElement('span');
  viewMoreBtn.classList.add('post-more-btn');
  postTextBox.appendChild(viewMoreBtn);
  viewMoreBtn.innerText = '더보기';

  viewMoreBtn.addEventListener('click', () => {
    handleViewMore(originText, previewText)
  })
};

const handleViewMore = (origin, preview) => {
  if(postText.style.overflow === 'hidden') {
    postText.innerText = origin;
    postText.style.overflow = 'visible';
    postText.style.height = 'auto';
  } else {
    postText.innerText = preview;
    postText.style.overflow = 'hidden';
    postText.style.height = '18px';
    postText.style.width = 'auto'
  }
};

// 피드 좋아요 버튼 기능
const handleSumLike = (e) => {
  e.target.className.includes('fas') ? sumLike += 1 : sumLike;
  sumLikeNum.innerText = sumLike;
};

// 검색창 기능
const handleSearchInput = (value) => {
  if(value === '') {
    searchUl.style.display = 'none';
    return
  };

  const needDeleteLis = [...searchUl.childNodes];

  needDeleteLis.forEach((li) => {
    li.remove();
  });

  const searchResults = userInfoLi.filter(li => {
    return li.userId.includes(value);    
  });

  printSearchResult(searchResults);
};

const printSearchResult = (items) => {
  items.length === 0 ?  searchUl.style.display = 'none' : searchUl.style.display = 'block' ;   

  items.forEach((item) => {
    const li = document.createElement('li');
    searchUl.appendChild(li);
    li.innerHTML = `
      <img class="user-img" src="${item.userImg}" alt="${item.userId}">
      <em class="user-name">${item.userId}</em>
    `
  });
};

// 댓글 달기 기능
const postComment = (cmt) => {
  if(writtenComment === '') return;

  const li = document.createElement('li');
  li.classList.add('comment');
  li.innerHTML = ` 
    <em class="user-name">im_user</em>
    <span>${cmt}</span>
  `

  const iconBox = document.createElement('div');
  iconBox.classList.add('comment-icons');

  const iconLike = document.createElement('i');
  iconLike.classList.add('far', 'fa-heart', 'cmt-like');
 
  const iconDel = document.createElement('i');
  iconDel.classList.add('fas', 'fa-times', 'cmt-del');

  commentBox.appendChild(li);
  li.appendChild(iconBox);
  iconBox.appendChild(iconLike);
  iconBox.appendChild(iconDel);

  iconLike.addEventListener('click', e => {
    handleLikeBtn(e.target)
  });
  iconDel.addEventListener('click', () => {
    handleDelete(li)
  });

  commentInput.value = '';
  writtenComment = '';
};

// 댓글 좋아요 & 삭제 기능
const handleLikeBtn = (btn) => {
  if(btn.className.includes('far')) {
      btn.classList.remove('far');
      btn.classList.add('fas');
  } else {
    btn.classList.remove('fas');
    btn.classList.add('far')
  }
};

const handleDelete = (item) => {
  item.remove();
};

// 상단 프로필 버튼 기능
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

  feedLikeBtn.addEventListener('click', e => {
    handleLikeBtn(e.target)
  });

  feedLikeBtn.addEventListener('click', e => {
    handleSumLike(e)
  })

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
