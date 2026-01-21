const form = document.getElementById("login-form");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
const savedUser = localStorage.getItem("user");
if (savedUser) {
  existingBtn.style.display = "block";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;
  const rememberMe = form.checkbox.checked;

  alert(`Logged in as ${username}`);

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

  form.reset();
});

existingBtn.addEventListener("click", function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  alert(`Logged in as ${user.username}`);
});
