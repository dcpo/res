import $ from "jquery";

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menuContent");
        this.event();

    }

    event() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));

    }
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menuContent--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--closex");
    }
}

export default MobileMenu;