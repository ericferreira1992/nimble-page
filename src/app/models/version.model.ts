import { VersionMenu } from "./version-menu.model";

export class Version {
    public id: string;
    public name: string;
    public menu: VersionMenu[] = [];

    constructor(params: { id: string, name: string, menu: VersionMenu[]}) {
        this.id = params.id;
        this.name = params.name;
        this.menu = params.menu;
        
        this.setVersionInMenu(this.menu);
    }

    private setVersionInMenu(menu: VersionMenu[]) {
        for(let item of menu) {
            item.version = this;
            if (item.submenu) {
                this.setVersionInMenu(item.submenu);
            }
        }
    }
}