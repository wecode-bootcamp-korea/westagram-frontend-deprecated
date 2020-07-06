const replyBox = document.getElementsByClassName("reply-box")[0];
const button = document.getElementsByClassName("button-key")[0];
const inputBar = document.getElementsByClassName("reply-input-bar")[0];

button.addEventListener("click", function () {
  let reply = document.createElement("li");
  let replyText = document.createElement("span");
  let replyValue = inputBar.value;
  if (replyValue !== "") {
    replyText.innerHTML = "<b>wecode_10</b>" + " " + replyValue;
    reply.appendChild(replyText);
    replyBox.appendChild(reply);
  }
});

button.addEventListener("keydown", function () {
  let reply1 = document.createElement("li");
  let replyText1 = document.createElement("span");
  let replyValue1 = inputBar.value;
  if (replyValue1 !== "") {
    replyText1.innerHTML = "<b>wecode_10</b>" + " " + replyValue;
    reply1.appendChild(replyText);
    replyBox.appendChild(reply);
  }
});
