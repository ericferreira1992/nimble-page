import { Page, PreparePage, Router } from '@nimble-ts/core';
import { NimbleDataService } from 'src/app/services/nimble-data.service';

@PreparePage({
    template: require('./home.page.html'),
    style: require('./home.page.scss'),
    title: 'Home'
})
export class HomePage extends Page {
    public get routePath() { return Router.currentPath; }
    public get lastVersion() { return this.nimbleData.versions[this.nimbleData.versions.length - 1].id; }

    constructor(
        private nimbleData: NimbleDataService
    ) {
        super();
    }

    public getStarted() {

    }

    onEnter() {
    }

    onExit() {
    }
}