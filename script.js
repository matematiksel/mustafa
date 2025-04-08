// Akıcı Kaydırma (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Navbar yüksekliğini hesaba kat (opsiyonel)
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sabit menüde arka plan rengi değişimi (opsiyonel)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // 50 piksel kaydırınca
        navbar.style.backgroundColor = '#212529'; // Daha koyu yap
    } else {
        navbar.style.backgroundColor = '#343a40'; // Orijinal renk
    }
});