const replyBtn = document.querySelector(".replyBtn");
const insertInput = document.querySelector(".replyInput");

replyBtn.addEventListener("click", () => {
    if (insertInput.value == "") {
        alert("댓글을 입력해주세요");
        return;
    }
    insertReplyTag();
    insertInput.value = "";
});

insertInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (insertInput.value == "") {
            return;
        } else {
            insertReplyTag();
            insertInput.value = "";
        }
    }
});

const insertReplyTag = () => {
    const replyBox = document.querySelector(".replyBox");
    const replyInput = document.querySelector(".replyInput");

    let inputText = replyInput.value;

    const divTag = document.createElement("div");
    const userInfoTag = document.createElement("div");
    const spanTag = document.createElement("span");
    const pTag = document.createElement("p");
    const optionIcons = document.createElement("div");
    const heart = document.createElement("i");
    const redHeart = document.createElement("i");
    const trash = document.createElement("i");

    replyBox.appendChild(divTag);
    divTag.classList.add("replyColumn");
    userInfoTag.classList.add("userInfo");
    spanTag.classList.add("userId");
    pTag.classList.add("replyContent");
    optionIcons.classList.add("optionIcons");
    heart.classList.add("far", "fa-heart");
    redHeart.classList.add("fa", "fa-heart");
    trash.classList.add("far", "fa-trash-alt");

    pTag.innerHTML = inputText;

    divTag.appendChild(userInfoTag);
    divTag.appendChild(optionIcons);
    optionIcons.append(heart);
    optionIcons.append(redHeart);
    optionIcons.append(trash);
    userInfoTag.prepend(spanTag);
    userInfoTag.append(pTag);
    spanTag.innerHTML = "gwanyong";

    redHeart.style.display = "none";

    heart.addEventListener("click", () => {
        if (!heart.classList.contains("activated")) {
            redHeart.classList.add("activated");
            redHeart.style.display = "inline-block";
            heart.style.display = "none";
        }
        redHeart.addEventListener("click", () => {
            redHeart.classList.remove("activated");
            heart.style.display = "inline-block";
            redHeart.style.display = "none";
        });
    });

    trash.addEventListener("click", (e) => {
        divTag.remove();
    });
};
