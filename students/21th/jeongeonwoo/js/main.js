const mainRight = document.querySelector('#main-right');
const inputComment = document.querySelectorAll('.article-bottom-input-commnet');
const inputButton = document.querySelectorAll('.article-bottom-input-posting');
const commentText = document.querySelectorAll('.article-bottom-commnet.last');

//mainRight fixed move left
mainRight.style.left = `${167 + (window.innerWidth / 2)}px`;

window.addEventListener('resize', () => {
    mainRight.style.left = `${167 + (window.innerWidth / 2)}px`;
})

//inputcomment click button undisabled
for (let i = 0; i < inputComment.length; i++) {
    inputComment[i].addEventListener('keyup', () => {
        if (inputComment[i].value) {
            inputButton[i].disabled = false;
        } else inputButton[i].disabled = true;
    })
}

//comment input

for (let i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener('click', () => {
        postButton(i);
    })
}

const postButton = (i) => {
    let divEl = document.createElement('div');
    divEl.innerHTML = `
            <div class="article-bottom-commnet text">
            raing_8<span> ${inputComment[i].value}</span>
            <span>
                <svg aria-label="좋아요" fill="#262626" height="12" viewBox="0 0 48 48" width="12">
                    <path
                        d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                    </path>
                </svg>
            </span>
            </div>`;
    commentText[i].appendChild(divEl);
    inputComment[i].value = "";
    inputButton[i].disabled = true;
}

for (let i = 0; i < inputComment.length; i++) {
    inputComment[i].addEventListener('keypress', (e) => {
        if (e.code == 'Enter') {
            postButton(i);
        }
    })
}