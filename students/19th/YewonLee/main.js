const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");


const commentsInput = document.getElementById("comments-input");
const commentsButton = document.getElementById("comments-button");

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
    let commentsValue = commentsInput.value;
    
    if(commentsValue !== "") {
        commentsButton.removeAttribute("disabled");
        commentsButton.id = "comments-button-enabled";
        } else {
        commentsButton.setAttribute("disabled","");
        commentsButton.id = "comments-button-disabled";
    }    

    const postComments = commentsInput.addEventListener("keypress", function(e) {

        const commentsList = document.getElementsByClassName("comments-list")[0];
        
            if(e.key === 'Enter') {
                
                const comment = document.createElement('p');
                comment.innerHTML = commentsValue;
                console.log(comment);
                commentsList.appendChild(comment);
                
            }
        
    })

});

//Post comments

