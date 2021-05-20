const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
const checkArry = ["tkg789", "muyaho235", "dogefather372"];

const deleteId = () => {
  const searchedList = document.getElementsByClassName("searched-list");
  Array.from(searchedList).forEach((list) => {
    searchBox.removeChild(list);
  });
  searchBox.classList.remove("showing");
};

const paintId = (text) => {
  const searchedList = document.createElement("div");
  const searchedName = document.createElement("li");
  const searchedAvatar = document.createElement("img");
  searchedAvatar.src = `/students/21th/mingikim/images/avatar/${text}.jpg`;
  searchedName.innerText = text;
  if (text) {
    searchedList.classList.add("searched-list");
    searchedName.classList.add("searched-name");
    searchedAvatar.classList.add("searched-avatar");
    searchedList.appendChild(searchedAvatar);
    searchedList.appendChild(searchedName);
    searchBox.classList.add("showing");
    searchBox.appendChild(searchedList);
  } else {
    deleteId();
  }
};

const isCurrectId = (event) => {
  deleteId();
  const toCheckId = event.target.value;
  const checkedId = checkArry.filter((el) => {
    return toCheckId !== "" ? el.includes(toCheckId) : false;
  });
  if (checkedId.length > 0) {
    checkedId.forEach((id) => {
      paintId(id);
    });
  } else {
    deleteId();
  }
};

function checkInput() {
  searchInput.addEventListener("keyup", isCurrectId);
}

function init() {
  checkInput();
}

init();
