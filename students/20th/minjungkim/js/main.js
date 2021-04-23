const userIcon = document.querySelector('.user_icon');
const userMenu = document.querySelector('.user_menu');
const feedInput = document.querySelector('.feed_input');
const postingBtn = document.querySelector('.posting_btn');
const feedCommentContainer = document.querySelector('.feed_comment_container');
const likeBtns = document.querySelectorAll('.like_btn');
const deleteBtns = document.querySelectorAll('.delete_btn');
const historyDeleteBtns = document.querySelectorAll('.fa-times');
const navSearchResult = document.querySelector('.nav_search_result');
const navSearch = document.querySelector('.nav_search');
const navInput = document.querySelector('.nav_input');

feedInput.addEventListener('input', () => {
	if (feedInput.value) {
		postingBtn.classList.add('active');
	} else {
		postingBtn.classList.remove('active');
	}
});

postingBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let newComment = feedInput.value;
	if (newComment) {
		makeCommentList(newComment);
	}
});

likeBtns.forEach((likeBtn) => {
	likeBtn.addEventListener('click', (e) => {
		likeBtn.classList.toggle('active');
		likeBtn.childNodes[1].classList.toggle('fas');
		likeBtn.childNodes[1].classList.toggle('far');
	});
});

deleteBtns.forEach((deleteBtn) => {
	deleteBtn.addEventListener('click', () => {
		deleteBtn.closest('li').remove();
	});
});

userIcon.addEventListener('click', () => {
	userMenu.classList.add('active');
});

window.addEventListener('click', (e) => {
	if (e.target.className !== 'user_icon' && !e.target.parentNode.classList.contains('user_menu')) {
		userMenu.classList.remove('active');
		return;
	}
});

historyDeleteBtns.forEach((historyDeleteBtn) => {
	historyDeleteBtn.addEventListener('click', () => {
		historyDeleteBtn.parentNode.remove();
	});
});

navSearch.addEventListener('input', () => {
	if (navInput.value) {
		navInput.classList.add('active');
	} else {
		navInput.classList.remove('active');
	}
});

function makeCommentList(newComment) {
	const li = document.createElement('li');
	li.setAttribute('class', 'feed_comment_list');
	li.innerHTML = `
			<div class="feed_comment">
				<span class="friend_id">travellingthroughtheworld</span>
				<span class="friend_comment">${newComment}</span>
			</div>
			<div class="feed_controls">
				<span onclick="onClickLikeBtn(this)" class="like_btn">
					<i class="far fa-heart"></i>
				</span>
				<span onclick="onClickDeleteBtn(this)" class="delete_btn">
					<i class="far fa-trash-alt"></i>
				</span>
			</div>			
			`;
	feedCommentContainer.appendChild(li);
	postingBtn.classList.remove('active');
	feedInput.value = '';
	feedInput.focus();
}

function onClickLikeBtn(that) {
	that.classList.toggle('active');
	that.children[0].classList.toggle('fas');
	that.children[0].classList.toggle('far');
}

function onClickDeleteBtn(that) {
	that.closest('li').remove();
}

// To do's
// retouch speech bubble
// trim function makeCommentList
// search ID and display the result
