import CounterWrraper from "@/components/blocks/counter-wrraper/counter-wrraper";
import SliderItem from "@/components/blocks/slider-item/slider-item";
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

let spoilers: Spoiler[];
let sliderItems: SliderItem[];
let counterWrraper: CounterWrraper;

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            const spoilers = getComponents("spoiler", next.container);

            if (spoilers.length) {
                for (const spoiler of spoilers) {
                    new Spoiler(spoiler);
                }
            }

            const sliderItems = getComponents("slider-item", next.container);

            if (sliderItems.length) {
                for (const sliderItem of sliderItems) {
                    new SliderItem(sliderItem);
                }
            }

            const counterWrraper = getComponent("counter-wrraper");

            if (counterWrraper.component) {
                new CounterWrraper(counterWrraper);
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
        spoilers.forEach((spoiler) => spoiler.destroy());
        sliderItems.forEach((slider) => slider.destroy());
        counterWrraper.destroy();
    },

    afterLeave() {},
};
