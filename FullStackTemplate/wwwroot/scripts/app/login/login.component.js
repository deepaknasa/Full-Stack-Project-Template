"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
//import { LoginDialog } from '../dialog/login-dialog'
//import { RegisterDialog } from '../dialog/register-dialog'
var LoginComponent = (function () {
    function LoginComponent(dialog, doc) {
        this.dialog = dialog;
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        dialog.afterOpen.subscribe(function (ref) {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
        });
    }
    LoginComponent.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(LoginDialog);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LoginComponent.prototype.openRegisterDialog = function () {
        var dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        templateUrl: './templates/login/login-component.html'
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [material_1.MdDialog, Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LoginDialog = (function () {
    function LoginDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.loading = false;
        this.model = {};
    }
    LoginDialog.prototype.login = function () {
        this.loading = true;
        console.log('user is logged in');
        this.dialogRef.close('Logged in');
    };
    return LoginDialog;
}());
LoginDialog = __decorate([
    core_1.Component({
        selector: 'login-control',
        templateUrl: './templates/dialog/login-dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], LoginDialog);
exports.LoginDialog = LoginDialog;
var RegisterDialog = (function () {
    function RegisterDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return RegisterDialog;
}());
RegisterDialog = __decorate([
    core_1.Component({
        selector: 'login-control',
        templateUrl: './templates/dialog/register-dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], RegisterDialog);
exports.RegisterDialog = RegisterDialog;
//# sourceMappingURL=login.component.js.map