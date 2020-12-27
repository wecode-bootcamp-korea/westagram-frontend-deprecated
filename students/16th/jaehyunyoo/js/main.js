const comments = document.querySelector('.feed__items');
const input = document.querySelector('#comment__input');
const addBtn = document.querySelector('.onSubmit');
const profileShowMenu = document.querySelector('.navMenu__right');
const body = document.querySelector("body");

function onAddComment(){
  const text = input.value;
  if(text === ''){
    return;
  }
  const commentRow = createComment(text);
  comments.appendChild(commentRow);
  commentRow.scrollIntoView({block:'center'})
  input.value = '';
  input.focus();
}
let id = 0; // uuid 
function createComment(text){
  const row = document.createElement('li'); 
  row.setAttribute('class','comment__Like__Btn');
  row.setAttribute('data-id',id);
  row.innerHTML = `
    <div class="comment__row" style="flex-grow: 1;">
      <span span class="user__name"><strong>raihyunYoo</strong></span>
      <span class="comment__content">${text}</span>
    </div>
    <div class="like__delete" style="flex-grow: 0;">
      <button type="button" class="like__btn" style="padding:0;">
        <svg aria-label="좋아요" viewBox="0 0 48 48" style="display:block;">
          <path class="heart" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
      </button>
      <button type="button">
        <i class="far fa-trash-alt" data-id="${id}"></i>
      </button>
    </div>`;
  id++;
  return row;
}
addBtn.addEventListener('click',() => {
  onAddComment();
});
input.addEventListener('keyup', () => {
  if(input.value.length >= 3){
    addBtn.style.opacity = '1';
    addBtn.disabled = false;
  } else {
    addBtn.style.opacity = '.5';
    addBtn.disabled = true;
  }
});
input.addEventListener('keypress', event => {
  if(event.key === 'Enter'){
    onAddComment();
    event.preventDefault();
  }
});
comments.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const deleteRow = document.querySelector(`.comment__Like__Btn[data-id="${id}"]`);
    deleteRow.remove();
  }
  if(event.target.classList.contains("heart__fill") == true){
      event.target.classList.remove("heart__fill");
  } else {
    event.target.classList.add("heart__fill");
  }
});
body.addEventListener('click', clickBodyEvent);

function clickBodyEvent(event){
  const target = event.target;
  if(!(target == event.currentTarget.querySelector('.profile__Menu'))){
    const hideSubMenu = document.querySelector(".sub__Menu");
    hideSubMenu.classList.add('d_none');
    return;
  }
  if(target.lastElementChild.classList.contains("d_none")){
    target.lastElementChild.classList.remove("d_none");
  } 
}