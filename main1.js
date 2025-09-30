
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
