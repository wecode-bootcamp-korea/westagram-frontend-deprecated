const form = document.getElementById("comment");
const formvalue = document.getElementById("comment").value;
const deletebtn = document.createElement("BUTTON");
const likebtn = document.createElement("img");
const modalcontainer = document.querySelector(".two");

form.addEventListener("keyup", addcomment);

function addcomment(e) {
  if (e.keyCode === 13) {
    const commentcontainer = document.getElementById("commentbox");
    const commentbtnbox = document.createElement("div");
    const commenttext = document.createElement("span");
    const deletebtn = document.createElement("BUTTON");
    const likebtn = document.createElement("img");
    const btncontainer = document.createElement("div");

    commentcontainer.className = "box";
    commenttext.className = "text";
    deletebtn.className = "deletebtn";
    commentbtnbox.className = "commentbtn";
    likebtn.className = "likebtn";
    btncontainer.className = "btncontainer";

    likebtn.src = "img/heart.png";
    deletebtn.innerText = "삭제";
    commenttext.innerHTML = form.value;
    commentcontainer.appendChild(commentbtnbox);
    commentbtnbox.appendChild(commenttext);
    commentbtnbox.appendChild(btncontainer);
    btncontainer.appendChild(likebtn);
    btncontainer.appendChild(deletebtn);

    form.value = "";
    likebtn.addEventListener("click", function changered() {
      likebtn.className = "likebtn";
      if (likebtn.getAttribute("src") == "img/heart-2.png") {
        likebtn.src = "img/heart.png";
      } else if (likebtn.getAttribute("src") == "img/heart.png") {
        likebtn.src = "img/heart-2.png";
      }
    });

    deletebtn.addEventListener("click", (event) => {
      const btn = event.target;
      console.log(btn);
      const btnbox = btn.parentNode;
      const deleteAll = btnbox.parentNode;
      commentcontainer.removeChild(deleteAll);
    });
  }
}

const bubblespace = document.querySelector(".rightone");
const profilebubble = document.createElement("span");
const listone = document.createElement("li");
const listtwo = document.createElement("li");
const listthree = document.createElement("li");
const listfour = document.createElement("li");
const myprofile = document.querySelector(".me");
const body = document.querySelector(".two");

function clickmyprofile() {
  const outside = document.createElement("div");

  outside.className = "outside";
  profilebubble.className = "arrow_box";
  listone.className = "profileclicklist";
  listtwo.className = "profileclicklist";
  listthree.className = "profileclicklist";
  listfour.className = "profileclicklist logout";

  listone.innerHTML =
    "&nbsp;<img src='img/user.png' class='profileclickphoto'>&nbsp;profile";
  listtwo.innerHTML =
    "&nbsp;<img src='img/bookmark.png' class='profileclickphoto'>&nbsp;bookmark";
  listthree.innerHTML =
    "&nbsp;<img src='img/management.png' class='profileclickphoto'>&nbsp;setting";
  listfour.innerHTML =
    "&nbsp;<img src='img/logout.png' class='profileclickphoto'>&nbsp;logout";

  bubblespace.appendChild(profilebubble);
  body.appendChild(outside);
  profilebubble.appendChild(listone);
  profilebubble.appendChild(listtwo);
  profilebubble.appendChild(listthree);
  profilebubble.appendChild(listfour);

  profilebubble.style.display = "block";
  listone.style.display = "block";
  listtwo.style.display = "block";
  listthree.style.display = "block";
  listfour.style.display = "block";

  function offclick() {
    modalcontainer.removeChild(outside);
    profilebubble.style.display = "none";
    listone.style.display = "none";
    listtwo.style.display = "none";
    listthree.style.display = "none";
    listfour.style.display = "none";
  }
  outside.addEventListener("click", offclick);
}
myprofile.addEventListener("click", clickmyprofile);
