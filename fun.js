// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Navbar shadow when scrolling
window.addEventListener("scroll", () => {

  const navbar = document.querySelector("nav");

  if (window.scrollY > 40) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


// Button click message
const heroButton = document.querySelector("button");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    alert("Welcome to NovaTech 🚀");
  });
}


// Simple card animation when scrolling
const cards = document.querySelectorAll(".card");

function revealCards() {

  const windowHeight = window.innerHeight;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });
}
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
