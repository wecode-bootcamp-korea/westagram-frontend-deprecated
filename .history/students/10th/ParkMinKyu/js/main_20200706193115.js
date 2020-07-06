const replyBox = document.getElementsByClassName("reply-box")[0];

let reply = document.createElement("li");
let replyText = document.createElement("span");

replyText.innerHTML = "<b>wecode_10</b> 아녕하세요";
reply.appendChild(replyText);
replyBox.appendChild(reply);
