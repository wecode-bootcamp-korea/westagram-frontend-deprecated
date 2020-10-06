const clickButton = document.getElementById("myBtn");
const innerComment = document.getElementsByClassName("commentArea")[1];

clickButton.addEventListener("click", function(){

});

let enterInput = document.getElementsByTagName("input")[0];
enterInput.addEventListener("keyup", function(event){
if(event.keycode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
}
});

const blueButton = document.getElementById("myBtn");
const commentInput = document.getElementsByClassName("comment")[0];

commentInput.addEventListener("keyup", function(){


let commentInputvalue = commentInput.value;

if (commentInputvalue.length>=1) {

blueButton.style.color = "#0095f6";
blueButton.style.fontWeight = 600;

}
});