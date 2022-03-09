const search = document.querySelector("#search");
const rightArrowSearch = document.querySelector(".rightArrowSearch");

const searchMobile = document.querySelector(".search-text");
const searchCloseMobile = document.querySelector(".searchCloseMobile");
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
let input = searchInput.querySelector("input");

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
  rightArrowSearch.classList.add("deactive");
  searchCloseMobile.classList.add("active");
  searchInput.classList.add("active");
  // mobLangSection.style.display="none";
  blackMobileMenu.classList.remove("btn-active");
  mobileLanguage.classList.remove("active");
  input.focus();
});
searchCloseMobile.addEventListener(
  "click",
  () => {
    input.value = "";
    input.focus();
  },
  true
);
console.log(searchCloseMobile);

//SEARCH EventListeners

input.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (searchBar.className.includes("mobile-active")) {
      console.log("object");
    }
    let searchInput = searchBar.querySelector(".search-input");
    searchBar.classList.remove("mobile-active");
    search.classList.remove("deactive");
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
    blackMobileMenu.classList.add("btn-active");
    mobileLanguage.classList.add("active");
    // mobLangSection.style.display="flex";
  }
});

search.addEventListener("click", () => {
  let searchInput = searchBar.querySelector(".search-input");
  search.classList.add("deactive");
  searchBar.classList.add("active");
  searchInput.classList.add("active");
  navVersionBranch.classList.add("active");

  console.log(searchBar);
});

document.body.addEventListener(
  "click",
  (e) => {
    if (
      !e.composedPath().includes(searchBar) &&
      !e.composedPath().includes(search)
    ) {
      searchBar.classList.remove("active");
      search.classList.remove("deactive");
      searchInput.classList.remove("active");
      navVersionBranch.classList.remove("active");
    }
  },
  true
);

mobileHeavy.addEventListener(
  "click",
  () => {
    console.log("mobileHeavy triggered");
    if (searchBar.className.includes("mobile-active")) {
      console.log("object");
    }
    let searchInput = searchBar.querySelector(".search-input");
    searchBar.classList.remove("mobile-active");
    search.classList.remove("deactive");
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
    blackMobileMenu.classList.add("btn-active");
    mobileLanguage.classList.add("active");
    // mobLangSection.style.display="flex";
  },
  true
);
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

    mobLangChanger.textContent = e.target.textContent;
  });
});

//EventListeners
