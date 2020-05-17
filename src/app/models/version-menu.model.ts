import { Version } from './version.model';

export class VersionMenu {
    public version: Version;
    public parent: VersionMenu;
    public description: string;
    public path: string;
    public forceLink: boolean = false;
    public submenu?: VersionMenu[] = [];
    public submenuExpanded: boolean = false;

    constructor(params: { description: string, submenu?: VersionMenu[], path?: string, forceLink?: boolean }) {
        this.description = params.description;
        this.path = params.path;
        this.forceLink = params.forceLink ? params.forceLink : false;
        this.submenu = params.submenu;
        
        if (this.submenu)
            for(let item of this.submenu) {
                item.parent = this;
            }
    }

    public get completePath() {
        let itemMenu: VersionMenu = this;
        let path = this.path;

        while(itemMenu.parent) {
            itemMenu = itemMenu.parent;
            path = itemMenu.path + (path.startsWith('#') ? path : `/${path}`);
        }

        return `/doc/${this.version.id}/${path}`;
    }

    public get hasSubmenu() {
        return this.submenu && this.submenu.length > 0;
    }
}