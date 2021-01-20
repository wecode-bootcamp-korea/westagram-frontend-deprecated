const $commentList = document.querySelector(".comment-list");
const $commentInput = document.querySelector(".comment-input")
const $commentForm = document.querySelector(".comment-write-form");
const $commentSubmitButton = document.querySelector(".comment-submit-button");
const $inputSearchBar = document.querySelector(".input-search-bar");
const $searchedIdDiv = document.querySelector(".searched-id-list");

const IdList = ["ho_ho_ho", "like_birds_set_free", "chandelier", "snowman", "cheap_thrills", "courage_to_change", "titanium", "elastic_heart", "move_your_body", "hey_boy", "candy_cane_lane"];

const handleWriting = (event) => {
    if (event.keyCode === 13) {
        if (!event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }
};

const handleSubmit = (event) => {
    const $eachCommentDiv = document.createElement("div");
    $eachCommentDiv.className = `each-comment-list`;
    $eachCommentDiv.innerHTML = [
        `<p class="commented-user-id">Sia</p>`,
        `<p class="commented-text"> ${$commentInput.value}</p>`,
        `<p class="commented-text-remove">삭제</p>`
    ].join("")
    $commentList.appendChild($eachCommentDiv);
    $commentInput.value = "";
    const $commentedTextRemoveAll = document.querySelectorAll(".commented-text-remove");
    $commentedTextRemoveAll.forEach(item => item.addEventListener("click", removeComment));
    $commentInput.removeEventListener("keydown", handleSubmit, true);
    $commentSubmitButton.removeEventListener("click", handleSubmit, true);
}

const removeComment = (event) => {
    const target = event.path[1];
    target.remove();
}

const handleSearch = (event) => {
    const declaredSearchTags = document.querySelectorAll(".searched-results");
    if (declaredSearchTags) {
        declaredSearchTags.forEach(item => item.remove())
    };
    const $searchResults = document.createElement("div");
    $searchResults.className = "searched-results"
    $searchResults.textContent = "";
    if (event.keyCode === 13) {
        if (!event.shiftKey) {
            event.preventDefault();
            const target = $inputSearchBar.value;
            const targetResult = IdList.find(item => item.indexOf(target) !== -1);
            if (targetResult) {
                $searchResults.textContent = `${targetResult}`
            } else {
                $searchResults.textContent = `찾는 결과가 없습니다.`
            }
            $searchedIdDiv.appendChild($searchResults);
        }
    }
}

$commentInput.addEventListener("keydown", handleWriting);
$commentSubmitButton.addEventListener("click", handleSubmit);
$inputSearchBar.addEventListener("keydown", handleSearch);
