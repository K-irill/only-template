import Component, { ComponentProps } from "@/base/component";
import Slider from "@/components/ui/slider/slider";
import { getComponent } from "@/helpers/helpers";

export default class Modal extends Component {
    slider: Slider;
    onClose: (value: number) => void;

    constructor(
        element: ComponentProps,
        onCloseCallback: (value: number) => void
    ) {
        super(element);

        this.onClose = onCloseCallback;
        this.slider = new Slider(getComponent("slider", this.nRoot));

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

        const activeCounterValue = this.slider.getActiveCounterValue();
        this.onClose(activeCounterValue);
    };

    destroy = () => {
        this.nRoot.removeEventListener("click", this.controlModal);
    };
}
