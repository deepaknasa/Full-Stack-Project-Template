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
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var login_dialog_1 = require("../dialog/login-dialog");
var register_dialog_1 = require("../dialog/register-dialog");
var LoginComponent = (function () {
    function LoginComponent(dialog) {
        this.dialog = dialog;
        this.actionName = 'Register';
    }
    LoginComponent.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(login_dialog_1.LoginDialog);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LoginComponent.prototype.openRegisterDialog = function () {
        var dialogRef = this.dialog.open(register_dialog_1.RegisterDialog);
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
    __metadata("design:paramtypes", [material_1.MdDialog])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map