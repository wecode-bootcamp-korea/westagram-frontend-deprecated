//toggle comment's likes
function comment_heart_controll(e) {
  if (e.target.className === 'non-clicked') {
    e.target.className = 'clicked';
    e.target.src = 'img/heart_full.png';
  } else {
    e.target.className = 'non-clicked';
    e.target.src = 'img/heart.png';
  }
}

//delete selected comment
function comment_delete(e) {
  const targetted_comment = e.target.parentNode.parentNode;
  const comment_counter = targetted_comment.parentNode.parentNode.childNodes[7];
  const cur_comment_cnt = targetted_comment.parentNode.parentNode.childNodes[9].childElementCount - 1;
  targetted_comment.remove();
  if (cur_comment_cnt <= 0) comment_counter.innerHTML = '';
  else comment_counter.innerHTML = `댓글 ${cur_comment_cnt}개 모두 보기`;
}

//add event listeners on comments
function add_events_on_comments() {
  const heartbtns = document.querySelectorAll('.comment-right img');
  const deletebtns = document.querySelectorAll('.comment-right span');

  heartbtns.forEach((btn) => {
    btn.addEventListener('click', comment_heart_controll);
  });

  deletebtns.forEach((btn) => {
    btn.addEventListener('click', comment_delete);
  });
}

//add new comment on feed
function add_new_comment(evt) {
  const target_form = evt.target;
  const target_input = target_form.firstChild.nextSibling;
  const target_submitbtn = evt.target.lastChild.previousSibling;
  const user_id = document.querySelector('.right-main .bio .id').innerHTML;
  if (target_input.value.trim().length <= 0) return;
  const target_comment_container = target_form.previousElementSibling.childNodes[9];
  const target_comment_counter = target_form.previousElementSibling.childNodes[7];
  target_comment_container.innerHTML += `
    <div class="comment">
      <div class="comment-left">
        <span class="id">${user_id}</span>
        <span>${target_input.value.trim()}</span>
      </div>
      <div class="comment-right">
        <img class="non-clicked" src="img/heart.png" alt="comment heart">
        <span>삭제</span>
      </div>
    </div>`;
  const cur_comment_cnt = target_comment_container.childElementCount;
  target_comment_counter.innerHTML = `댓글 ${cur_comment_cnt}개 모두 보기`;
  target_input.value = '';
  target_submitbtn.classList.add('newcomment-btn-lightblue');
  add_events_on_comments();
}

//newcomment input handler
function controll_newcomment_input() {
  const comment_inputs = document.querySelectorAll('.newcomment-input');
  comment_inputs.forEach((comment_input) => {
    comment_input.addEventListener('keyup', (evt) => {
      const postbtn = evt.target.parentNode.childNodes[3];
      const trimmed_comment = comment_input.value.trim();
      if (trimmed_comment.length) {
        postbtn.classList.add('newcomment-btn-blue');
        postbtn.classList.remove('newcomment-btn-lightblue');
      } else {
        postbtn.classList.add('newcomment-btn-lightblue');
        postbtn.classList.remove('newcomment-btn-blue');
      }
    });
  });
}

//newcomment form handler
function controll_form() {
  // const comment_form = document.querySelector('.newcomment-form');
  // comment_form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   add_new_comment(e);
  // });
  const comment_forms = document.querySelectorAll('.newcomment-form');
  comment_forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      add_new_comment(e);
    });
  });
}

function init() {
  add_events_on_comments();
  controll_newcomment_input();
  controll_form();
}

init();
