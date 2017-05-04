import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
    selector: 'login-control',
    templateUrl: './templates/dialog/login-dialog.html',
})
export class LoginDialog {
    constructor(public dialogRef: MdDialogRef<LoginDialog>) { }
}