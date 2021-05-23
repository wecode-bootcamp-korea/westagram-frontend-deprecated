const pressPost = document.querySelector('.pressPost');
const commentList = document.querySelector('.commentList');
const inputValue = document.querySelector('.inputValue');


function addComment() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const secondSpan = document.createElement('span');
  const strong = document.createElement('strong');
  const commentValue = inputValue.value;

  strong.innerHTML = "_ocean_zoo";
  secondSpan.innerHTML = "\u00A0";
  span.innerHTML = commentValue;
  commentList.appendChild(li);
  li.appendChild(strong);
  li.appendChild(secondSpan);
  li.appendChild(span);
  inputValue.value="";
}


function addCommentEnter(event) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const secondSpan = document.createElement('span');
  const strong = document.createElement('strong');
  const commentValue = inputValue.value;

  if (event.keyCode === 13) {
    strong.innerHTML = "_ocean_zoo";
    secondSpan.innerHTML = "\u00A0";
    span.innerHTML = commentValue;
    commentList.appendChild(li);
    li.appendChild(strong);
    li.appendChild(secondSpan);
    li.appendChild(span);
    inputValue.value="";
  }
}

pressPost.addEventListener('click', addComment);
inputValue.addEventListener('keypress', addCommentEnter);