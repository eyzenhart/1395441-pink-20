var menuLink = document.querySelector(".main-nav__toggle");
var menuPopup = document.querySelector(".main-nav__popup");
var menuClose = document.querySelector(".main-nav__toggle_close");
var menuWrapper = document.querySelector(".page-header__wrapper");


menuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuPopup.classList.add("modal-show");
  menuClose.classList.add("modal-show");
  menuLink.classList.add("visually-hidden");
  menuWrapper.classList.add("page-header__wrapper_dark");
});

menuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuPopup.classList.remove("modal-show");
  menuClose.classList.remove("modal-show");
  menuLink.classList.remove("visually-hidden");
  menuWrapper.classList.remove("page-header__wrapper_dark");

});