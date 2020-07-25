import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./example.page.html'),
    style: require('./example.page.scss'),
    title: 'Example'
})
export class ExamplePage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}