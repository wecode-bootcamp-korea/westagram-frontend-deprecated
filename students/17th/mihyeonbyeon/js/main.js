const $commentList = document.querySelector(".comment-list");
const $commentInput = document.querySelector(".comment-input")
const $commentForm = document.querySelector(".comment-write-form");
const $commentSubmitButton = document.querySelector(".comment-submit-button");
const $commentedTextRemove = document.querySelector(".commented-text-remove");
const $commentListAll = document.querySelector(".comment-list").children;
const $inputSearchBar = document.querySelector(".input-search-bar");
const IdList = ["ho_ho_ho", "like_birds_set_free", "chandelier", "snowman", "cheap_thrills", "courage_to_change", "titanium", "elastic_heart", "move_your_body", "hey_boy", "candy_cane_lane"];

const handleWriting = (event) => {
    if (event.keyCode === 13) {
        if (!event.shiftKey) {
            event.preventDefault(); // 서브밋이 안됨. 
            handleSubmit(event);
        }
    }
};

const handleSubmit = (event) => {
    const $eachCommentDiv = document.createElement("div");
    $eachCommentDiv.className = "each-comment-list";
    $eachCommentDiv.innerHTML = [
        `<p class="commented-user-id">Sia❣️</p>`,
        `<p class="commented-text"> ${$commentInput.value}</p>`,
        `<button class="commented-text-remove">삭제</button>`
    ].join("")
    $commentList.appendChild($eachCommentDiv);
    $commentInput.value = "";
    $commentInput.removeEventListener("keydown", handleSubmit, true);
    $commentSubmitButton.removeEventListener("click", handleSubmit, true);
}

const removeComment = (event) => {
    alert("hey");
}

const handleSearch = (event) => {
    const target = $inputSearchBar.value;
}

$commentInput.addEventListener("keydown", handleWriting);
$commentSubmitButton.addEventListener("click", handleSubmit);
$commentedTextRemove.addEventListener("click", removeComment);
$inputSearchBar.addEventListener("keydown", handleSearch);