import { Dialog, PrepareDialog, DIALOG_REF, DialogRef } from '@nimble-ts/core/dialog';
import { Form } from '@nimble-ts/core/forms';
import { Inject } from '@nimble-ts/core/inject';
import { ElementListener } from '@nimble-ts/core/render';
import { VersionMenu } from 'src/app/models/version-menu.model';
import { LangService } from 'src/app/services/lang.service';
import { NimbleDataService } from 'src/app/services/nimble-data.service';

@PrepareDialog({
    template: require('./search.dialog.html'),
    style: require('./search.dialog.scss')
})
export class SearchDialog extends Dialog {

	public results: VersionMenu[] = [];
	public menuItems: VersionMenu[] = [];
	public form = new Form({
		text: { value: '' }
	});

    constructor(
		@Inject(DIALOG_REF) public dialogRef: DialogRef<SearchDialog>,
		private nimbleDataService: NimbleDataService,
		public lang: LangService
    ) {
		super();
		this.menuItems = this.nimbleDataService.getCurrentVersionMenu();
		this.form.get('text').valueChanges.subscribe(this.onTextChanged.bind(this));
		this.onTextChanged(this.form.get('text').value);
	}

    public onOpen() {
		this.form.get('text').elements[0].focus();
    }

	public getText(path: string) {
		return this.lang.get(`DIALOGS.SEARCH.${path}`);
	}

	public onItemClick() {
		this.dialogRef.close();
	}
	
	private onTextChanged(value: string) {
		this.render(() => {
			const text = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
			const searchFn = (items: VersionMenu[]) => {
				let matched = [];
				items.forEach(item => {
					const match = item.description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(text) ||
						item.keyWords.indexOf(text) >= 0;
					if (match) {
						matched.push(item);
					}
					if (item.hasSubmenu) {
						matched = matched.concat(searchFn(item.submenu));
					}
				});
				return matched;
			}
			this.results = searchFn(this.menuItems);
		});
	}

    public onClose() {
    }
}