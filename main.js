  document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(localStorage.getItem("profileData"));
    if (data) {
      document.getElementById("nickName").innerText = data.nickName || "User";
    }
  });

// Navigation

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

// Slider

const productContainers = [...document.querySelectorAll('.products')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});


// Beli Sepatu

const buyProductBtn1 = document.querySelector("#buyBtn1");
const buyProductBtn2 = document.querySelector("#buyBtn2");
const buyProductBtn3 = document.querySelector("#buyBtn3");
const buyProductBtn4 = document.querySelector("#buyBtn4");
const buyProductBtn5 = document.querySelector("#buyBtn5");


buyProductBtn1.onclick = function(){
    window.location.replace("product.html");
    return true
}
buyProductBtn2.onclick = function(){
    window.location.replace("product.html");
    return true
}
buyProductBtn3.onclick = function(){
    window.location.replace("product.html");
    return true
}
buyProductBtn4.onclick = function(){
    window.location.replace("product.html");
    return true
}
buyProductBtn5.onclick = function(){
    window.location.replace("product.html");
    return true
}


function toggleDropdown() {
    document.getElementById("profileDropdown").classList.toggle("show");
  }

  // Close Dropdown
  window.addEventListener("click", function (e) {
    const button = document.querySelector('.profile-btn');
    const menu = document.getElementById("profileDropdown");

    if (!button.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
  
// Searching 

const btnAlert = document.getElementById("btnAlert");
const searchTool = document.getElementById("searchTool");
const notifSearch = document.querySelector("#notifSearch");
const btnCloseSearch = document.querySelector("#btnCloseSearch");



btnAlert.onclick = function() {
    notifSearch.style.display = "block";
};

btnCloseSearch.onclick = function() {
    notifSearch.style.display = "none";
};

// Notification

window.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toast");

    if (localStorage.getItem("showPurchaseNotif") === "true") {
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("show");
      }, 100); // Delay dikit buat animasi

      // Hapus flag biar nggak muncul lagi saat refresh
      localStorage.removeItem("showPurchaseNotif");

      // Hilangkan notifikasi setelah 3 detik
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3100);
    }
  });
