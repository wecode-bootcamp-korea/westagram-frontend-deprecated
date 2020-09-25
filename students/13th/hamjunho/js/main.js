const me = {
  nickname: 'page0blue',
  icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
}

const dummyUser = {
  users: [
    {
      id: 1,
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7f5db01316278394021ccf8cf0d24650&oe=5F92BEA0',
      nickname: 'weboot',
      message: '>wecode | 위코드'
    },
    {
      id: 2,
      icon: 'https://www.enewstoday.co.kr/news/photo/201906/1313207_382877_2618.jpg',
      nickname: 'nakedbibi',
      message: '비비'
    },
    {
      id: 3,
      icon: 'https://i.ytimg.com/vi/kIxAcVIhWPE/maxresdefault.jpg',
      nickname: 'Mr.Song',
      message: '송강호'
    },
    {
      id: 4,
      icon: 'https://img.hankyung.com/photo/201701/03.13255037.1.jpg',
      nickname: 'jichangwook',
      message: '지창욱'
    },
    {
      id: 5,
      icon: 'https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/29196762_1802345479823070_4967943661961441257_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=AGTKfJe4HcwAX_dAu_K&_nc_ht=scontent-gmp1-1.xx&oh=30d3886df6b902fb64dc80a269ce463b&oe=5F910193',
      nickname: 'lilyiu_',
      message: `아이유(IU) | 이지은(Lee Jieun) 🧡`
    },
    {
      id: 6,
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC',
      nickname: 'page0blue',
      message: '귀찮네'
    },
    {
      id: 7,
      icon: 'https://ww.namu.la/s/aeca2e14dbb78281beabffe6d5a8b1a84233da4aa2d7b857f11baa8530908b4faf2dae5ce55389c73821b2235cfa3c4d9744bb30d3edc6efda4a446164481c7883a1601fe728564b751b30bb4e7b5fec0c9b9560abda620ddf868d89baf37357aee9213d8393be29d72c5d821151ba8b',
      nickname: 'EasyGold',
      message: '이지금'
    },
    {
      id: 8,
      icon: 'https://ww.namu.la/s/4e68d2da7f9dc6ec1251daa195275de1a481dbef92a1f00a627dc5f7bdc1aeb8dcfb3dee162cb279e0b28e785e141a99af2559dad5cebfcaa63bad4013cf6edc21d55d1cad4d4fac317161f8f1801c916355ce3711c1a9e4121d7dfc49034ecae954781309df50a86f607b41316f8e26',
      nickname: 'moonLight',
      message: '문별'
    },
    {
      id: 9,
      icon: 'https://w.namu.la/s/b99033a5fa0125d8bed88db1287d8d6e44ecbaa56f51941c0adc6a9dc5179e6651aeee3e3c7f95bc50d9eb4ac432b731f8bdf6bf941c87d1133b9586e5af736ba7aa52c31a153184c1850b642ae9a52548d876c9ece5e433187a6abfb954741b34400921306aa3f85b9657054c813377',
      nickname: 'jiminstart',
      message: '정정'
    },
  ]
}

const dummyPost = [
  {
    id: 1,
    user: {
      nickname: 'page0blue',
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
    },
    postId: 1,
    images: {
      src: 'https://file.mk.co.kr/meet/neds/2020/04/image_readtop_2020_435990_15879677954178860.png'
    },
    contents: '날씨가 너무 좋아',
    comments: [
      {
        id: 1,
        nickname: 'kwe1s',
        contents: '첫번째 댓글',
      },
      {
        id: 2,
        nickname: 'kwe2s',
        contents: '두번째 댓글',
      }
    ],
    liked: 100,
  }
]
/// dummy 부분 ----

const _map = (f, iter) => { let res = []; for (const a of iter) { res.push(f(a)); } return res; }

const body = document.querySelector('body');

const postNickname = document.querySelectorAll('.user_name');
_map((v) => v.textContent = dummyPost.map((posts) => posts.user.nickname), postNickname)

const profileImage = document.querySelectorAll('.my_profile_image');
// profileImage.map((v) => v.classList.add('clipped'))
_map((v) => {
  dummyPost.map((posts) => {
    v.setAttribute("src", posts.user.icon)
    v.classList.add('clipped')
  })
}, profileImage)

const getFriendImage = document.querySelectorAll('.get_friend_image');
_map((v) => v.setAttribute("src", 'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg'), getFriendImage)

const postImage = document.querySelector('.feed_image img');
postImage.setAttribute("src", dummyPost.map((posts) => posts.images.src))

const PostMessage = document.querySelector('.feed_message');
PostMessage.textContent = dummyPost.map((posts) => posts.contents);

const likeYouMessage = document.querySelector('.like_you_message');
likeYouMessage.innerHTML = `<span class="bold">abcd</span> 님 <span 
class="bold">외 ${dummyPost.map((posts) => posts.liked)}명</span>이 좋아합니다`;

