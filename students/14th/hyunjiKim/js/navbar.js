const navbar_input = document.querySelector('.nav-search input');

//temporary data
const my_data = [
  { user_id: 'chaelinCL', profile_pic: 'img/profile/chaelinCL.jpg' },
  { user_id: 'daraxxi', profile_pic: 'img/profile/daraxxi.jpg' },
  { user_id: 'kendalljenner', profile_pic: 'img/profile/kendalljenner.jpg' },
  { user_id: 'kimkardashian', profile_pic: 'img/profile/kimkardashian.jpg' },
  { user_id: 'kyliejenner', profile_pic: 'img/profile/kyliejenner.jpg' },
  { user_id: 'meng', profile_pic: 'img/profile/meng.jpeg' },
  { user_id: 'abc', profile_pic: 'img/profile.png' },
  { user_id: 'abc1', profile_pic: 'img/profile.png' },
  { user_id: 'abc2', profile_pic: 'img/profile.png' },
  { user_id: 'abc3', profile_pic: 'img/profile.png' },
];

function search_id() {
  const search_container = document.querySelector('.navbar-search-container');
  search_container.innerHTML = '';
  const input_value = navbar_input.value.trim();
  const filtered_data = my_data.filter((user) => user.user_id.includes(input_value));
  //필터된 데이터를 추가함
  if (filtered_data.length > 0) {
    filtered_data.forEach((user) => {
      search_container.innerHTML += `
        <div class="navbar-search-item">
            <img src="${user.profile_pic}" alt="profile-img">
            <span>${user.user_id}</span>
        </div>
      `;
    });
    const search_items = document.querySelector('.navbar-search-item');
    search_items.classList.remove('navbar-search-center-align');
  } else {
    // 데이터 없으면 없다고표시
    search_container.innerHTML += `
    <div class="navbar-search-item">
        <span>검색된 유저가 없습니다.</span>
    </div>
    `;
    const search_items = document.querySelector('.navbar-search-item');
    search_items.classList.add('navbar-search-center-align');
  }
}

//navbar-search 돋보기 이동
function controll_navbar_search() {
  const navbar_search_icon = document.querySelector('.search-icon');
  const navbar_search_container = document.querySelector('.navbar-search-container');

  navbar_input.addEventListener('focus', () => {
    navbar_search_icon.classList.add('search-focused');
  });
  navbar_input.addEventListener('blur', () => {
    navbar_search_icon.classList.remove('search-focused');
    navbar_search_container.classList.remove('navbar-visible');
  });
  navbar_input.addEventListener('keyup', () => {
    if (navbar_input.value.trim().length) navbar_search_container.classList.add('navbar-visible');
    search_id();
  });
}

//프로필 메뉴바 밖 클릭했을때 꺼지고..아님켜지고..
function controll_navbar_profile() {
  document.addEventListener('click', (evt) => {
    const navbar_profile_container = document.querySelector('.navbar-profile-container');
    const profile_pic = document.querySelector('.nav-right .profile-pic');
    let is_clicked_container = navbar_profile_container.contains(evt.target);
    let is_clicked_profile_pic = profile_pic.contains(evt.target);
    if (is_clicked_container || is_clicked_profile_pic) navbar_profile_container.classList.add('navbar-visible');
    else navbar_profile_container.classList.remove('navbar-visible');
  });
}

function init() {
  controll_navbar_search();
  controll_navbar_profile();
}

init();
