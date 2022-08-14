import Component, { ComponentProps } from "@/base/component";
import { getComponent } from "@/helpers/helpers";
import Modal from "../modal/modal";

export default class CounterWrraper extends Component {
    modal: Modal;
    counterValue: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.counterValue = this.getElement("value")!;
        this.modal = new Modal(getComponent("modal"), this.updateMainCounter);
    }

    updateMainCounter = (value: number) => {
        this.counterValue.textContent = `${value}`;
    };

    destroy = () => {
        this.modal.destroy();
    };
}
