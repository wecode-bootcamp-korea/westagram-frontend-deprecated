const $commentInput = document.querySelector(".comment-input");
const $inputButton = document.querySelector(".input-button");
const $ulDiv = document.querySelectorAll("ul")[1];
const $searchInput = document.querySelector(".search-input");

$ulDiv.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    if (!event.target.classList.contains("fas")) {
      event.target.classList.add("fas");
      event.target.style.color = "#ED4956";
    } else {
      event.target.classList.remove("fas");
      event.target.style.color = "black";
    }
  }
  if (event.target.tagName === "BUTTON") {
    if (confirm("정말 삭제 하시겠습니까?")) {
      event.target.parentNode.remove();
    }
  }
});

const checkRealtimeValue = () => {
  const inputValue = document.querySelector(".comment-input").value;

  const disabledFalse = () => {
    $inputButton.classList.add("activate-button");
    $inputButton.disabled = false;
  };

  const disabledTrue = () => {
    $inputButton.classList.remove("activate-button");
    $inputButton.disabled = true;
  };

  inputValue ? disabledFalse() : disabledTrue();
};

const postComment = () => {
  const nickname = "kingth_man";
  const inputValue = document.querySelector(".comment-input").value;
  const commentTemplete = `<a href="#" class="comment-list-nickname">${nickname}</a>
    <span>${inputValue}</span>
    <button class="delete-button">...</button>
    <i class="far fa-heart like-button"></i>`;
  const $commentElement = document.createElement("li");

  $commentElement.innerHTML = commentTemplete;
  document.querySelectorAll("ul")[1].appendChild($commentElement);
  document.querySelector(".comment-input").value = "";
  $inputButton.classList.remove("activate-button");
  $inputButton.disabled = true;
};

const users = [
  {
    id: "wiinnerb",
    imageUrl: "./img/friends1.jpg",
  },
  {
    id: "joooniboy",
    imageUrl: "./img/friends2.jpg",
  },
  {
    id: "kingth_man",
    imageUrl: "./img/my_profile.jpg",
  },
  {
    id: "chaehoon.p",
    imageUrl: "./img/friends3.jpg",
  },
];

const selectUSer = () => {
  const $searchViewList = document.querySelectorAll(".search-list-flex");
  $searchViewList.forEach((element) => {
    document.querySelector(".search-list-ul").removeChild(element);
  });
  const inputValue = document.querySelector(".search-input").value;
  const searchUsers = users.filter((user) => {
    return user.id.indexOf(inputValue) !== -1;
  });

  if (inputValue) {
    searchUsers.forEach((searchUser) => {
      if (searchUser)
        document.querySelector(".search-list").classList.remove("hidden");
      addElement(searchUser.id, searchUser.imageUrl);
    });
  } else document.querySelector(".search-list").classList.add("hidden");

  function addElement(id, imageUrl) {
    const selectViewTemplete = `<div><img src=${imageUrl} alt="" /></div>
    <div>${id}</div>`;
    const $selectViewElement = document.createElement("li");
    $selectViewElement.innerHTML = selectViewTemplete;
    $selectViewElement.classList.add("search-list-flex");
    document.querySelector(".search-list-ul").appendChild($selectViewElement);
  }
};

const $html = document.querySelector("html");

$html.addEventListener("click", (event) => {
  if (event.target.classList.contains("profile-button")) {
    document.querySelector(".menu-box").classList.remove("hidden");
    document.querySelector(".menu-box").classList.add("show-menu-box");
  } else {
    document.querySelector(".menu-box").classList.add("hidden");
    document.querySelector(".menu-box").classList.remove("show-menu-box");
  }
});

$commentInput.addEventListener("keyup", checkRealtimeValue);
$inputButton.addEventListener("click", postComment);
$commentInput.addEventListener("keyup", (event) => {
  const inputValue = document.querySelector(".comment-input").value;
  if (inputValue && event.key === "Enter") postComment();
});
$searchInput.addEventListener("keyup", () => {
  selectUSer();
});
