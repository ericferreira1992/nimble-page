import { Page, PreparePage } from '@nimble-ts/core/page';
import { Form, Validators, FormField } from '@nimble-ts/core/forms';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-forms.page.html'),
    style: require('./framework-1x-forms.page.scss'),
    title: 'Reactive Forms / Document - Nimble'
})
export class Framework1xFormsPage extends Page {

	public loginForm: Form;

	public validatorsForm: Form;

	public customValidatorsForm: Form;

    constructor(
        public lang: LangService
    ) {
        super();
        this.loginForm = new Form({
            username: { value: '', validators: [ Validators.required ] },
			password: { value: '', validators: [ Validators.required ] }
		});
		
        this.validatorsForm = new Form({
            required: { value: '', validators: [ Validators.required ] },
            requiredTrue: { value: false, validators: [ Validators.requiredTrue ] },
            min: { value: null, validators: [ Validators.min(1) ] },
            max: { value: null, validators: [ Validators.max(10) ] },
            minLength: { value: null, validators: [ Validators.minLength(10) ] },
            maxLength: { value: null, validators: [ Validators.maxLength(40) ] },
            minChecked: { value: [], validators: [ Validators.minChecked(2) ] },
            maxChecked: { value: [], validators: [ Validators.maxChecked(3) ] },
            email: { value: null, validators: [ Validators.email ] },
			pattern: { value: '', validators: [Validators.pattern('^[A-zÀ-ú\\s]*$')] }
		});
		
        this.customValidatorsForm = new Form({
            pass: {
				value: '',
				validators: [Validators.required, this.formFieldEquals('confirmPass')]
			},
			confirmPass: {
				value: '',
				validators: [Validators.required]
			}
		});
	}
	
	private formFieldEquals(fieldName: string) {
		return (formField: FormField) => {
			const value1 = formField?.value;
			const value2 = formField?.parent?.get(fieldName)?.value;
			const isEquals = (value1 && value2) ? (value1 !== value2) : false;
			return { equals: isEquals };
		}
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