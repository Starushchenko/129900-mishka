var buyLink = document.querySelector(".product-of-week__button");
var buyLinkCatalog = document.querySelector(".product-card__to-basket-btn");
var overlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".to-basket-modal");
var menuButton = document.querySelector(".page-header__menu-toggle");
var menuButtonClose = document.querySelector(".page-header__menu-toggle--closed");
var menu = document.querySelector(".main-nav");

    buyLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("to-basket-modal--show");
        overlay.classList.add("modal-overlay--show");
    });

    buyLinkCatalog.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("to-basket-modal--show");
        overlay.classList.add("modal-overlay--show");
    });
/*
   function hideNojs() {
        menu.classList.add("main-nav--closed");
    }

    hideNojs();


    menuButton.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.add("main-nav--opened");
        menuButton.classList.add("page-header__menu-toggle--closed");

        });

    menuButtonClose.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.add("main-nav--closed");
        menuButton.classList.remove("page-header__menu-toggle--closed");
        menuButton.classList.add("page-header__menu-toggle");
        });
*/
