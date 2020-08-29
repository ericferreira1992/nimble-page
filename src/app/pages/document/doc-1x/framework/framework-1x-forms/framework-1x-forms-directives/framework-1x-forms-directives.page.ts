import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';
import { Form } from '@nimble-ts/core/forms';

@PreparePage({
    template: require('./framework-1x-forms-directives.page.html'),
    style: require('./framework-1x-forms-directives.page.scss'),
    title: 'Reactive Forms Directives / Document - Nimble'
})
export class Framework1xFormsDirectivesPage extends Page {

	public form: Form = new Form({
		phone: { value: '' },
		date: { value: '' },
		amount: { value: 0 }
	});

    constructor(
        public lang: LangService
    ) {
        super();
	}

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.FORMS.DIRECTIVES.${path}`); }

    public onInit() {
	}
	
	public definePhoneMask() {
		let onlyNumber = (this.form.get('phone').value ?? '').replace(/([^0-9]*)/g, '');
		return `(00) ${onlyNumber.length > 10 ? '00000-0000}' : '0000-00000'}`;
	}

    public onDestroy() {
    }
}