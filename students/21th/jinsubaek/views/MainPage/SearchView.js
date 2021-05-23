export default {
  DOM: {
    searchInput: document.querySelector(".search-form input"),
    searchResult: document.querySelector(".search-form-result"),
    resetButton: document.querySelector(".search-form button[type=reset]"),
  },

  initialSetup() {
    this.bindEventOnSearchInput();
    this.bindEventOnResetButton();
  },

  bindEventOnSearchInput() {
    this.DOM.searchInput.addEventListener("keyup", (e) => {
      this.handleKeyupSearchInput(e);
    });
  },

  bindEventOnResetButton() {
    this.DOM.resetButton.addEventListener(
      "click",
      this.handleClickResetButton.bind(this)
    );
  },

  handleKeyupSearchInput(e) {
    this.emit(this.DOM.searchInput, "@keyup", e.target.value);
  },

  handleKeyupCommentInput(e) {
    this.activateUploadButton(e.target.value);
  },

  handleClickResetButton() {
    this.emit(this.DOM.resetButton, "@click");
  },

  renderSearchResult(users = []) {
    if (!users.length) {
      this.DOM.searchResult.innerHTML = "";
      return;
    }
    this.DOM.searchResult.innerHTML = createSearchResultTemplate(users);
  },
};

const createSearchResultTemplate = (users = []) => {
  return (
    users.reduce((html, user) => {
      if (!user.nickname) {
        html += `
            <li>
              <div class="search-profile">
                  <img src="${user.profile}">
              </div>
              <div class="search-description"> 
                  <span>${user.id}</span>
              </div>
            </li>`;
        return html;
      }
      html += `
            <li>
              <div class="search-profile">
                  <img src="${user.profile}">
              </div>
              <div class="search-description"> 
                  <span>${user.id}</span>
                  <span>${user.nickname}</span>
              </div>
            </li>`;
      return html;
    }, "<ul>") + "</ul>"
  );
};
