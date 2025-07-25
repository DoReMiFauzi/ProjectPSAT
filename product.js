const exitBtn = document.querySelector("#exitBtn");
exitBtn.onclick = function(){   
    window.location.replace("index.html");
}

    function changeImage(element) {
      const mainImg = document.getElementById('mainImage');
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(t => t.classList.remove('active'));
      element.classList.add('active');
      mainImg.src = element.src.replace("60x60", "300x300").replace("text=", "text=Sepatu+");
    }

    function selectOption(button, type) {
      const group = document.querySelectorAll(`.${type}-options button`);
      group.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    }

    function updateTotal() {
      const basePrice = 299000;
      const qty = parseInt(document.getElementById('quantityInput').value) || 1;
      document.getElementById('priceValue').textContent = (basePrice * qty).toLocaleString('id-ID');
    }

 function buyNow() {
    localStorage.setItem("showPurchaseNotif", "true");
    window.location.href = "index.html";
  }

  document.querySelector("#btn-buy").addEventListener("click", buyNow);

