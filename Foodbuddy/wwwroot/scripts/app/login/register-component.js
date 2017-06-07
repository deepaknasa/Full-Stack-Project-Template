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
var index_1 = require("../auth/index");
var index_2 = require("../models/index");
var RegisterComponent = (function () {
    function RegisterComponent(dialog, doc, authenticationService) {
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        dialog.afterOpen.subscribe(function (ref) {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (!this.authenticationService.isLoggedIn()) {
            this.openRegisterDialog();
        }
    };
    RegisterComponent.prototype.openRegisterDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            //this.initLoggedInUser();
            console.log('currentUser : ', _this.user);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-component',
        template: ''
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [material_1.MdDialog, Object, index_1.AuthenticationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var RegisterDialog = (function () {
    function RegisterDialog(dialogRef, authenticationService, model) {
        this.dialogRef = dialogRef;
        this.authenticationService = authenticationService;
        this.model = model;
        this.loading = false;
    }
    RegisterDialog.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.register(this.model)
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            console.log('user is logged in');
            _this.dialogRef.close('Logged in');
        }, function (error) {
            console.log('login failed');
            _this.loading = false;
        });
    };
    return RegisterDialog;
}());
RegisterDialog = __decorate([
    core_1.Component({
        selector: 'register-control',
        moduleId: 'register-control',
        templateUrl: './templates/dialog/register-dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, index_1.AuthenticationService, index_2.RegisterModel])
], RegisterDialog);
exports.RegisterDialog = RegisterDialog;
//# sourceMappingURL=register-component.js.map