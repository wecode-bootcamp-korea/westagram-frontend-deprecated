//데이터로부터 피드 렌더..하고 싶어요
const tmp_data = [
  {
    user_id: 'chaelinCL',
    story: true,
    img_src: '/img/feedimg/CL.jpeg',
    content: `아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼
    내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~아무튼 내용임~~`,
    likes: 21,
    comments: [
      { user_id: 'Mengkki', content: '와! 정말 데단해~' },
      { user_id: 'Mengkki', content: '안녕하세용~~' },
    ],
    upload_date: '2020-10-28',
  },
];

function load_feed_content() {}

//더보기 버튼 눌렀을때
function controll_show_more_btn(evt, slice_length) {
  const hide_content = evt.target.previousSibling.previousSibling;
  const original_content = hide_content.previousSibling.previousSibling;
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
      more_btn[idx].style.display = 'inline';
      //   console.log(feed_hidecontents[idx].innerHTML, feed_hidecontents[idx].innerHTML.length);
      more_btn[idx].addEventListener('click', (e) => {
        controll_show_more_btn(e, slice_length); //생긴 더 보기 버튼에 이벤트리스너 달아줌
      });
    } else {
      more_btn[idx].style.display = 'none';
    }
  });
}

function init() {
  load_feed_content();
  hide_feed_content();
}

init();
