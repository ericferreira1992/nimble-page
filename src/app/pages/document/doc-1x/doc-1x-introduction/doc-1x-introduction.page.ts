import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./doc-1x-introduction.page.html'),
    style: require('./doc-1x-introduction.page.scss'),
    title: 'Introduction - Document - Nimble'
})
export class Doc1xIntroductionPage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}