

 //댓글입력 기능 
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
        
   
   
//     }
// }




const typing = document.getElementById("comment");


 typing.addEventListener('keyup',submittingComment);
function submittingComment(e){
   if(e.keyCode===13){
   //  const newDiv = document.createElement("div");
   //  list.appendChild(newDiv);
   //  const newComment=document.createTextNode(typing.value);
   //  //console.log(newComment); 여기까지는 제대로 입력한 텍스트가 들어감 
   //  newDiv.appendChild(newComment); // 문제 안생김 //div 를 어디에 넣을지 안만들어서 문제가 생기는 듯 ???
   
   //  const newContent = document.createElement(typing.value);
   //  newDiv.innerHTML=newContent;

   // const newDiv = document.createElement("div");
   // newDiv.innerHTML =typing.value;
   // const list = document.getElementById("feedCommentsListContainer");
   // list.appendChild(newDiv); // 문제점 : html에 추가가 됨 
   
   const body = document.querySelector("#feedCommentsListContainer");
   //var newUl= document.createElement("ul");
   //body.appendChild(newUl);
   var newLi = document.createElement('li');
   body.appendChild(newLi);
   newLi.setAttribute("class","commentLi");
   
   // let i;
   // newLi.setAttribute("id",`${i}`)
   // 아니면 몇번쨰 객체인지 알아낼수가 있나???-반복문
   
  
   var idCommentSpan = document.createElement("span");
   newLi.appendChild(idCommentSpan);
   idCommentSpan.setAttribute("class","idCommentContainer");
   var newSpan = document.createElement("span");
   idCommentSpan.appendChild(newSpan);
   newSpan.setAttribute("class","idSpan")
   var newSpan2 = document.createElement("span");
   idCommentSpan.appendChild(newSpan2);
   newSpan2.setAttribute("class","commentSpan")
   newSpan.innerHTML="glorious_min";
   newSpan2.innerHTML=typing.value;
   //버튼 추가기능 
   var newButtonSpan =document.createElement("span");
   newLi.appendChild(newButtonSpan);
   newButtonSpan.setAttribute("class","buttonContainer")
   var newSpan3= document.createElement("span");
   newButtonSpan.appendChild(newSpan3);
   newSpan3.setAttribute("class","likeButtonSpan")
   
   var newButton = document.createElement("button");
   newSpan3.appendChild(newButton);
   newButton.innerHTML="좋아요";
   newButton.setAttribute("class","likeButton");
   var newSpan4 = document.createElement("span");
   newSpan4.setAttribute("class","deleteButtonSpan")
   newButtonSpan.appendChild(newSpan4);
   var newButton2 = document.createElement("button");
   newSpan4.appendChild(newButton2);
   newButton2.innerHTML="삭제";
   newButton2.setAttribute("class","deleteButton");
   //setAttribute 로 간단히 바꾸어주기 !!!!!

    
}
}

//삭제버튼만드는 법 
// var myDiv = document.getElementById("myDiv");
// var parent = myDiv.parentElement;
// parent.removeChild(myDiv);

//좋아요 버튼 표시 







//검색창에 특정 문자열 배열  나오게 하는 기능 

 const idArray = ['glorious_min','glorious_lala','glory_morning','glory___77'];
//  const blankForSearch = document.querySelector("#search"); 
//  const autoCompleteResultList = document.getElementById("autoCompleteResultList");
//  //const autoCompleteResultList = document.querySelector("#autoCompleteResultList");

//  blankForSearch.addEventListener('keyup',searchingResult);
//  function searchingResult(e){
   
//          id = blankForSearch.value; //id 두개가 같다고 인식을 못하는데 ??/? 
//          const result = idArray.filter(id => id.includes(blankForSearch.value)===true);
//          console.log(result); // result 안의 배열은 정상이다 ! 다음 문제를 찾아보기 

         
//          const makingList = result =>{
//             console.log(result); //여기에도 result가 제대로 전달되어있다 
//          let arr = result.map(
//             i=>{ // i 는 맵안에 있는 배열값 
//             console.log(result[0]) // i가 배열값 의미하는건 맞는듯 !!!
//          const newDiv=document.createElement("div");
//          // 혹시 appendChild에 배열로 들어가고 있나 ?
//             console.log(newDiv); // 출력됨 div 가운데의 값 - undefined.
//          newDiv.setAttribute("class","autoCompleteResult"); // 다아이브이에 클래스명 추가 - 추가됨  확인 
//          //const resultList=newDiv.innerHTML=`result[${i}]`; //result[glorious_min] 로 출력됨 
//             newDiv.innerHTML=i; // 

//             console.log(result[2]);//어떤 인덱스이든 제대로 값이 나옴 
            
//             console.log(i);
//           autoCompleteResultList.appendChild(newDiv) ;
//          // newDiv.appendChild();

//             }
//          );
        
//       }
//       return makingList(result);
//  }

// 그냥 기존에 있는 메소드를 사용해보기 ...

















//  function autocomplete(input, arr){
//     input.addEventListener("input",function(e){
//        var a,b,i,val=this.value;
//         a = document.createElement("div");
//        a.setAttribute("id",this.id+"autocomplete-list");
//        a.setAttribute("class","autocomplete-items");
//        this.parentNode.appendChild(a);
//        // 내가 입력한것과 동일한것이 있는지 확인 
//        const result = idArray.filter(id => id.includes(blankForSearch.value)===true);
//       //  console.log(result); //나온다 !! 
//       for(i=0;i<result.length;i++){
//          b=document.createElement("div");
//          b.innerHTML = result[i];
//       }
       
//     })
//  }
  

