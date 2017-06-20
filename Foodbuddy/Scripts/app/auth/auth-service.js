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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var index_1 = require("../models/index");
var storage_service_1 = require("../shared/storage-service");
var AuthenticationService = (function () {
    function AuthenticationService(http, session, storageService) {
        this.http = http;
        this.session = session;
        this.storageService = storageService;
        this.sessionUpdate = new core_1.EventEmitter();
        this._session = session;
    }
    AuthenticationService.prototype.login = function (model, updatedSession) {
        var _this = this;
        var body = JSON.stringify({ Email: model.email, Password: model.password, RememberMe: model.rememberMe });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/Account/Login', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log('user response:', response.text());
            if (response && response.status === 200) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.setCurrentUser(updatedSession, response.text());
                _this.sessionUpdated();
                console.log('emit:event:sessionUpdated', _this._session);
            }
        });
    };
    AuthenticationService.prototype.sessionUpdated = function () {
        this.sessionUpdate.emit(this._session);
    };
    AuthenticationService.prototype.logout = function () {
        this.logoutUser();
        return Observable_1.Observable.of('');
        //try {
        //return this.http.post('/Account/Logout', JSON.stringify({}))
        //    .map((response: Response) => {
        //        console.log('user response:', response.text());
        //        if (response && response.status === 200) {
        //            // remove user from local storage to log user out
        //            this.logoutUser();
        //        }
        //    })
        //    .catch((error: Response | any) => {
        //        console.log('error is logout', error);
        //        let errMsg: string;
        //        if (error instanceof Response) {
        //            const body = error.json() || '';
        //            const err = body.error || JSON.stringify(body);
        //            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        //        } else {
        //            errMsg = error.message ? error.message : error.toString();
        //        }
        //        console.error(errMsg);
        //        return Observable.throw(errMsg);
        //    });
        //} catch (e) {
        //    console.log(e);
        //}
    };
    AuthenticationService.prototype.logoutUser = function () {
        this.storageService.clearSession();
        this.clearSession();
        this.sessionUpdated();
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return !!this.storageService.getCurrentUser();
    };
    AuthenticationService.prototype.register = function (model) {
        var _this = this;
        var body = JSON.stringify({ Email: model.email, Password: model.password, ConfirmPassword: model.confirmPassword });
        //TO-DO
        //let body = JSON.stringify({ model });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/Account/Register', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log('user response:', response.text());
            if (response && response.status === 200) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.storageService.setCurrentUser(response.text());
                _this.sessionUpdated();
            }
        });
    };
    AuthenticationService.prototype.getUserSession = function () {
        this._session.isLoggedIn = this.isLoggedIn();
        this._session.userName = this.storageService.getCurrentUser();
        return this._session;
    };
    AuthenticationService.prototype.setCurrentUser = function (updatedSession, user) {
        this.storageService.setCurrentUser(user);
        this._session = updatedSession;
        //this._session.isLoggedIn = true;
    };
    AuthenticationService.prototype.clearSession = function () {
        this.storageService.clearSession();
        this._session.userName = '';
        this._session.isLoggedIn = false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_1.Session,
        storage_service_1.StorageService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth-service.js.map