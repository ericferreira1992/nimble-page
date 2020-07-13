import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./doc-1x-cli.page.html'),
    style: require('./doc-1x-cli.page.scss'),
    title: 'CLI - Nimble'
})
export class Doc1xCliPage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}