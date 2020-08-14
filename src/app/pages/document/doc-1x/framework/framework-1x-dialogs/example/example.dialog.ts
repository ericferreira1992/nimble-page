import { Dialog, PrepareDialog, Inject, DIALOG_REF, DialogRef } from '@nimble-ts/core';

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