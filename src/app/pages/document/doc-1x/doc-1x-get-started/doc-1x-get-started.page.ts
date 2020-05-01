import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./doc-1x-get-started.page.html'),
    style: require('./doc-1x-get-started.page.scss'),
    title: 'Get started - Document - Nimble'
})
export class Doc1xGetStartedPage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}