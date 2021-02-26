const mainInput =document.querySelector('.mainInput')
const writeSend = document.querySelector('.write__send')
const replyList = document.querySelector('.reply--list')
const replyToggle=document.querySelector('.fa-ellipsis-h')
const replyHeart=document.querySelector('.reply .fa-heart')
const reply=document.querySelectorAll('.reply')




// 인풋창 활성화
mainInput.addEventListener('keyup' , replyOk)


function replyOk(){
   const mainInputValue=mainInput.value
  if(mainInputValue){
    writeSend.style.color="#0095F6"
    // writeSend.style.color="#B2DFFC"
  }
  if(!mainInputValue){
    writeSend.style.color="#B2DFFC"
  }
}


// 함수: 지우라면 지워
replyToggle.addEventListener('click' , function(){
    replyToggle.parentElement.remove();
})

// function replyDel(e, replyIDelete){
//       console.log(e);
//       replyIDelete.parentElement.remove();

// function replyDel(e,parent){
//   console.log(e, parent);
//   parent.remove();
    // (reply.item(1)).remove()


replyHeart.addEventListener('click' , heartRed)


// 함수:하트레드
replyHeart.addEventListener('click' , function(){
    if(replyHeart.style.color!=='red'){
        console.log('하트다b아')
        replyHeart.style.color="red"
        }else{
            replyHeart.style.color="black"
        }
})

function heartRed(replyHear){
 console.log(replyHear)
    if(replyHear.style.color!=='red'){
    console.log('하트다b아')
     replyHear.style.color="red"
    }else{
        replyHear.style.color="black"
    }
}
// function init(){

// }
// init();
// 함수 댓글추가 
writeSend.addEventListener( 'click', handleReply )
mainInput.addEventListener( 'keydown', (e) => { handleReplyKey(e)} )
//엔터  글쓰기

function handleReplyKey(e){

    if(e.keyCode===13){
    console.log (mainInput.value)
    const inputValue= mainInput.value
 
    const replyName = document.createElement('div')
    replyName.textContent="durumi"
    replyName.classList.add('reply__name')
   
    const replyDesc = document.createElement('div')
    replyDesc.classList.add('reply__desc')
    replyDesc.textContent =inputValue
 
    const replyIDelete = document.createElement('i')
    replyIDelete.classList.add('fas')
    replyIDelete.classList.add('fa-ellipsis-h')
    
 
    const replyIconHeart = document.createElement('i')
    replyIconHeart.classList.add('far')
    replyIconHeart.classList.add('fa-heart')
    replyIconHeart.style.color="black"
   
    const reply = document.createElement('div')
    reply.classList.add('reply')
 
    reply.appendChild(replyName)
    reply.appendChild(replyDesc)
    reply.appendChild(replyIDelete)
    reply.appendChild(replyIconHeart)
 
    replyList.appendChild(reply)
    mainInput.value=""
 //    console.log(reply)
    replyIDelete.addEventListener('click' , ()=>{
       replyIDelete.parentElement.remove();
            
    })
 
    replyIconHeart.addEventListener('click' , (e)=>{
     // const parent = replyIDelete.parentElement;
     heartRed(replyIconHeart);
         
 })
}
 }


// 클릭 글쓰기
function handleReply(){
   
   const inputValue= mainInput.value

   const replyName = document.createElement('div')
   replyName.textContent="durumi"
   replyName.classList.add('reply__name')
  
   const replyDesc = document.createElement('div')
   replyDesc.classList.add('reply__desc')
   replyDesc.textContent =inputValue

   const replyIDelete = document.createElement('i')
   replyIDelete.classList.add('fas')
   replyIDelete.classList.add('fa-ellipsis-h')
   

   const replyIconHeart = document.createElement('i')
   replyIconHeart.classList.add('far')
   replyIconHeart.classList.add('fa-heart')
   replyIconHeart.style.color="black"
  
   const reply = document.createElement('div')
   reply.classList.add('reply')

   reply.appendChild(replyName)
   reply.appendChild(replyDesc)
   reply.appendChild(replyIDelete)
   reply.appendChild(replyIconHeart)

   replyList.appendChild(reply)
//    console.log(reply)
   replyIDelete.addEventListener('click' , ()=>{
    replyIDelete.parentElement.remove();
           
   })

   replyIconHeart.addEventListener('click' , (e)=>{
    // const parent = replyIDelete.parentElement;
    heartRed(replyIconHeart);
   
})

mainInput.value="안녕"
console.log(inputValue)
}

///////////////////////////////////////////////
//좋아요 증감 반영
const like =document.querySelector('.like')
const likeSpan =document.querySelector('.like span')
const symbolHeart =document.querySelector('.symbol .fa-heart')
// console.log(typeof Number(likeSpan.innerHTML))
symbolHeart.addEventListener('click', likePlus)

function likePlus(){
    if(symbolHeart.style.color!=='red'){
        console.log('하트다b아')
        symbolHeart.style.color="red"
// 숫자 올리기

likeSpan.innerHTML=Number(likeSpan.innerHTML)+1
        }else{
            symbolHeart.style.color="black"
            likeSpan.innerHTML=Number(likeSpan.innerHTML)-1
        }


}

///////////////////////////////////////////////
//상단 검색바

const searchInput =document.querySelector('.search input')
const searchI =document.querySelector('.search i')

// console.log(typeof Number(likeSpan.innerHTML))
searchInput.addEventListener('click', searchChange)

function searchChange(){
console.log("미현 화이팅")
searchI.style.left="20px"
searchInput.style.paddingLeft="35px"
searchInput.style.fontSize="16px"
}