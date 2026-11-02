const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeNavigation() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeNavigation();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavigation();
    }
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());