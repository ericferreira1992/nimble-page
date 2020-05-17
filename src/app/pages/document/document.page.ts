import { Page, PreparePage, RouteParams, Router, RouterEvent, Form } from '@nimble-ts/core';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from 'src/app/models/version-menu.model';
import hljs from 'highlight.js';

@PreparePage({
    template: require('./document.page.html'),
    style: require('./document.page.scss')
})
export class DocumentPage extends Page {
    public version: Version = null;
    
    private cancelListeners: any[] = [];
    
    public get versions() { return this.nimbleService.versions; }

    public versionForm: Form;

    constructor(
        private routeParams: RouteParams,
        private nimbleService: NimbleDataService
    ) {
        super();

        this.version = null;
        if (Router.currentPath.split('/').length > 1) {
            let versionId = Router.currentPath.split('/')[1];
            this.version = this.nimbleService.versions.find(x => x.id === versionId);
            this.versionForm = new Form({
                version: { value: this.version.id }
            });
        }

        this.cancelListeners = [
            Router.addListener(['START_CHANGE'], () => {
            }),
            Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {
                this.render(() => {
                    this.checkIfNeedExpandSubmenus(this.version.menu);
                }).then(() => {
                    document.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightBlock(block);
                    });
                    console.log('CODE STYLED!');
                });
            })
        ];
        
        if (!this.version) {
            console.log('Version not found!');
            return;
        }
        else {
            this.checkIfNeedExpandSubmenus(this.version.menu);
            console.log(this.version.menu);
        }
    }

    public expandSubmenu(menu: VersionMenu) {
        if (menu.hasSubmenu) {
            this.render(() => {
                menu.submenuExpanded = !menu.submenuExpanded; 
            });
        }
    }

    public isActive(path: string) { return (`/${Router.currentPath + location.hash}`).startsWith(path); }

    private checkIfNeedExpandSubmenus(menu: VersionMenu[]) {
        for(let item of menu) {
            item.submenuExpanded = item.hasSubmenu && this.isActive(item.completePath);
            if (item.submenu)
                this.checkIfNeedExpandSubmenus(item.submenu);
        }
    }

    onEnter() {
    }

    onExit() {
        this.cancelListeners.forEach(x => x());
    }
}