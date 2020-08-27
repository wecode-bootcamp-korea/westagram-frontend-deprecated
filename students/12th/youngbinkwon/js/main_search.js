const members = [
  {
    id: "youngkwon315",
    desc: "youngbin",
  },
  {
    id: "yumyumyum12",
    desc: "food",
  },
];

const searchInput = document.querySelector(".input-field");
const suggestions = document.querySelector(".searchPopup");

const searchCreate = () => {
  suggestions.classList.add("show");
};
const searchDelete = () => {
  suggestions.classList.remove("show");
};

function findMatches(word, members) {
  return members.filter((member) => {
    return member.id.match(word) || member.desc.match(word);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, members);
  const html = matchArray
    .map((member) => {
<<<<<<< HEAD
      const memberId = member.id;
      const memberDesc = member.desc;
=======
      const regex = new RegExp(this.value, "gi");
      const memberId = member.id.replace(regex, this.value);
      const memberDesc = member.desc.replace(regex, this.value);
>>>>>>> 5b3822dd08216fcbb0fa82f0d50c20b009705a2b
      return `
            <li>
                <span class="name">${memberId}</span>
                <span class="desc">${memberDesc}</span>
            </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
<<<<<<< HEAD

  if (!searchInput.value) suggestions.innerHTML = "";
=======
>>>>>>> 5b3822dd08216fcbb0fa82f0d50c20b009705a2b
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("focus", searchCreate);
searchInput.addEventListener("blur", searchDelete);
