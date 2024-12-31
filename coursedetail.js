window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    const navbarLogo = document.querySelector('.navbar-logo');
    const navbarWrapper1 = document.querySelector('.navbar-wrapper1');

    if (window.scrollY >= header.offsetHeight) {
        navbar.classList.add('hidden');

        // CSS değişikliklerini uygula
    navbarLogo.style.opacity = '1';
    navbarLogo.style.height = '69px';
    navbarWrapper1.style.marginLeft = '65px';

    } else {
        navbar.classList.remove('hidden');

          // Orijinal CSS özelliklerini geri yükle
    navbarLogo.style.opacity = '0';
    navbarLogo.style.height = '1px';
    navbarWrapper1.style.marginLeft = '0px';

    }
});

/* Navbar end */


// Sepet Dizisi
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Ürünü Sepete Ekle
function addToCart(button) {
    const product = button.closest('.register-panel');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
    const img = product.getAttribute('data-img');

    // Sepette ürün kontrolü
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Sepeti LocalStorage'a kaydet
    updateCart();
    openCart();
}

// Sepeti Güncelle
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <p>${item.name}</p>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)} TL</p>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2) + ' TL';
    localStorage.setItem('cart', JSON.stringify(cart)); // Güncellenmiş sepeti kaydet
}

// Ürün miktarını arttır
function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

// Ürün miktarını azalt
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Miktar 0'a düşerse ürünü sepetten kaldır
    }
    updateCart();
}

// Sepet Menüsünü Aç
function openCart() {
    const cartMenu = document.getElementById('cartMenu');
    if (cartMenu) {
        cartMenu.classList.add('open');
    }
}

// Sepet Menüsünü Kapat
function closeCart() {
    const cartMenu = document.getElementById('cartMenu');
    if (cartMenu) {
        cartMenu.classList.remove('open');
    }
}

// Sayfa yüklendiğinde mevcut sepeti güncelle
window.onload = function () {
    updateCart();
};



 /* Google çeviri api */

        // Bayrağa tıklama olayı

        // ingilizce için 

        document.getElementById('translateButtonen').addEventListener('click', function (event) {

            event.preventDefault(); // Varsayılan davranışı engelle

 

            // Google Translate menüsünden İngilizceyi seç ve çeviriyi tetikle

            var selectElement = document.querySelector(".goog-te-combo");

            if (selectElement) {

                selectElement.value = "en"; // İngilizce dil kodu
                selectElement.dispatchEvent(new Event("change")); // Çeviriyi başlat
            }

        });
        // Arapça için 
        document.getElementById('translateButtonar').addEventListener('click', function (event) {

            event.preventDefault(); // Varsayılan davranışı engelle

 

            // Google Translate menüsünden Arapça seç ve çeviriyi tetikle

            var selectElement = document.querySelector(".goog-te-combo");

            if (selectElement) {

                selectElement.value = "ar"; // Arapça dil kodu
                selectElement.dispatchEvent(new Event("change")); // Çeviriyi başlat
            }

        });
        // Turkce için
        document.getElementById('translateButtontr').addEventListener('click', function (event) {

            event.preventDefault(); // Varsayılan davranışı engelle

 

            // Google Translate menüsünden İngilizceyi seç ve çeviriyi tetikle

            var selectElement = document.querySelector(".goog-te-combo");

            if (selectElement) {

                selectElement.value = "tr"; // İngilizce dil kodu
                selectElement.dispatchEvent(new Event("change")); // Çeviriyi başlat
            }

        });