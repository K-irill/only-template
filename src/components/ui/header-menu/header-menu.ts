import Component, { ComponentProps } from "@/base/component";

export default class HeaderMenu extends Component {
    path: string;
    links: HTMLAnchorElement[];

    constructor(element: ComponentProps) {
        super(element);

        this.path = "/";
        this.links = this.getElements("items");
    }

    setPath = (newPath: string) => {
        this.path = newPath;

        this.removeActivLink();
        this.setActiveMenuLink();
    };

    setActiveMenuLink = () => {
        this.links.forEach((el) => {
            if (el.pathname === this.path) {
                el.classList.add("header-menu__items_activ");
            }
        });
    };

    removeActivLink = () => {
        this.links.forEach((el) =>
            el.classList.remove("header-menu__items_activ")
        );
    };
}
