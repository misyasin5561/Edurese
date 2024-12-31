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


/* contact validation */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactData = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem(`contact_${Date.now()}`, JSON.stringify(contactData));

    alert('Your message has been saved!');

    // Clear the form
    document.getElementById('contactForm').reset();
});

/* contact end */



/* google translate script */
/* google translate script */

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