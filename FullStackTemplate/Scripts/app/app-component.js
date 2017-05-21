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
var index_1 = require("./models/index");
var index_2 = require("./auth/index");
var AppComponent = (function () {
    function AppComponent(session, authenticationService) {
        this.session = session;
        this.authenticationService = authenticationService;
        session = this.authenticationService.getUserSession();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './templates/app-component.html'
    }),
    __metadata("design:paramtypes", [index_1.Session, index_2.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
var Home = (function () {
    function Home() {
    }
    return Home;
}());
Home = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n    <h1>Fullstack project template</h1>\n    <p>This template facilitate quicker project setup</p>\n  "
    })
], Home);
exports.Home = Home;
//# sourceMappingURL=app-component.js.map