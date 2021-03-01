function change_color(){
  let clickLike = document.getElementsByClassName('fa-grin-hearts')[0];
  if (clickLike.style.color === "red") {
    clickLike.style.color="black"; 
  } else {
    clickLike.style.color="red";
  } 
}

let clickComment = document.getElementsByClassName('enter')[0];
let commentArea = document.querySelector('.input_comment');

function addComment(){
  const inputValue = commentArea.value
  const wrapNickname = document.createElement('div')
  wrapNickname.innerHTML="yang_ji_eun"
  wrapNickname.classList.add('nickname')

  const wrapDescription = document.createElement('div')
  wrapDescription.innerHTML= inputValue
  wrapDescription.classList.add('description')
  
  const container = document.createElement('div')
  container.classList.add('wrap_description')

  const textInput = document.querySelector('.section_description');

  container.appendChild(wrapNickname)
  container.appendChild(wrapDescription)
  textInput.appendChild(container)

}
clickComment.addEventListener('click', addComment )
