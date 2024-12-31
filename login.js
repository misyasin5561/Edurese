    // Tab kontrol fonksiyonu
    function openTab(evt, tabName) {
        const forms = document.querySelectorAll('.form-container');
        const buttons = document.querySelectorAll('.tab-button');

        forms.forEach(form => form.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));

        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.classList.add('active');
    }

    // Cinsiyet seçimi fonksiyonu
    function selectGender(gender) {
        const femaleBtn = document.getElementById('female-btn');
        const maleBtn = document.getElementById('male-btn');

        if (gender === 'female') {
            femaleBtn.classList.add('active');
            maleBtn.classList.remove('active');
        } else {
            maleBtn.classList.add('active');
            femaleBtn.classList.remove('active');
        }
    }

    // Üye olma işlemi
    document.querySelector('#register form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email-register').value;
        const password = document.getElementById('password-register').value;

        // Şifre doğrulama kontrolü
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
        if (!passwordRegex.test(password)) {
            alert('Şifre kriterlerine uymuyor!');
            return;
        }

        // Kullanıcı bilgilerini localStorage'a kaydetme
        const user = { email, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Kayıt başarılı! Artık giriş yapabilirsiniz.');

        // Giriş tabına geçiş
        openTab(e, 'login');
    });

    // Giriş yapma işlemi
    document.querySelector('#login form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        // Kullanıcı bilgilerini localStorage'dan al ve doğrula
        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert('Giriş başarılı! Hoş geldiniz.');
        } else {
            alert('E-posta veya şifre hatalı!');
        }
    });

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