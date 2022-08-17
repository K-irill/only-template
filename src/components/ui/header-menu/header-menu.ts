import Component, { ComponentProps } from "@/base/component";

export default class HeaderMenu extends Component {
    path: string;
    links: HTMLAnchorElement[];
    activeLink: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        this.path = "/";
        this.links = this.getElements("items");
        this.activeLink = this.links.find(
            (el) => el.pathname === this.path
        ) as HTMLElement;
    }

    setPath = (newPath: string) => {
        this.path = newPath;

        this.removeActivLink();
        this.setActiveMenuLink();
    };

    setActiveMenuLink = () => {
        this.activeLink = this.links.find(
            (el) => el.pathname === this.path
        ) as HTMLElement;
        this.activeLink?.classList.add("header-menu__items_activ");
    };

    removeActivLink = () => {
        this.activeLink?.classList.remove("header-menu__items_activ");
    };
}
