import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-directives.page.html'),
    style: require('./framework-1x-directives.page.scss'),
    title: 'Framework / Document - Nimble'
})
export class Framework1xDirectivesPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.DIRECTIVES.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}