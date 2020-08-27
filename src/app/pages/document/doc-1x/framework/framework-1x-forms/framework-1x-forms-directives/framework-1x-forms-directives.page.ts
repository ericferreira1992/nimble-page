import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-forms-directives.page.html'),
    style: require('./framework-1x-forms-directives.page.scss'),
    title: 'Reactive Forms Directives / Document - Nimble'
})
export class Framework1xFormsDirectivesPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
	}

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.FORMS.DIRECTIVES.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}