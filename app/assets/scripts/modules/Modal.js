import $ from "jquery";
class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }
    events() {
        //open modal
        this.openModalButton.click(this.openModal.bind(this));
        //closinf modal
        this.closeModalButton.click(this.closeModal.bind(this));
        //push ant key

        $(document).keyup(this.keyPressHand.bind(this));
    }

    keyPressHand(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }

    }

    openModal() {

        this.modal.addClass("modal--is-visibal");
        return false;

    }
    closeModal() {
        this.modal.removeClass("modal--is-visibal");


    }
}
export default Modal;