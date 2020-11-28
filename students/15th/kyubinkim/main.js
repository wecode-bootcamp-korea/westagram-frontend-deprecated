const list = document.getElementById("list");
const button = document.getElementById("button");
const comment = document.getElementById("textarea");

// comment.addEventListener("keydown", function (e) {
//   e = comment.value;
// });
// let pushComment = [];

const pushCommentLocal = "pushComment";

function local() {
  localStorage.setItem(pushCommentLocal, JSON.stringify(pushComment));
}
const inputValue = (e) => {
  comment.value;
};

const pushComment = () => {
  const li = document.createElement("li");
  li.innerHTML = `<li><span>UserName</span> ${comment.value} <a><i class="far fa-heart"></i>좋아요</a></li>`;
  document.getElementById("list").appendChild(li);
  comment.value = "";
  local();
};

// const countLike = () => {
//   let like = 0;
//   if ()

// }
