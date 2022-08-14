import Component, { ComponentProps } from '@/base/component';
import HeaderMenu from '@/components/ui/header-menu/header-menu';
import { getComponent } from '@/helpers/helpers';
import path from 'path';

export default class Header extends Component {
headerMenu: HeaderMenu
    constructor(element: ComponentProps, ) {
        super(element);

        this.headerMenu = new HeaderMenu(getComponent('header-menu'))
    }

   setNewPath = (path:string)=> {
    this.headerMenu.setPath(path)
   }

   
}
