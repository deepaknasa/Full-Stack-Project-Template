import { Component, OnInit, Inject, ViewChild, TemplateRef} from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { AuthenticationService } from '../authentication/index';
import { LoginModel } from '../models/index';


@Component({
    selector: 'login-component',
    templateUrl: './templates/login/login-component.html'
})
export class LoginComponent implements OnInit {
    //actionName: string;
    lastCloseResult: string;
    //actionsAlignment: string;
    isLoggeIn: boolean;
    user: string;
    
    constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any, private authenticationService: AuthenticationService) {
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

    ngOnInit() {
        console.log('OnInit');
        this.initLoggedInUser();
    }

    openLoginDialog() {
        let dialogRef = this.dialog.open(LoginDialog);
        dialogRef.afterClosed().subscribe(result => {
            //this.initLoggedInUser();   
            console.log('currentUser : ', this.user);
        });
    }

    //initLoggedInUser() {
    //    this.user = this.authenticationService.getCurrentUser();
    //    if (this.user) {
    //        this.isLoggeIn = true;
    //    } else {
    //        this.isLoggeIn = false;
    //    }
    //}

    logout() {
        this.authenticationService.logout()
            .subscribe(
            data => {
                console.log('user is logged out');
            },
            error => {
                console.log('logout failed');
            });
        //this.isLoggeIn = false;
        //this.user = null;
    }
}

@Component({
    moduleId: 'login-control'
    //selector: 'login-control'
    //templateUrl: './templates/dialog/login-dialog.html'
})
export class LoginDialog {
    loading = false;
    loginError: string = '';

    constructor(public dialogRef: MdDialogRef<LoginDialog>, private authenticationService: AuthenticationService, private model: LoginModel) { }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                    console.log('user is logged in');
                    this.dialogRef.close('Logged in');
                },
                error => {
                    console.log('login failed');
                    this.loginError = 'Login failed due to server error. Please try again.';
                    this.loading = false;
                });
    }
}