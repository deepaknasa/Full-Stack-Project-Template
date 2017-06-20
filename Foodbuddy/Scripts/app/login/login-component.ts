import { Component, OnInit, Inject, ViewChild, TemplateRef} from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/index';
import { LoginModel } from '../models/index';


@Component({
    selector: 'login-component',
    template: ''
})
export class LoginComponent implements OnInit {
    lastCloseResult: string;

    constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any,
        private router: Router,
        private authenticationService: AuthenticationService) {
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        this.dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
            if (!doc.body.classList.contains('no-scroll')) {
            doc.body.classList.add('no-scroll');
            }
        });
        this.dialog.afterAllClosed.subscribe(() => {
            doc.body.classList.remove('no-scroll');
            this.router.navigate(['./']);
        });
    }

    ngOnInit() {
        console.log('OnInit');
        this.openLoginDialog();
    }

    openLoginDialog() {
        let dialogRef = this.dialog.open(LoginDialog);
        dialogRef.afterClosed().subscribe(result => {
            //this.initLoggedInUser();   
            this.router.navigate(['./']);
        });

    }
}

@Component({
    moduleId: 'logout-control',
    template: ''
})
export class LogoutComponent {
    constructor(private authenticationService: AuthenticationService) {
        this.logout();
    }

    logout() {
        this.authenticationService.logout()
            .subscribe(
            data => {
                console.log('user is logged out');
            },
            error => {
                console.log('logout failed');
            });
    }
}

@Component({
    moduleId: 'login-control',
    templateUrl: './templates/dialog/login-dialog.html'
})
export class LoginDialog {
    loading = false;
    loginError: string = '';

    constructor(public dialogRef: MdDialogRef<LoginDialog>, private authenticationService: AuthenticationService, private model: LoginModel) { }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model, null)
            .subscribe(
            (data: any) => {
                    //this.router.navigate([this.returnUrl]);
                    console.log('data', data);
                    this.dialogRef.close('Logged in');
            },
            (error: any) => {
                    console.log('login failed');
                    this.loginError = 'Login failed due to server error. Please try again.';
                    this.loading = false;
                });
    }
}