const submit = document.querySelector("#submit");

const addcomment = () => {
  const commentList = document.querySelector(".commentList");
  const writeArea = document.querySelectorAll("input")[1];
  const writeVal = writeArea.value;

  const LI = document.createElement("li");
  const DIV = document.createElement("div");
  DIV.textContent = "guest_who";
  const SPAN = document.createElement("span");
  SPAN.textContent = " " + writeVal;
  LI.append(DIV, SPAN);

  commentList.append(LI);
};

submit.addEventListener("click", addcomment);

// const submitBtn = document.querySelector("#submit");

// submitBtn.addEventListener("click", function () {
//   const commentArea = document.querySelectorAll("input")[1];
//   const comment = commentArea.value;
//   const commentPlace = document.querySelector(".commentList");

//   let makeUserCommentPart = document.createElement("li");
//   makeUserCommentPart.textContent = comment;

//   commentPlace.appendChild(makeUserCommentPart);
// });
