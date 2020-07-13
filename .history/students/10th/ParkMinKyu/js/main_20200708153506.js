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
    inputBar.value = "";
    return;
  }
});

const inputEnter = document.getElementsByClassName("reply-input-bar")[0];
inputEnter.addEventListener("keyup", function (
  event
) /*함수안에 envent 쓴이유*/ {
  let reply1 = document.createElement("li");
  let replyText1 = document.createElement("span");
  let replyValue1 = inputBar.value;
  console.log(replyValue1);
  console.log(event.keyCode);

  if (replyValue1 !== "" && event.keyCode == 13) {
    /*키코드는 카멜케이스*/
    replyText1.innerHTML = "<b>wecode_10</b>" + " " + replyValue1;
    reply1.appendChild(replyText1);
    replyBox.appendChild(reply1);
    inputBar.value = "";
    return;
  }
});
