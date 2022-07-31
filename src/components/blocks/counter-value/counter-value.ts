import Component, { ComponentProps } from "@/base/component";
import { state } from "@/pages/index";

export default class CounterValue extends Component {
    constructor(element: ComponentProps) {
        super(element);

        document.addEventListener("click", this.changeValue);
    }

    changeValue = () => {
        if (this.nRoot.textContent === `${state.valueCounter}`) return;

        this.nRoot.textContent = `${state.valueCounter}`;
    };
}
