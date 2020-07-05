import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./doc-1x-get-started.page.html'),
    style: require('./doc-1x-get-started.page.scss'),
    title: 'Get started / Document - Nimble'
})
export class Doc1xGetStartedPage extends Page {

    public showCode1: boolean = true;


    constructor(
        public lang: LangService
	) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.GET_STARTED.${path}`); }

    onEnter() {
    }

    onExit() {
    }
}