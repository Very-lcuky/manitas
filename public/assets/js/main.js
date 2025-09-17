(function() {
    //===== Sticky Header y Back To Top =====
    window.onscroll = function () {
        const header_navbar = document.querySelector(".navbar-area");
        if (header_navbar) {
            const sticky = header_navbar.offsetTop;
            if (window.pageYOffset > sticky) {
                header_navbar.classList.add("sticky");
            } else {
                header_navbar.classList.remove("sticky");
            }
        }

        const backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        }
    };

    //===== Smooth scroll para links con clase page-scroll =====
    document.querySelectorAll('.page-scroll').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(elem.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    //===== Toggle navbar =====
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle("active");
            navbarCollapse.classList.toggle('show');
        });

        document.querySelectorAll(".page-scroll").forEach(link =>
            link.addEventListener("click", () => {
                navbarToggler.classList.remove("active");
                navbarCollapse.classList.remove('show');
            })
        );
    }

    //===== WOW.js Animations =====
    if (typeof WOW === "function") {
        new WOW().init();
    }

    //===== Counter Up =====
    if (typeof counterUp === "function") {
        const cu = new counterUp({
            start: 0,
            duration: 2000,
            intvalues: true,
            interval: 100,
            append: " ",
        });
        cu.start();
    }

})();

