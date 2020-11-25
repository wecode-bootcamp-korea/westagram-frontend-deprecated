const list = document.getElementById("list");
const button = document.getElementById("button");
const comment = document.getElementById("textarea");

// comment.addEventListener("keydown", function (e) {
//   e = comment.value;
// });
const inputValue = (e) => {
  comment.value;
};

function pushcomment() {
  const li = document.createElement("li");
  li.innerHTML = `<li><span>UserName</span> ${comment.value}</li>`;
  document.getElementById("list").appendChild(li);
  comment.value = "";
}
