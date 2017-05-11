import { Component, Inject, ViewChild, TemplateRef} from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
//import { LoginDialog } from '../dialog/login-dialog'
//import { RegisterDialog } from '../dialog/register-dialog'


@Component({
    selector: 'login-component',
    templateUrl: './templates/login/login-component.html'
})
export class LoginComponent {
    actionName: string;
    lastCloseResult: string;
    actionsAlignment: string;
    
    constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
            if (!doc.body.classList.contains('no-scroll')) {
            doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(() => {
            doc.body.classList.remove('no-scroll');
        });
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

@Component({
    selector: 'login-control',
    templateUrl: './templates/dialog/login-dialog.html',
})
export class LoginDialog {
    loading = false;
    model: any = {};

    constructor(public dialogRef: MdDialogRef<LoginDialog>) { }

    login() {
        this.loading = true;
        console.log('user is logged in');
        this.dialogRef.close('Logged in');
    }
}

@Component({
    selector: 'login-control',
    templateUrl: './templates/dialog/register-dialog.html',
})
export class RegisterDialog {
    constructor(public dialogRef: MdDialogRef<RegisterDialog>) { }
}