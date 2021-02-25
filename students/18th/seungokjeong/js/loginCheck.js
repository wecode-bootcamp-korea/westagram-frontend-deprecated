if (window.location.pathname === "/main.html") {
  const getUserData = JSON.parse(localStorage.getItem("user"));
  if (!getUserData) window.location.href = "/login.html";
}
