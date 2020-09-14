var menuLink = document.querySelector(".main-nav__toggle");
var menuPopup = document.querySelector(".main-nav__popup");
var menuWrapper = document.querySelector(".page-header__wrapper");
var pageHeader = document.querySelector(".page-header");

menuLink.classList.remove("main-nav__toggle_close");
menuLink.classList.add("main-nav__toggle_open");
menuWrapper.classList.remove("page-header__wrapper_dark");
menuPopup.classList.remove("modal-show");
menuPopup.classList.add("main-nav_hidden");
pageHeader.classList.remove("page-header_static");
menuLink.classList.remove("visually-hidden");

menuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuLink.classList.contains("main-nav__toggle_open")) {
    menuLink.classList.remove("main-nav__toggle_open");
    menuLink.classList.add("main-nav__toggle_close");
    menuPopup.classList.add("modal-show");
    menuWrapper.classList.add("page-header__wrapper_dark");
    pageHeader.classList.add("page-header_static");
  } else {
    menuLink.classList.remove("main-nav__toggle_close");
    menuLink.classList.add("main-nav__toggle_open");
    menuWrapper.classList.remove("page-header__wrapper_dark");
    menuPopup.classList.remove("modal-show");
    menuPopup.classList.add("main-nav_hidden");
    pageHeader.classList.remove("page-header_static");
  }
});