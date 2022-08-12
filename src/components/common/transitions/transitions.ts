import Component, { ComponentProps } from "@/base/component";

export default class Transitions extends Component {
    constructor(element: ComponentProps) {
        super(element);
    }

    visible = () => {
        this.nRoot.classList.remove("transitions_hidden");
    };

    hidde = () => {
        this.nRoot.classList.add("transitions_hidden");
    };
}
