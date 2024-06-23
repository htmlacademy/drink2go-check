var navMain = document.querySelector(".header__nav-wrapper");
var navToggle = document.querySelector(".header__burger-btn");
if (navToggle && navMain) {
  // navMain.classList.remove("main-nav--nojs");
  navToggle.addEventListener("click", () => {
    navMain.classList.toggle("header__nav-wrapper--closed");
    navMain.classList.toggle("header__nav--opened");
    navToggle.classList.toggle("js-toggle-button");
  });
}
