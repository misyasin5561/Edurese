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


/* slider */
let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    const offset = -index * 100 + '%';
    document.querySelector('.slides').style.transform = `translateX(${offset})`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

// Otomatik geçiş
setInterval(() => showSlide(index + 1), 5000); // 5 saniyede bir otomatik geçiş

// slider
const productsContainer = document.querySelector('.products-container');
const prevButton = document.querySelector('.prev1');
const nextButton = document.querySelector('.next1');

let currentIndex = 0;
const products = document.querySelectorAll('.product');
const productCount = products.length;
const productsToShow = 3;

function updateSlider() {
    const offset = -(currentIndex * (100 / productsToShow));
    productsContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : productCount - productsToShow;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < productCount - productsToShow) ? currentIndex + 1 : 0;
    updateSlider();
});


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

const cartMenu = document.getElementById('cartMenu');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        let cart = [];

        // Ürünü Sepete Ekle
        
        function addToCart(button) {
    const product = button.closest('.product');
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

    // Sepeti LocalStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
    openCart();
}

        

        // Sepeti Güncelle
        function updateCart() {
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
    // yeni
   
    
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

        // Ürünü Sepetten Sil
        function removeFromCart(name) {
            const index = cart.findIndex(item => item.name === name);
            if (index !== -1) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
            }
            updateCart();
        }
        // Sepet Menüsünü Aç/Kapat
        function openCart() {
            // yeni
            document.getElementById("cart-icon").style.display = "none"; // İkonu gizle
            cartMenu.classList.add('open');
        }

        function closeCart() {
            // yeni
            document.getElementById("cart-icon").style.display = "flex"; // Sepet ikonunu tekrar göster
            cartMenu.classList.remove('open');
        } 



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