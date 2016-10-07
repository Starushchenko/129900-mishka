var buyLink = document.querySelector(".order-button");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".to-basket-modal");
var menuButton = document.querySelector(".page-header__menu-toggle");
var menuButtonOpened = document.querySelector(".page-header__menu-toggle--opened");
var menu = document.querySelector(".main-nav");
var mapNojs = document.querySelector(".contacts__map-nojs");

    buyLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("to-basket-modal--show");
        overlay.classList.add("modal-overlay--show");
    });

    overlay.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("to-basket-modal--show");
        overlay.classList.remove("modal-overlay--show");
        });

    function hideNojs() {
        menu.classList.remove("main-nav--nojs");
        menu.classList.add("main-nav--closed");
        menuButton.classList.add("page-header__menu-toggle--closed");
        mapNojs.classList.add("contacts__map-hide");
    }

    hideNojs();


    menuButton.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("main-nav--closed");
        menu.classList.add("main-nav--opened");
        menuButton.classList.remove("page-header__menu-toggle--closed");
        menuButton.classList.add("page-header__menu-toggle--opened");
        });

    menuButtonOpened.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("main-nav--opened");
        menu.classList.add("main-nav--closed");
        menuButton.classList.remove("page-header__menu-toggle--opened");
        menuButton.classList.add("page-header__menu-toggle--closed");
        });



