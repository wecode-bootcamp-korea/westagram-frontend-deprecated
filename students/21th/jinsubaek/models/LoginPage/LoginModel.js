export default {
  myInfo: {
    id: "",
    password: "",
    isLogined: false,
  },

  setInfo(infoData = {}) {
    this.myInfo = { ...infoData };
  },
};
