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
var index_1 = require("./index");
var AuthComponent = (function () {
    function AuthComponent(auth) {
        this.auth = auth;
        this._session = auth.getUserSession();
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.sessionUpdate.subscribe(function (session) {
            console.log('subscribe:event:sessionUpdated', session);
            _this._session = session;
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'auth-component',
        templateUrl: './templates/auth/auth-component.html',
        styleUrls: ['styles/app/auth/auth-style.css']
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth-component.js.map