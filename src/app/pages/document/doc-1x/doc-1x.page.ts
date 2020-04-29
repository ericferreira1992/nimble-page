import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./doc-1x.page.html'),
    style: require('./doc-1x.page.scss'),
    title: 'Document 1.x - Nimble'
})
export class Doc1xPage extends Page {

    public get version() { return this.pageParent.version; }
    public get menu() { return this.version.menu; }

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}