export class VersionMenu {
    public parent: VersionMenu;
    public description: string;
    public path?: string;
    public submenu?: VersionMenu[] = [];

    constructor(params: { description: string, submenu?: VersionMenu[], path?: string }) {
        this.description = params.description;
        this.path = params.path;
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
            path = itemMenu.path + '/' + path;
        }

        return '/'+ path;
    }

    public get hasSubmenu() {
        return this.submenu && this.submenu.length > 0;
    }
}