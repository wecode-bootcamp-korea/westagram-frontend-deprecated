const inputComment = document.querySelectorAll('.inputComment');
const buttonComment = document.querySelectorAll('.buttonComment');
const myName = document.querySelector('.profileName div');
const currentBodyTag = document.querySelectorAll('.feedBodyContent .body-text');
const locationFeedContent = document.querySelectorAll('.feedBodyContent');
const locationCommentBox = document.querySelectorAll('.commentBox');
const locationViewComment = document.querySelectorAll(
  '.viewComment .gray-text'
);

buttonComment.forEach((ele) => ele.addEventListener('click', addComment));
locationViewComment.forEach((ele) =>
  ele.addEventListener('click', allComments)
);

function addComment(e) {
  const locationComment = e.target;
  const locationCommentParent = locationComment.parentNode.parentNode;
  const locationCommenBox = locationCommentParent.querySelector('.commentBox');
  const locationInputBox = locationCommentParent.querySelector('.inputComment');
  const makeDiv = document.createElement('div');
  const makeWriter = document.createElement('span');
  const makeMessage = document.createElement('span');
  const makeDelButton = document.createElement('button');
  makeDiv.className = 'comment';
  makeWriter.className = 'large-text';
  makeMessage.className = 'body-text addComments';
  makeDelButton.className = 'deleteButton';
  makeMessage.innerHTML = locationInputBox.value;
  makeWriter.innerHTML = myName.innerHTML;
  makeDelButton.innerHTML = '❌';
  locationCommenBox.appendChild(makeDiv);
  makeDiv.appendChild(makeWriter);
  makeDiv.appendChild(makeMessage);
  makeDiv.appendChild(makeDelButton);
  makeDelButton.addEventListener('click', deleteComment);
  locationInputBox.value = null;
}

function deleteComment(e) {
  let delButton = e.target.parentNode;
  let targetComment = delButton.parentNode;
  targetComment.removeChild(delButton);
}

const originalText = [];
for (let i = 0; i < locationFeedContent.length; i++) {
  originalText.push(currentBodyTag[i].innerText);
}

function hiddenInnerText(ele) {
  for (let i = 0; i < ele.length; i++)
    if (ele[i].innerText.length > 10) {
      ele[i].innerText = originalText[i].slice(0, 10) + ' ' + '...';
      let makeAddButton = document.createElement('button');
      makeAddButton.className = 'gray-text12 margin5px';
      makeAddButton.innerText = '더 보기';
      locationFeedContent[i].appendChild(makeAddButton);
      makeAddButton.addEventListener('click', resetBodyText);
    } else {
      ele[i].innerText = originalText[i];
    }
}
hiddenInnerText(currentBodyTag);

function resetBodyText(e) {
  let deleteButton = e.target;
  let locationFeedContentP = deleteButton.parentNode;
  locationFeedContentP.removeChild(deleteButton);
  let changeTag = locationFeedContentP.querySelector('.body-text');
  for (let i = 0; i < currentBodyTag.length; i++) {
    if (changeTag.innerText === currentBodyTag[i].innerText) {
      changeTag.innerText = originalText[i];
    }
  }
}

for (let i = 0; i < locationCommentBox.length; i++) {
  let locationCommenter = locationCommentBox[i].children;
  document.querySelectorAll('.numberOfComment')[i].innerHTML =
    locationCommenter.length;
}

for (let i = 0; i < locationCommentBox.length; i++) {
  let locationCommenter = locationCommentBox[i].children;
  if (locationCommenter.length > 2) {
    for (let j = 2; j < locationCommenter.length; j++) {
      locationCommenter[j].style.display = 'none';
    }
  }
}

function allComments(e) {
  let targetViewiewButton = e.target.parentNode.parentNode;
  let targetComment = targetViewiewButton.children[2];
  console.log((targetComment.children[2].style.display = 'block'));
  for (let i = 2; i < targetComment.children.length; i++) {
    targetComment.children[i].style.display = 'block';
  }
}

const aa = document.querySelector('.serchBarText');
aa.addEventListener('click', serchBarPopUp);
function serchBarPopUp(e) {
  let locationSerchBar = e.target;
  let makeDiv2 = document.createElement('div');
  makeDiv2.innerHTML;
}
