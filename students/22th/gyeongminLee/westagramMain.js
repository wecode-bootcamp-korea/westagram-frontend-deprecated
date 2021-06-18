// const submitting = document.getElementById("inputCommentButton").value;
// const typing = document.getElementById('comment').value;
// console.log(document.getElementById("inputCommentButton").value);
// console.log(submitting);
// // typing.addEventListener(keyup,submittingComment);
// //  // 댓글창이 입력되었고 버튼까지 누른다면 -> 이벤트가 발생한다 : 
// //  //두가지 이벤트가 동시에 발생한다는것 어떻게 표현 ? 
// //  // 그게아니라 키업되었을떄 - > 이벤트 발생으로 적으면 될듯 ?
// //  //어떤 이벤트 ? 입력한 value가 새로운 div 태그에 감싸진 이후  웹페이지에 나오는 이벤트 ! 






// function submittingComment(e){
//       if(typing!=="" && submitting!==""){ //타이핑이 되었고, 입력버튼이 눌렸다면 addElement를 실행 
//             addElement();
//       } 
// }

// function addElement(){
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode("아직도 자니???");
//     newDiv.appendChild(newContent);
//     // 이제 기존의 div뒤에 넣기 -insertAfter는 없어서 따로 구현해야한다 .
//     var currentDiv = document.getElementById("feedCommentsList");
//     document.body.insertAfter
// }

//const list = document.getElementsByClassName('commentlist')[0];


 //틀린풀이 - 참고만하자 
// const typing = document.getElementById("comment");

// typing.addEventListener('keyup',submittingComment);


// function submittingComment(e){
//     if(e.keyCode===13){
//         var newDiv = document.createElement("div");
//         var newContent = document.createTextNode(typing.value);
//         //console.log(newContent); // 제대로 들어감 
//         newDiv.appendChild(newContent);
//         var currentDiv = document.getElementById("feedCommentsList");
//         //console.log(currentDiv); 제대로 들어옴 !!!!!!



//         var parentDiv = document.getElementById("feedCommentsListContainer");
//         parentDiv.insertBefore(newDiv,currentDiv.previousSibling)
        
      // document.body.insertBefore(newDiv,currentDiv.parentElement); // 오류나는 부분 
         // 오류 : Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': 
         //The node before which the new node is to be inserted is not a child of this node.
         //  내생각 : 새로입력한 문자열을 typing.value로 새로운 노드로 만들어서 
         //  newcontent 에 넣은것 
         // 그리고 그걸 다시 새로만들 div태그 사이에 집어 넣는다 !!!!
         // 새로운 노드가 들어가기 ''전에 있는 노드''가 이 노드의 자식이 아니다 ..?
         //노드의 부모? 노드의 자식 ?????
         //You have to call insertBefore on the parent element of the element you're inserting 
         //before. document.body is not the parent, it's far up in the DOM hierarchy.
         //The parentNode property returns the parent node of the specified node,
         // as a Node object. Note: In HTML, the document itself is 
         // the parent node of the HTML element, HEAD and BODY are child nodes of the HTML element.
         
         
         //처음부터 새로입력한 댓글이 위로 계속 올라가도록 조절하면 됨 
         // 
         



//     }
// }


const typing = document.getElementById("comment");
const list = document.getElementById("feedCommentsListContainer");

 typing.addEventListener('keyup',submittingComment);

// function checkInout(){
//    if(!InputDeviceInfo.value.length){
//       alert(dlq)
//    }
// }
function submittingComment(e){
   if(e.keyCode===13){
    const newDiv = document.createElement("div");

    //console.log(newDiv);
    const newContent = document.createElement(typing.value);
    newDiv.innerHTML=newContent;
    //console.log(newContent);
    
    document.list.appendChild(newDiv);
    //Node.appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다. 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다. 
    //(문서에 존재하는 노드를 다른 곳으로 붙이기 전에 부모 노드로 부터 지워버릴 필요는 없습니다.)
     //console.log(document.newDiv.appendChild(newContent));
   }
}