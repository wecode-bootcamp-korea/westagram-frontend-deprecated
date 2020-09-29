const phoneScreen = document.querySelector(".phone-block__phone-screen");
const loginForm = document.querySelector(".login-form");
const loginInputs = loginForm.querySelectorAll("input");
const loginBtn = document.querySelector(".login-form__btlogin");
const loginfooterUL = document.querySelector(".login-footer__lists");
const loginFooterMenu = [
  "소개",
  "도움말",
  "홍보 센터",
  "API",
  "채용정보",
  "개인정보처리방침",
  "약관",
  "위치",
  "인기 계정",
  "해시태그",
  "언어",
];
const loginFooterURL = [
  "https://about.instagram.com/",
  "https://help.instagram.com/",
  "https://about.instagram.com/blog",
  "https://www.instagram.com/developer/",
  "https://www.instagram.com/about/jobs/",
  "https://help.instagram.com/519522125107875",
  "https://help.instagram.com/581066165581870",
  "https://www.instagram.com/explore/locations/",
  "https://www.instagram.com/directory/profiles/",
  "https://www.instagram.com/directory/hashtags/",
  "#",
];

const languages = [
  "언어",
  "Afrikaans",
  "Čeština",
  "Dansk",
  "Deutsch",
  "Ελληνικά",
  "English",
  "Español",
  "Suomi",
  "Français",
  "Bahasa Indonesia",
  "Italiano",
  "日本語",
  "한국어",
  "Bahasa Melayu",
  "Norsk",
  "Nederlands",
  "Polski",
  "Português (Brasil)",
  "Português (Portugal)",
  "Русский",
  "Svenska",
  "ภาษาไทย",
  "Filipino",
  "Türkçe",
  "中文 (简体)",
  "中文 (台灣)",
  "বাংলা",
  "ગુજરાતી",
  "हिन्दी",
  "Hrvatski",
  "Magyar",
  "ಕನ್ನಡ",
  "മലയാളം",
  "मराठी",
  "नेपाली",
  "ਪੰਜਾਬੀ",
  "සිංහල",
  "Slovenčina",
  "தமிழ்",
  "తెలుగు",
  "Tiếng Việt",
  "中文 (香港)",
  "Български",
  "Français",
  "Română",
  "Српски",
  "Українська",
];
let phoneScreen__Idx = 0;
const phoneScreen__Imgs = [
  "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
];

function createSelection() {
  loginfooterUL.lastChild.innerHTML = "";

  const footerLangSelect = document.createElement("select");
  languages.forEach((el) => {
    const footerLangOption = document.createElement("option");
    footerLangOption.innerText = el;
    footerLangSelect.appendChild(footerLangOption);
  });
  loginfooterUL.lastChild.appendChild(footerLangSelect);
  console.log(loginfooterUL.lastChild);
}

function createFooterList() {
  loginFooterMenu.forEach((el, idx) => {
    const footerLi = document.createElement("li");
    const footerlink = document.createElement("a");
    footerLi.className = "login-footer__list";
    footerlink.innerHTML = el;
    footerlink.href = loginFooterURL[idx];
    footerLi.appendChild(footerlink);
    loginfooterUL.appendChild(footerLi);
  });
  createSelection();
}

function changeImg() {
  phoneScreen.src = phoneScreen__Imgs[phoneScreen__Idx];
  phoneScreen__Idx = phoneScreen__Idx + 1;
  if (phoneScreen__Idx >= phoneScreen__Imgs.length) {
    phoneScreen__Idx = 0;
  }
}

function upPlaceholderANDdownText(input, placeholder) {
  placeholder.classList.add(`${placeholder.classList[0]}Upper`);
  input.classList.add("downText");
}

function downPlaceholder(input, placeholder) {
  placeholder.classList.remove(`${placeholder.classList[0]}Upper`);
  input.classList.remove("downText");
}

function isUserInfoValid(validity) {
  if (validity) {
    loginBtn.classList.remove("btn-disabled");
  } else {
    loginBtn.classList.add("btn-disabled");
  }
}

function handleLoginInput(event) {
  const inputTarget = event.target;
  const inputTargetPlaceholder = inputTarget.nextElementSibling;

  if (inputTarget.value) {
    upPlaceholderANDdownText(inputTarget, inputTargetPlaceholder);
  } else {
    downPlaceholder(inputTarget, inputTargetPlaceholder);
  }
  isUserInfoValid(loginForm.checkValidity());
}

(function init() {
  createFooterList();
  setInterval(changeImg, 2000);
  loginForm.addEventListener("input", handleLoginInput);
})();
