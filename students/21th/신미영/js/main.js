const storyList = ['dlwlrma', 'skuukzky', 'leejunhyuk05', 'sjkuksee', 'goldenretrievers', 'sooyaaa__' ]
const suggestedList = ['jennierubyjane', '_mariahwasa', 'wecode', 'sjkuksee', 'sooyaaa__']

const commentInput = document.querySelector('#commentInput');
const postButton = document.querySelector('#postButton');

commentInput.addEventListener('keyup', function() {
  if(commentInput.value !== '') {
    postButton.disabled = false;
    postButton.classList.add('postButtonOn');
  } else {
    postButton.disabled = true;
    postButton.classList.remove('postButtonOn');
  }
});

postButton.addEventListener('click', addComment);

commentInput.addEventListener('keydown', (e) => {
  if(e.code === 'Enter'){
    addComment();
  }
});

function addComment() {
  const newLi = document.createElement('li');
  document.querySelector('ul').appendChild(newLi);
  newLi.innerHTML = `<span class="font-bold">my_sshin </span>${commentInput.value}`;
  commentInput.value = '';
}