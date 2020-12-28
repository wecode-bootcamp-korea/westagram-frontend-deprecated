//Add Comment function 
const addComment = () => {
    const commentInputBtn = document.getElementsByClassName('feed__comment__Btn')[0];
    
    commentInputBtn.addEventListener('click', () => {
        const commentInput = document.getElementsByClassName('feed__comment__input')[0];
        const commentInputValue = document.getElementsByClassName('feed__comment__input')[0].value;
        const commentPush = document.getElementById('feed__comment__add');

        const addlistItem = document.createElement('li');

        commentInput.value = '';        
        addlistItem.innerHTML = `
        <div class="westagram__feed__info">
        <p>ky_day</p>
        <span>${commentInputValue}</span>
        </div>
        `
        commentPush.appendChild(addlistItem);  
    });
}
addComment();

//Add like ON & OFF and numberInfo function 
const changeLove = () => {
    const loveBtn = document.querySelector('.loves');
    
    loveBtn.addEventListener('click', () => {
        const changeLike = document.querySelector(".loves > path:nth-of-type(2)");
        const numberInfo = document.getElementsByClassName("westagram__feed__love")[0];
        let number = 0;

        (changeLike.classList.contains("mylike") && number >= 0) ? (
            number++,
            changeLike.classList.toggle("mylike"),
            numberInfo.innerHTML = `<div class="westagram__feed__info"><p class="numberinfo">좋아요 ${number}개</p></div>`
        ) : (
            changeLike.classList.toggle("mylike"),
            numberInfo.innerHTML = `<div class="westagram__feed__info"><p class="numberinfo">좋아요 ${number}개</p></div>`
        )

        if(number === 0) {
            numberInfo.innerHTML = ` `;
        }

    });
}
changeLove();






  