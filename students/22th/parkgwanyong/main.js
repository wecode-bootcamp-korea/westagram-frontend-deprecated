const replyBtn = document.querySelector(".replyBtn");
const insertInput = document.querySelector(".replyInput");
const deleteBtn = document.querySelectorAll(".fa-trash-alt");

replyBtn.addEventListener("click", () => {
    if (insertInput.value == "") {
        alert("댓글을 입력해주세요");
        return;
    }
    insertReplyTag();
    insertInput.value = "";
});

insertInput.addEventListener("keyup", (e) => {
    console.log(insertInput.value);
    if (insertInput.value == "") {
        alert("댓글을 입력해주세요");
        return;
    } else {
        if (e.key === "Enter") {
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
    const trash = document.createElement("i");

    replyBox.appendChild(divTag);
    divTag.classList.add("replyColumn");
    userInfoTag.classList.add("userInfo");
    spanTag.classList.add("userId");
    pTag.classList.add("replyContent");
    optionIcons.classList.add("optionIcons");
    heart.classList.add("far", "fa-heart");
    trash.classList.add("far", "fa-trash-alt");

    pTag.innerHTML = inputText;

    divTag.appendChild(userInfoTag);
    divTag.appendChild(optionIcons);
    optionIcons.append(heart);
    optionIcons.append(trash);
    userInfoTag.prepend(spanTag);
    userInfoTag.append(pTag);
    spanTag.innerHTML = "댓글다는사람";

    trash.addEventListener("click", (e) => {
        divTag.remove();
    });
};
