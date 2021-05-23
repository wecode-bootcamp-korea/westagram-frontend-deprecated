import View from "../views/View.js";
import LoginView from "../views/LoginPage/LoginView.js";
import LoginModel from "../models/LoginPage/LoginModel.js";
import MainController from "./MainController.js";

export default {
  init() {
    Object.assign(LoginView, View);
    this.loginPageSetup();
  },

  loginPageSetup() {
    this.bindEventOnLoginForm();
    LoginView.initialSetup();
  },

  bindEventOnLoginForm() {
    LoginView.DOM.loginForm.addEventListener("@submit", (e) => {
      this.handleSubmitLoginForm(e.detail);
    });
  },

  handleSubmitLoginForm(infoData = {}) {
    LoginModel.setInfo(infoData);

    if (LoginModel.myInfo.isLogined) {
      View.hide(View.element.login);
      View.show(View.element.main);
      MainController.init();
    }
  },
};
