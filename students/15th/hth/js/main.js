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

const idArray2 = [
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

const selectId = () => {
  const idArray = idArray2.map((userObj) => {
    return userObj["id"];
  });
  const urlArray = idArray2.map((userObj) => {
    return userObj["imageUrl"];
  });

  const $searchViewList = document.querySelectorAll(".search-list-flex");
  $searchViewList.forEach((element) => {
    document.querySelector(".search-list-ul").removeChild(element);
  });
  const inputValue = document.querySelector(".search-input").value;
  const searchIds = idArray.filter((id) => {
    return id.indexOf(inputValue) !== -1;
  });
  if (inputValue) {
    searchIds.forEach((searchId) => {
      if (searchId)
        document.querySelector(".search-list").classList.remove("hidden");
      idArray.forEach((id, index) => {
        if (id === searchId) {
          addElement(searchId, urlArray[index]);
        }
      });
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
  if (event.target.classList.contains("menu-icon")) {
    document.querySelector(".menu-box").classList.remove("hidden");
  } else {
    document.querySelector(".menu-box").classList.add("hidden");
  }
  //
});

$commentInput.addEventListener("keyup", checkRealtimeValue);
$inputButton.addEventListener("click", postComment);
$commentInput.addEventListener("keyup", (event) => {
  const inputValue = document.querySelector(".comment-input").value;
  if (inputValue && event.key === "Enter") postComment();
});
$searchInput.addEventListener("keyup", () => {
  selectId();
});
