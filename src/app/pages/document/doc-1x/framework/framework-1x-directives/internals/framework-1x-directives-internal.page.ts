import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-directives-internal.page.html'),
    style: require('./framework-1x-directives-internal.page.scss'),
    title: 'Directives - Internal / Document - Nimble'
})
export class Framework1xDirectivesInternalPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.DIRECTIVES.INTERNAL.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}