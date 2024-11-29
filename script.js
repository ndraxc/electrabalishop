// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let debounceTimer;

function debouncedSearch() {
  // Clear the previous timer to reset the delay every time user types
  clearTimeout(debounceTimer);

  // Set the delay for the search function (500ms)
  debounceTimer = setTimeout(function() {
    searchItems();
  }, 500);
}


function searchItems() {
let input = document.getElementById('search-bar').value.toLowerCase();
let cards = document.querySelectorAll('.product-card');
let noResultsMessage = document.getElementById('no-results-message');
let found = false;

cards.forEach(function(card) {
let title = card.querySelector('.card-title').textContent.toLowerCase();
if (title.indexOf(input) > -1) {
  card.style.display = 'block';  // Menampilkan produk yang sesuai
  found = true;
} else {
  card.style.display = 'none';  // Menyembunyikan produk yang tidak sesuai
}
});

// Menampilkan atau menyembunyikan pesan "Barang yang dicari belum tersedia"
if (found) {
noResultsMessage.style.display = 'none';
} else {
noResultsMessage.style.display = 'block';
}
}

// Ambil elemen dropdown merek dan produk
let brandDropdown = document.getElementById("brand-dropdown");
let productCards = document.querySelectorAll(".product-card");

// Fungsi untuk menampilkan produk berdasarkan merek yang dipilih
brandDropdown.addEventListener("change", function() {
  let selectedBrand = brandDropdown.value;

  // Sembunyikan semua produk terlebih dahulu
  productCards.forEach(function(card) {
    card.style.display = "none";
  });

  // Tampilkan produk sesuai dengan merek yang dipilih
  if (selectedBrand) {
    let brandCards = document.querySelectorAll(`.product-card.${selectedBrand}`);
    brandCards.forEach(function(card) {
      card.style.display = "block";
    });
  }
});


const openPopupButton = document.querySelector('.open-popup');
        const popup = document.querySelector('.popup');
        const overlay = document.querySelector('.overlay');
        const closeButton = document.querySelector('.popup .close-btn button');

        // Fungsi untuk membuka popup
        openPopupButton.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Fungsi untuk menutup popup
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });

