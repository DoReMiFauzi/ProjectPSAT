 function toggleForm(form) {
      document.getElementById("login-form").classList.remove("active");
      document.getElementById("register-form").classList.remove("active");
      if (form === "login") {
        document.getElementById("login-form").classList.add("active");
      } else {
        document.getElementById("register-form").classList.add("active");
      }
      document.getElementById("login-message").textContent = "";
      document.getElementById("register-message").textContent = "";
    }

  document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const message = document.getElementById("login-message");

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    message.style.color = "green";
    message.textContent = "Login Sucsess, Wait a minute";
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 500);
  } else {
    message.style.color = "red";
    message.textContent = "Wrong Email/Pass, Try again!";
  }
});

document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirm = document.getElementById("register-confirm").value;

  const message = document.getElementById("register-message");

  if (password !== confirm) {
    message.textContent = "Password tidak cocok.";
    message.style.color = "red";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    message.textContent = "Email sudah terdaftar.";
    message.style.color = "red";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  
  message.style.color = "green";
  message.textContent = "Pendaftaran berhasil! Mengalihkan ke login...";

  setTimeout(() => {
    document.getElementById("register-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("register-confirm").value = "";
    message.textContent = "";

    toggleForm("login");
  }, 1500);
});

