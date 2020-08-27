import { Page, PreparePage } from '@nimble-ts/core/page';
import { DialogBuilder } from '@nimble-ts/core/dialog';
import { LangService } from 'src/app/services/lang.service';
import { ExampleDialog } from './example/example.dialog';

@PreparePage({
    template: require('./framework-1x-dialogs.page.html'),
    style: require('./framework-1x-dialogs.page.scss'),
    title: 'Dialogs / Document - Nimble'
})
export class Framework1xDialogsPage extends Page {

    constructor(
		public lang: LangService,
		public dialog: DialogBuilder
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.DIALOGS.${path}`); }

    onInit() {
	}
	
	public openExampleDialog() {
		this.dialog.open(ExampleDialog);
	}

    onDestroy() {
    }
}