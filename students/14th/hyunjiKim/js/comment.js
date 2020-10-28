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
  let targetted_comment = e.target.parentNode.parentNode;
  targetted_comment.remove();
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

//add new comment on feed 수정해야함....target의 댓글에 추가하도록
function add_new_comment(evt) {
  // console.log(evt.target);
  const comment_input = document.querySelector('.newcomment-input');
  if (comment_input.value.trim().length <= 0) return;

  const user_id = document.querySelector('.right-main .bio .id').innerHTML;
  const feed_comment = document.querySelector('.feed-comments');
  const post_btn = document.querySelector('.newcomment-form button');
  feed_comment.innerHTML += `
    <div class="comment">
      <div class="comment-left">
        <span class="id">${user_id}</span>
        <span>${comment_input.value}</span>
      </div>
      <div class="comment-right">
        <img class="non-clicked" src="img/heart.png" alt="comment heart">
        <span>삭제</span>
      </div>
    </div>`;
  let comment_cnt = document.querySelector('.feed-comments').childElementCount;
  const comment_counter = document.querySelector('.comment-counter');
  comment_counter.innerHTML = `댓글 ${comment_cnt}개 모두 보기`;
  comment_input.value = '';
  post_btn.style.color = '#c0e0fc';
  add_events_on_comments(); //추가된 댓글에도 리스너 달아주기
}

//newcomment input handler
function controll_newcomment_textarea() {
  const comment_input = document.querySelector('.newcomment-input');
  comment_input.addEventListener('keyup', (e) => {
    const post_btn = document.querySelector('.newcomment-form button');
    let trimmed_comment = comment_input.value.trim();
    trimmed_comment.length > 0 ? (post_btn.style.color = '#0095f6') : (post_btn.style.color = '#c0e0fc');
  });
}

//newcomment form handler
function controll_form() {
  const comment_form = document.querySelector('.newcomment-form');
  comment_form.addEventListener('submit', (e) => {
    e.preventDefault();
    add_new_comment(e);
  });
}

function init() {
  add_events_on_comments();
  controll_newcomment_textarea();
  controll_form();
}

init();
