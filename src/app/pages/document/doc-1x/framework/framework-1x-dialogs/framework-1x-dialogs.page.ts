import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-dialogs.page.html'),
    style: require('./framework-1x-dialogs.page.scss'),
    title: 'Framework1xDialogs'
})
export class Framework1xDialogsPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.DIALOGS.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}