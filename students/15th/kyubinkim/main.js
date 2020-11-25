const list = document.getElementById("list");
const button = document.getElementById("button");
const comment = document.getElementById("textarea");

comment.addEventListener("keydown", function (e) {
  const init = comment.value;
});

function pushcomment(init) {
  console.log(init);

  const li = document.createElement("li");
  li.innerHTML = `<li><span>UserName</span> ${comment.value}</li>`;
  document.getElementById("list").appendChild(li);
  comment.value = "";
}
