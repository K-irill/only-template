import Component, { ComponentProps } from "@/base/component";
export default class Counter extends Component {
    value: number;
    counterValue: HTMLElement;
    decrementBtn: HTMLButtonElement;
    incrementBtn: HTMLButtonElement;

    constructor(element: ComponentProps) {
        super(element);

        this.value = 0;
        this.counterValue = this.getElement("value")!;
        this.decrementBtn = this.getElement("btn-decrement")!;
        this.incrementBtn = this.getElement("btn-increment")!;
        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        if ((<HTMLElement>e.target).contains(this.decrementBtn)) {
            this.decrement();
        } else if ((<HTMLElement>e.target).contains(this.incrementBtn)) {
            this.increment();
        }

        this.decrementBtn.disabled = this.value === 0;
    };

    decrement = () => (this.counterValue.textContent = `${--this.value}`);

    increment = () => (this.counterValue.textContent = `${++this.value}`);

    destroy = () => {
        this.nRoot.removeEventListener("click", this.clickHandler);
    };
}
