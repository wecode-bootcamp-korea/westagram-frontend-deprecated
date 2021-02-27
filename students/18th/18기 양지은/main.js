function change_color(){
  let clickLike = document.getElementsByClassName('fa-grin-hearts')[0];
  if (clickLike.style.color === "red") {
    clickLike.style.color="black"; 
  } else {
    clickLike.style.color="red";
  } 
}