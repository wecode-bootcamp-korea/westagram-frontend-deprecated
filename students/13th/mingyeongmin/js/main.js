const initMain = () => {
  const navSearchbar = document.querySelector('.nav-searchbar');
  const navSearchIcon = document.querySelector('.nav-search-icon');
  const commentList = document.querySelector('.feed-comment-list');
  const commentInput = document.querySelector('.feed-write-comment-input');
  const commentWriteButton = document.querySelector(
    '.feed-write-comment-button'
  );
  const commentDeleteButtonList = document.querySelectorAll(
    '.delete-comment-button'
  );
  const commentLikeButtonList = document.querySelectorAll(
    '.like-comment-button'
  );
  const commentDislikeButtonList = document.querySelectorAll(
    '.dislike-comment-button'
  );
  const searchResultBox = document.querySelector('.search-result-box');
  const searchResultList = document.querySelector('.search-result-list');

  const turnOnSearch = () => {
    navSearchIcon.style.left = '10px';
    navSearchbar.style.textAlign = 'left';
    navSearchbar.style.paddingLeft = '25px';
    searchResultBox.classList.remove('display-none');
  };

  const turnOffSearch = () => {
    navSearchIcon.style.left = '70px';
    navSearchbar.style.textAlign = 'center';
    navSearchbar.style.paddingLeft = '0';
    navSearchbar.value = '';
    searchResultBox.classList.add('display-none');
  };

  const addComment = () => {
    if (commentInput.value) {
      const newComment = document.createElement('LI');

      newComment.innerHTML = `<li class="feed-comment">
        <div class="comment-content">
          <span class="feed-comment-writer text-bold"> wecode_bootcamp </span>
          <span class="feed-comment-content"> ${commentInput.value} </span>
        </div>
        <div class="comment-buttons">
          <button class="delete-comment-button">삭제</button>
          <button class="like-comment-button"></button>
          <button class="dislike-comment-button display-none"></button>
        </div>
      </li>`;

      commentList.append(newComment);

      commentInput.value = '';
      commentWriteButton.style.opacity = 0.5;

      document.querySelectorAll('.delete-comment-button').forEach((item) => {
        item.addEventListener('click', deleteComment);
      });
      document.querySelectorAll('.like-comment-button').forEach((item) => {
        item.addEventListener('click', likeComment);
      });
      document.querySelectorAll('.dislike-comment-button').forEach((item) => {
        item.addEventListener('click', dislikeComment);
      });
    }
  };

  const handleKeydown = (e) => {
    commentInput.value
      ? (commentWriteButton.style.opacity = 1)
      : (commentWriteButton.style.opacity = 0.5);

    if (e.keyCode === 13) {
      addComment();
    }
  };

  const deleteComment = (e) => {
    e.target.parentNode.parentNode.remove();
  };

  const likeComment = (e) => {
    e.target.classList.toggle('display-none');
    e.target.nextElementSibling.classList.toggle('display-none');
  };

  const dislikeComment = (e) => {
    e.target.classList.toggle('display-none');
    e.target.previousElementSibling.classList.toggle('display-none');
  };

  navSearchbar.addEventListener('focus', turnOnSearch);
  navSearchbar.addEventListener('focusout', turnOffSearch);
  commentWriteButton.addEventListener('click', addComment);
  commentInput.addEventListener('keydown', handleKeydown);
  commentDeleteButtonList.forEach((item) => {
    item.addEventListener('click', deleteComment);
  });
  commentLikeButtonList.forEach((item) => {
    item.addEventListener('click', likeComment);
  });
  commentDislikeButtonList.forEach((item) => {
    item.addEventListener('click', dislikeComment);
  });

  // dummy user search
  const dummyUsers = [
    {
      name: 'sonic_the_hedgehog',
      ment: 'gotta go fast',
      url: '/img/sonic.jpg',
    },
    {
      name: 'pickachu',
      ment: 'picka picka!',
      url: '/img/pickachu.jpg',
    },
    {
      name: 'super_mario',
      ment: 'its me, mario',
      url: '/img/mario.jpg',
    },
    {
      name: 'link_not_zelda',
      ment: 'my name is link',
      url: '/img/link.jpg',
    },
  ];

  const filterUserByName = (name) => {
    if (name === '') {
      return;
    }
    const searchResult = dummyUsers.filter((user) => user.name.includes(name));
    return searchResult;
  };

  const showSearchResult = (searchResult) => {
    if (searchResult === undefined || searchResult.length === 0) {
      const resultElement = document.createElement('LI');
      resultElement.innerHTML = `<div class="search-result-item">
          검색 결과가 없습니다
      </div>`;
      searchResultList.append(resultElement);
      return;
    }
    searchResult.forEach((result) => {
      const resultElement = document.createElement('LI');
      resultElement.innerHTML = `<div class="search-result-item">
        <img src="${result.url}" alt="" />
        <div>
          <div class="text-bold-black">${result.name}</div>
          <div class="text-grey">${result.ment}</div>
        </div>
      </div>`;
      searchResultList.append(resultElement);
    });
  };

  navSearchbar.addEventListener('keyup', () => {
    searchResultList.innerHTML = '';
    showSearchResult(filterUserByName(navSearchbar.value));
  });

  // menu box
  const navMypageButton = document.querySelector('.nav-mypage-button');
  const menuBox = document.querySelector('.menu-box');

  const showMenuBox = (e) => {
    e.preventDefault();
    menuBox.classList.toggle('display-none');
  };
  const hideMenuBox = () => {
    menuBox.classList.add('display-none');
  };

  navMypageButton.addEventListener('click', showMenuBox);
  window.addEventListener('click', (e) => {
    if (
      e.target.parentNode != menuBox &&
      e.target.parentNode != navMypageButton
    ) {
      hideMenuBox();
    }
  });
};

initMain();
