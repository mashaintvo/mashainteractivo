
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Función para remover la clase "active" de todos los enlaces
    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    // Función para manejar el clic en los enlaces
    function handleNavLinkClick(event) {
        event.preventDefault();
        removeActiveClass();
        event.target.classList.add("active");

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Agrega el evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", handleNavLinkClick);
    });

    // Función para manejar el evento de scroll
    function handleScroll() {
        const fromTop = window.scrollY;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                removeActiveClass();
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Agrega el evento de scroll al documento
    window.addEventListener("scroll", handleScroll);
});
