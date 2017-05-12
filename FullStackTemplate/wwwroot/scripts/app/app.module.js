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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
//Authentication service
var index_1 = require("./authentication/index");
//Main application component
var app_component_1 = require("./app.component");
//Login components
var login_component_1 = require("./login/login.component");
//Application Routes
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule(_appRef) {
        this._appRef = _appRef;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        this._appRef.bootstrap(app_component_1.AppComponent);
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes_1.DEMO_APP_ROUTES),
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            index_1.AuthenticationService
        ],
        declarations: [
            app_component_1.AppComponent,
            app_component_1.Home,
            login_component_1.LoginComponent,
            login_component_1.LoginDialog,
            login_component_1.RegisterDialog
        ],
        entryComponents: [app_component_1.AppComponent, login_component_1.LoginDialog, login_component_1.RegisterDialog],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map