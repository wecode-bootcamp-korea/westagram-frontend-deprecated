const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");
const cancelIcon = document.getElementById("cancel-icon");

const commentsInput = document.getElementById("comments-input");
const commentsButton = document.getElementById("comments-button");

const commentsList = document.getElementsByClassName("comments-list")[0];

searchInput.addEventListener("click", moveSearchBarElements);
commentsInput.addEventListener("keyup", enableCommentsButton);
commentsButton.addEventListener("click", postCommentsByButton);

//Move search icon and placeholder when clicked & go back to initial position when unclicked

function moveSearchBarElements() {
	searchIcon.id = "search-icon-moved";
	searchInput.id = "search-placeholder-moved";
	cancelIcon.id = "cancel-icon-enabled";

	const clickOutsideSearchBar = document.addEventListener(
		"click",
		function (e) {
			const isClickedInside = searchInput.contains(e.target);

			if (!isClickedInside) {
				searchIcon.id = "search-icon";
				searchInput.id = "search-input";
				cancelIcon.id = "cancel-icon";
				searchInput.value = "";
			}
		}
	);
}

//Enable comments post button
function enableCommentsButton() {
	if (commentsInput.value) {
		commentsButton.removeAttribute("disabled");
		commentsButton.id = "comments-button-enabled";
	} else {
		commentsButton.setAttribute("disabled", "");
		commentsButton.id = "comments-button-disabled";
	}
}

//Post comments

function postComments() {
	const eachComment = document.createElement("div");
	eachComment.className = "each-comment";
	commentsList.appendChild(eachComment);
	const commentTexts = document.createElement("span");
	commentTexts.className = "comment-texts";
	commentTexts.innerHTML = commentsInput.value;
	eachComment.appendChild(commentTexts);

	commentsInput.value = "";

	const deleteButton = document.createElement("button");
	deleteButton.className = "comment-icon-button";
	deleteButton.setAttribute("id", "delete-button");
	deleteButton.style.display = "initial";
	eachComment.appendChild(deleteButton);

	const deleteIcon = document.createElement("i");
	deleteIcon.classList.add("far", "fa-trash-alt");
	deleteButton.appendChild(deleteIcon);

	deleteButton.addEventListener("click", function () {
		eachComment.remove();
	});

	const heartButton = document.createElement("button");
	heartButton.className = "comment-icon-button";
	heartButton.setAttribute("id", "heart-button");
	heartButton.style.display = "initial";
	eachComment.appendChild(heartButton);

	const heartIcon = document.createElement("i");
	heartIcon.classList.add("far", "fa-heart");
	heartButton.appendChild(heartIcon);

	heartButton.addEventListener("click", function () {
		if (heartIcon.classList.contains("far")) {
			heartIcon.classList.replace("far", "fas");
			heartIcon.style.color = "#ED4A56";
		} else {
			heartIcon.classList.replace("fas", "far");
			heartIcon.style.color = "black";
		}
	});
}

//Post comments by Button

function postCommentsByButton() {
	if (commentsInput.value !== "") {
		postComments();
	}
}

//Post comments by Enter

commentsInput.addEventListener("keypress", function (e) {
	if (commentsInput.value !== "") {
		if (e.key === "Enter") {
			postComments();
		}
	}
});
