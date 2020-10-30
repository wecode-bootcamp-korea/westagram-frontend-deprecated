const tmp_data = [
  {
    user_id: 'chaelinCL',
    user_profile: 'img/profile/chaelinCL.jpg',
    story: true,
    img_src: 'img/feedimg/CL.jpeg',
    content: `아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼
    내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~`,
    likes: 21,
    comments: [
      { user_id: 'Mengkki', content: '와! 정말 데단해~' },
      { user_id: 'Mengkki', content: '안녕하세용~~' },
    ],
    upload_date: '2020-10-28',
  },
  {
    user_id: 'Mengkki',
    user_profile: 'img/profile/meng.jpeg',
    story: true,
    img_src: 'img/profile/meng.jpeg',
    content: '뫄~',
    likes: 21,
    comments: [
      { user_id: 'hoxax', content: '푸삭삭삭' },
      { user_id: 'Mengkki', content: 'ㅡㅡ!!' },
    ],
    upload_date: '2020-10-27',
  },
];

function get_date_difference(postday) {
  const today = new Date();
  let post_upload_date = postday.split('-');
  post_upload_date = new Date(post_upload_date[0], post_upload_date[1] - 1, post_upload_date[2]);
  let date_diff = today - post_upload_date;
  date_diff /= 24 * 60 * 60 * 1000;
  return Math.floor(date_diff);
}

function get_comments_html(comments) {
  return (result = comments.reduce((acc, comment) => {
    return (acc += `
    <div class="comment">
      <div class="comment-left">
        <span class="id">${comment.user_id}</span>
        <span>${comment.content}</span>
      </div>
      <div class="comment-right">
        <img class="non-clicked" src="img/heart.png" alt="comment heart">
        <span>삭제</span>
      </div>
    </div>`);
  }, ''));
}

function load_feed_content() {
  const feed_container = document.querySelector('.feed-container');
  tmp_data.forEach((feed_data) => {
    const comments = get_comments_html(feed_data.comments);
    const date_diff = get_date_difference(feed_data.upload_date);
    feed_container.innerHTML += `
    <article class="feed">
      <div class="feed-header">
        <div class="feed-header-left">
          <div class="profile-img-container">
            <img src=${feed_data.user_profile} alt="progile img">
          </div>
          <span>${feed_data.user_id}</span>
        </div>
        <img src="img/more.png" alt="more">
      </div>
      <div class="feed-img-container">
        <img src=${feed_data.img_src} alt="feedphoto">
      </div>
      <section class="feed-body">
        <div class="feed-bar">
          <div class="bar-left">
            <img src="img/heart.png" alt="heart">
            <img src="img/comment.png" alt="comment">
            <img src="img/direct.png" alt="direct message">
          </div>
          <div class="bar-center">
            <button></button>
          </div>
          <div class="bar-right">
            <img src="img/bookmark.png" alt="bookmark">
          </div>
        </div>
        <p class="feed-likes-counter">좋아요 ${feed_data.likes}개</p>
        <div class="feed-content">
          <span class="id">chaelincl</span>
          <span class="content">${feed_data.content}</span>
          <span class="content-hide"></span>
          <button class="feed-content-morebtn">더 보기</button>
        </div>
        <p class="comment-counter">댓글 ${feed_data.comments.length}개 모두 보기</p>
        <div class="feed-comments">
          ${comments}
        </div>
        <span class="feed-hour">${date_diff}일 전</span>
      </section>
      <form class="newcomment-form">
        <input class="newcomment-input" placeholder="댓글 달기..."></input>
        <button class="newcomment-btn-lightblue">게시</button>
      </form>
    </article>
    `;
  });
}

//더보기 버튼 눌렀을때
function controll_show_more_btn(evt, slice_length) {
  const hide_content = evt.target.previousElementSibling;
  const original_content = hide_content.previousElementSibling;
  if (evt.target.innerHTML === '더 보기') {
    original_content.innerHTML += hide_content.innerHTML;
    evt.target.innerHTML = '숨기기';
  } else {
    original_content.innerHTML = original_content.innerHTML.slice(0, slice_length);
    evt.target.innerHTML = '더 보기';
  }
}

//피드 내용 넘 길면 숨긴다
function hide_feed_content() {
  const more_btn = document.querySelectorAll('.feed-content .feed-content-morebtn');
  const feed_contents = document.querySelectorAll('.feed-content .content');
  const feed_hidecontents = document.querySelectorAll('.feed-content .content-hide');
  const slice_length = 46;
  feed_contents.forEach((content, idx) => {
    if (content.innerHTML.length > slice_length) {
      feed_hidecontents[idx].innerHTML = `${content.innerHTML.slice(slice_length)}`;
      content.innerHTML = content.innerHTML.slice(0, slice_length);
      more_btn[idx].classList.remove('morebtn-invisible');
      more_btn[idx].addEventListener('click', (e) => {
        controll_show_more_btn(e, slice_length); //생긴 더 보기 버튼에 이벤트리스너 달아줌
      });
    } else more_btn[idx].classList.add('morebtn-invisible');
  });
}

function init() {
  load_feed_content();
  hide_feed_content();
}

init();
