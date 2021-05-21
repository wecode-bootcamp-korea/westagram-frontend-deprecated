const postingBtn = document.querySelector('.postingButton');
const postingText = document.querySelector('.postingTextarea');
postingText.addEventListener('keyup', addComment);

function addComment(e) {
  if (e.key == 'Enter') {
    let feedParaBox = document.querySelector('.feedParaBox');
    let makeFeedParaSub = document.createElement('div');
    let makeParaCommentWrap = document.createElement('div');
    let makeCommentContent = document.createElement('span');
    let makeMainPara = document.createElement('span');
    let makePostingUser = document.createElement('a');

    makeFeedParaSub.className = 'feedParaSub';
    makeParaCommentWrap.className = 'paraCommentWrap';
    makeCommentContent.className = 'commentContent';
    makeMainPara.className = 'mainPara';
    makePostingUser.className = 'postingUser';

    makePostingUser.innerText = 'simoniful';
    makeMainPara.innerText = ' ' + postingText.value;

    feedParaBox.appendChild(makeFeedParaSub);
    makeFeedParaSub.appendChild(makeParaCommentWrap);
    makeParaCommentWrap.appendChild(makeCommentContent);
    makeParaCommentWrap.appendChild(makeMainPara);
    makeCommentContent.appendChild(makePostingUser);

    postingText.value = '';
  }
}
