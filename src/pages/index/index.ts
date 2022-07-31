import CounterValue from "@/components/blocks/counter-value/counter-value";
import Modal from "@/components/blocks/modal/modal";
import SliderItem from "@/components/blocks/slider-item/slider-item";
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Swiper, { Navigation } from "swiper";

export const state = {
    valueCounter: 0,
};

export const changeValueMain = (value: number) => {
    state.valueCounter = value;
};

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

            new CounterValue(getComponent("counter-value"));

            new Modal(getComponent("modal"));

            new Swiper(".swiper", {
                allowTouchMove: false,
                modules: [Navigation],
                on: {
                    slideChange: (swipe) => {
                        state.valueCounter = Number(
                            swipe.$wrapperEl
                                .children()
                                [swipe.activeIndex].querySelector(
                                    ".counter__value"
                                )?.textContent
                        );
                    },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
