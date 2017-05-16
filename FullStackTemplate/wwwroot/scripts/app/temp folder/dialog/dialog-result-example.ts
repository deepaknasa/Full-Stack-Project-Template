import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
    selector: 'dialog-result-example',
    templateUrl: './templates/dialog/dialog-result-example.html',
})
export class DialogResultExample {
    actionName: string;

    constructor(public dialog: MdDialog) {
        this.actionName = 'Register';
    }

    openDialog() {
        let dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}


@Component({
    selector: 'dialog-result-example-dialog',
    templateUrl: './templates/dialog/dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
    constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
}