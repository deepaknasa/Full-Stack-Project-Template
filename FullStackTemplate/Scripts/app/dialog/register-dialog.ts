import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
    selector: 'login-control',
    templateUrl: './templates/dialog/register-dialog.html',
})
export class RegisterDialog {
    constructor(public dialogRef: MdDialogRef<RegisterDialog>) { }
}