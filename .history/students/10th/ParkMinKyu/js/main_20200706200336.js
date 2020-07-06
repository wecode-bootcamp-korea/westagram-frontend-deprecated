const replyBox = document.getElementsByClassName("reply-box")[0];

let reply = document.createElement("li");
let replyText = document.createElement("span");

const button = document.getElementsByClassName("button-key")[0];

const inputBar = document.getElementsByClassName("reply-input-bar")[0];
button.addEventListener("click", function () {
  replyText.innerHTML = "<b>wecode_10</b>" + replyValue;
  reply.appendChild(replyText);
  replyBox.appendChild(reply);

  let replyValue = inputBar.value;
  if (replyValue !== "") {
    replyText.innerHTML = replyValue;
  }
});
