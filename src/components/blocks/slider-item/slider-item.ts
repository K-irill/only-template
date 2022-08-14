import Component, { ComponentProps } from "@/base/component";
import Counter from "@/components/ui/counter/counter";
import { getComponent } from "@/helpers/helpers";

export default class SliderItem extends Component {
    counter: Counter;

    constructor(element: ComponentProps) {
        super(element);

        this.counter = new Counter(getComponent("counter", this.nRoot));
    }

    destroy = () => {
        this.counter.destroy();
    };
}
