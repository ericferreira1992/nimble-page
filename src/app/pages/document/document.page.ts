import { Page, PreparePage, RouteParams, Router } from '@nimble-ts/core';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from 'src/app/models/version-menu.model';

@PreparePage({
    template: require('./document.page.html'),
    style: require('./document.page.scss')
})
export class DocumentPage extends Page {
    public version: Version = null;

    constructor(
        private routeParams: RouteParams,
        private nimbleService: NimbleDataService
    ) {
        super();
    }

    onEnter() {
        this.version = null;
        if (Router.currentPath.split('/').length > 1) {
            let versionId = Router.currentPath.split('/')[1];
            this.version = this.nimbleService.versions.find(x => x.id === versionId);
        }

        if (!this.version) {
            console.log('Version not found!');
        }
    }

    public expandSubmenu(menu: VersionMenu) {
        if (menu.hasSubmenu) {
            this.render(() => {
                menu.submenuExpanded = !menu.submenuExpanded; 
            });
        }
    }

    public isActive(path: string) {
        return Router.currentPath.startsWith(path);
    }
}