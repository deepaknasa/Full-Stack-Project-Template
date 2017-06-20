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
var router_1 = require("@angular/router");
var index_1 = require("../auth/index");
var index_2 = require("../models/index");
var LoginComponent = (function () {
    function LoginComponent(dialog, doc, router, authenticationService) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this.authenticationService = authenticationService;
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        this.dialog.afterOpen.subscribe(function (ref) {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        this.dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
            _this.router.navigate(['./']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('OnInit');
        this.openLoginDialog();
    };
    LoginComponent.prototype.openLoginDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(LoginDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            //this.initLoggedInUser();   
            _this.router.navigate(['./']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        template: ''
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [material_1.MdDialog, Object, router_1.Router,
        index_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LogoutComponent = (function () {
    function LogoutComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.logout();
    }
    LogoutComponent.prototype.logout = function () {
        this.authenticationService.logout()
            .subscribe(function (data) {
            console.log('user is logged out');
        }, function (error) {
            console.log('logout failed');
        });
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        moduleId: 'logout-control',
        template: ''
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
var LoginDialog = (function () {
    function LoginDialog(dialogRef, authenticationService, model) {
        this.dialogRef = dialogRef;
        this.authenticationService = authenticationService;
        this.model = model;
        this.loading = false;
        this.loginError = '';
    }
    LoginDialog.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model, null)
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            console.log('data', data);
            _this.dialogRef.close('Logged in');
        }, function (error) {
            console.log('login failed');
            _this.loginError = 'Login failed due to server error. Please try again.';
            _this.loading = false;
        });
    };
    return LoginDialog;
}());
LoginDialog = __decorate([
    core_1.Component({
        moduleId: 'login-control',
        templateUrl: './templates/dialog/login-dialog.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, index_1.AuthenticationService, index_2.LoginModel])
], LoginDialog);
exports.LoginDialog = LoginDialog;
//# sourceMappingURL=login-component.js.map