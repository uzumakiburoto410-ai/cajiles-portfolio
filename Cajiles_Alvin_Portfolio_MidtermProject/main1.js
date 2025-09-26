
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});


const text = "Front-End Web Developer | Designer | Student";
let i = 0;
const speed = 80;
const heroText = document.querySelector("#hero p");

function typeEffect() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
heroText.textContent = "";
typeEffect();

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(17, 17, 17, 0.95)";
        header.style.transition = "0.4s";
    } else {
        header.style.background = "rgba(30, 30, 47, 0.9)";
    }
});

