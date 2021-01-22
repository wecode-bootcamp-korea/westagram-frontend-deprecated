const $commentList = document.querySelector(".comment_list");
const $commentInput = document.querySelector(".comment_input")
const $commentSubmitButton = document.querySelector(".comment_submit_button");
const $inputSearchBar = document.querySelector(".input_search_bar");
const $searchedIdDiv = document.querySelector(".searched_id_list");

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
    $eachCommentDiv.className = `each_comment_list`;
    $eachCommentDiv.innerHTML = `
        <p class="commented_user_id">Sia</p>
        <p class="commented_text"> ${$commentInput.value}</p>
        <p class="commented_text_remove">삭제</p>
    `
    $commentList.appendChild($eachCommentDiv);
    $commentInput.value = "";
    const $commentedTextRemoveAll = document.querySelectorAll(".commented_text_remove");
    $commentedTextRemoveAll.forEach(comment => comment.addEventListener("click", removeComment));
    $commentInput.removeEventListener("keydown", handleSubmit, true);
    $commentSubmitButton.removeEventListener("click", handleSubmit, true);
}

const removeComment = (event) => {
    const target = event.path[1];
    target.remove();
}

const handleSearch = (event) => {
    const declaredSearchTags = document.querySelectorAll(".searched_results");
    if (declaredSearchTags) {
        declaredSearchTags.forEach(tag => tag.remove())
    };
    const $searchResults = document.createElement("div");
    $searchResults.className = "searched_results"
    $searchResults.textContent = "";
    if (event.keyCode === 13) {
        if (!event.shiftKey) {
            event.preventDefault();
            const target = $inputSearchBar.value;
            const targetResult = IdList.find(id => id.indexOf(target) !== -1);
            $searchResults.textContent = targetResult ? `${targetResult}` : `찾는 결과가 없습니다.`;
            $searchedIdDiv.appendChild($searchResults);
        }
    }
}

$commentInput.addEventListener("keydown", handleWriting);
$commentSubmitButton.addEventListener("click", handleSubmit);
$inputSearchBar.addEventListener("keydown", handleSearch);
