import { Page, PreparePage, Form, Validators } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-forms.page.html'),
    style: require('./framework-1x-forms.page.scss'),
    title: 'Reactive Forms / Document - Nimble'
})
export class Framework1xFormsPage extends Page {

	public loginForm: Form;

    constructor(
        public lang: LangService
    ) {
        super();
        this.loginForm = new Form({
            username: { value: '', validators: [ Validators.required ] },
            password: { value: '', validators: [ Validators.required ] },
        });
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.FORMS.${path}`); }

    onInit() {
    }

    public onSubmit() {
        if (this.loginForm.isValid) {
            alert(this.getText('VALIDATE_FORM.CREATE.TEXT_2'));
        }
    }

    onDestroy() {
    }
}