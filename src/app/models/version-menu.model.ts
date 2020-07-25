import { Version } from './version.model';
import { LangService } from '../services/lang.service';

export class VersionMenu {
    public version: Version;
    public parent: VersionMenu;
    public path: string;
    public forceLink: boolean = false;
    public submenu?: VersionMenu[] = [];
    public submenuExpanded: boolean = false;
    public keyWords: string[] = [];

    public _description: string;
    public set description(value: string) { this._description = value; }
    public get description() {
        return this._langService.get(this.completeLangPath);
    }

    private _langService: LangService;
    public set langService(value: LangService) {
        this._langService = value;
        if (this.submenu)
            this.submenu.forEach(m => m.langService = value);
    }

    constructor(params: { description: string, submenu?: VersionMenu[], path?: string, keyWords: string[], forceLink?: boolean }) {
        this.description = params.description;
        this.path = params.path;
        this.forceLink = params.forceLink ? params.forceLink : false;
        this.submenu = params.submenu;
        this.keyWords = params.keyWords;
        
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
			if (!itemMenu.path.includes('#')) {
				path = itemMenu.path + (path.startsWith('#') ? path : `/${path}`);
			}
        }

        return `/doc/${this.version.id}/${path}`;
    }

    public get hasSubmenu() {
        return this.submenu && this.submenu.length > 0;
    }

    private get completeLangPath() {
        let path = '';
        let parent = this.parent;

        while (parent != null) {
            path = path ? `${parent._description}.${path}` : parent._description;
            parent = parent.parent;
        }

        path = path ? `${path}.${this._description}` : this._description;

        return `DOC.${this.version.id}.MENU.${path}.TEXT`;
    }
}