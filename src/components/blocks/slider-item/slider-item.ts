import Component, { ComponentProps } from "@/base/component";
import Counter from "@/components/ui/counter/counter";
import { getComponent } from "@/helpers/helpers";

export default class SliderItem extends Component {
    constructor(element: ComponentProps) {
        super(element);

        new Counter(getComponent("counter", this.nRoot));
    }
}
