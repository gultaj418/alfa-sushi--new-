//defining variables

const search = document.querySelector("#search");
const searchBar = document.querySelector(".search-bar");
const plusOrder = document.querySelectorAll(".plus");
const minusOrder = document.querySelectorAll(".minus");
const langChanger = document.querySelector("#lang");
const langSection = document.querySelector(".language-section");
const svgRotator = document.querySelector(".svg-class");
const languages = document.querySelectorAll(".language");
const hamburger = document.querySelector(".hamburger-menu");
const blackMobileMenu = document.querySelector(".black-menu");
const bagCounter = document.querySelector("#bag");
const downIcon = document.querySelector(".arrow-down-icon");
const upIcon = document.querySelector(".arrow-up-icon");
const x = window.matchMedia("(max-width: 768px)");
let searchInput = document.querySelector(".search-input");
let hamburgerHeavy = document.querySelector(".hamburger-heavy");
// const blackMobileMenu = document.querySelector(".black-menu");
let mobileHeavy = document.querySelector(".mobile-heavy");

console.log(search);
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

//Language changer

langChanger.addEventListener("click", () => {
  langSection.classList.toggle("active");
  svgRotator.classList.toggle("active");
  langChanger.classList.toggle("active");
  langSection.addEventListener("click", (e) => {
    lang = langSection.querySelector(".language.active");
    if (lang !== null) {
      lang.classList.remove("active");
    }
    e.target.classList.add("active");
    langChanger.textContent = e.target.textContent;
  });
});
// langChanger.addEventListener("focusout", () => {
//   console.log("hello");
//   langSection.classList.remove("active");
//   svgRotator.classList.remove("active");
//   langChanger.classList.remove("active");
// });

//EventListeners

search.addEventListener("click", () => {
  let searchInput = searchBar.querySelector(".search-input");
  search.classList.add("deactive");
  searchBar.classList.add("active");
  searchInput.classList.add("active");
  console.log(searchBar);
});
searchBar.addEventListener(
  "focusout",
  () => {
    let searchInput = searchBar.querySelector(".search-input");

    search.classList.remove("deactive");
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
  },
  false
);

//------------------------------------------------------------------------

//EventListeners
// search.addEventListener("click", () => {
//   search.classList.add("deactive");
//   searchBar.classList.add("btn-active");
// });
// searchBar.addEventListener(
//   "focusout",
//   () => {
//     search.classList.remove("deactive");
//     searchBar.classList.remove("btn-active");
//   },
//   false
// );

//add Order

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
    addOrder.textContent = `${countSpan.textContent * 20} AZN`;

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

    if (countSpan.textContent > 1) {
      countSpan.textContent -= 1;
      addOrder.textContent = `${parseInt(addOrder.textContent) - 20} AZN`;

      console.log(addOrder.textContent);
    } else {
      countSpan.textContent = 0;
      countNum.classList.remove("active");
      countRegulator.classList.remove("active");
      addOrder.classList.remove("active");
      plusOrder.classList.remove("active");
      el.classList.remove("active");

      console.log("object");
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
