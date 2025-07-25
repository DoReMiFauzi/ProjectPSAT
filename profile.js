document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(localStorage.getItem("profileData"));

    if (data) {
      document.getElementById("nickName").innerText = data.nickName || "User";
      document.getElementById("fullName").innerText = data.fullName || "-";
      document.getElementById("email").innerText = data.email || "-";
      document.getElementById("address").innerText = data.address || "-";
      document.getElementById("dob").innerText = data.birth || "-";
      document.getElementById("telp").innerText = data.telp || "-";
      document.getElementById("gender").innerText = data.gender || "-";
      document.getElementById("status").innerText = data.status;
    }
  });

  const exitBtn = document.querySelector("#exitBtn");
  exitBtn.onclick = function(){   
      window.location.replace("index.html");
}

  const editBtn = document.querySelector("#btnEdit");
    editBtn.onclick = function(){   
        window.location.replace("editProfile.html");
  }