import utils from "../../utils/utils.js";

export default {
  DOM: {
    loginButton: document.querySelector(".login-button"),
    loginForm: document.querySelector(".login-form"),
    idInput: document.querySelector(".login-input-id"),
    passwordInput: document.querySelector(".login-input-password"),
  },

  initialSetup() {
    this.bindEventOnLoginForm();
    this.bindEventOnPasswordInput();
  },

  bindEventOnLoginForm() {
    this.DOM.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmitLoginForm();
    });
  },

  bindEventOnPasswordInput() {
    this.DOM.passwordInput.addEventListener(
      "keyup",
      this.activateLoginButton.bind(this)
    );
  },

  handleSubmitLoginForm() {
    if (
      !utils.validateInputValue(
        this.DOM.idInput.value,
        this.DOM.passwordInput.value
      )
    )
      return;

    this.emit(this.DOM.loginForm, "@submit", {
      id: this.DOM.idInput.value,
      password: this.DOM.passwordInput.value,
      isLogined: true,
    });
  },

  activateLoginButton() {
    if (!this.DOM.idInput.value.length) return;

    this.DOM.passwordInput.value.length
      ? (this.DOM.loginButton.style.backgroundColor = "dodgerblue")
      : (this.DOM.loginButton.style.backgroundColor = "#c5e0fe");
  },
};
