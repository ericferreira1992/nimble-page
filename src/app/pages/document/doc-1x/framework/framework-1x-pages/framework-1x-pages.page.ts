import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-pages.page.html'),
    style: require('./framework-1x-pages.page.scss'),
    title: 'Pages / Document - Nimble'
})
export class Framework1xPagesPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.PAGES.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}