const storyList = document.querySelector('.story_list');

dummyUser.users.map((v) => {
  storyList.innerHTML += 
    `<li class="friend_story"> 
    <img src=${v.icon} />
    <span>${v.nickname}</span>
    </li>`
})

// ---- Comments ---- //

const keyPress = () => { // 댓글input value 갯수에 따른 전송버튼 비활성화
  CommentFormArea.value.length <= 0
    ? CommentFormButton.setAttribute('disabled', null)
    : CommentFormButton.removeAttribute('disabled')
  event.keyCode === 13 && submitComment() // Enter로 댓글작성
}

const CommentsList = document.querySelector('.comments_list ul');
const CreateComment = (v) => {
  CommentsList.innerHTML += 
  `<li>
    <div>
      <a>${v.nickname}</a>
      <span>${v.contents}</span>
    </div>
    <div class="btns">
      <div class="comment_remove_btn">삭제</div>
      <div class="heart_toggle">
        <img class="whiteHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
      </div>
    </div>
  </li>
  `
}

dummyPost.map((posts) => posts.comments.map((v) => {
  CreateComment(v)
}))

const CommentsLength = document.querySelector('.comment_length');
CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`

const CommentFormArea = document.querySelector('.comment_form textarea');
const CommentFormButton = document.querySelector('.comment_form button');
function submitComment() { // 댓글 전송
  if (CommentFormArea.value.length < 1) {
    alert('댓글을 입력해라!')
    return;
  }
  dummyPost.map((posts) => posts.comments.push({
    nickname: me.nickname,
    contents: CommentFormArea.value,
    liked: false
  }))
  CommentFormArea.value = ""
  CommentsList.innerHTML = ''
  dummyPost.map((posts) => posts.comments.map((v) => {
    CreateComment(v)
  }))
  CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`
  CommentFormButton.setAttribute('disabled', null)
  removeComment()
  heartToggleWith()
}

const removeComment = () => {
  const commentRemoveBtn = document.querySelectorAll('.comment_remove_btn');
  _map((v) => v.addEventListener('click', () => {
    CommentsList.removeChild(v.parentNode.parentNode)
    CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`
  })
    , commentRemoveBtn)
}

removeComment()

function heartToggleWith() {
  const heartBtn = document.querySelectorAll('.heart_toggle');
  _map((v) => v.addEventListener('click', () => {
    console.log(v.children[0].classList.value)
    if (v.children[0].classList.value === 'whiteHeart') {
      v.innerHTML = `<img class="redHeart" src="https://www.pngfind.com/pngs/m/101-1010488_instagram-heart-png-love-heart-transparent-png.png" />`
    } else {
      v.innerHTML = `<img class="whiteHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />`
    }
  }), heartBtn)
}

heartToggleWith()

// ---- Comments End ---- //

// ---- SearchBarToggle ---- //

const SearchBarToggle = document.querySelector('.nav_search');

SearchBarToggle.children[0].addEventListener('focus', () => {
  SearchBarToggle.classList.remove('search_change');
})

SearchBarToggle.children[0].addEventListener('blur', () => {
  SearchBarToggle.classList.add('search_change');
  // SearchBarToggle.children[0].value = ''
})

SearchBarToggle.children[0].addEventListener('keyup', () => {
  const searchListUl = document.querySelector('.search_list ul');
  const searchList = document.querySelector('.search_list');
  const navSearchInput = document.querySelector('.nav_search input');
  searchListUl.innerHTML = '';
  if (navSearchInput.value.length < 1) {
    searchList.style.display = 'none';
    return;
  }
  searchList.style.display = 'block';

  // ---- SearchBarToggle End ---- //

  // ---- SearchBarFindUser ---- //

  const SearchBarFindUser = dummyUser.users.filter((v) => {
    return v.nickname.includes(navSearchInput.value)
  }).map((v) => {
    searchListUl.innerHTML += 
    `<li class="user_find_li">
      <img src=${v.icon} />
      <div>
        <span>${v.nickname}</span> 
        <p>${v.message}</p> 
      </div>
    </li>`
  })
  if (!SearchBarFindUser.length) {
    searchListUl.innerHTML += 
    `<li>
      <div class="no_search_result">
        <span>검색 결과가 없습니다.</span> 
      </div>
    </li>`
  }
})

// ---- SearchBarFindUser End ---- //

// ---- Profile Click Toggle ---- //

const formProfile = document.querySelector('.form_profile');
body.addEventListener('click', (e) => {
  e.target.parentNode === document.querySelector('.click_form')
    ? formProfile.classList.toggle('hide')
    : formProfile.classList.add('hide')
});

// ---- Profile Click Toggle End ---- //
