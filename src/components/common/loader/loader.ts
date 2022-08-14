import Component, { ComponentProps } from "@/base/component";

export default class Loader extends Component {
    constructor(element: ComponentProps) {
        super(element);
    }

    visible = () => {
        this.nRoot.classList.remove("loader_hidden");
    };

    hidde = () => {
        this.nRoot.classList.add("loader_hidden");
    };
}
