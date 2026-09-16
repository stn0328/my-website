async function loadHead() {
    const response = await fetch("components/head.html");
    const html = await response.text();

    document.head.insertAdjacentHTML("beforeend", html);
}

async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    const response = await fetch(file);
    element.innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", () => {
    loadHead();
    loadComponent("site-header", "components/header.html");
    loadComponent("site-footer", "components/footer.html");
});
