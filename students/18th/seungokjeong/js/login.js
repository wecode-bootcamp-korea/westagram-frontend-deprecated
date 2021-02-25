import userData from "./userData.js";

window.onload = function () {
  const loginBox = document.querySelector(".login-box");

  const createLoginForm = () => {
    const loginForm = document.createElement("div");
    loginForm.classList.add("login-form");
    loginForm.innerHTML = `
    <input id="username" class="login-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
    <input id="password" class="login-input" type="password" placeholder="비밀번호"/>
    <a class="login-button">로그인</a>
    <a class="login-help">비밀번호를 잊으셨나요?</a>`;
    loginBox.append(loginForm);

    const usernameInput = loginForm.querySelector("#username");
    const passwordInput = loginForm.querySelector("#password");
    const loginButton = loginForm.querySelector(".login-button");

    usernameInput.addEventListener("keyup", e => {
      checkValidation(e, usernameInput.value, passwordInput.value, loginButton);
    });
    passwordInput.addEventListener("keyup", e => {
      checkValidation(e, usernameInput.value, passwordInput.value, loginButton);
    });
    loginButton.addEventListener("click", e => {
      pageChange(e, usernameInput.value, passwordInput.value, loginButton);
    });
  };

  const addUserData = (id, password) => {
    const loginUser = userData.filter(
      data => data.email === id && data.password === password
    )[0];
    console.log(loginUser);
    if (loginUser.length === 0) {
      alert("입력한 정보가 정확하지 않습니다");
      return;
    }
    const userdata = {
      emailID: id,
      name: loginUser.username,
      koreanName: loginUser.name,
      password: password,
      image: loginUser.imgUrl,
    };
    localStorage.setItem("user", JSON.stringify(userdata));
    location.href = "main.html";
    loginBox.classList.add("active");
  };

  const checkValidation = (e, email, pw, loginButton) => {
    if (email.includes("@") && pw.length >= 5) {
      loginButton.classList.add("active");
      if (e.keyCode === 13) addUserData(email, pw);
    } else loginButton.classList.remove("active");
  };

  const pageChange = (e, id, password, loginButton) => {
    if (!loginButton.classList.contains("active")) e.preventDefault();
    else addUserData(id, password);
  };

  const userCheck = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data;
  };
  if (userCheck() === null) {
    createLoginForm();
  } else {
    const user = userCheck();
    const loginUser = document.createElement("div");

    loginUser.classList.add("login-user");
    loginUser.innerHTML = `<img src="${user.image}" alt="프로필 이미지"/>
    <span class="user-name"><em>${user.name}</em> 님으로 로그인중</span>
    <span class="user-change"><em>${user.name}</em> 이 아닌가요?<a class="change-btn">계정 변경</a></span>`;
    loginBox.append(loginUser);
    const loginChangeBtn = document.querySelector(".change-btn");
    loginChangeBtn.addEventListener("click", () => {
      createLoginForm();
      loginUser.innerHTML = "";
      localStorage.removeItem("user");
    });
  }
};
