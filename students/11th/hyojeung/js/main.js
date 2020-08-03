/* Morebtn */
const moreButton = document.getElementsByClassName('moreBtn')[0];

moreButton.addEventListener('click', function() {
  const moreText = document.getElementsByClassName('moreText')[0];

  moreText.style.width = '100%';
  moreText.style.overFlow = 'visible';
  moreText.style.whiteSpace = 'normal';
  moreText.style.textOverFlow = 'normal';
  moreText.style.float = 'none';
  moreButton.style.display = 'none';
});

/* Comment(click) */
const commentBtn = document.getElementsByClassName('commentBtn')[0];

commentBtn.addEventListener('click', function (){
  let commentValue = document.getElementsByClassName('commentInput')[0];
  let commentBox = document.getElementsByClassName('middleText')[0];
  let commentUl = document.createElement('ul');
  let commentTitle = document.createElement('li');
  let commentText = document.createElement('li')
  let commentImg = document.createElement('li');
  let commentLike = document.createElement('img');

  if(commentValue.value.length == 0){
    alert('내용을 입력해주세요');
    return;
  }

  commentUl.className = "mainText";

  commentTitle.innerHTML = "ovv__0703";
  commentTitle.className = "nameBold";

  commentText.innerHTML = commentValue.value;

  commentLike.setAttribute ("src","img/icon5_fom.png");
  commentImg.className = "likeBtn";

  commentUl.appendChild(commentTitle);
  commentUl.appendChild(commentText);
  commentUl.appendChild(commentImg);
  commentImg.appendChild(commentLike);
  commentBox.appendChild(commentUl);

  commentValue.value = "";

});

/* Comment(keyup) */
const commentEnter = document.getElementsByClassName('commentInput')[0];

commentEnter.addEventListener('keydown', function(e) {
  const {keyCode} = e;
  let commentValue = document.getElementsByClassName('commentInput')[0];
  let commentBox = document.getElementsByClassName('middleText')[0];
  let commentUl = document.createElement('ul');
  let commentTitle = document.createElement('li');
  let commentText = document.createElement('li')
  let commentImg = document.createElement('li');
  let commentLike = document.createElement('img');

  if(commentValue.value.length >= 1 && keyCode == 13){
    commentUl.className = "mainText";

    commentTitle.innerHTML = "ovv__0703";
    commentTitle.className = "nameBold";
  
    commentText.innerHTML = commentValue.value;
  
    commentLike.setAttribute ("src","img/icon5_fom.png");
    commentImg.className = "likeBtn";
  
    commentUl.appendChild(commentTitle);
    commentUl.appendChild(commentText);
    commentUl.appendChild(commentImg);
    commentImg.appendChild(commentLike);
    commentBox.appendChild(commentUl);
  
    commentValue.value = "";
  }
});

/* Like btn */
function changehHeart() {
  let heartBtn = 0;
  const heartImg = document.getElementById("heartImg")
  if (heartBtn) {
    heartBtn = 0;
    heartImg.src = "img/icon1_fom.png";    
  }else{
    heartBtn = 1;
    heartImg.src = "img/icon1_fom_on.png";
  }
}