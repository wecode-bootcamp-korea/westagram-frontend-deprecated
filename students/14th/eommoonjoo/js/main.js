const thisisReply = document.querySelector(".replyIn")
const thisisEnroll = document.querySelector(".buttonIn")


// addReply = (event) => {

// }



// document.querySelector(".button").onclick = () => { 
// }

// newRegister = () => {
//     let newP = document.createElement("p");
//     let thisisReply = document.querySelector(".replyIn");
//     let thisisEnroll = document.querySelector(".buttonIn");
// }

thisisReply.addEventListener('keydown',addReply); // 댓글 입력하면 등록 버튼 색상 바꾸기
thisisEnroll.addEventListener('click',clickButton);
thisisReply.addEventListener('keydown',enterEnroll);



function addReply(){
   const comment = thisisReply.value.length;
   const btnColor = document.querySelector(".buttonIn");
   if(comment > 0) {
      btnColor.style.color = "#4aa8d8";
 
   }
}


function clickButton() {
   const commentA = thisisReply.value;
   console.log(commentA);
   const hereIsEvent = document.querySelector('.addPlace');

   const adddiv = document.createElement('div');
   adddiv.className ="addDiv";

   
   const addId = document.createElement('a');
   const addp = document.createElement('span');
   addId.innerHTML = "lemon5625&nbsp&nbsp";

   const divEnd = hereIsEvent.appendChild(adddiv);
   const addEnd2 = divEnd.appendChild(addp);
   const addEnd3 = addEnd2.appendChild(addId);
   
   const addText = document.createTextNode(commentA);
   addp.appendChild(addText);

   // addspan.innerHTML ="jisungpark";
   // addp.innerHTML = commentA;
   // addp.prepend(addspan);
   thisisReply.value ="";

}

function enterEnroll () {
   if(event.keyCode === 13) {
      clickButton();
   }
}
