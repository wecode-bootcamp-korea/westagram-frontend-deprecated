const urlInformation = window.location.pathname.split("/");
const nowPage = urlInformation.pop();
if (nowPage === "main.html") {
  const getUserData = JSON.parse(localStorage.getItem("user"));
  if (!getUserData) {
    urlInformation.push("login.html");
    window.location.pathname = urlInformation.join("/");
  }
}
