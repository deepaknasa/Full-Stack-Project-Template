import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialog } from '../dialog/login-dialog'
import { RegisterDialog } from '../dialog/register-dialog'


@Component({
    selector: 'login-component',
    templateUrl: './templates/login/login-component.html'
})
export class LoginComponent {
    actionName: string;

    constructor(public dialog: MdDialog) {
        this.actionName = 'Register';
    }

    openLoginDialog() {
        let dialogRef = this.dialog.open(LoginDialog);
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    openRegisterDialog() {
        let dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}

