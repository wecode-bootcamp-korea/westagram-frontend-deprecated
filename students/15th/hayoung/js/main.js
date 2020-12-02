const commentInput = document.getElementsByClassName('commentInput')[0],
  submitBtn = document.getElementsByClassName('submitBtn')[0],
  commentList = document.getElementsByClassName('commentList')[0],
  recommendList = document.getElementsByClassName('recommendList')[0];

submitBtn.disabled = true;

const DATA = [
  {
    profileImg: "img/li1.jpg", 
    userName: "renebaebae", 
    "follower": "hi_sseulgi"
  },
  {
    profileImg: "img/li2.jpg", 
    userName: "_jeongjaehyun", 
    "follower": "johnnyjsuh"
  }
]

let profile = DATA.map(el => {
  return (
      <li>
        <div class="profile">
          <img class="thumbnail" src={el.profileImg} alt="${el.userName}님의 프로필 사진" />
          <div class="profileText">
            <span class="userId">{el.userName}</span>
            <span class="subText">{el.follower}님 외 2명이 팔로우합니다</span>
          </div>
        </div>
        <span class="followBtn">팔로우</span>
      </li>
  )
});

recommendList.appendChild(profile);

let addNewComment = (e) => {
  e.preventDefault();
  if(commentInput.value.length > 0){
    let newComment = commentInput.value;
    let newCommentBlock = document.createElement('li');
    newCommentBlock.innerHTML = `<span class="userId">bibiandpipi</span>
    <span class="userText">${newComment}</span>`;
    commentList.appendChild(newCommentBlock);
    commentInput.value = '';
  }
}

commentInput.addEventListener('keypress', function(e){
  if(e.keyCode === 13){addNewComment()};
});

commentInput.addEventListener('keyup', function() {
  if (commentInput.value.length > 0) {
    submitBtn.disabled = false;
    submitBtn.style.color = '#0095f6'
  }
})

submitBtn.addEventListener('click', addNewComment);




