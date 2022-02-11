let hamburgerHeavy = document.querySelector(".hamburger-heavy");
const blackMobileMenu = document.querySelector(".black-menu");
let mobileHeavy = document.querySelector(".mobile-heavy");
const hamburger = document.querySelector(".hamburger-menu");

//hamburger-menu with black back-ground
hamburger.addEventListener("click", () => {
  blackMobileMenu.classList.add("btn-active");
  mobileHeavy.classList.add("heavy-background");
  hamburgerHeavy.classList.add("btn-active");
  document.body.style.overflowY = ["hidden"];
  blackMobileMenu.classList.add("btn-active");
});

hamburgerHeavy.addEventListener("click", () => {
  blackMobileMenu.classList.remove("btn-active");
  mobileHeavy.classList.remove("heavy-background");
  hamburgerHeavy.classList.remove("btn-active");
  document.body.style.overflowY = ["scroll"];
});
