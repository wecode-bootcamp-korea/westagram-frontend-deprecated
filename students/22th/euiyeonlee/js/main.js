"use strict";
/*
1. 클래스명이 'comment_ul_list'인 ul 태그 가져오기
2. 클래스명이 'comment_list'인 li 태그 가져오기


1. li 태그 생성하는 함수 만들기
2. 인풋에 들어온 내용을 저장하는 함수 만들기
3. 인풋에 들어온 값을 li에 넣는 함수 만들기
4. 게시 버튼 이벤트 만들기 ('click', 3번함수 )
5. 게시 버튼 이벤트 만들기 ('click', 6번함수 )

6. 버튼을 활성화/비활성화하는 함수 만들기
*/

function submitComment() {
  //input 태그 가져오기
  const newcommentInput = document.getElementsByClassName("input_comment")[0];
  //input 태그 안 value값 가져오기
  const newcomment = newcommentInput.value.trim();

  if (newcomment) {
    //'id:euiyeonlee'가 들어간 태그 생성 후 클래스명 넣어주기
    const id = document.createElement("span");
    id.classList.add("posting_id");
    id.innerText = "euiyeonlee";

    //input의 내용을 감싸는 span 태그 생성하고 클래스명 넣어주고 값도 넣어주기
    const cmtValue = document.createElement("span");
    cmtValue.classList.add("posting_comment");
    cmtValue.innerText = newcomment;

    //위 두개가 들어갈 div태그 만들고 감싸주기
    const cmt_info_box = document.createElement("div");
    cmt_info_box.classList.add("comment_info_box");
    cmt_info_box.appendChild(id);
    cmt_info_box.appendChild(cmtValue);

    const like = document.createElement("i");
    like.setAttribute("class", "far fa-heart fa-xs");

    const del = document.createElement("a");
    del.setAttribute("class", "far fa-trash-alt fa-xs");

    const modbox = document.createElement("div");
    modbox.classList.add("comment_mod_box");
    modbox.appendChild(like);
    modbox.appendChild(del);

    const li = document.createElement("li");
    li.classList.add("comment_list");
    li.appendChild(cmt_info_box);
    li.appendChild(modbox);

    document.getElementById("cmt_ul").appendChild(li);
    newcommentInput.value = "";
  }
}

const btn = document.getElementsByClassName("commentBtn")[0];
const cmtInput = document.getElementsByClassName("input_comment")[0];
// 7번
function activateBtn() {
  if (cmtInput.value) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "disabled");
  }
}

cmtInput.addEventListener("keyup", activateBtn);
// btn.addEventListener("click", createList);
