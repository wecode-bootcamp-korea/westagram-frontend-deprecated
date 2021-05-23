export default {
  element: {
    login: document.querySelector("#login-page-container"),
    main: document.querySelector("#main-page-container"),
  },

  show(element) {
    element.style.display = "";
  },

  hide(element) {
    element.style.display = "none";
  },

  emit(target, eventName, value) {
    const event = new CustomEvent(eventName, { detail: value });
    target.dispatchEvent(event);
  },
};
