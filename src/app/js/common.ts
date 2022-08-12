import "core-js/stable";
import "../scss/common.scss";
import barba from "@barba/core";
import barbaPrefetch from "@barba/prefetch";
import common from "@/pages/index/index";
import { getComponent, resize, setVhCssVariable } from "@/helpers/helpers";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import Transitions from "@/components/common/transitions/transitions";
import Loader from "@/components/common/loader/loader";

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) =>
    r.keys().forEach(r);
requireAll(require.context("../../assets/icons", true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent("header"));
export const footer = new Footer(getComponent("footer"));

const preloaderElem = getComponent("loader");
let loader: Loader;

if (preloaderElem.component) {
    loader = new Loader(preloaderElem);
}

const transitionElem = getComponent("transitions");
let transition: Transitions;

if (transitionElem.component) {
    transition = new Transitions(transitionElem);
}

barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {
    header.setNewPath(_data?.next.url.path as string);
});

barba.hooks.afterEnter((_data) => {});

barba.hooks.before((_data) => {});

barba.init({
    timeout: 500000,
    prefetchIgnore: "/bitrix",
    prevent: ({ el }) =>
        el?.id?.indexOf("bx") !== -1 || el?.classList.contains("no-barba"),
    views: [common],
    transitions: [
        {
            name: "default-transition",
            once() {
                loader.hidde();
                transition.hidde();
            },
            leave() {
                loader.visible();
                transition.visible();

                return new Promise<void>((resolve) => {
                    setTimeout(resolve, 500);
                });
            },
            enter() {
                loader.hidde();
                transition.hidde();
            },
        },
    ],
    requestError: () => false,
});
