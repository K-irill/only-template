import CounterWrraper from "@/components/blocks/counter-wrraper/counter-wrraper";
import SliderItem from "@/components/blocks/slider-item/slider-item";
import Header from "@/components/common/header/header";
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            let header: Header;
            header = new Header(getComponent('header'))
            header.setNewPath(next.url.path as string)

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

            const counterWrrapers = getComponents(
                "counter-wrraper",
                next.container
            );

            if (counterWrrapers.length) {
                for (const counterWrraper of counterWrrapers) {
                    new CounterWrraper(counterWrraper);
                }
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
    },

    afterLeave() {},
};
