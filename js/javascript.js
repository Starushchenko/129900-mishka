var buyLink = document.querySelector(".order-button");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".to-basket-modal");
var menuButton = document.querySelector(".page-header__menu-toggle");
var menu = document.querySelector(".main-nav");
var mapNojs = document.querySelector(".contacts__map-nojs");

    function hideNojs() {
        menu.classList.remove("main-nav--nojs");
        menu.classList.add("main-nav--closed");
        menuButton.classList.add("page-header__menu-toggle--closed");
    }

    hideNojs();

    menuButton.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("main-nav--closed");
        menuButton.classList.toggle("page-header__menu-toggle--closed");
    });

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

    function hideMapNojs() {
        mapNojs.classList.add("contacts__map-hide");
    }

    hideMapNojs();






