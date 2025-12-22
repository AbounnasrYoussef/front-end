const links = document.querySelectorAll(".navbar__menu a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

function redirectHome(e) {
    e.preventDefault();
    window.location.href = "home.html";
}
