const replyBox = document.getElementsByClassName("reply-box")[0];

let reply = document.createElement("li");
let replyText = document.createElement("span");

let reply1 = document.createElement("li");
let replyText1 = document.createElement("span");

replyText.innerHTML = "햐햐햐";

reply.appendChild(replyText);
replyBox.appendChild(reply);
