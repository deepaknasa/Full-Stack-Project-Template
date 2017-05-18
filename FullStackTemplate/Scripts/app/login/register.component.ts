import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { AuthenticationService } from '../authentication/index';
import { RegisterModel } from '../models/index';

@Component({
    selector: 'register-component'
    //templateUrl: './templates/login/login-component.html'
})
export class RegisterComponent implements OnInit {

    constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any, private authenticationService: AuthenticationService) {
        dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(() => {
            doc.body.classList.remove('no-scroll');
        });
    }

    OnInit() {
        if (!this.authenticationService.isLoggedIn()) {
            this.openRegisterDialog();
        }
    }

    openRegisterDialog() {
        let dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.afterClosed().subscribe(result => {
            this.initLoggedInUser();
            console.log('currentUser : ', this.user);
        });
    }
}

@Component({
    selector: 'login-control',
    templateUrl: './templates/dialog/register-dialog.html',
})
export class RegisterDialog {
    loading = false;

    constructor(public dialogRef: MdDialogRef<RegisterDialog>, private authenticationService: AuthenticationService, private model: RegisterModel) { }

    register() {
        this.loading = true;
        this.authenticationService.register(this.model)
            .subscribe(
            data => {
                //this.router.navigate([this.returnUrl]);
                console.log('user is logged in');
                this.dialogRef.close('Logged in');
            },
            error => {
                console.log('login failed');
                this.loading = false;
            });
    }
}