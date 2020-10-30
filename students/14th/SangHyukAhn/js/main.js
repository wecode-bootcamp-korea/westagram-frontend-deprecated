const buttonComment = document.querySelectorAll('.buttonComment');
const myName = document.querySelector('.profileName div');
const locationFeedContent = document.querySelectorAll('.feedBodyContent');
const locationCommentBox = document.querySelectorAll('.commentBox');
const locationViewComment = document.querySelectorAll(
  '.viewComment .gray-text'
);
const currentBodyTag = document.querySelectorAll('.feedBodyContent .body-text');

buttonComment.forEach((ele) => ele.addEventListener('click', addComment));
locationViewComment.forEach((ele) =>
  ele.addEventListener('click', allComments)
);

function addComment(e) {
  const targetButton = e.target;
  const locationTargetParent = targetButton.parentNode.parentNode;
  const locationTargetInput = locationTargetParent.querySelector(
    '.inputComment'
  );
  const locationTargetCommentBox = locationTargetParent.querySelector(
    '.commentBox'
  );
  locationTargetCommentBox.innerHTML += `<div class="comment">
    <a href=""><span class="large-text">${myName.innerHTML}</span></a>
    <span class="body-text addComments">${locationTargetInput.value}</span>
    <button class="deleteButton">❌</button>
  </div>`;
  const deleteButton = locationTargetCommentBox.querySelectorAll(
    '.deleteButton'
  );
  deleteButton.forEach((ele) => ele.addEventListener('click', deleteComment));
  locationTargetInput.value = null;
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

const locateSerchBar = document.querySelector('.serchBarText');
locateSerchBar.addEventListener('click', serchBarPopUp);
function serchBarPopUp(e) {
  let locateSerchBar = e.target;
  let makeDiv2 = document.createElement('div');
  makeDiv2.innerHTML;
}
