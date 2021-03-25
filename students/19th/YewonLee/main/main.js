const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");


const commentsInput = document.getElementById("comments-input");
const commentsButton = document.getElementById("comments-button");

const commentsList = document.getElementsByClassName("comments-list")[0];

//Move search icon and placeholder when clicked & go back to initial position when unclicked

const moveSearchBarElements = searchInput.addEventListener("click", function(){
    searchIcon.id = "search-icon-moved";
    searchInput.id = "search-placeholder-moved";

    const clickOutsideSearchBar = document.addEventListener("click", function(e) {
        const isClickedInside = searchInput.contains(e.target);

        if(!isClickedInside) {
            searchIcon.id = "search-icon";
            searchInput.id = "search-input";
        }
    })
});

//Enable comments post button
const enableCommentsButton = commentsInput.addEventListener("keyup", function(){
    
    
    if(commentsInput.value !== "") {
        commentsButton.removeAttribute("disabled");
        commentsButton.id = "comments-button-enabled";
        } else {
        commentsButton.setAttribute("disabled","");
        commentsButton.id = "comments-button-disabled";
    }    

    });

//Post comments by Button
const postCommentsByButton = commentsButton.addEventListener("click", function() {
    if(commentsInput.value !== "") {
        const commentByButton = document.createElement('span');
        commentByButton.innerHTML = commentsInput.value;
        console.log(commentByButton);
        commentsList.appendChild(commentByButton);
        commentsInput.value = "";
    }
})





//Post comments by Enter

const postCommentsByEnter = commentsInput.addEventListener("keypress", function(e) {
    if(commentsInput.value !== "") {
        if(e.key === 'Enter') {
            const commentByEnter = document.createElement('span');
            commentByEnter.innerHTML = commentsInput.value;
            console.log(commentByEnter);
            commentsList.appendChild(commentByEnter);
            commentsInput.value = "";
        }
    }
});
