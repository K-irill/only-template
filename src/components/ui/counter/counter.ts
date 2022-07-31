import Component, { ComponentProps } from "@/base/component";
import { changeValueMain } from "@/pages/index";

export default class Counter extends Component {
    value: number;
    counterValue: HTMLElement;
    decrementBtn: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.value = 0;
        this.counterValue = this.nRoot.querySelector(".counter__value")!;
        this.decrementBtn = this.nRoot.querySelector(
            ".counter__btn-decrement"
        )!;
        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const btnDecrement = (<HTMLElement>e.target).closest(
            ".counter__btn-decrement"
        );
        const btnIncrement = (<HTMLElement>e.target).closest(
            ".counter__btn-increment"
        );

        if (!btnDecrement && !btnIncrement) return;

        btnIncrement ? this.increment() : this.decrement();

        this.value === 0
            ? this.decrementBtn.setAttribute("disabled", "true")
            : this.decrementBtn.removeAttribute("disabled");

        changeValueMain(this.value);
    };

    decrement = () => (this.counterValue.textContent = `${--this.value}`);

    increment = () => (this.counterValue.textContent = `${++this.value}`);
}
