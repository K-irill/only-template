import Component, { ComponentProps } from "@/base/component";
import { Swiper, Navigation } from "swiper";
export default class Slider extends Component {
    swiper: Swiper;

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper(".swiper", {
            allowTouchMove: false,
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    getActiveCounterValue = () => {
        return Number(
            this.swiper.$wrapperEl
                .children()
                [this.swiper.activeIndex].querySelector(".counter__value")
                ?.textContent
        );
    };
}
