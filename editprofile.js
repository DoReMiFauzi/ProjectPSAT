document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveBtn");

  saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    const profile = {
      nickName: document.getElementById("nickName").value,
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      telp: document.getElementById("phone").value,
      birth: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      status: "Active",
    };

    localStorage.setItem("profileData", JSON.stringify(profile));
    window.location.href = "profile.html";
  });
});

const telpInput = document.querySelector("#phone");

telpInput.addEventListener("input", function(){
  this.value = this.value.replace(/[^0-9]/g, '');

  if(this.value.length > 12){
    this.value = this.value.slice(0, 12);
  }
});

    const btnKembali = document.querySelector("#btnKembali"); 
        btnKembali.onclick = function() {
            window.location.replace("profile.html");
            return false
        };
    
    function previewPhoto(event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('profilePicPreview');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }