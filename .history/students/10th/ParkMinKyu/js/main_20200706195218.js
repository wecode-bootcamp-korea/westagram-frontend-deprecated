const replyBox = document.getElementsByClassName("reply-box")[0];

let reply = document.createElement("li");
let replyText = document.createElement("span");

const button = document.getElementsByClassName("button-key")[0];

replyText.innerHTML = "<b>wecode_10</b> 아녕하세요";
reply.appendChild(replyText);
replyBox.appendChild(reply);

const inputBar = document.getElementsByClassName("reply-input-bar")[0];

button.addEventListener("click", function () {
  let replyValue = inputBar.Value;
  if (replyValue !== 0) {
    replyText.innerHTML = "<b>wecode_10</b> 아녕하세요";
    reply.appendChild(replyText);
    replyBox.appendChild(reply);
  }
});
