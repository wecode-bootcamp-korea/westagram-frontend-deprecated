export default {
  DOM: {
    profileImage: document.querySelector(".menu-profile-image"),
    menuBox: document.querySelector(".menu-box"),
  },

  state: {
    isClickedImage: false,
  },

  initialSetup() {
    this.bindEventOnProfileImage();
    this.bindEventOnMenuBox();
  },

  bindEventOnProfileImage() {
    this.DOM.profileImage.addEventListener("click", (e) => {
      e.stopPropagation();
      this.handleClickProfileImage();
    });
  },

  bindEventOnMenuBox() {
    window.addEventListener("click", (e) => {
      if (e.target.className === "menu-list") return;
      if (e.target.parentNode.className === "menu-list") return;
      if (!this.state.isClickedImage) return;

      this.hadleClickOutsideOfMenuBox();
    });
  },

  handleClickProfileImage() {
    this.renderMenuBox();
  },

  hadleClickOutsideOfMenuBox() {
    this.renderMenuBox();
  },

  renderMenuBox() {
    this.state.isClickedImage = !this.state.isClickedImage;
    this.state.isClickedImage
      ? this.show(this.DOM.menuBox)
      : this.hide(this.DOM.menuBox);
  },
};
