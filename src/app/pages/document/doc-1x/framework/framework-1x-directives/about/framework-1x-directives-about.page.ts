import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-directives-about.page.html'),
    style: require('./framework-1x-directives-about.page.scss'),
    title: 'Directives - About / Document - Nimble'
})
export class Framework1xDirectivesAboutPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.DIRECTIVES.ABOUT.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}