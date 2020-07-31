/* Morebtn */
const moerButton = document.getElementById('morebtn');

moerButton.addEventListener('click', function() {
  const moreText = document.getElementById('moretext');

  moreText.style.width = '100%';
  moreText.style.overFlow = 'visible';
  moreText.style.whiteSpace = 'normal';
  moreText.style.textOverFlow = 'normal';
  moreText.style.float = 'none';
  moerButton.style.display = 'none';
});

/* Comment(click) */
const commentBtn = document.getElementById('commentbtn');

commentBtn.addEventListener('click', function (){
  let commentValue = document.getElementById('commentinput').value;
  const commetbox = document.getElementsByClassName('middletext')[0];
  let commentUl = document.createElement('ul');
  let commentTitle = document.createElement('li');
  let commentText = document.createElement('li')
  let commentImg = document.createElement('li');
  let commentLike = document.createElement('img');

  if(commentValue.length == 0){
    alert('내용을 입력해주세요');
    return;
  }

  commentUl.className = "maintext";

  commentTitle.innerHTML = "ovv__0703";
  commentTitle.className = "namebold";

  commentText.innerHTML = `${commentValue}`;

  commentLike.setAttribute ("src","img/icon5_fom.png");
  commentImg.className = "likebtn";

  commentUl.appendChild(commentTitle);
  commentUl.appendChild(commentText);
  commentUl.appendChild(commentImg);
  commentImg.appendChild(commentLike);
  commetbox.appendChild(commentUl);

  document.getElementById('commentinput').value = "";

});

/* Comment(keyup) */
const commentEnter = document.getElementById('commentinput');

commentEnter.addEventListener('keydown', function(e) {
  const keyCode = e.keyCode;
  let commentValue = document.getElementById('commentinput').value;
  const commetbox = document.getElementsByClassName('middletext')[0];
  let commentUl = document.createElement('ul');
  let commentTitle = document.createElement('li');
  let commentText = document.createElement('li')
  let commentImg = document.createElement('li');
  let commentLike = document.createElement('img');

  if(commentValue.length >= 1 && keyCode == 13){
    commentUl.className = "maintext";

    commentTitle.innerHTML = "ovv__0703";
    commentTitle.className = "namebold";
  
    commentText.innerHTML = `${commentValue}`;
  
    commentLike.setAttribute ("src","img/icon5_fom.png");
    commentImg.className = "likebtn";
  
    commentUl.appendChild(commentTitle);
    commentUl.appendChild(commentText);
    commentUl.appendChild(commentImg);
    commentImg.appendChild(commentLike);
    commetbox.appendChild(commentUl);
  
    document.getElementById('commentinput').value = "";
  }
});

/* Like btn */
let heartBtn = 0;
function changehHeart(){
  if(heartBtn == 0){
    heartBtn = 1;
    document.getElementById("heartImg").src = "img/icon1_fom_on.png";
  }else{
    heartBtn = 0;
    document.getElementById("heartImg").src = "img/icon1_fom.png";
  }
}
