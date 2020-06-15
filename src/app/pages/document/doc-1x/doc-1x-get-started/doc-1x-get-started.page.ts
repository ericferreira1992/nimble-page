import { Page, PreparePage } from '@nimble-ts/core';

@PreparePage({
    template: require('./doc-1x-get-started.page.html'),
    style: require('./doc-1x-get-started.page.scss'),
    title: 'Get started / Document - Nimble'
})
export class Doc1xGetStartedPage extends Page {

    public showCode1: boolean = true;

    public testeLabel: string = 'Install CLI';

    public testeFunc() {
        this.render(() => {
            this.testeLabel = this.testeLabel.length <= 11 ? `${this.testeLabel}...` : this.testeLabel.substr(0,11);
            console.log(this.testeLabel);
        });
    }

    constructor() {
        super();
    }

    public toggleCode1() {
        this.render(() => {
            this.showCode1 = !this.showCode1;
        });
    }

    onEnter() {
    }

    onExit() {
    }
}