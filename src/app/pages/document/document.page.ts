import { Page, PreparePage, RouteParams, Router, Form, Listener } from '@nimble-ts/core';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from 'src/app/models/version-menu.model';
import { LangService } from 'src/app/services/lang.service';
import hljs from 'highlight.js/lib/core';

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
        private listener: Listener,
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

    public isActive(path: string) { return (`/${Router.currentPath + location.hash}`).startsWith(path); }

    public toggleLanguageDrop() {
        setTimeout(() => {
            this.render(() => this.languageDrop = !this.languageDrop);
        }, 1);
    }

    public toggleMenu() {
        this.render(() => {
            this.showMenu = !this.showMenu;
        });
    }

    private checkIfNeedExpandSubmenus(menu: VersionMenu[]) {
        for(let item of menu) {
            item.submenuExpanded = item.hasSubmenu && this.isActive(item.completePath);
            if (item.submenu)
                this.checkIfNeedExpandSubmenus(item.submenu);
        }
    }

    private highlightCodes() {
        hljs.initHighlightingOnLoad();
        setTimeout(() => {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
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
            this.nimbleService.prapreMenu();
        
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