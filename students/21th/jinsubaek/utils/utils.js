export default {
  validateInputValue(id, password) {
    if (id.includes(" ") || password.includes(" ")) {
      alert("ID와 PASSWORD는 공백을 포함할 수 없습니다.");
      throw "ID와 PASSWORD는 공백을 포함할 수 없습니다.";
    }

    if (id.length <= 0) {
      alert("ID를 적어주세요.");
      throw "ID를 적어주세요.";
    }

    if (password.length < 5) {
      alert("PASSWORD는 5자리 이상이어야 합니다.");
      throw "PASSWORD는 5자리 이상이어야 합니다.";
    }

    return true;
  },

  createDate() {
    const now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  },
};
