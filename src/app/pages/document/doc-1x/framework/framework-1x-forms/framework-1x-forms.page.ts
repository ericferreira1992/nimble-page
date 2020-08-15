import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-forms.page.html'),
    style: require('./framework-1x-forms.page.scss'),
    title: 'Reactive Forms / Document - Nimble'
})
export class Framework1xFormsPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.FORMS.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}