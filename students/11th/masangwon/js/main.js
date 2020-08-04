const inputComment = document.querySelector(".inputComment"),
    submitButton = document.querySelector(".submitButton");
let commentList = document.querySelector(".commentList");

function paintList(text) {
    const createList = document.createElement("li");
    const userId = document.createElement("span");
    const userComment = document.createElement("span");
    const likeImg = document.createElement("span");
    likeImg.innerHTML = `
    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
    `
    likeImg.className = "likeImg"
    userId.className = "useNew";
    userId.innerHTML = "ssamwonn";
    userComment.innerHTML = text;
    createList.appendChild(userId);
    createList.appendChild(userComment);
    createList.appendChild(likeImg)
    commentList.appendChild(createList);
}
submitButton.addEventListener('click', function () {
    paintList(inputComment.value);
    inputComment.value = '';
})

