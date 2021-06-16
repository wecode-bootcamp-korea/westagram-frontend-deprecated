window.onload = function () {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  // const likesBtn = document.getElementsByClassName('likesBtn');

  form.addEventListener('submit', e => {
    e.preventDefault();
    addList();
  });

  function addList() {
    const commentList = input.value;

    let createEle = document.createElement('div');
    let a = (createEle.innerHTML = `
    <div class="commentSection">
    <p class="personalAccount">아이디~<span class="commnets">${commentList}</span></p>
    <i class="likesBtn far fa-heart"></i>
    </div>
    `);
    document.getElementById('mbWrittenComments').innerHTML += a;
    input.value = '';
  }

  // likesBtn.addEventListener('click', () => {
  //   console.log('ksdas');
  //   likesBtn.classList.toggle('likedBtn');
  // });
};
