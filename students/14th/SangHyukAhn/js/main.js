const buttonComment = document.querySelectorAll('.buttonComment');
const myName = document.querySelector('.profileTextStyle');
const locationFeedContent = document.querySelectorAll('.foodBodyTextStyle');
const locationCommentBox = document.querySelectorAll('.commentBox');
const locationViewComment = document.querySelectorAll(
  '.commentButtonTextStyle'
);

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
    <a href=""><span class="largeText heavyWeight">${myName.innerHTML}</span></a>
    <span class="largeText">${locationTargetInput.value}</span>
    <button class="deleteButton">✖️</button>
  </div>`;
  const deleteButton = locationTargetCommentBox.querySelectorAll(
    '.deleteButton'
  );
  deleteButton.forEach((ele) => ele.addEventListener('click', deleteComment));
  locationTargetInput.value = null;
}

function deleteComment(e) {
  let targetDeleteButton = e.target.parentNode;
  let targetComment = targetDeleteButton.parentNode;
  targetComment.removeChild(targetDeleteButton);
}

const originalBodyText = [];
for (let i = 0; i < locationFeedContent.length; i++) {
  originalBodyText.push(locationFeedContent[i].innerText);
}

function hiddenInnerText(ele) {
  for (let i = 0; i < ele.length; i++)
    if (ele[i].innerText.length > 10) {
      ele[i].innerText = originalBodyText[i].slice(0, 10) + ' ' + '...';
      let makeAddButton = document.createElement('button');
      makeAddButton.className = 'smallText grayColor margin5px';
      makeAddButton.innerText = '더 보기';
      locationFeedContent[i].appendChild(makeAddButton);
      makeAddButton.addEventListener('click', resetBodyText);
    } else {
      ele[i].innerText = originalBodyText[i];
    }
}
hiddenInnerText(locationFeedContent);

function resetBodyText(e) {
  let deleteButton = e.target;
  let locationFeedContentPrent = deleteButton.parentNode;
  locationFeedContentPrent.removeChild(deleteButton);
  for (let i = 0; i < locationFeedContent.length; i++) {
    if (
      locationFeedContentPrent.innerText === locationFeedContent[i].innerText
    ) {
      locationFeedContentPrent.innerText = originalBodyText[i];
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
  for (let i = 2; i < targetComment.children.length; i++) {
    targetComment.children[i].style.display = 'block';
  }
}

// const locateSerchBar = document.querySelector('.serchBarText');
// locateSerchBar.addEventListener('click', serchBarPopUp);
// function serchBarPopUp(e) {
//   let locateSerchBar = e.target;
//   let makeDiv2 = document.createElement('div');
//   makeDiv2.innerHTML;
// }
