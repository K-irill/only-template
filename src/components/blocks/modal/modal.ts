import Component, { ComponentProps } from "@/base/component";

export default class Modal extends Component {
    constructor(element: ComponentProps) {
        super(element);

        document.addEventListener("click", this.controlModal);
    }

    controlModal = (e: Event) => {
        const openBtn = (<HTMLElement>e.target).closest(
            ".counter-wrraper__btn"
        );

        const closeBtn = (<HTMLElement>e.target).closest(".modal__btn");

        if (!openBtn && !closeBtn) return;

        openBtn ? this.openModal() : this.closeModal();
    };

    openModal = () => {
        this.nRoot.classList.add("modal_visible");
    };

    closeModal = () => {
        this.nRoot.classList.remove("modal_visible");
    };
}
