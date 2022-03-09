const rightArrowSearch = document.querySelector(".rightArrowSearch");
const searchCloseMobile = document.querySelector(".searchCloseMobile");
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
let input = searchInput.querySelector("input");
let hamburgerHeavy = document.querySelector(".hamburger-heavy");
const mobileLanguage = document.querySelector(".language-search-mobile");
// const blackMobileMenu = document.querySelector(".black-menu");
let mobileHeavy = document.querySelector(".mobile-heavy");

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
  console.log(searchBar);
});

// document.body.onclick = () => {
//   if (searchBar.className.includes("active")) {
//     searchBar.classList.remove("active");
//   }
// };
document.body.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(searchBar) &&
    !e.composedPath().includes(search)
  ) {
    searchBar.classList.remove("active");
    search.classList.remove("deactive");
    searchInput.classList.remove("active");
  }
});
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
// document.body.addEventListener(
//   "keydown",
//   (event) => {
//     if (event.key === "Escape") {
//       if (blackMobileMenu.className.includes("btn-active"))
//         blackMobileMenu.classList.remove("btn-active");
//       mobileLanguage.classList.remove("active");

//       mobileHeavy.classList.remove("heavy-background");
//       hamburgerHeavy.classList.remove("btn-active");
//       document.body.style.overflowY = ["scroll"];
//       searchBar.classList.remove("active");
//       searchInput.classList.remove("active");
//       searchBar.classList.remove("mobile-active");
//       searchInput.classList.remove("active");
//     }
//   },
//   true
// );

//------------------------------------------------------------------------

//-----------------------------------add Order--------------------------------------------------------------------------------------

plusOrder.forEach(function (el) {
  let num = 0;
  // let counter = 0;

  el.addEventListener("click", () => {
    let addOrder = el.parentNode.nextElementSibling;
    let orderPrice = addOrder.querySelectorAll("span")[1];
    let countRegulator = el.parentNode;
    let countNum = el.previousElementSibling;
    let minusOrder = el.previousElementSibling.previousElementSibling;
    let countSpan = countNum.querySelector("span");

    addOrder.classList.add("active");
    countNum.classList.add("active");
    countRegulator.classList.add("active");
    el.classList.add("active");
    minusOrder.classList.add("active");
    countSpan.innerHTML = parseInt(countSpan.innerHTML) + 1;
    addOrder.innerHTML = `
      <span class="add-to-order">Add to order</span> 
      <span class="add-order-price-container"> 
        <span class="add-order-currency">AZN</span>
        <span class="add-order-price">${countSpan.textContent * 20}</span>
      </span>`;

    // counter += countSpan.innerHTML;
    // bagCounter.textContent = `Bag (${counter})`;
  });
});
minusOrder.forEach(function (el) {
  el.addEventListener("click", () => {
    let countNum = el.nextElementSibling;
    let addOrder = el.parentNode.nextElementSibling;
    let countSpan = countNum.querySelector("span");
    let countRegulator = el.parentNode;
    let plusOrder = countNum.nextElementSibling;
    let addOrderPrice = addOrder.querySelector(".add-order-price");

    if (countSpan.textContent > 1) {
      countSpan.textContent -= 1;
      // addOrderPrice.textContent = `${parseInt(addOrder.textContent) - 20} AZN`;
      addOrderPrice.textContent = ` ${
        parseInt(addOrderPrice.textContent) - 20
      }`;
      console.log(parseInt(addOrderPrice.textContent));
    } else {
      countSpan.textContent = 0;
      countNum.classList.remove("active");
      countRegulator.classList.remove("active");
      addOrder.classList.remove("active");
      plusOrder.classList.remove("active");
      el.classList.remove("active");
    }
  });
});

//slider responsive

$(document).ready(function () {
  if (window.matchMedia("(max-width: 780px)").matches) {
    $(".list-cards.owl-carousel").owlCarousel({
      margin: 0,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
          stagePadding: 30,
        },

        300: {
          items: 1,
          margin: 10,
          stagePadding: 30,
        },
        500: {
          items: 1,
          margin: 10,
          stagePadding: 45,
        },

        600: {
          items: 1,
          margin: 0,
          stagePadding: 50,
        },

        651: {
          items: 1,
          margin: 0,
          stagePadding: 90,
        },
      },
    });
  }
});

$(".list-card-slider.owl-carousel").owlCarousel({
  loop: true,

  margin: 10,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    },
    600: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    },
    1000: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
    },
  },
});

//smooth beahvior scroll
downIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
});

upIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100 && window.scrollY < 2100) {
    downIcon.classList.add("active");
  } else if (
    window.scrollY == 0 ||
    (window.scrollY > 2150 && window.scrollY < 2200)
  ) {
    downIcon.classList.remove("active");
  }
});

async function fetchMovies() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    const message = `Xəta baş verdi! Xəta kodu: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  console.log(movies);

  // return movies;
}
fetchMovies().catch((error) => {
  error.message; // 'An error has occurred: 404'
});
