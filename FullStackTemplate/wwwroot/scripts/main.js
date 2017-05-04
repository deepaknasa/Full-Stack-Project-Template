"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var login_component_1 = require("./app/login/login.component");
var login_dialog_1 = require("./app/dialog/login-dialog");
var register_dialog_1 = require("./app/dialog/register-dialog");
var MyTemplateAppModule = (function () {
    function MyTemplateAppModule() {
    }
    return MyTemplateAppModule;
}());
MyTemplateAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_1.MaterialModule,
        ],
        declarations: [login_component_1.LoginComponent, login_dialog_1.LoginDialog, register_dialog_1.RegisterDialog],
        entryComponents: [login_dialog_1.LoginDialog, register_dialog_1.RegisterDialog],
        bootstrap: [login_component_1.LoginComponent],
        providers: []
    })
], MyTemplateAppModule);
exports.MyTemplateAppModule = MyTemplateAppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(MyTemplateAppModule);
//# sourceMappingURL=main.js.map