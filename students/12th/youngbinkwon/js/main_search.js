// 멤버 배열
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

// 검색결과창 보이기/숨기기
const searchCreate = () => {
  suggestions.classList.add("show");
};
const searchDelete = () => {
  suggestions.classList.remove("show");
};

// 검색 결과 배열에서 추출
function findMatches(word, members) {
  return members.filter((member) => {
    return member.id.match(word) || member.desc.match(word);
  });
}

// 검색결과 표기
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

// 이벤트 요소
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("focus", searchCreate);
searchInput.addEventListener("blur", searchDelete);
