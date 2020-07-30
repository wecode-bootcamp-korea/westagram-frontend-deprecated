// let commentBtn = document.getElementById('commentBtn'); //get commentbtn
// let txt = document.getElementsByClassName('comment')[0]; // get input 
// function appendComment() {
//   let commentbox = document.createElement('li'); //li tag make
//   let commentListLeft = document.createElement('div');//div tag make
//   let commentAuthor = document.createElement('a');//a tag make
//   let comment = document.createElement('span');// span tag make
//   let heart = document.createElement('img'); // img tag make
//   let txt = document.getElementById('comment');
//   let commentValue = document.getElementById('comment').value; // get textarea value 
//   let commentList = document.getElementsByClassName('commentList')[0]; // get Ul tag
//   comment.innerHTML = `&nbsp${commentValue}`; // insert comment into span
//   heart.setAttribute('src','/img/heart.png');
//   heart.setAttribute('alt','like-to-comment');
//   commentAuthor.setAttribute('class', 'linkToPeople')
//   commentAuthor.innerHTML = 'sotonghaeyo' // make author name, default , 나중에 로그인 한 사람으로 바꾸자
//   commentListLeft.appendChild(commentAuthor); // a > div
//   commentListLeft.appendChild(comment); // span > div
//   commentbox.appendChild(commentListLeft); // div > li
//   commentbox.appendChild(heart) // heart > li
//   commentList.appendChild(commentbox); // li > ul
//   txt.value = "";
// }

// commentBtn.addEventListener('click',appendComment)
// txt.addEventListener('keydown', (e) => {
//   let enter = e.keyCode? e.keyCode : e.which;
//   if(enter === 13){
//     appendComment();
//   }
// });




// // for Each
// const ul = article[i].getElementsByTagName('ul'); // get ul
// const commentBtn = article[i].getElementsByTagName('button')[0]; // get buttton
// const comment = article[i].getElementsByTagName('textarea')[0]; // get textarea
// let newCommentValue = comment.value; // get textarea Value
// const commentbox = document.createElement('li'); //li tag make
// const commentListLeft = document.createElement('div');//div tag make
// const commentAuthor = document.createElement('a');//a tag make
// const newComment = document.createElement('span');// span tag make
// const heart = document.createElement('img'); // img tag make
// newComment.innerHTML = `&nbsp${newCommentValue}`; // 
// heart.setAttribute('src','/img/heart.png');
// heart.setAttribute('alt','like-to-comment');
// commentAuthor.setAttribute('class', 'linkToPeople')
// commentListLeft.setAttribute('class','commentListLeft');
// commentAuthor.innerHTML = 'sotonghaeyo' // make author name, default , 나중에 로그인 한 아이디로 바꾸는 로직 추가
// commentListLeft.appendChild(commentAuthor); // a > div
// commentListLeft.appendChild(newComment); // span > div
// commentbox.appendChild(commentListLeft); // div > li
// commentbox.appendChild(heart) // heart > li
// commentList.appendChild(commentbox); // li > ul
// comment.value = "";
// // article이 여러개일때? 어떻게 처리??, 배열로 인덱스넘버 이용해서 각 인덱스넘버다마다 할당?
// 1. 아티클을 배열 형태로 받는다
// 2. 아티클에 forEach문을 이용해서 각각 추가
// 3. 그러면 document가 아니라 querySelector를 이용해서, comment, textarea value, Ul tag를 받고,
// 4. 아티클 본문에다가 합쳐진 것을 추가하면 된다

const articlelist = document.getElementsByClassName('feed');
const article = Array.from(articlelist);

article.forEach((ele)=>{
  console.log(ele);
  const ul = ele.getElementsByTagName('ul'); // get ul
  const commentBtn = ele.getElementsByTagName('button')[2]; // get buttton
  const comment = ele.getElementsByTagName('textarea')[0]; // get textarea
  commentBtn.addEventListener('click',appendComment);
  comment.addEventListener('keydown',(e) => {
    let enter = e.keyCode? e.keyCode : e.which;
    if(enter === 13){
    appendComment();
  }
  })
  function appendComment() {
    let newCommentValue = comment.value; // get textarea Value
    const commentbox = document.createElement('li'); //li tag make
    const commentListLeft = document.createElement('div');//div tag make
    const commentAuthor = document.createElement('a');//a tag make
    const newComment = document.createElement('span');// span tag make
    const heart = document.createElement('img'); // img tag make
    newComment.innerHTML = `&nbsp${newCommentValue}`; // 
    heart.setAttribute('src','/img/heart.png');
    heart.setAttribute('alt','like-to-comment');
    commentAuthor.setAttribute('class', 'linkToPeople')
    commentListLeft.setAttribute('class','commentListLeft');
    commentAuthor.innerHTML = 'sotonghaeyo' // make author name, default , 나중에 로그인 한 아이디로 바꾸는 로직 추가
    commentListLeft.appendChild(commentAuthor); // a > div
    commentListLeft.appendChild(newComment); // span > div
    commentbox.appendChild(commentListLeft); // div > li
    commentbox.appendChild(heart) // heart > li
    ul[0].appendChild(commentbox); // li > ul
    comment.value = "";
  }
})



















// 부모태그를 인덱스태그로 받고, 데이터를 받고 추가하는 대상을 인덱스넘버로 다시 변수설정??





