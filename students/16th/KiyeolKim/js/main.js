// add localstorage comments on the html one by one
const addComment = () => {
    const commentInputBtn = document.getElementsByClassName('feed__comment__Btn')[0];
    
    commentInputBtn.addEventListener('click', (e) => {
        const commentInput = document.getElementsByClassName('feed__comment__input')[0].value;
        console.log(commentInput);
    });
}
addComment();


  