const form = document.getElementById("login-form");
const existingBtn = document.getElementById("existing-user");

if (localStorage.getItem("user")) {
  existingBtn.style.display = "block";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;
  const rememberMe = form.checkbox.checked;

  if (rememberMe) {
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("user");
    existingBtn.style.display = "none";
  }

  alert(`Logged in as ${username}`);
  form.reset();
});

existingBtn.addEventListener("click", function () {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return;

  document.getElementById("username").value = user.username;
  document.getElementById("password").value = user.password;
  document.getElementById("checkbox").checked = true;

  alert(`Logged in as ${user.username}`);
});
