var menuLink = document.querySelector(".main-nav__toggle");
var menuPopup = document.querySelector(".main-nav__popup");
var menuOpen = document.querySelector(".main-nav__toggle_open");
var menuClose = document.querySelector(".main-nav__toggle_close");
var menuWrapper = document.querySelector(".page-header__wrapper");


menuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuPopup.classList.remove("main-nav_hidden");
  menuPopup.classList.add("modal-show");
  menuLink.classList.remove("main-nav__toggle_open");
  menuLink.classList.add("main-nav__toggle_close");
  menuWrapper.classList.add("page-header__wrapper_dark");
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuPopup.classList.remove("modal-show");
  menuPopup.classList.add("main-nav_hidden");
  menuLink.classList.remove("main-nav__toggle_close");
  menuLink.classList.add("main-nav__toggle_open");
  menuWrapper.classList.remove("page-header__wrapper_dark");
});