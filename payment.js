const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Sekmeleri sıfırla
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Seçili sekme ve içeriği aktif yap
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const cardContainer = document.getElementById("cardContainer");
const cardCvv = document.getElementById("cardCvv");
const noCvv = document.getElementById("noCvv");


// Kart bilgilerini güncelleme
document.getElementById("inputCardNumber").addEventListener("input", function() {
    // Sadece rakamları al
    let digitsOnly = this.value.replace(/\D/g, '');
    
    // İlk 16 rakamı al
    digitsOnly = digitsOnly.substring(0, 16);
    
    // Rakamları 4'lük gruplara böl
    let formattedNumber = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
    
    document.getElementById("cardNumber").textContent = formattedNumber || "•••• •••• •••• ••••";
    showFront();
});

document.getElementById("inputCardName").addEventListener("input", function() {
    document.getElementById("cardName").textContent = this.value || "ADINIZ SOYADINIZ";
    showFront();
});

document.getElementById("inputMonth").addEventListener("change", updateExpiry);
document.getElementById("inputYear").addEventListener("change", updateExpiry);

function updateExpiry() {
    const month = document.getElementById("inputMonth").value !== "AA" ? document.getElementById("inputMonth").value : "MM";
    const year = document.getElementById("inputYear").value !== "YY" ? document.getElementById("inputYear").value : "YY";
    document.getElementById("cardExpiry").textContent = `${month}/${year}`;
    showFront();
}

// CVV alanı focus olduğunda kartı döndür
document.getElementById("inputCvv").addEventListener("focus", function() {
    cardContainer.classList.add("flipped");
});

// CVV input değiştiğinde arka yüzü güncelle
document.getElementById("inputCvv").addEventListener("input", function() {
    noCvv.textContent = this.value || "123";
});

// Başka alana geçildiğinde kartı ön yüzüne çevir
const inputs = document.querySelectorAll('.form input, .form select');
inputs.forEach(input => {
    input.addEventListener("blur", function() {
        if (input.id !== "inputCvv") {
            showFront();
        }
    });
});

function showFront() {
    cardContainer.classList.remove("flipped");
}


window.onload = function() {
    const productList = document.querySelector('.product-list');
    const totalElement = document.querySelector('.total p strong');

    // LocalStorage'dan sepeti al
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${(item.price * item.quantity).toFixed(2)} TL</p>
            </div>
        `;

        productList.appendChild(productItem);
    });

    totalElement.textContent = `₺${total.toFixed(2)}`;
};
