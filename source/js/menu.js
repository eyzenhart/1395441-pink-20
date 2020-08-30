var menuLink = document.querySelector(".main-nav__toggle");
var menuPopup = document.querySelector(".main-nav__popup");
<<<<<<< HEAD
var menuClose = document.querySelector(".main-nav__toggle_close");
=======
>>>>>>> 0669371... Улучшает сетки главной страницы и добавляет сетки странице с фотографиями
var menuWrapper = document.querySelector(".page-header__wrapper");

menuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
<<<<<<< HEAD
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

=======
  if (menuLink.classList.contains("main-nav__toggle_open")) {
    menuLink.classList.remove("main-nav__toggle_open");
    menuLink.classList.add("main-nav__toggle_close");
    menuPopup.classList.add("modal-show");
    menuWrapper.classList.add("page-header__wrapper_dark");
  } else {
    menuLink.classList.remove("main-nav__toggle_close");
    menuLink.classList.add("main-nav__toggle_open");
    menuWrapper.classList.remove("page-header__wrapper_dark");
    menuPopup.classList.remove("modal-show");
    menuPopup.classList.add("main-nav_hidden");
  }
>>>>>>> 0669371... Улучшает сетки главной страницы и добавляет сетки странице с фотографиями
});