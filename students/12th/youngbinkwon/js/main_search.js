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
      const memberId = member.id;
      const memberDesc = member.desc;
      return `
            <li>
                <span class="name">${memberId}</span>
                <span class="desc">${memberDesc}</span>
            </li>`;
    })
    .join("");
  suggestions.innerHTML = html;

  if (!searchInput.value) suggestions.innerHTML = "";
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("focus", searchCreate);
searchInput.addEventListener("blur", searchDelete);
