const search = document.querySelector("#search");
const searchMobile = document.querySelector(".search-text");
const searchBar = document.querySelector(".search-bar");
const plusOrder = document.querySelectorAll(".plus");
const minusOrder = document.querySelectorAll(".minus");
const langChanger = document.querySelector("#lang");
const langSection = document.querySelector(".language-section");
const svgMobileRotator = document.querySelector(".svg-class-mobile");
const svgRotator = document.querySelector(".svg-class");
const mobLangChanger = document.querySelector("#mobLang");
const mobLangSection = document.querySelector(".language-section-mobile");
const languages = document.querySelectorAll(".language");
const hamburger = document.querySelector(".hamburger-menu");
const blackMobileMenu = document.querySelector(".black-menu");
const bagCounter = document.querySelector("#bag");
const downIcon = document.querySelector(".arrow-down-icon");
const upIcon = document.querySelector(".arrow-up-icon");
const x = window.matchMedia("(max-width: 768px)");
let searchInput = document.querySelector(".search-input");
let hamburgerHeavy = document.querySelector(".hamburger-heavy");
const mobileLanguage = document.querySelector(".language-search-mobile");
// const blackMobileMenu = document.querySelector(".black-menu");
let mobileHeavy = document.querySelector(".mobile-heavy");
const navVersionBranch = document.querySelector(".branches.nav-version");

console.log(search);
hamburger.addEventListener("click", () => {
  blackMobileMenu.classList.add("btn-active");
  mobileHeavy.classList.add("heavy-background");
  hamburgerHeavy.classList.add("btn-active");
  document.body.style.overflowY = ["hidden"];
  blackMobileMenu.classList.add("btn-active");
  mobileLanguage.classList.add("active");
});

hamburgerHeavy.addEventListener("click", () => {
  blackMobileMenu.classList.remove("btn-active");
  mobileLanguage.classList.remove("active");

  mobileHeavy.classList.remove("heavy-background");
  hamburgerHeavy.classList.remove("btn-active");
  document.body.style.overflowY = ["scroll"];
  searchBar.classList.remove("active");
  searchInput.classList.remove("active");
  searchBar.classList.remove("mobile-active");
  searchInput.classList.remove("active");
});

searchMobile.addEventListener("click", (e) => {
  searchBar.classList.add("mobile-active");
  searchInput.classList.add("active");

  blackMobileMenu.classList.remove("btn-active");
  mobileLanguage.classList.remove("active");
});

//Language changer

langChanger.addEventListener("click", () => {
  langSection.classList.toggle("active");
  svgRotator.classList.toggle("active");
  langChanger.classList.toggle("active");
  langSection.addEventListener("click", (e) => {
    let lang = langSection.querySelector(".language.active");
    if (lang !== null) {
      lang.classList.remove("active");
    }
    e.target.classList.add("active");
    langChanger.textContent = e.target.textContent;
  });
});

mobLangChanger.addEventListener("click", () => {
  mobLangSection.classList.toggle("active");
  svgMobileRotator.classList.toggle("active");
  mobLangSection.addEventListener("click", (e) => {
    let lang = mobLangSection.querySelector(".language.active");
    if (lang !== null) {
      lang.classList.remove("active");
    }
    e.target.classList.add("active");
    // console.log(e.target);
    // e.target.classList.add("aze");
    mobLangChanger.textContent = e.target.textContent;
    // console.log(e.target.textContent);
    // console.log(e.target.textContent);
    // if (e.target.textContent !== "A") {
    //   svgMobileRotator.classList.add("aze");
    //   svgMobileRotator.classList.remove("rus");
    //   svgMobileRotator.classList.remove("eng");

    //   console.log(1);
    // } else if (e.target.textContent === "RUSSIAN") {
    //   svgMobileRotator.classList.add("rus");
    //   svgMobileRotator.classList.remove("aze");
    //   svgMobileRotator.classList.remove("eng");
    //   console.log(2);
    // } else {
    //   svgMobileRotator.classList.add("eng");
    //   svgMobileRotator.classList.remove("aze");
    //   svgMobileRotator.classList.remove("rus");
    //   console.log(3);
    // }
  });
});

//EventListeners

search.addEventListener("click", () => {
  let searchInput = searchBar.querySelector(".search-input");
  search.classList.add("deactive");
  searchBar.classList.add("active");
  searchInput.classList.add("active");
  navVersionBranch.classList.add("active");
  console.log(searchBar);
});
searchBar.addEventListener(
  "focusout",
  () => {
    let searchInput = searchBar.querySelector(".search-input");
    searchBar.classList.remove("mobile-active");
    search.classList.remove("deactive");
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
    blackMobileMenu.classList.add("btn-active");
    mobileLanguage.classList.add("active");
    navVersionBranch.classList.remove("active");
  },
  false
);
