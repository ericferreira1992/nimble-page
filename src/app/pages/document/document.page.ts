import { Page, PreparePage } from '@nimble-ts/core/page';
import { Router } from '@nimble-ts/core/route';
import { RouteParams } from '@nimble-ts/core/providers/route-params';
import { Form } from '@nimble-ts/core/forms';
import { ElementListener } from '@nimble-ts/core/render';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from 'src/app/models/version-menu.model';
import { LangService } from 'src/app/services/lang.service';
import Prism from 'prismjs';

@PreparePage({
    template: require('./document.page.html'),
    style: require('./document.page.scss')
})
export class DocumentPage extends Page {
    public version: Version = null;
    public languageDrop: boolean = false;
    public showMenu: boolean = false;
    public langPrefix: string = 'DOC';
    
    private cancelListeners: any[] = [];
    
    public get versions() { return this.nimbleService.versions; }

    public versionForm: Form;

    constructor(
        private routeParams: RouteParams,
        private nimbleService: NimbleDataService,
        private listener: ElementListener,
        private lang: LangService,
    ) {
        super();
        this.versionForm = new Form({
            version: { value: null }
        });
    }

    public expandSubmenu(menu: VersionMenu) {
        if (menu.hasSubmenu) {
            this.render(() => {
                menu.submenuExpanded = !menu.submenuExpanded; 
            });
        }
    }

    public isActive(menuItem: VersionMenu) {
		if (menuItem.hasPath) {
			return (`${Router.currentPath + location.hash}`).startsWith(menuItem.completePath);
		}
		else {
			return menuItem.submenu.some(x => this.isActive(x));
		}
	}

    public toggleLanguageDrop() {
        setTimeout(() => {
            this.render(() => this.languageDrop = !this.languageDrop);
        }, 1);
    }

    public toggleMenu() {
		this.render(() => this.showMenu = !this.showMenu);
    }

    public onLinkClicked(itemMenu: VersionMenu) {
        this.render(() => {
			if (itemMenu && !itemMenu.forceLink && itemMenu.hasSubmenu) {
				itemMenu.submenuExpanded = true;
			}
            this.showMenu = !this.showMenu;
        });
    }

    private checkIfNeedExpandSubmenus(menu: VersionMenu[]) {
        for(let item of menu) {
			if (!item.submenuExpanded)
				item.submenuExpanded = item.hasSubmenu && (this.isActive(item) || item.submenu.some(x => this.isActive(x)));
            if (item.hasSubmenu) {
				this.checkIfNeedExpandSubmenus(item.submenu);
			}
        }
    }

    private highlightCodes() {
		setTimeout(() => {;
			document.querySelectorAll('pre code[class*="language-"]').forEach((block) => {
				Prism.highlightElement(block);
            });
        }, 0);
    }

    onEnter() {
        this.listener.listen(window, 'click', (e) => {
            if (this.languageDrop)
                this.render(() => this.languageDrop = false);
        });
    }

    onInit() {
        this.render(() => {
            if (Router.currentPath.split('/').length > 1) {
                let versionId = Router.currentPath.split('/')[1];
                this.version = this.nimbleService.versions.find(x => x.id === versionId);
                this.versionForm.get('version').setValue(this.version.id);
            }

            this.cancelListeners = [
                Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {
                    this.render(() => {
                        this.checkIfNeedExpandSubmenus(this.version.menu);
                    }).then(() => {
                        this.highlightCodes();
                    });
                })
            ];
            
            this.highlightCodes();
            
            if (!this.version) {
                console.log('Version not found!');
                return;
            }
            this.langPrefix = `DOC.${this.version.id}.`;
            this.checkIfNeedExpandSubmenus(this.version.menu);
        });
    }

    onDestroy() {
        this.cancelListeners.forEach(x => x());
    }
}