import { Dialog, PrepareDialog, DIALOG_REF, DialogRef } from '@nimble-ts/core/dialog';
import { Inject } from '@nimble-ts/core/inject';

@PrepareDialog({
    template: require('./example.dialog.html'),
    style: require('./example.dialog.scss')
})
export class ExampleDialog extends Dialog {

    constructor(
        @Inject(DIALOG_REF) public dialogRef: DialogRef<ExampleDialog>
    ) {
        super();
    }

    onOpen() {
    }

    onClose() {
    }
}